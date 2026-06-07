// src/components/sections/Solutions.tsx
import Image from 'next/image';

// Importando os assets
import LineHr from '@/assets/images/line-hr.png';
import Sessao4_1 from '@/assets/images/sessao4-1.png';
import Sessao4_2 from '@/assets/images/sessao4-2.png';
import Sessao4_3 from '@/assets/images/sessao4-3.png';

export function Solutions() {
  return (
    <section id="servicos" className="w-full bg-white py-20 relative">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-[#6c6d70] text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight">
            Nossas Soluções
          </h2>
          <Image 
            src={LineHr} 
            alt="Divisor" 
            width={300} 
            height={20} 
            className="object-contain"
          />
        </div>

        {/* Grid de Soluções */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Card 1: Planejamento */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center">
              <Image 
                src={Sessao4_1} 
                alt="Planejamento" 
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
            <h3 className="text-[#E6007E] text-2xl font-bold mb-4">
              Planejamento
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Uma TI eficiente tem como base o planejamento. Estamos aqui para lhe ajudar nessa etapa!
            </p>
          </div>

          {/* Card 2: Prevenção */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center">
              <Image 
                src={Sessao4_2} 
                alt="Prevenção" 
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
            <h3 className="text-[#008FD5] text-2xl font-bold mb-4">
              Prevenção
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Segurança para o seu negócio é vital. Possuímos sólidas ferramentas e serviços especializados, que lhe garantem uma TI saudável.
            </p>
          </div>

          {/* Card 3: Inovação */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 w-full flex justify-center">
              <Image 
                src={Sessao4_3} 
                alt="Inovação" 
                className="w-full max-w-[280px] h-auto object-contain"
              />
            </div>
            {/* Usando um tom de ciano/teal baseado na imagem */}
            <h3 className="text-[#00B4D8] text-2xl font-bold mb-4">
              Inovação
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              Empresas que possuem objetivos sólidos de crescimento buscam inovação constante junto a seus parceiros.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}