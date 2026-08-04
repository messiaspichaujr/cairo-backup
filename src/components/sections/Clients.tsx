"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import BgClientes from '@/assets/images/background-clientes.png';
import LineHr2 from '@/assets/images/line-hr-2.png';

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

  const baseClientes = [
    { nome: 'HDC', url: 'https://hdcequipamentos.com.br/', logo: LogoHdc16 },
    { nome: 'Grupo Rainbow', url: 'https://www.gruporainbow.com.br/', logo: LogoGrupoRainbow14 },
    { nome: 'Idhera', url: 'https://www.idhera.com.br/', logo: LogoIdhera13 },
    { nome: 'SolvoBR', url: 'https://solvobr.com', logo: LogoSolvoBr12 },
    { nome: 'Alianza Engenharia', url: 'https://alianzaengenharia.com.br/', logo: LogoAlianza10 },
    { nome: 'OAB', url: 'https://www.oabjoinville.org.br/', logo: LogoOab9 },
    { nome: 'Horizonte Contabilidade', url: 'https://horizontecont.com.br/', logo: LogoContabil6 },
    { nome: 'Usimega', url: 'https://usimega.com.br', logo: LogoUsimega5 },
    { nome: 'Btomec', url: 'https://btomec.com.br', logo: LogoBtomec4 },
    { nome: 'Tecnoiso', url: 'https://tecnoiso.com', logo: LogoTecnoiso3 },
    { nome: 'Icbras', url: 'https://www.icbras.com.br/', logo: LogoIscbras1 },
  ];

  // Duplica a lista para o carrossel criar o efeito infinito contínuo e suave
  const displayClientes = [...baseClientes, ...baseClientes];

  return (
    <section 
      id="clientes" 
      className="relative w-full py-32 lg:py-40 min-h-[600px] lg:min-h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgClientes.src})` }}
    >
      {/* Overlay escuro para destacar as logos */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1f44]/90 to-[#008FD5]/60 z-0 mix-blend-multiply"></div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="mb-16 md:mb-20 ml-4 md:ml-16 lg:ml-24">
          <h2 className="text-white text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-md">
            Clientes
          </h2>
          <Image 
            src={LineHr2} 
            alt="Divisor" 
            width={240} 
            height={20} 
            className="object-contain"
          />
          <p className="text-white/90 text-lg md:text-xl font-medium mt-6">
            Contamos com a confiança de:
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-6 relative">
          
          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="flex w-10 h-10 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-lg hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-5xl px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 3, spaceBetween: 30 },
                1024: { slidesPerView: 4, spaceBetween: 40 },
                1280: { slidesPerView: 5, spaceBetween: 40 },
              }}
              className="py-6"
            >
              {displayClientes.map((cliente, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <a 
                    href={cliente.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={`Visitar o site de ${cliente.nome}`}
                    className="block w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white rounded-full flex items-center justify-center p-2 shadow-xl transition-transform duration-300 mx-auto overflow-hidden group cursor-pointer"
                  >
                    <Image 
                      src={cliente.logo} 
                      alt={`Logo Cliente ${cliente.nome}`} 
                      className="w-[85%] h-[85%] object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="flex w-10 h-10 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-lg hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}