"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Assets
import Logo from '@/assets/images/Logo.png';

export function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('web');
  
  // Referência para controlar o tempo de fechamento do menu
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Abre o menu imediatamente e cancela qualquer fechamento pendente
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  // Dá um "fôlego" de 200ms antes de fechar, permitindo que o mouse chegue no modal
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  // ── Fade da Navbar no scroll (parallax) ──
  const { scrollY } = useScroll();

  // Navbar fade acompanha os primeiros ~35% do scroll da hero (container de 280vh)
  const navbarOpacity = useTransform(scrollY, [0, 650], [1, 0]);

  return (
    <motion.header
      style={{ opacity: navbarOpacity }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full fixed top-0 left-0 z-50 shadow-sm flex flex-col"
    >
      
      {/* 1. FAIXA SUPERIOR (Magenta) - Limpa, apenas com Suporte */}
      <div className="w-full bg-[#E6007E] text-white py-2 px-4 hidden md:block text-xs font-medium">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <span>Tecnologia que impulsiona o futuro do seu negócio.</span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:opacity-80 transition-opacity flex items-center gap-1">
               <span>🎧</span> Suporte
            </Link>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL (Branca) */}
      <div className="w-full bg-white bg-opacity-95 backdrop-blur-md py-4 px-4 relative">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Cairo TI" width={150} height={50} className="object-contain" />
          </Link>

          {/* Links Centrais */}
          <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
            
            {/* Link Soluções com Gatilho para o Mega Menu */}
            <div 
              className="relative py-2 cursor-pointer group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 transition-colors ${isMegaMenuOpen ? 'text-[#E6007E]' : 'hover:text-[#E6007E]'}`}>
                Soluções 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-[#E6007E]' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* Linha indicadora rosa ativa */}
              <div className={`absolute bottom-0 left-0 h-[3px] bg-[#E6007E] transition-all duration-300 ${isMegaMenuOpen ? 'w-full' : 'w-0'}`}></div>
            </div>

            <Link href="#projetos" className="hover:text-[#E6007E] transition-colors py-2 cursor-pointer">Projetos</Link>
            <Link href="#sobre" className="hover:text-[#E6007E] transition-colors py-2 cursor-pointer">Empresa</Link>
          </nav>

          {/* Lado Direito: Apenas o Botão CTA */}
          <div className="flex items-center gap-6">
            <Link 
              href="#contato" 
              className="bg-[#E6007E] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#c5006c] transition-all flex items-center gap-2 group"
            >
              Solicitar orçamento
              <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
            </Link>
          </div>

        </div>

        {/* --- 3. O MEGA MENU FLUTUANTE --- */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 hidden lg:block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1300px] mx-auto my-6 bg-white rounded-3xl p-8 grid grid-cols-12 gap-8 border border-gray-100">

                {/* Coluna 1 (4/12): Categorias Principais */}
                <div className="col-span-4 border-r border-gray-100 pr-4 flex flex-col gap-2">
                  <button
                    onMouseEnter={() => setActiveTab('web')}
                    className={`w-full text-left p-4 rounded-xl flex items-center justify-between font-bold transition-all cursor-pointer ${activeTab === 'web' ? 'bg-pink-50 text-[#E6007E]' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">🖥️ <span>Desenvolvimento Web</span></div>
                    {activeTab === 'web' && <span>&gt;</span>}
                  </button>
                  <button
                    onMouseEnter={() => setActiveTab('mobile')}
                    className={`w-full text-left p-4 rounded-xl flex items-center justify-between font-bold transition-all cursor-pointer ${activeTab === 'mobile' ? 'bg-pink-50 text-[#E6007E]' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    <div className="flex items-center gap-3">📱 <span>Aplicativos Mobile</span></div>
                    {activeTab === 'mobile' && <span>&gt;</span>}
                  </button>
                  <div className="p-4 text-gray-400 font-medium text-sm flex items-center gap-3 opacity-60 cursor-not-allowed">⚙️ Sistemas Personalizados</div>
                  <div className="p-4 text-gray-400 font-medium text-sm flex items-center gap-3 opacity-60 cursor-not-allowed">☁️ Infraestrutura & Cloud</div>
                  <div className="p-4 text-gray-400 font-medium text-sm flex items-center gap-3 opacity-60 cursor-not-allowed">🛡️ Consultoria em TI</div>
                </div>

                {/* Coluna 2 (4/12): Lista de Serviços Dinâmica */}
                <div className="col-span-4 flex flex-col">
                  <span className="text-xs font-bold text-gray-400 tracking-wider mb-4 uppercase">Serviços em Destaque</span>
                  {activeTab === 'web' && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 text-[15px] hover:text-[#008FD5] cursor-pointer">• E-commerce</h5>
                        <p className="text-xs text-gray-500 ml-3">Lojas virtuais completas e escaláveis.</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-[15px] hover:text-[#008FD5] cursor-pointer">• Portais Institucionais</h5>
                        <p className="text-xs text-gray-500 ml-3">Sites modernos e otimizados.</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-[15px] hover:text-[#008FD5] cursor-pointer">• Integrações & APIs</h5>
                        <p className="text-xs text-gray-500 ml-3">Conecte sistemas e automatize processos.</p>
                      </div>
                    </div>
                  )}
                  {activeTab === 'mobile' && (
                    <div className="flex flex-col gap-4">
                      <div>
                        <h5 className="font-bold text-gray-800 text-[15px] hover:text-[#008FD5] cursor-pointer">• Apps Corporativos</h5>
                        <p className="text-xs text-gray-500 ml-3">Soluções internas para sua equipe.</p>
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-800 text-[15px] hover:text-[#008FD5] cursor-pointer">• Lojas Mobile</h5>
                        <p className="text-xs text-gray-500 ml-3">Sua loja direto no bolso do cliente.</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Coluna 3 (4/12): Card Lateral de Destaque */}
                <div className="col-span-4 bg-gradient-to-br from-gray-50 to-slate-100 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden border border-gray-100">
                  <div>
                    <span className="bg-pink-100 text-[#E6007E] text-[10px] font-extrabold px-2 py-1 rounded-md uppercase tracking-wider">Destaque</span>
                    <h4 className="font-extrabold text-gray-900 text-lg mt-3 mb-1">Soluções completas para impulsionar seu negócio</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Transformamos ideias em soluções tecnológicas que geram resultados reais.</p>
                  </div>
                  <Link href="#servicos" className="text-[#E6007E] font-bold text-xs flex items-center gap-1 mt-4 hover:underline">
                    Conheça todos os serviços &gt;
                  </Link>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  );
}