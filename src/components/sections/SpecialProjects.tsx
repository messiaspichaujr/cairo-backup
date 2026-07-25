"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Carousel, type CarouselHandle } from '@/components/shared/Carousel';

import BgProjetos from '@/assets/images/background-projetos.png';
import Projeto1 from '@/assets/images/1-projeto.png';
import Projeto2 from '@/assets/images/2-projeto.png';

export function SpecialProjects() {
  const carouselRef = useRef<CarouselHandle>(null);

  // Novos dados baseados no protótipo (Mantive as imagens placeholder que você já tinha)
  const projetos = [
    {
      cliente: 'Unimed Joinville',
      segmento: 'Saúde',
      desc: 'Portal completo para agendamento de consultas, exames e gestão de planos com integração em tempo real.',
      image: Projeto1
    },
    {
      cliente: 'Tecnoiso',
      segmento: 'Indústria',
      desc: 'Site institucional com apresentação de soluções industriais, cases de sucesso e área do cliente personalizada.',
      image: Projeto2
    },
    {
      cliente: 'Flores Joinville',
      segmento: 'Meio Ambiente',
      desc: 'Plataforma para apresentação de serviços, educação ambiental e solicitação de coleta de resíduos.',
      image: Projeto1
    },
    {
      cliente: 'Bellota Alimentos',
      segmento: 'Alimentício',
      desc: 'E-commerce completo com catálogo de produtos, pedidos online e gestão de entregas personalizada.',
      image: Projeto2
    },
  ];

  return (
    <section
      id="projetos"
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgProjetos.src})` }}
    >
      <div className="max-w-[1300px] mx-auto px-4 relative z-10">

        {/* Novo Cabeçalho do Protótipo */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <span className="text-[#E6007E] text-xs font-black tracking-widest uppercase">
              Projetos Especiais
            </span>
            <div className="w-12 h-[1px] bg-gray-300"></div>
          </div>

          <h2 className="text-[#0c1f44] text-4xl md:text-5xl lg:text-[42px] font-black mb-4 tracking-tight">
            Conheça alguns <span className="text-[#E6007E]">projetos</span> que desenvolvemos
          </h2>

          <p className="text-gray-500 text-base md:text-lg font-medium max-w-2xl">
            Cada solução é única, desenvolvida para atender desafios reais e gerar resultados que fazem a diferença.
          </p>
        </div>

        {/* Carrossel de Projetos */}
        <div className="flex items-center justify-center gap-2 md:gap-4 relative px-2 md:px-8">

          <button
            onClick={() => carouselRef.current?.prev()}
            aria-label="Projeto anterior"
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer absolute left-0 md:left-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-[1150px]">
            <Carousel
              ref={carouselRef}
              slidesPerView={{ base: 1, 768: 2, 1024: 3, 1280: 4 }}
              gap={30}
              loop
              autoplay={4000}
              ariaLabel="Projetos especiais desenvolvidos"
              className="py-8"
              slideClassName="flex pb-6"
            >
              {projetos.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-2 h-full"
                >
                  {/* Imagem do Projeto */}
                  <div className="relative w-full h-48 md:h-52 bg-gray-100 overflow-hidden border-b border-gray-100">
                    <Image
                      src={item.image}
                      alt={`Projeto ${item.cliente}`}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  {/* Informações do Projeto */}
                  <div className="p-6 md:p-8 flex flex-col flex-1">

                    <div className="flex justify-between items-start mb-4">
                      {/* Cliente */}
                      <div className="flex flex-col">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-[#E6007E]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          Cliente
                        </span>
                        <span className="text-[#0c1f44] font-extrabold text-[15px] mt-1">
                          {item.cliente}
                        </span>
                      </div>

                      {/* Segmento */}
                      <div className="flex flex-col text-right">
                        <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                          Segmento
                        </span>
                        <span className="text-[#0c1f44] font-extrabold text-[15px] mt-1">
                          {item.segmento}
                        </span>
                      </div>
                    </div>

                    {/* Descrição Limpa */}
                    <p className="text-gray-500 text-sm leading-relaxed mt-2">
                      {item.desc}
                    </p>

                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <button
            onClick={() => carouselRef.current?.next()}
            aria-label="Próximo projeto"
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer absolute right-0 md:right-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
