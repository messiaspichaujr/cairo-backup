"use client";

import Image from 'next/image';
import { useState } from 'react';
import BgContato from '@/assets/images/contact-bg.png';

export function Contact() {

  const [telefone, setTelefone] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número

    if (value.length > 11) {
      value = value.slice(0, 11); // Limita a 11 caracteres numéricos
    }

    if (value.length > 10) {
      // Celular (11 dígitos): (47) 99999-9999
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (value.length > 6) {
      // Fixo (10 dígitos): (47) 3030-5892
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (value.length > 2) {
      // Enquanto digita DDD e primeiros números: (47) 9961
      value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else if (value.length > 0) {
      // Começando a digitar o DDD: (47
      value = value.replace(/^(\d*)/, "($1");
    }

    setTelefone(value);
  };

  return (
    <section 
      id="contato" 
      className="relative w-full py-16 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgContato.src})` }}
    >
      {/* Overlay escuro removido a pedido! A imagem de fundo aparece 100% original. */}

      <div className="max-w-[1150px] mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          
          {/* --- LADO ESQUERDO: Textos e Informações --- */}
          <div className="w-full lg:w-5/12 flex flex-col">
            
            {/* Tag / Título Menor */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#E6007E] text-[10px] md:text-xs font-black tracking-widest uppercase">
                Contato
              </span>
              <div className="w-3 h-[2px] bg-gray-500/50"></div>
              <div className="w-8 h-[2px] bg-[#E6007E]"></div>
            </div>

            {/* Título Principal (Reduzido para manter a harmonia) */}
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-4">
              Vamos conversar <br />
              sobre o <span className="text-[#E6007E]">seu projeto?</span>
            </h2>

            {/* Elemento Decorativo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-[#008FD5]"></div>
              <div className="w-5 h-5 rounded-full border-2 border-[#008FD5] flex flex-col items-center justify-center text-[#E6007E]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-2.5 h-2.5 -mb-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-2.5 h-2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
              <div className="w-12 h-[2px] bg-[#E6007E]"></div>
            </div>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-[360px]">
              Preencha o formulário ao lado e nossa equipe entrará em contato com você o mais rápido possível.
            </p>

            {/* Lista de Contatos */}
            <div className="flex flex-col gap-5 mb-8">
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#E6007E]/30 bg-[#E6007E]/10 flex items-center justify-center text-[#E6007E] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.25-3.95-6.847-6.847l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium">Telefone</span>
                  <span className="text-white font-bold text-base tracking-wide">(47) 98921-0592</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-[#008FD5]/30 bg-[#008FD5]/10 flex items-center justify-center text-[#008FD5] flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium">E-mail</span>
                  <span className="text-white font-bold text-base">contato@cairotecnologia.com.br</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-purple-500/30 bg-purple-500/10 flex items-center justify-center text-purple-400 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-400 text-xs font-medium">Horário de atendimento</span>
                  <span className="text-white font-bold text-base">Segunda a Sexta, das 08h às 18h</span>
                </div>
              </div>

            </div>

            {/* Box WhatsApp */}
            <a 
              href="https://wa.me/5547999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#061129]/60 backdrop-blur-sm border border-white/10 hover:border-[#E6007E]/50 rounded-xl p-4 flex items-center justify-between transition-all group cursor-pointer max-w-[360px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E6007E]/30 bg-[#E6007E]/10 flex items-center justify-center text-[#E6007E] flex-shrink-0">
                  {/* Ícone de Headset (WhatsApp) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-extrabold text-xs mb-0.5 tracking-tight">Preferência por atendimento rápido?</span>
                  <span className="text-gray-400 text-[11px] font-medium">Fale conosco pelo WhatsApp.</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#E6007E] group-hover:bg-[#E6007E] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </a>

          </div>

          {/* --- LADO DIREITO: Formulário Glassmorphism --- */}
          <div className="w-full lg:w-7/12 mt-4 lg:mt-0">
            <div className="bg-[#061129]/70 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Brilho sutil no topo do card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E6007E] to-transparent opacity-50"></div>

              <form className="flex flex-col gap-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div className="flex flex-col">
                    <label className="text-white font-bold text-xs mb-1.5">Nome <span className="text-[#E6007E]">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Seu nome completo" 
                      className="bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E6007E] transition-colors"
                      required
                    />
                  </div>
                  {/* Sobrenome */}
                  <div className="flex flex-col">
                    <label className="text-white font-bold text-xs mb-1.5">Sobrenome <span className="text-[#E6007E]">*</span></label>
                    <input 
                      type="text" 
                      placeholder="Seu sobrenome" 
                      className="bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E6007E] transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex flex-col">
                  <label className="text-white font-bold text-xs mb-1.5">E-mail <span className="text-[#E6007E]">*</span></label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E6007E] transition-colors"
                    required
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col">
                  <label className="text-white font-bold text-xs mb-1.5">Telefone <span className="text-[#E6007E]">*</span></label>
                  <input 
                    type="tel" 
                    placeholder="(47) 99999-9999" 
                    value={telefone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    className="bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E6007E] transition-colors"
                    required
                  />
                </div>

                {/* Select Serviço */}
                <div className="flex flex-col">
                  <label className="text-white font-bold text-xs mb-1.5">Sobre qual serviço gostaria de falar? <span className="text-[#E6007E]">*</span></label>
                  <div className="relative">
                    <select 
                      className="w-full bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-gray-400 appearance-none focus:outline-none focus:border-[#E6007E] transition-colors cursor-pointer"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled hidden>Selecione um serviço</option>
                      <option value="consultoria" className="text-gray-800">Consultoria em TI</option>
                      <option value="infraestrutura" className="text-gray-800">Infraestrutura & Cloud</option>
                      <option value="cyberseguranca" className="text-gray-800">Cybersegurança</option>
                      <option value="desenvolvimento" className="text-gray-800">Desenvolvimento Web</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Textarea */}
                <div className="flex flex-col">
                  <label className="text-white font-bold text-xs mb-1.5">Como podemos ajudar?</label>
                  <textarea 
                    placeholder="Conte um pouco sobre seu projeto ou desafio..." 
                    rows={3}
                    className="bg-[#0a1635]/80 border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E6007E] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Botão Gradiente */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#E6007E] to-[#008FD5] text-white font-bold text-sm py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-1 shadow-lg"
                >
                  Enviar mensagem
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>

                {/* Footer Seguro */}
                <div className="flex items-center justify-center gap-2 mt-2 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-400 text-[10px] lg:text-[11px]">
                    Seus dados estão seguros e não compartilhamos<br className="hidden lg:block"/> suas informações com terceiros.
                  </span>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}