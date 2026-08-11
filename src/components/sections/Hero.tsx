// src/components/sections/Hero.tsx
"use client";

import { motion } from 'framer-motion';

// Importando as TRÊS versões da imagem
import BgHeroDesktop from '@/assets/images/fundo11.png';
import BgHeroTablet from '@/assets/images/bg-heroMobile.png';
import BgHeroMobile from '@/assets/images/mobile2.png';

export function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      // Removidos o min-h-screen e os paddings que forçavam altura extra
      className="w-full bg-[#070b12] relative overflow-hidden"
    >
      {/* ── IMAGENS RESPONSIVAS (Ficam com proporção perfeita e ditam a altura da seção) ── */}
      
      {/* Exibe APENAS no Mobile */}
      <img 
        src={BgHeroMobile.src} 
        alt="Fundo Mobile Cairo TI" 
        className="w-full h-auto block md:hidden" 
      />
      
      {/* Exibe APENAS no Tablet */}
      <img 
        src={BgHeroTablet.src} 
        alt="Fundo Tablet Cairo TI" 
        className="w-full h-auto hidden md:block lg:hidden" 
      />
      
      {/* Exibe APENAS no Desktop */}
      <img 
        src={BgHeroDesktop.src} 
        alt="Fundo Desktop Cairo TI" 
        className="w-full h-auto hidden lg:block" 
      />

      {/* Detalhe visual de malha digital sutil — apenas Desktop/Tablet */}
      <div className="hidden md:block absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      {/* Onda magenta — apenas Desktop/Tablet */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[300px] md:w-[500px] lg:w-[650px] h-[150px] md:h-[250px] bg-gradient-to-tr from-[#E6007E] to-transparent opacity-20 transform rotate-12 translate-x-12 translate-y-12 blur-3xl pointer-events-none" />
    </motion.section>
  );
}