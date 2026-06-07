// src/components/sections/About.tsx
import Image from 'next/image';

// Importando os assets
import PerfilDono from '@/assets/images/Perfil-Icaro.png';
import Icon1 from '@/assets/images/icon-1.png';
import Icon2 from '@/assets/images/icon-2.png';
import Icon3 from '@/assets/images/icon-3.png';

export function About() {
  return (
    <section id="sobre" className="w-full bg-[#f9fafb] py-16 relative overflow-visible z-20">
      
      {/* Pílulas na DIREITA (Vazando para a Hero) */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
         <div className="absolute -top-20 -right-32 md:-right-12 flex flex-col items-end gap-6 md:gap-8 opacity-100 transform rotate-45">
            <div className="w-64 md:w-80 h-16 md:h-20 bg-gray-400 rounded-full shadow-lg"></div>
            <div className="w-64 md:w-80 h-16 md:h-20 bg-[#008FD5] rounded-full shadow-lg mr-12 md:mr-16"></div>
            <div className="w-48 md:w-56 h-16 md:h-20 bg-[#E6007E] rounded-full shadow-lg -mr-6 md:-mr-8"></div>
         </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          
          {/* Coluna da Esquerda: Imagem do CEO */}
          <div className="w-full lg:w-5/12 flex flex-col items-center">
            <div className="relative w-full rounded-tr-[4rem] overflow-hidden bg-white p-2 shadow-sm">
               <Image 
                  src={PerfilDono} 
                  alt="Rodrigo Schmidt - CEO" 
                  className="w-full h-auto object-cover rounded-tr-[3.5rem] rounded-bl-lg rounded-br-lg"
               />
            </div>
            <span className="text-gray-600 italic text-sm mt-4 text-center">
              (Rodrigo Schmidt - CEO)
            </span>
          </div>

          {/* Coluna da Direita: Textos e Ícones */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            
            <h2 className="text-[#E6007E] text-4xl lg:text-5xl font-extrabold leading-tight mb-8">
              Sobre a Cairo <br /> Tecnologia e Inovação
            </h2>

            <div className="flex flex-col gap-6">
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Image src={Icon1} alt="Ícone Localização" width={32} height={32} className="object-contain" />
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  Cairo, Capital do Egito, maior cidade do Mundo Árabe e da África. Sua pronúncia ao pé da letra em sua língua nativa significa "forte, vitoriosa". Suas sílabas também remetem às iniciais dos sócios, Caiçara e Rodrigo.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Image src={Icon2} alt="Ícone Alvo/Foco" width={32} height={32} className="object-contain" />
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  A Cairo Tecnologia e Inovação é uma empresa de Infraestrutura e Tecnologia da Informação, especializada no atendimento a empresas de pequeno e médio porte, com objetivo de dar força (robustez) à infraestrutura das empresas para que essas sigam um caminho vitorioso, gerando benefícios à economia e qualidade de vida das famílias envolvidas direta e indiretamente em seus serviços.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Image src={Icon3} alt="Ícone Qualidade/Prêmio" width={32} height={32} className="object-contain" />
                </div>
                <p className="text-gray-700 text-[15px] leading-relaxed text-justify">
                  A Cairo foi fundada por profissionais que atuam desde o ano 2000 na área de tecnologia, sempre focados ao atendimento empresarial. Nestes 17 anos de atendimento, contribuindo para empresas de diversos segmentos na região, acumularam experiência e conhecimento, que proporcionaram identificar as demandas de mercado e oferecer serviços para preencher essas lacunas.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}