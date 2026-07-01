"use client";

import Image from 'next/image';

// Importando os assets
import CirculoAtuacao from '@/assets/images/circulo-atuacao.png';
import LineHrCliente from '@/assets/images/line-hr-cliente.png';

export function AreasDeAtuacao() {
  return (
    <section id="atuacao" className="relative w-full bg-white py-16 lg:py-24 z-30 overflow-visible">
      
      {/* Pílulas Sobrepostas (Vazam para a seção de cima "Soluções") */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
         <div className="absolute -top-24 -left-16 md:-left-8 flex flex-col gap-6 md:gap-8 opacity-100 transform -rotate-45">
            <div className="w-64 md:w-80 h-16 md:h-20 bg-gray-400 rounded-full shadow-lg"></div>
            <div className="w-64 md:w-80 h-16 md:h-20 bg-[#E6007E] rounded-full shadow-lg ml-12 md:ml-16"></div>
            <div className="w-48 md:w-56 h-16 md:h-20 bg-[#008FD5] rounded-full shadow-lg -ml-6 md:-ml-8"></div>
         </div>
      </div>

      {/* Container Principal */}
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Coluna da Esquerda: Título e Linha */}
          <div className="w-full lg:w-5/12 flex flex-col items-center justify-center relative pt-12 lg:pt-0">
            
            {/* Título e Divisor */}
            <div className="text-center flex flex-col items-center z-10">
              <h2 className="text-[#6c6d70] text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-4 tracking-tight drop-shadow-sm">
                Áreas <br /> de Atuação
              </h2>
              <Image 
                src={LineHrCliente} 
                alt="Divisor" 
                width={220} 
                height={20} 
                className="object-contain"
              />
            </div>

          </div>

          {/* Coluna da Direita: O Círculo Gigante com Margens Negativas */}
          <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] lg:max-w-[800px] transform lg:-mt-24 lg:-mb-56 lg:translate-x-12 transition-transform duration-500 hover:scale-[1.02]">
              <Image 
                src={CirculoAtuacao} 
                alt="Áreas de Atuação da Cairo TI" 
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}