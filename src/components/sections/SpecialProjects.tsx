"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import BgProjetos from '@/assets/images/background-projetos.png';
import LineHrCliente from '@/assets/images/line-hr-cliente.png';
import Projeto1 from '@/assets/images/1-projeto.png';
import Projeto2 from '@/assets/images/2-projeto.png';

export function SpecialProjects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const projetos = [
    { cliente: 'S.Liz', projeto: 'Site', image: Projeto1 },
    { cliente: 'Tecnoiso', projeto: 'Site', image: Projeto2 },
    { cliente: 'Flores Joinville', projeto: 'Logo e Fachada', image: Projeto1 },
    { cliente: 'ThunderFish', projeto: 'Site', image: Projeto2 },
  ];

  return (
    <section 
      id="projetos" 
      // AQUI ESTÁ A CORREÇÃO: bg-cover em vez de bg-contain, garantindo o preenchimento total
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgProjetos.src})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex flex-col items-center justify-center mb-4 relative">
            <h2 className="text-[#008FD5] text-5xl lg:text-6xl font-extrabold tracking-tight relative z-10">
              Projetos
            </h2>
            <span 
              className="text-[#E6007E] text-6xl lg:text-7xl absolute top-8 lg:top-10 z-20"
              style={{ fontFamily: 'cursive', textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}
            >
              Especiais
            </span>
          </div>
          
          <div className="mt-12 lg:mt-16">
            <Image 
              src={LineHrCliente} 
              alt="Divisor" 
              width={240} 
              height={20} 
              className="object-contain mb-8"
            />
          </div>

          <p className="text-gray-600 text-[15px] lg:text-base max-w-3xl leading-relaxed">
            Projetos Especiais: Onde sua demanda se transforma em uma solução customizada, criativa e inovadora. Cada visão é única e seu desafio é o que nos move.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 md:gap-4 relative px-2 md:px-8">
          
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="flex w-10 h-10 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform flex-shrink-0 z-20 cursor-pointer absolute left-0 md:left-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-[1000px] overflow-visible py-8">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800} 
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{ delay: 3000, disableOnInteraction: false }} 
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                900: { slidesPerView: 3, spaceBetween: 30 },
                1100: { slidesPerView: 4, spaceBetween: 30 },
              }}
              className="overflow-visible"
            >
              {projetos.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center pb-6">
                  <div className="relative w-full max-w-[260px] bg-white rounded-[2rem] shadow-xl flex flex-col p-4 pt-6 h-[340px] mx-auto border border-gray-100 transition-transform duration-300 hover:-translate-y-2 group">
                    
                    <div className="text-center mb-4">
                      <p className="text-gray-800 text-xs font-bold">Cliente: <span className="font-normal">{item.cliente}</span></p>
                      <p className="text-gray-800 text-xs font-bold">Projeto: <span className="font-normal">{item.projeto}</span></p>
                    </div>

                    <div className="flex-1 w-full relative rounded-2xl overflow-hidden bg-gray-50 mb-4">
                      <Image 
                        src={item.image} 
                        alt={`Projeto ${item.cliente}`} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-[120px]">
                      <button className="w-full bg-[#008FD5] text-white py-1.5 px-4 text-sm font-bold rounded-md shadow-md hover:bg-[#0077b5] transition-colors">
                        Conheça
                      </button>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="flex w-10 h-10 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform flex-shrink-0 z-20 cursor-pointer absolute right-0 md:right-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-[#E6007E] text-white text-lg font-bold py-3 px-12 rounded-sm shadow-lg hover:bg-[#c5006c] transition-colors shadow-pink-500/30">
            Saiba mais
          </button>
        </div>

      </div>
    </section>
  );
}