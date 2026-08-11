"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Assets
import Logo from '@/assets/images/Logo.png';

export function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // Novo estado para o Modal do Vídeo
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Controles do Mega Menu (Desktop)
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  const toggleMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  }

  // Controles do Menu Mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="w-full fixed top-0 left-0 z-50 shadow-sm flex flex-col">
        
        {/* 1. FAIXA SUPERIOR (Magenta) - Oculta no Mobile */}
        <div className="w-full bg-[#E6007E] text-white py-2 px-4 hidden lg:block text-xs font-medium">
          <div className="max-w-[1400px] mx-auto flex justify-between items-center">
            <div className="flex items-center gap-2">
              <a href="http://sos.splashtop.com/" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors flex items-center gap-2 font-bold cursor-pointer">
                 ⬇️ Baixar Splashtop (Suporte)
              </a>
              <span className="opacity-90 ml-2">
                Baixe o aplicativo e informe o código ao técnico.
                {/* Botão que abre o modal */}
                <button 
                  onClick={() => setIsVideoModalOpen(true)} 
                  className="underline font-bold ml-1 hover:text-pink-200 transition-colors cursor-pointer outline-none"
                >
                  Se ainda tiver dúvidas, veja o vídeo explicativo.
                </button>
              </span>
            </div>
            <div className="flex items-center">
              <a href="https://central.cairotecnologia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition-colors flex items-center gap-1 font-bold underline underline-offset-2 cursor-pointer">
                 🖥️ Acessar Central de Chamados
              </a>
            </div>
          </div>
        </div>

        {/* 2. NAVBAR PRINCIPAL */}
        <div className="w-full bg-white bg-opacity-95 backdrop-blur-md py-4 px-4 relative z-50">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            
            <div className="flex items-center gap-10">
              <Link href="/" className="flex-shrink-0 cursor-pointer" onClick={closeMobileMenu}>
                <Image src={Logo} alt="Cairo TI" width={180} height={60} className="object-contain w-36 md:w-[180px]" />
              </Link>

              {/* Menu Desktop */}
              <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700 mt-1">
                <Link href="/historia" className="hover:text-[#E6007E] transition-colors py-2 cursor-pointer">Quem somos</Link>
                
                <div 
                  className="relative py-2 cursor-pointer group"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={toggleMenu}
                >
                  <button className={`flex items-center gap-1 transition-colors cursor-pointer outline-none ${isMegaMenuOpen ? 'text-[#E6007E]' : 'hover:text-[#E6007E]'}`}>
                    Soluções 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-[#E6007E]' : ''}`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className={`absolute bottom-0 left-0 h-[3px] bg-[#E6007E] transition-all duration-300 ${isMegaMenuOpen ? 'w-full' : 'w-0'}`}></div>
                </div>

                <Link href="/#contato" className="hover:text-[#E6007E] transition-colors py-2 cursor-pointer">Contato</Link>
              </nav>
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <Link 
                href="/#contato" 
                className="bg-[#E6007E] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#c5006c] transition-all flex items-center gap-2 group cursor-pointer"
              >
                Solicite uma proposta
                <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
              </Link>
            </div>

            {/* Botão Hambúrguer Mobile */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-800 hover:text-[#E6007E] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-7 h-7"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
              )}
            </button>

          </div>
        </div>

        {/* --- 3. MENU MOBILE (Framer Motion) --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden absolute top-full left-0 z-40"
            >
              <div className="flex flex-col p-6 gap-6">
                
                <Link href="/historia" onClick={closeMobileMenu} className="text-gray-800 font-extrabold text-lg flex items-center justify-between border-b border-gray-100 pb-4">
                  Quem somos
                  <span className="text-[#E6007E]">&gt;</span>
                </Link>
                
                {/* Acordeão de Soluções no Mobile */}
                <div className="flex flex-col border-b border-gray-100 pb-4">
                  <span className="text-[#E6007E] font-black text-lg mb-4">Soluções</span>
                  <div className="flex flex-col gap-4 pl-4">
                    <Link href="/solucoes/consultoria" onClick={closeMobileMenu} className="flex items-center gap-3 text-gray-600 font-bold">
                      <span className="text-xl">💡</span> Consultoria em TI
                    </Link>
                    <Link href="/solucoes/infraestrutura" onClick={closeMobileMenu} className="flex items-center gap-3 text-gray-600 font-bold">
                      <span className="text-xl">☁️</span> Infraestrutura & Cloud
                    </Link>
                    <Link href="/solucoes/cyberseguranca" onClick={closeMobileMenu} className="flex items-center gap-3 text-gray-600 font-bold">
                      <span className="text-xl">🛡️</span> Cybersegurança
                    </Link>
                    <Link href="/solucoes/desenvolvimento" onClick={closeMobileMenu} className="flex items-center gap-3 text-gray-600 font-bold">
                      <span className="text-xl">💻</span> Desenvolvimento Web
                    </Link>
                  </div>
                </div>

                <Link href="/#contato" onClick={closeMobileMenu} className="text-gray-800 font-extrabold text-lg flex items-center justify-between border-b border-gray-100 pb-4">
                  Contato
                  <span className="text-[#E6007E]">&gt;</span>
                </Link>

                {/* Botões do Topbar que foram pro menu no mobile */}
                <div className="flex flex-col gap-3 mt-2">
                  <a href="https://central.cairotecnologia.com.br" target="_blank" rel="noopener noreferrer" className="bg-gray-100 text-gray-800 text-center py-3 rounded-xl font-bold flex justify-center items-center gap-2">
                    🖥️ Central de Chamados
                  </a>
                  <a href="http://sos.splashtop.com/" target="_blank" rel="noopener noreferrer" className="bg-[#E6007E] text-white text-center py-3 rounded-xl font-bold flex justify-center items-center gap-2 shadow-md shadow-pink-500/30">
                    Baixar Splashtop
                  </a>
                  <button 
                    onClick={() => {
                      closeMobileMenu();
                      setIsVideoModalOpen(true);
                    }} 
                    className="text-[#E6007E] text-sm font-bold text-center mt-2 underline"
                  >
                    Ver vídeo explicativo
                  </button>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- 4. MEGA MENU DESKTOP (Framer Motion) --- */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: 10 }}    
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 hidden lg:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[900px] mx-auto my-6 bg-white rounded-3xl p-6 border border-gray-100">
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/solucoes/consultoria" onClick={closeMegaMenu} className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">💡</div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Consultoria em TI</span>
                      <span className="text-xs text-gray-500 mt-1">Estratégia e direcionamento tecnológico.</span>
                    </div>
                  </Link>
                  <Link href="/solucoes/infraestrutura" onClick={closeMegaMenu} className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">☁️</div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Infraestrutura & Cloud</span>
                      <span className="text-xs text-gray-500 mt-1">Ambientes seguros e escaláveis.</span>
                    </div>
                  </Link>
                  <Link href="/solucoes/cyberseguranca" onClick={closeMegaMenu} className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">🛡️</div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Cybersegurança</span>
                      <span className="text-xs text-gray-500 mt-1">Proteção total para os seus dados.</span>
                    </div>
                  </Link>
                  <Link href="/solucoes/desenvolvimento" onClick={closeMegaMenu} className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100 cursor-pointer">
                    <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">💻</div>
                    <div className="flex flex-col">
                      <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Desenvolvimento Web</span>
                      <span className="text-xs text-gray-500 mt-1">Softwares e portais sob medida.</span>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* --- 5. MODAL DO VÍDEO (Framer Motion) --- */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020713]/90 backdrop-blur-md"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-4xl bg-[#061129] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(230,0,126,0.15)] overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Impede que o clique no vídeo feche o modal
            >
              {/* Botão de Fechar */}
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-3 right-3 z-10 w-10 h-10 bg-black/60 hover:bg-[#E6007E] text-white rounded-full flex items-center justify-center transition-colors border border-white/20 backdrop-blur-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Container do Vídeo */}
              <div className="aspect-video w-full bg-black relative">
                <video
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  src="/videos/movie1.mp4"
                >
                  Seu navegador não suporta a reprodução de vídeos.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}