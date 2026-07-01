"use client";

import { useState } from 'react';
import Link from 'next/link';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#E6007E]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
      pergunta: '1. Vale a pena migrar minha infraestrutura local para a Nuvem (Cloud Computing)?',
      resposta: 'Para a grande maioria das empresas modernas, a resposta é sim. A migração para a nuvem transforma custos fixos de hardware (CapEx) em custos operacionais variáveis (OpEx), permitindo maior flexibilidade. Os principais benefícios incluem: Escalabilidade, mobilidade, alta disponibilidade e redução de custos.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#008FD5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      pergunta: '2. Como vocês garantem a segurança dos dados contra ataques como Ransomware?',
      resposta: 'Utilizamos uma abordagem de "Defesa em Profundidade", criando múltiplas camadas de proteção. Nossa estratégia inclui monitoramento ativo 24/7, soluções de antivírus gerenciado, firewalls avançados e treinamentos de conscientização para sua equipe.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#008FD5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      pergunta: '3. Qual é a política de backup e recuperação de desastres?',
      resposta: 'Seguimos a rigorosa Estratégia 3-2-1. Mantemos 3 cópias dos seus dados, armazenadas em 2 tipos de mídia diferentes, sendo pelo menos 1 cópia armazenada externamente (off-site/nuvem) para garantir a recuperação em qualquer cenário.'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-[#E6007E]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      pergunta: '4. Como funciona o processo de suporte técnico e qual é o tempo de resposta (SLA)?',
      resposta: 'Contamos com um Service Desk centralizado. Chamados críticos têm SLA imediato ou em até 1h. Alta prioridade até 4 horas, e configurações rotineiras até 24 horas úteis, garantindo que sua operação nunca pare.'
    }
  ];

  return (
    <section 
      id="faq" 
      className="w-full pt-20 pb-24 bg-[#f8fafc] rounded-t-[3rem] -mt-12 relative z-20"
    >
      <div className="absolute top-20 right-10 w-40 h-40 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>

      <div className="max-w-[900px] mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gray-300"></div>
            <span className="text-[#E6007E] text-xs font-black tracking-widest uppercase">
              FAQ
            </span>
            <div className="w-10 h-[1px] bg-gray-300"></div>
          </div>
          <h2 className="text-[#0c1f44] text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Ainda tem dúvidas? Confira as respostas <br className="hidden md:block"/> para as perguntas mais comuns.
          </p>
          
          <div className="flex items-center justify-center mt-6 w-full max-w-[200px]">
            <div className="h-[2px] bg-[#008FD5] flex-1"></div>
            <div className="px-2">
              <div className="w-6 h-6 border-2 border-[#008FD5] rounded-full p-1 flex items-center justify-center">
                <div className="w-full h-full bg-[#E6007E] rounded-full"></div>
              </div>
            </div>
            <div className="h-[2px] bg-[#E6007E] flex-1"></div>
          </div>
        </div>

        {/* Acordeão de Perguntas */}
        <div className="flex flex-col gap-4 mb-10">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : ''}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              >
                <div className="flex items-center gap-4 pr-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 flex-shrink-0">
                    {faq.icon}
                  </div>
                  <span className="font-extrabold text-[#0c1f44] text-base md:text-[17px]">
                    {faq.pergunta}
                  </span>
                </div>
                
                {/* AQUI: Ícone Animado de Mais/Menos em CSS puro */}
                <div className="flex-shrink-0">
                  <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${openIndex === index ? 'bg-[#E6007E] rotate-180' : 'bg-slate-50 group-hover:bg-slate-100 rotate-0'}`}>
                    {/* Linha Horizontal (Sempre visível, muda de cor) */}
                    <span className={`absolute w-3.5 h-[2px] rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-white' : 'bg-[#008FD5]'}`}></span>
                    {/* Linha Vertical (Gira e some quando aberto) */}
                    <span className={`absolute w-3.5 h-[2px] rounded-full transition-all duration-300 ${openIndex === index ? 'bg-white rotate-0 opacity-0 scale-50' : 'bg-[#008FD5] rotate-90 opacity-100 scale-100'}`}></span>
                  </div>
                </div>
              </button>
              
              {/* Resposta Expansível */}
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 md:pl-[84px] pr-6 text-gray-500 font-medium text-[15px] leading-relaxed">
                  {faq.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#008FD5]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#0c1f44] font-black text-lg mb-1">Não encontrou sua resposta?</h4>
              <p className="text-gray-500 font-medium text-sm">Fale com nossos especialistas e tire todas as suas dúvidas.</p>
            </div>
          </div>
          
          <Link 
            href="#contato"
            className="w-full md:w-auto bg-[#E6007E] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#c5006c] transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-pink-500/20"
          >
            Falar com especialista
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}