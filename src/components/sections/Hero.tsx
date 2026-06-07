// src/components/sections/Hero.tsx
import Image from 'next/image';
import CapaHero from '@/assets/images/capa-hero.png';

export function Hero() {
  return (
    <section className="w-full bg-white pt-6 pb-12">
      {/* O max-w-[1200px] e mx-auto garantem que fique centralizado e não ocupe a tela toda */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="w-full overflow-hidden rounded-xl shadow-sm relative">
          <Image 
            src={CapaHero} 
            alt="Cairo TI - Tecnologia e Inovação que otimiza resultados" 
            className="w-full h-auto object-cover"
            priority={true} // Diz ao Next.js para carregar essa imagem primeiro (melhora o SEO/Performance)
          />
        </div>
      </div>
    </section>
  );
}