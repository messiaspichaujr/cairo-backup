"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from '@/assets/images/Logo.png';
import FacebookIcon from '@/assets/images/Facebook.png';
import InstagramIcon from '@/assets/images/Instagram.png';
import LinkedinIcon from '@/assets/images/Linkedin.png';
import YoutubeIcon from '@/assets/images/Youtube.png';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Clientes', href: '#clientes' },
    { name: 'Projetos Especiais', href: '#projetos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className="w-full bg-white shadow-sm relative z-50">
      {/* Barra Rosa Superior - 100% da largura */}
      <div className="w-full h-8 bg-[#E6007E]"></div>

      {/* Container Principal - Centralizado com max-w-[1200px] */}
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image 
              src={Logo} 
              alt="Cairo Tecnologia e Inovação" 
              width={180} 
              height={60} 
              className="object-contain" 
            />
          </Link>
        </div>

        {/* Container da Direita: Agrupa Links e Redes Sociais no Desktop */}
        <div className="hidden xl:flex items-center gap-8 lg:gap-12">
          
          {/* Links de Navegação */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-[#008FD5] text-[13px] font-bold hover:text-[#E6007E] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
                {/* Separador | */}
                {index < navLinks.length - 1 && (
                  <span className="text-gray-300 mx-1.5 text-xs">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* Redes Sociais */}
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={InstagramIcon} alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={FacebookIcon} alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image src={YoutubeIcon} alt="YouTube" width={24} height={24} />
            </Link>
          </div>
          
        </div>

        {/* Botão Menu Mobile */}
        <button 
          className="xl:hidden text-[#008FD5] focus:outline-none z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Animado com Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-xl xl:hidden overflow-hidden"
          >
            <nav className="flex flex-col items-center py-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[#008FD5] text-lg font-bold hover:text-[#E6007E] transition-colors w-full text-center py-2 border-b border-gray-100 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Redes Sociais no Mobile */}
              <div className="flex items-center gap-6 mt-4">
                <Link href="#"><Image src={LinkedinIcon} alt="LinkedIn" width={32} height={32} /></Link>
                <Link href="#"><Image src={InstagramIcon} alt="Instagram" width={32} height={32} /></Link>
                <Link href="#"><Image src={FacebookIcon} alt="Facebook" width={32} height={32} /></Link>
                <Link href="#"><Image src={YoutubeIcon} alt="YouTube" width={32} height={32} /></Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}