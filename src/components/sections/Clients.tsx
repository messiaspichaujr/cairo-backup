"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { Carousel, type CarouselHandle } from '@/components/shared/Carousel';

import BgClientes from '@/assets/images/background-clientes.png';
import LineHr2 from '@/assets/images/line-hr-2.png';
import Empresa1 from '@/assets/images/empresa-1-Photoroom.png';
import Empresa2 from '@/assets/images/empresa-2-Photoroom.png';
import Empresa3 from '@/assets/images/empresa-3-Photoroom.png';
import Empresa4 from '@/assets/images/empresa-4-Photoroom.png';

export function Clients() {
  const baseLogos = [Empresa1, Empresa2, Empresa3, Empresa4];
  const displayLogos = [...baseLogos, ...baseLogos];

  const carouselRef = useRef<CarouselHandle>(null);

  return (
    <section
      id="clientes"
      className="relative w-full py-32 lg:py-40 min-h-[600px] lg:min-h-[750px] bg-cover bg-center bg-no-repeat overflow-hidden"
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
            onClick={() => carouselRef.current?.prev()}
            aria-label="Cliente anterior"
            className="flex w-10 h-10 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-lg hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-4xl px-2">
            <Carousel
              ref={carouselRef}
              slidesPerView={{ base: 1, 640: 2, 768: 3, 1024: 4 }}
              gap={32}
              loop
              autoplay={3000}
              ariaLabel="Logos de clientes"
              className="py-4"
              slideClassName="flex justify-center"
            >
              {displayLogos.map((logo, index) => (
                <div
                  key={index}
                  className="w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-white rounded-full flex items-center justify-center p-2 shadow-xl hover:-translate-y-2 transition-transform duration-300 mx-auto overflow-hidden"
                >
                  <Image
                    src={logo}
                    alt={`Logo Cliente ${index + 1}`}
                    className="w-[85%] h-[85%] object-contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <button
            onClick={() => carouselRef.current?.next()}
            aria-label="Próximo cliente"
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
