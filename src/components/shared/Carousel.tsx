"use client";

import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import {
  animate,
  motion,
  useMotionValue,
  type AnimationPlaybackControls,
  type PanInfo,
} from "framer-motion";

/**
 * Valor que pode variar por breakpoint de largura de tela.
 * Ex.: 3  ou  { base: 1, 640: 2, 768: 3, 1024: 4 }
 */
type Responsive<T> = T | ({ base: T } & Record<number, T>);

export interface CarouselHandle {
  next: () => void;
  prev: () => void;
  /** Vai para o slide lógico (0..n-1). */
  goTo: (index: number) => void;
}

interface CarouselProps {
  children: ReactNode;
  slidesPerView?: Responsive<number>;
  /** Espaço entre slides, em px. */
  gap?: number;
  loop?: boolean;
  /** Intervalo do autoplay em ms, ou false para desligar. */
  autoplay?: number | false;
  draggable?: boolean;
  className?: string;
  slideClassName?: string;
  ariaLabel?: string;
}

// Largura assumida no SSR/primeira renderização (evita mismatch de hidratação).
const SSR_WIDTH = 1280;
const DURATION = 0.6;
// Easing "premium" (mesmo usado por Embla/Vaul): entrada firme, saída bem suave.
const EASE = [0.32, 0.72, 0, 1] as const;
// Velocidade (px/s) a partir da qual o arraste força avançar/voltar um slide.
const VELOCITY_THRESHOLD = 350;

function resolveResponsive<T>(value: Responsive<T>, width: number): T {
  if (typeof value !== "object" || value === null) return value;
  const map = value as { base: T } & Record<number, T>;
  let result = map.base;
  let bestBp = -1;
  for (const key of Object.keys(map)) {
    if (key === "base") continue;
    const bp = Number(key);
    if (!Number.isNaN(bp) && width >= bp && bp > bestBp) {
      bestBp = bp;
      result = map[bp];
    }
  }
  return result;
}

function maxResponsive(value: Responsive<number>): number {
  if (typeof value !== "object" || value === null) return value;
  return Math.max(...Object.values(value as Record<string, number>));
}

export const Carousel = forwardRef<CarouselHandle, CarouselProps>(function Carousel(
  {
    children,
    slidesPerView = 1,
    gap = 24,
    loop = true,
    autoplay = false,
    draggable = true,
    className,
    slideClassName,
    ariaLabel = "Carrossel",
  },
  ref
) {
  const slides = Children.toArray(children);
  const n = slides.length;

  // Nº de cópias renderizadas para o loop infinito. Com n >= maxSpv, 3 cópias
  // bastam; caso contrário aumentamos para garantir que nunca falte conteúdo.
  const maxSpv = maxResponsive(slidesPerView);
  const copies = loop ? (n >= maxSpv ? 3 : 2 * Math.ceil(maxSpv / Math.max(n, 1)) + 1) : 1;
  const startCopy = loop ? Math.floor(copies / 2) : 0;
  const lower = startCopy * n; // índice do 1º slide da cópia "âncora"
  const upper = lower + n; // fim (exclusivo) da cópia âncora

  const rendered = loop ? Array.from({ length: copies }, () => slides).flat() : slides;

  const viewportRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);

  const [spv, setSpv] = useState(() => resolveResponsive(slidesPerView, SSR_WIDTH));
  const [slideWidth, setSlideWidth] = useState(0);

  const indexRef = useRef(lower); // índice atual dentro de `rendered`
  const stepRef = useRef(0); // largura de um slide + gap, em px
  const spvRef = useRef(spv);
  spvRef.current = spv;
  const reducedRef = useRef(false);
  const hoverRef = useRef(false);
  const dragRef = useRef(false);
  const slidesPerViewRef = useRef(slidesPerView);
  slidesPerViewRef.current = slidesPerView;

  // Reposiciona invisivelmente para a cópia âncora após cada transição.
  const settle = useCallback(() => {
    if (!loop) return;
    let i = indexRef.current;
    while (i >= upper) i -= n;
    while (i < lower) i += n;
    if (i !== indexRef.current) {
      indexRef.current = i;
      x.set(-i * stepRef.current);
    }
  }, [loop, lower, upper, n, x]);

  const animateTo = useCallback(
    (target: number, animated = true) => {
      if (!loop) {
        const maxIndex = Math.max(0, n - spvRef.current);
        target = Math.max(0, Math.min(target, maxIndex));
      }
      indexRef.current = target;
      const targetX = -target * stepRef.current;
      animationRef.current?.stop();
      if (!animated || reducedRef.current || stepRef.current === 0) {
        x.set(targetX);
        settle();
        return;
      }
      animationRef.current = animate(x, targetX, {
        duration: DURATION,
        ease: EASE,
        onComplete: settle,
      });
    },
    [loop, n, settle, x]
  );

  const next = useCallback(() => animateTo(indexRef.current + 1), [animateTo]);
  const prev = useCallback(() => animateTo(indexRef.current - 1), [animateTo]);

  useImperativeHandle(
    ref,
    () => ({ next, prev, goTo: (i: number) => animateTo(lower + i) }),
    [next, prev, animateTo, lower]
  );

  // Mede a viewport e (re)calcula a largura dos slides e o passo em px.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const w = el.clientWidth;
      const s = spv > 0 ? (w - gap * (spv - 1)) / spv : w;
      stepRef.current = s + gap;
      setSlideWidth(s);
      x.set(-indexRef.current * stepRef.current);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [spv, gap, x]);

  // Atualiza slidesPerView conforme a largura da janela.
  useEffect(() => {
    const update = () =>
      setSpv(resolveResponsive(slidesPerViewRef.current, window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const on = () => {
      reducedRef.current = mq.matches;
    };
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Autoplay (pausa em hover, arraste e reduced-motion).
  useEffect(() => {
    if (!autoplay || n <= 1) return;
    const id = window.setInterval(() => {
      if (hoverRef.current || dragRef.current || reducedRef.current) return;
      next();
    }, autoplay);
    return () => window.clearInterval(id);
  }, [autoplay, n, next]);

  const onDragStart = () => {
    dragRef.current = true;
    animationRef.current?.stop();
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    dragRef.current = false;
    const step = stepRef.current || 1;
    const raw = -x.get() / step;
    let target = Math.round(raw);
    if (info.velocity.x <= -VELOCITY_THRESHOLD) target = Math.ceil(raw);
    else if (info.velocity.x >= VELOCITY_THRESHOLD) target = Math.floor(raw);
    animateTo(target);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  if (n === 0) return null;

  // Antes de medir (SSR / 1º paint) usamos calc() em % para manter o layout correto.
  const flexBasis =
    slideWidth > 0
      ? `${slideWidth}px`
      : `calc((100% - ${gap * (spv - 1)}px) / ${spv})`;

  return (
    <div
      ref={viewportRef}
      className={`relative overflow-hidden ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      } ${className ?? ""}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      tabIndex={0}
      onMouseEnter={() => {
        hoverRef.current = true;
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
      }}
      onKeyDown={onKeyDown}
    >
      <motion.div
        className="flex will-change-transform select-none [&_img]:[-webkit-user-drag:none]"
        style={{ x, gap: `${gap}px` }}
        drag={draggable ? "x" : false}
        dragMomentum={false}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        {rendered.map((child, i) => (
          <div
            key={i}
            className={`shrink-0 ${slideClassName ?? ""}`}
            style={{ flexBasis, minWidth: 0 }}
            aria-hidden={loop && (i < lower || i >= upper) ? true : undefined}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
});

export default Carousel;
