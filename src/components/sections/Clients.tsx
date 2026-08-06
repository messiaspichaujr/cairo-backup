"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Estilos do Swiper (Core + Pagination)
import 'swiper/css';
import 'swiper/css/pagination';

// Importação das Logos Oficiais
import LogoHdc16 from '@/assets/clients/hdc16.jpg';
import LogoGrupoRainbow14 from '@/assets/clients/gruporainbow14.png';
import LogoIdhera13 from '@/assets/clients/idhera13.png';
import LogoSolvoBr12 from '@/assets/clients/solvobr12.png';
import LogoAlianza10 from '@/assets/clients/alianza10.jpg';
import LogoOab9 from '@/assets/clients/oab9.png';
import LogoContabil6 from '@/assets/clients/contabil6.png';
import LogoUsimega5 from '@/assets/clients/usimega5.jpg';
import LogoBtomec4 from '@/assets/clients/btomec4.png';
import LogoTecnoiso3 from '@/assets/clients/tecnoiso3.webp';
import LogoIscbras1 from '@/assets/clients/iscbras1.png';

export function Clients() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  // Lista atualizada com os 'segmentos' para o rodapé do card
  const baseClientes = [
    { nome: 'SolvoBR', url: 'https://solvobr.com', logo: LogoSolvoBr12, segmento: 'Tecnologia e Consultoria' },
    { nome: 'Alianza Engenharia', url: 'https://alianzaengenharia.com.br/', logo: LogoAlianza10, segmento: 'Engenharia' },
    { nome: 'OAB', url: 'https://www.oabjoinville.org.br/', logo: LogoOab9, segmento: 'Instituição' },
    { nome: 'Horizonte Contabilidade', url: 'https://horizontecont.com.br/', logo: LogoContabil6, segmento: 'Contabilidade' },
    { nome: 'Usimega', url: 'https://usimega.com.br', logo: LogoUsimega5, segmento: 'Indústria' },
    { nome: 'HDC', url: 'https://hdcequipamentos.com.br/', logo: LogoHdc16, segmento: 'Indústria' },
    { nome: 'Grupo Rainbow', url: 'https://www.gruporainbow.com.br/', logo: LogoGrupoRainbow14, segmento: 'Serviços' },
    { nome: 'Idhera', url: 'https://www.idhera.com.br/', logo: LogoIdhera13, segmento: 'Saúde' },
    { nome: 'Btomec', url: 'https://btomec.com.br', logo: LogoBtomec4, segmento: 'Usinagem' },
    { nome: 'Tecnoiso', url: 'https://tecnoiso.com', logo: LogoTecnoiso3, segmento: 'Indústria' },
    { nome: 'Icbras', url: 'https://www.icbras.com.br/', logo: LogoIscbras1, segmento: 'Indústria' },
  ];

  // Duplica a lista para o carrossel criar o efeito infinito
  const displayClientes = [...baseClientes, ...baseClientes];

  return (
    <section 
      id="clientes" 
      // Fundo escuro azul profundo
      className="relative w-full py-24 lg:py-32 bg-[#020713] overflow-hidden"
    >
      {/* ELEMENTOS DECORATIVOS: Dot Patterns (Pontinhos) */}
      <div className="absolute top-12 left-8 w-32 h-32 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>
      <div className="absolute bottom-12 right-8 w-32 h-32 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>

      {/* Efeito de brilho/gradiente radial de fundo para quebrar o sólido */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#008FD5]/10 via-[#020713] to-[#020713] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 relative z-10">
        
        {/* --- CABEÇALHO DIVIDIDO (Esquerda / Direita) --- */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-12 mb-20">
          
          {/* Lado Esquerdo: Título */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#E6007E] text-[10px] md:text-xs font-black tracking-widest uppercase">
                Clientes
              </span>
              <div className="w-4 h-[2px] bg-gray-500/50"></div>
              <div className="w-10 h-[2px] bg-[#E6007E]"></div>
            </div>
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-8">
              Parcerias que <br className="hidden md:block"/>
              geram <span className="text-[#E6007E]">resultados.</span>
            </h2>

            {/* Elemento decorativo abaixo do título */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-[#008FD5]"></div>
              <div className="w-8 h-8 rounded-full border-2 border-[#008FD5] flex flex-col items-center justify-center text-[#E6007E]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4 -mb-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
              </div>
              <div className="w-20 h-[2px] bg-[#E6007E]"></div>
            </div>
          </div>

          {/* Lado Direito: Texto e Badges */}
          <div className="flex-1 xl:pl-12">
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-xl">
              A confiança dos nossos clientes é o que nos motiva a entregar sempre o melhor. Juntos, transformamos desafios em soluções de alto impacto.
            </p>
            
            {/* Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <div className="flex items-center gap-3 border border-white/10 rounded-2xl px-5 py-3 bg-white/5 backdrop-blur-sm">
                <span className="text-[#E6007E] text-xl">🤝</span>
                <span className="text-white/90 text-sm font-semibold leading-tight">Relacionamentos <br/> de longo prazo</span>
              </div>
              <div className="flex items-center gap-3 border border-white/10 rounded-2xl px-5 py-3 bg-white/5 backdrop-blur-sm">
                <span className="text-[#008FD5] text-xl">🛡️</span>
                <span className="text-white/90 text-sm font-semibold leading-tight">Compromisso com <br/> a excelência</span>
              </div>
              <div className="flex items-center gap-3 border border-white/10 rounded-2xl px-5 py-3 bg-white/5 backdrop-blur-sm">
                <span className="text-[#008FD5] text-xl">📈</span>
                <span className="text-white/90 text-sm font-semibold leading-tight">Resultados que <br/> fazem a diferença</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- CARROSSEL DE CARDS --- */}
        <div className="flex items-center gap-2 md:gap-4 relative w-full group">
          
          {/* Seta Esquerda */}
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/50 hover:text-[#E6007E] hover:border-[#E6007E] transition-all flex-shrink-0 z-20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full overflow-hidden pb-12">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800}
              pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                500: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1400: { slidesPerView: 5, spaceBetween: 24 },
              }}
              className="py-4"
            >
              {displayClientes.map((cliente, index) => (
                <SwiperSlide key={index} className="flex justify-center h-auto">
                  {/* Card do Cliente */}
                  <a 
                    href={cliente.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={`Visitar o site de ${cliente.nome}`}
                    className="w-full h-[280px] bg-[#061129]/80 backdrop-blur-md border border-white/5 hover:border-white/20 rounded-3xl p-6 flex flex-col items-center transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(230,0,126,0.1)]"
                  >
                    {/* Área centralizada para a Logo */}
                    <div className="flex-1 w-full flex items-center justify-center p-2 mb-4">
                      <Image 
                        src={cliente.logo} 
                        alt={`Logo Cliente ${cliente.nome}`} 
                        className="max-w-full max-h-[110px] object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Tag de Segmento (Rodapé do Card) */}
                    <div className="w-full py-2 px-4 border border-white/10 rounded-full flex items-center justify-center gap-2 mt-auto bg-white/5 group-hover:bg-white/10 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E6007E]"></span>
                      <span className="text-white/80 text-[11px] md:text-xs font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                        {cliente.segmento}
                      </span>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Paginação Customizada (Bolinhas rosas/cinzas) */}
            <div className="swiper-custom-pagination flex justify-center gap-2 mt-8 z-20"></div>
            
            {/* Estilos CSS Inline para injetar as cores na paginação do Swiper */}
            <style jsx global>{`
              .swiper-custom-pagination .swiper-pagination-bullet {
                background: #4b5563; /* cinza escuro */
                opacity: 1;
                width: 8px;
                height: 8px;
                transition: all 0.3s;
              }
              .swiper-custom-pagination .swiper-pagination-bullet-active {
                background: #E6007E; /* rosa */
                transform: scale(1.2);
              }
            `}</style>
          </div>

          {/* Seta Direita */}
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white/50 hover:text-[#E6007E] hover:border-[#E6007E] transition-all flex-shrink-0 z-20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}