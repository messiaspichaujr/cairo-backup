"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import LineHrCliente from '@/assets/images/line-hr-cliente.png';
import FaviconDepoimento from '@/assets/images/favicon-depoimento.png';

export function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const depoimentos = [
    {
      nome: 'Marcelo Antunes',
      cargo: 'Gerente de Operações',
      titulo: '"Revolução na Produtividade!"',
      texto: 'Antes de contratarmos a Cairo TI, nossos processos internos eram lentos e cheios de gargalos, especialmente na gestão de dados e comunicação entre equipes. A solução de infraestrutura e a implementação de um novo sistema customizado pela Cairo Tecnologia e Inovação foram transformadoras.'
    },
    {
      nome: 'Juliana Costa',
      cargo: 'CEO',
      titulo: '"Foco Total no Core Business"',
      texto: 'A terceirização completa da nossa TI para a Cairo nos permitiu tirar o foco da manutenção de sistemas e colocá-lo totalmente no desenvolvimento de novos produtos. Eles trouxeram uma consultoria estratégica que identificou e eliminou pontos de lentidão críticos.'
    },
    {
      nome: 'Roberto Alves',
      cargo: 'Diretor Financeiro',
      titulo: '"Segurança e Eficiência"',
      texto: 'Estávamos sofrendo com interrupções constantes e preocupações com a segurança dos nossos dados. A equipe da Cairo Tecnologia e Inovação implementou uma política de segurança robusta e migrou toda a nossa operação para a nuvem de forma impecável.'
    }
  ];

  return (
    <section id="depoimentos" className="w-full py-24 bg-[#f4f4f5]">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[#6c6d70] text-6xl font-extrabold mb-4 tracking-tight">
            Depoimentos
          </h2>
          <Image 
            src={LineHrCliente} 
            alt="Divisor" 
            width={240} 
            height={20} 
            className="object-contain"
          />
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 relative px-2 md:px-8">
          
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-md hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer absolute left-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-[1020px] py-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={800} 
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{ delay: 3000, disableOnInteraction: false }} 
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-2 pb-8"
            >
              {depoimentos.map((dep, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-8 flex flex-col h-full mx-2">
                    
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 flex-shrink-0">
                        <Image src={FaviconDepoimento} alt="Ícone" className="w-full h-full object-contain" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[#E6007E] font-extrabold text-lg leading-tight">{dep.nome}</span>
                        <span className="text-[#008FD5] font-bold text-sm mt-0.5">{dep.cargo}</span>
                      </div>
                    </div>

                    <div className="flex flex-col text-center items-center">
                      <h4 className="text-[#E6007E] font-bold text-base mb-5">
                        {dep.titulo}
                      </h4>
                      <p className="text-gray-500 text-[14px] leading-relaxed">
                        {dep.texto}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-md hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer absolute right-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}