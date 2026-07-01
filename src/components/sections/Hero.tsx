// src/components/sections/Hero.tsx
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import BgHero from '@/assets/images/hero.webp';

export function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full min-h-[85vh] lg:min-h-screen pt-36 pb-20 flex items-center bg-[#070b12] relative overflow-hidden"
    >
      {/* ── BACKGROUND: imagem + gradientes, apenas Desktop/Tablet ── */}
      <div
        className="hidden md:block absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 80% 20%, rgba(0, 143, 213, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 10% 80%, rgba(230, 0, 126, 0.1) 0%, transparent 40%),
            url(${BgHero.src})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Detalhe visual de malha digital sutil — apenas Desktop/Tablet */}
      <div className="hidden md:block absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* ── VERSÃO DESKTOP / TABLET ── */}
      <div className="hidden md:flex max-w-[1200px] mx-auto px-4 w-full relative z-10">
        <div className="max-w-4xl flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Sem textos nem botões — apenas o layout vazio */}
        </div>
      </div>

      {/* ── VERSÃO MOBILE ── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
        }}
        className="flex md:hidden max-w-[1200px] mx-auto px-4 w-full relative z-10 flex-col items-center text-center"
      >
        {/* Tag flutuante */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-white/80 text-xs font-semibold mb-6 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-[#008FD5] rounded-full"></span>
          Cairo Tecnologia & Inovação v2.0
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          className="text-white text-4xl font-black tracking-tight leading-[1.1] mb-6"
        >
          Transformamos <br />
          tecnologia em <br />
          <span className="bg-gradient-to-r from-[#E6007E] to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            vantagem competitiva
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          className="text-gray-400 text-base leading-relaxed mb-8 max-w-sm"
        >
          Desenvolvemos ecossistemas digitais sob medida, infraestruturas robustas e segurança de ponta para posicionar sua empresa na liderança do mercado.
        </motion.p>

        {/* Botões */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
          }}
          className="flex flex-col gap-3 w-full px-4"
        >
          <Link
            href="#contato"
            className="w-full bg-gradient-to-r from-[#E6007E] to-pink-600 text-white font-extrabold py-4 rounded-full text-base shadow-lg shadow-pink-600/20 transition-all text-center"
          >
            Fale com um Especialista
          </Link>
          <Link
            href="#sobre"
            className="w-full bg-white/5 border border-white/10 text-white font-bold py-4 rounded-full text-base transition-colors text-center"
          >
            Conheça a Cairo
          </Link>
        </motion.div>
      </motion.div>

      {/* Onda magenta — apenas Desktop/Tablet */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[300px] md:w-[500px] lg:w-[650px] h-[150px] md:h-[250px] bg-gradient-to-tr from-[#E6007E] to-transparent opacity-20 transform rotate-12 translate-x-12 translate-y-12 blur-3xl pointer-events-none" />
    </motion.section>
  );
}
