"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Assets
import Logo from '@/assets/images/Logo.png';

export function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('consultoria');
  
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 200);
  };

  return (
    <header className="w-full fixed top-0 left-0 z-50 shadow-sm flex flex-col">
      
      {/* 1. FAIXA SUPERIOR (Magenta) - Suporte, Splashtop e Chamados */}
      <div className="w-full bg-[#E6007E] text-white py-2 px-4 hidden md:block text-xs font-medium">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          
          {/* Instruções Splashtop */}
          <div className="flex items-center gap-2">
            <a href="http://sos.splashtop.com/" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors flex items-center gap-2 font-bold">
               ⬇️ Baixar Splashtop (Suporte)
            </a>
            <span className="opacity-90 ml-2 hidden lg:inline">
              Baixe o aplicativo e informe o código de 9 dígitos ao técnico.
            </span>
          </div>

          {/* Link para o Sistema de Chamados */}
          <div className="flex items-center">
            <a href="https://central.cairotecnologia.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-pink-200 transition-colors flex items-center gap-1 font-bold underline underline-offset-2">
               🖥️ Acessar Central de Chamados
            </a>
          </div>

        </div>
      </div>

      {/* 2. NAVBAR PRINCIPAL (Branca) */}
      <div className="w-full bg-white bg-opacity-95 backdrop-blur-md py-4 px-4 relative">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          
          {/* Lado Esquerdo: Logo e Menu Alinhados */}
          <div className="flex items-center gap-10">
            {/* Logo maior conforme solicitado */}
            <Link href="/" className="flex-shrink-0">
              <Image src={Logo} alt="Cairo TI" width={180} height={60} className="object-contain" />
            </Link>

            {/* Links Centrais Alinhados à esquerda */}
            <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700 mt-1">
              
              <Link href="#sobre" className="hover:text-[#E6007E] transition-colors py-2">Quem somos</Link>
              
              {/* Link Soluções */}
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
                <div className={`absolute bottom-0 left-0 h-[3px] bg-[#E6007E] transition-all duration-300 ${isMegaMenuOpen ? 'w-full' : 'w-0'}`}></div>
              </div>

              <Link href="#contato" className="hover:text-[#E6007E] transition-colors py-2">Contato</Link>
            </nav>
          </div>

          {/* Lado Direito: Botão CTA atualizado */}
          <div className="flex items-center gap-6">
            <Link 
              href="#contato" 
              className="bg-[#E6007E] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-[#c5006c] transition-all flex items-center gap-2 group"
            >
              Solicite uma proposta
              <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
            </Link>
          </div>

        </div>

        {/* --- 3. O MEGA MENU FLUTUANTE (Categorias Atualizadas) --- */}
        {isMegaMenuOpen && (
          <div 
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 hidden lg:block animate-fadeIn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-[900px] mx-auto my-6 bg-white rounded-3xl p-6 border border-gray-100">
              
              <div className="grid grid-cols-2 gap-4">
                <Link href="#atuacao" className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100">
                  <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">💡</div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Consultoria em TI</span>
                    <span className="text-xs text-gray-500 mt-1">Estratégia e direcionamento tecnológico.</span>
                  </div>
                </Link>
                <Link href="#atuacao" className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100">
                  <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">☁️</div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Infraestrutura & Cloud</span>
                    <span className="text-xs text-gray-500 mt-1">Ambientes seguros e escaláveis.</span>
                  </div>
                </Link>
                <Link href="#atuacao" className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100">
                  <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">🛡️</div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Cybersegurança</span>
                    <span className="text-xs text-gray-500 mt-1">Proteção total para os seus dados.</span>
                  </div>
                </Link>
                <Link href="#atuacao" className="p-4 rounded-xl flex items-center gap-4 transition-all hover:bg-pink-50 group border border-transparent hover:border-pink-100">
                  <div className="w-12 h-12 bg-slate-50 group-hover:bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">💻</div>
                  <div className="flex flex-col">
                    <span className="font-extrabold text-gray-800 group-hover:text-[#E6007E]">Desenvolvimento Web</span>
                    <span className="text-xs text-gray-500 mt-1">Softwares e portais sob medida.</span>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </header>
  );
}