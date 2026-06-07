"use client";

import Image from 'next/image';

// Assets
import BgContato from '@/assets/images/background-contato.png';
import LineHrContato from '@/assets/images/line-hr-contato.png';

export function Contact() {
  return (
    <section 
      id="contato" 
      // AQUI: Reduzi o padding para py-12 lg:py-16 para diminuir a altura da seção e o zoom do background
      className="relative w-full py-12 lg:py-16 bg-cover bg-center bg-no-repeat overflow-visible z-20"
      style={{ backgroundImage: `url(${BgContato.src})` }}
    >
      {/* Pílulas Sobrepostas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
         <div className="absolute -top-32 -left-16 md:-left-8 flex flex-col gap-8 opacity-100 transform -rotate-45">
            <div className="w-80 h-20 bg-gray-400 rounded-full shadow-lg"></div>
            <div className="w-80 h-20 bg-[#E6007E] rounded-full shadow-lg ml-16"></div>
            <div className="w-56 h-20 bg-[#008FD5] rounded-full shadow-lg -ml-8"></div>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-40">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Esquerda: Textos */}
          <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
            <h2 className="text-white text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow-md mb-4">
              Contato
            </h2>
            <Image 
              src={LineHrContato} 
              alt="Divisor" 
              width={240} 
              height={20} 
              className="object-contain mb-6"
            />
            <p className="text-white/90 text-lg leading-relaxed max-w-sm">
              Entre em contato e descubra como podemos otimizar seus resultados com tecnologia e inovação.
            </p>
          </div>

          {/* Direita: Formulário */}
          <div className="w-full lg:w-7/12">
            {/* Removi a borda gigante daqui */}
            <div className="w-full max-w-lg lg:max-w-none mx-auto p-4 lg:p-8 rounded-2xl">
              <form className="flex flex-col gap-4">
                
                {/* AQUI: Campos com fundo branco e borda rosa */}
                <div className="flex flex-col">
                  <label className="text-white text-sm font-bold mb-1 ml-1">Nome *</label>
                  <input 
                    type="text" 
                    className="w-full h-11 bg-white border-2 border-[#E6007E] rounded-md px-4 text-gray-800 outline-none" 
                    required 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-sm font-bold mb-1 ml-1">Sobrenome *</label>
                  <input 
                    type="text" 
                    className="w-full h-11 bg-white border-2 border-[#E6007E] rounded-md px-4 text-gray-800 outline-none" 
                    required 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-sm font-bold mb-1 ml-1">Telefone *</label>
                  <input 
                    type="tel" 
                    className="w-full h-11 bg-white border-2 border-[#E6007E] rounded-md px-4 text-gray-800 outline-none" 
                    required 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-sm font-bold mb-1 ml-1">E-mail *</label>
                  <input 
                    type="email" 
                    className="w-full h-11 bg-white border-2 border-[#E6007E] rounded-md px-4 text-gray-800 outline-none" 
                    required 
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-white text-sm font-bold mb-1 ml-1">Sobre qual serviço gostaria de falar? *</label>
                  <input 
                    type="text" 
                    className="w-full h-11 bg-white border-2 border-[#E6007E] rounded-md px-4 text-gray-800 outline-none" 
                    required 
                  />
                </div>

                <button 
                  type="submit" 
                  className="mt-4 w-full h-12 bg-[#00A3A3] text-white text-lg font-bold rounded-md shadow-md cursor-pointer hover:bg-[#008a8a] transition-colors"
                >
                  Enviar
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}