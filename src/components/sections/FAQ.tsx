"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import LineHrCliente from '@/assets/images/line-hr-cliente.png';

export function FAQ() {
  const faqs = [
    {
      id: 1,
      pergunta: 'Vale a pena migrar minha infraestrutura local para a Nuvem (Cloud Computing)?',
      resposta: 'Para a grande maioria das empresas modernas, a resposta é sim. A migração para a nuvem transforma custos fixos de hardware (CapEx) em custos operacionais variáveis (OpEx), permitindo maior flexibilidade. Os principais benefícios incluem: Escalabilidade, mobilidade e redução de custos.'
    },
    {
      id: 2,
      pergunta: 'Como vocês garantem a segurança dos dados contra ataques como Ransomware?',
      resposta: 'Utilizamos uma abordagem de "Defesa em Profundidade", que cria múltiplas camadas de proteção para evitar que uma única falha comprometa todo o sistema. Nossa estratégia inclui: Monitoramento Ativo, Antivírus Gerenciado e Firewall, Gestão de Updates e Treinamento.'
    },
    {
      id: 3,
      pergunta: 'Qual é a política de backup e recuperação de desastres?',
      resposta: 'Seguimos a regra de ouro do backup, conhecida como Estratégia 3-2-1. Isso garante que, mesmo no pior cenário (como um incêndio físico ou ataque hacker massivo), seus dados possam ser recuperados rapidamente. 3 cópias dos dados. Armazenadas em 2 tipos de mídia diferentes (ex: Disco local e NAS). Sendo 1 cópia externa (Nuvem/Off-site).'
    },
    {
      id: 4,
      pergunta: 'Como funciona o processo de suporte técnico e qual é o tempo de resposta (SLA)?',
      resposta: 'Nós utilizamos um sistema de Service Desk centralizado. Assim que um chamado é aberto (por e-mail, telefone ou portal do cliente), ele é classificado por nível de urgência. Crítico (Parada total): Imediato ou em até 1h. Alto (Impacto significativo): Até 4 horas. Normal/Baixo (Dúvidas ou configurações): Até 24 horas úteis.'
    }
  ];

  return (
    <section id="faq" className="w-full py-24 bg-[#f4f4f5] relative overflow-hidden">
      
      {/* Pílulas em CSS Puro */}
      <div className="absolute top-20 -left-12 flex flex-col gap-6 opacity-100 transform -rotate-45 pointer-events-none z-0">
        <div className="w-56 h-16 bg-[#E6007E] rounded-full shadow-md"></div>
        <div className="w-48 h-16 bg-[#008FD5] rounded-full shadow-md -ml-8"></div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-14 bg-[#6c6d70] rounded-full"></div>
            <h2 className="text-[#6c6d70] text-6xl font-extrabold tracking-tight">
              FAQ
            </h2>
          </div>
          <Image 
            src={LineHrCliente} 
            alt="Divisor" 
            width={240} 
            height={20} 
            className="object-contain"
          />
        </div>

        {/* Carrossel de FAQ */}
        <div className="w-full pb-16">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true, el: '.custom-pagination' }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            /* AQUI: pt-12 (padding-top) em vez de pt-8 para o Swiper não cortar o topo */
            className="h-full pt-12 px-2"
          >
            {faqs.map((faq) => (
              <SwiperSlide key={faq.id} className="h-auto">
                
                {/* O Card do FAQ feito em CSS */}
                {/* AQUI: mt-8 em vez de mt-4 para empurrar o card para baixo dentro do slide */}
                <div className="relative w-full h-full min-h-[420px] flex flex-col mt-8">
                  
                  {/* Borda Simulada com Degradê */}
                  <div className="absolute inset-0 rounded-t-3xl rounded-b-[4rem] bg-gradient-to-b from-[#E6007E] to-[#008FD5] p-[3px] shadow-lg">
                    
                    {/* Fundo Branco do Card */}
                    <div className="bg-white w-full h-full rounded-t-[21px] rounded-b-[61px] flex flex-col items-center text-center px-6 pt-12 pb-10">
                      <span className="text-[#E6007E] text-2xl font-black mb-2">{faq.id}</span>
                      <h4 className="text-[#008FD5] font-bold text-[15px] leading-tight mb-4 min-h-[45px]">
                        {faq.pergunta}
                      </h4>
                      <p className="text-gray-500 text-[13px] leading-relaxed">
                        {faq.resposta}
                      </p>
                    </div>
                  </div>

                  {/* Ícone Redondo no Topo (Feito em CSS) */}
                  <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
                     <div className="w-full h-full bg-gradient-to-b from-[#E6007E] to-[#008FD5] rounded-full flex flex-col items-center justify-center text-white relative">
                        <span className="font-bold text-lg mb-1">?</span>
                        <span className="text-[8px] tracking-widest absolute bottom-2">...</span>
                     </div>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination flex justify-center gap-2 mt-12"></div>
        </div>

      </div>

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 14px;
          height: 14px;
          background-color: #d1d5db;
          opacity: 1;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #E6007E;
        }
      `}</style>
    </section>
  );
}