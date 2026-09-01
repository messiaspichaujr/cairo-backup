"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já respondeu antes
    const consent = localStorage.getItem('cairo-cookie-consent');
    if (!consent) {
      // Pequeno delay para a animação ficar mais natural ao carregar a página
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cairo-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cairo-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-sm z-[999] bg-[#0c1f44] border border-white/10 rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🍪</span>
            <h3 className="text-white font-bold text-base">Sua privacidade</h3>
          </div>
          
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-5">
            Utilizamos cookies para melhorar sua experiência, analisar o tráfego e personalizar conteúdo. 
            Ao continuar navegando, você concorda com a nossa{' '}
            <Link href="#" className="text-[#008FD5] hover:text-[#E6007E] underline transition-colors">
              Política de Privacidade
            </Link>.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="flex-1 bg-[#E6007E] hover:bg-[#c5006c] text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors text-center cursor-pointer"
            >
              Aceitar 
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 bg-transparent border border-gray-500 hover:border-gray-300 text-gray-300 hover:text-white font-bold text-xs py-2.5 px-4 rounded-lg transition-colors text-center cursor-pointer"
            >
              Recusar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}