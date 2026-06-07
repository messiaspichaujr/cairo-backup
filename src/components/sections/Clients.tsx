"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import BgClientes from '@/assets/images/background-clientes.png';
import LineHr2 from '@/assets/images/line-hr-2.png';
import Empresa1 from '@/assets/images/empresa-1-Photoroom.png';
import Empresa2 from '@/assets/images/empresa-2-Photoroom.png';
import Empresa3 from '@/assets/images/empresa-3-Photoroom.png';
import Empresa4 from '@/assets/images/empresa-4-Photoroom.png';

export function Clients() {
  const baseLogos = [Empresa1, Empresa2, Empresa3, Empresa4];
  const displayLogos = [...baseLogos, ...baseLogos];
  
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section 
      id="clientes" 
      // AQUI: Retornamos para bg-cover e bg-center para cobrir o fundo 100%
      className="relative w-full py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgClientes.src})` }}
    >
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

          <div className="w-full max-w-4xl px-2">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              speed={800}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 30 },
                768: { slidesPerView: 3, spaceBetween: 40 },
                1024: { slidesPerView: 4, spaceBetween: 50 },
              }}
              className="py-4"
            >
              {displayLogos.map((logo, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white rounded-full flex items-center justify-center p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300 mx-auto">
                    <Image 
                      src={logo} 
                      alt={`Logo Cliente ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
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