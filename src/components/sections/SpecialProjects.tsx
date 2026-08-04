"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import BgProjetos from '@/assets/images/background-projetos.png';

// Importação das imagens reais dos sites
import SiteAlianza from '@/assets/siteshero/alianzaengenharia.png';
import SiteArtbor from '@/assets/siteshero/artbor.png';
import SiteBtomec from '@/assets/siteshero/btomec.png';
import SiteCoelhoNeto from '@/assets/siteshero/drcoelhoneto.png';
import SiteHdc from '@/assets/siteshero/hdcequipamentos.png';
import SiteHorizonte from '@/assets/siteshero/horizoncont.png';
import SiteIcbras from '@/assets/siteshero/icbras.png';
import SiteIdhera from '@/assets/siteshero/idhera.png';
import SiteInoxsul from '@/assets/siteshero/inoxsul.png';
import SiteOab from '@/assets/siteshero/oabjoinville.png';
import SiteRainbow from '@/assets/siteshero/rainbow.png';
import SiteRefritec from '@/assets/siteshero/refritec.png';
import SiteSolvo from '@/assets/siteshero/solvo.png';
import SiteTecnoiso from '@/assets/siteshero/tecnoiso.png';
import SiteUsimega from '@/assets/siteshero/usimega.png';
import SiteWalbert from '@/assets/siteshero/walbertgroup.png';

export function SpecialProjects() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const projetos = [
    { cliente: 'Tecnoiso', segmento: 'Indústria', desc: 'Site institucional com apresentação de soluções industriais, cases de sucesso e área do cliente.', image: SiteTecnoiso, url: 'https://tecnoiso.com' },
    { cliente: 'IdHera', segmento: 'Saúde', desc: 'Plataforma institucional para apresentação de serviços médicos e informações de saúde.', image: SiteIdhera, url: 'https://www.idhera.com.br/' },
    { cliente: 'OAB Joinville', segmento: 'Institucional', desc: 'Portal oficial com serviços para advogados, notícias e informações institucionais atualizadas.', image: SiteOab, url: 'https://www.oabjoinville.org.br/' },
    { cliente: 'J. N. Coelho Neto', segmento: 'Advocacia', desc: 'Site corporativo apresentando áreas de atuação, equipe de especialistas e artigos jurídicos.', image: SiteCoelhoNeto, url: 'https://coelhoneto.adv.br/' },
    { cliente: 'Alianza Engenharia', segmento: 'Engenharia', desc: 'Portfólio online detalhado com projetos de engenharia, serviços e histórico de sucesso.', image: SiteAlianza, url: 'https://alianzaengenharia.com.br/' },
    { cliente: 'Artbor', segmento: 'Indústria', desc: 'Catálogo virtual de produtos, destacando qualidade, certificações e aplicações técnicas.', image: SiteArtbor, url: 'https://www.artbor.com.br/' },
    { cliente: 'Btomec', segmento: 'Usinagem', desc: 'Site institucional focado em soluções de ferramentaria, tecnologia e precisão industrial.', image: SiteBtomec, url: 'https://btomec.com.br' },
    { cliente: 'HDC Equipamentos', segmento: 'Indústria', desc: 'Plataforma para apresentação de equipamentos, manuais técnicos e solicitação de orçamentos.', image: SiteHdc, url: 'https://hdcequipamentos.com.br/' },
    { cliente: 'Horizonte Contabilidade', segmento: 'Contabilidade', desc: 'Portal de serviços contábeis com área restrita para clientes e envio de documentos seguros.', image: SiteHorizonte, url: 'https://horizontecont.com.br/' },
    { cliente: 'Icbras', segmento: 'Indústria', desc: 'Apresentação corporativa de soluções para infraestrutura, certificações e catálogo técnico.', image: SiteIcbras, url: 'https://www.icbras.com.br/' },
    { cliente: 'Inoxsul', segmento: 'Indústria', desc: 'Catálogo completo de produtos em aço inox, focando em aplicações industriais e corporativas.', image: SiteInoxsul, url: 'https://inoxsul.com' },
    { cliente: 'Grupo Rainbow', segmento: 'Serviços', desc: 'Site corporativo unificado apresentando todas as verticais de negócio e estrutura do grupo.', image: SiteRainbow, url: 'https://www.gruporainbow.com.br/' },
    { cliente: 'Refritec', segmento: 'Climatização', desc: 'Apresentação de projetos de engenharia térmica, serviços de manutenção e portfólio de obras.', image: SiteRefritec, url: 'https://refritecengenharia.com.br/' },
    { cliente: 'SolvoBR', segmento: 'Tecnologia', desc: 'Plataforma moderna destacando soluções tecnológicas, integrações e serviços especializados.', image: SiteSolvo, url: 'https://solvobr.com' },
    { cliente: 'Usimega', segmento: 'Metalúrgica', desc: 'Site focado em infraestrutura produtiva, maquinário tecnológico e soluções sob medida.', image: SiteUsimega, url: 'https://usimega.com.br' },
    { cliente: 'Walbert Group', segmento: 'Corporativo', desc: 'Portal global apresentando as soluções da empresa, governança e alcance de mercado.', image: SiteWalbert, url: 'https://walbertgroup.com' },
  ];

  return (
    <section 
      id="projetos" 
      className="relative w-full py-20 lg:py-28 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${BgProjetos.src})` }}
    >
      <div className="max-w-[1300px] mx-auto px-4 relative z-10">
        
        {/* Cabeçalho */}
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
            onClick={() => swiperInstance?.slidePrev()}
            className="flex w-12 h-12 bg-white rounded-full items-center justify-center text-[#E6007E] font-bold shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:scale-105 transition-transform flex-shrink-0 z-20 cursor-pointer absolute left-0 md:left-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-[1150px] overflow-visible py-8">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              speed={800} 
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              autoplay={{ delay: 4000, disableOnInteraction: false }} 
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                // Mudei aqui de 4 para 3 colunas em telas muito grandes
                1280: { slidesPerView: 3, spaceBetween: 30 },
              }}
              className="overflow-visible px-2"
            >
              {projetos.map((item, index) => (
                // AQUI: A classe !h-auto força todos os slides do Swiper a terem a altura do maior card
                <SwiperSlide key={index} className="flex justify-center pb-6 !h-auto">
                  {/* O card recebe h-full para preencher o espaço inteiro do slide */}
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Acessar site de ${item.cliente}`}
                    className="relative w-full h-full bg-white rounded-[1.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(230,0,126,0.15)] group cursor-pointer"
                  >
                    
                    {/* Imagem do Projeto */}
                    <div className="relative w-full h-56 md:h-60 bg-gray-100 overflow-hidden border-b border-gray-100 flex-shrink-0">
                      <Image 
                        src={item.image} 
                        alt={`Projeto ${item.cliente}`} 
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Informações do Projeto - flex-1 empurra o conteúdo adequadamente */}
                    <div className="p-6 md:p-8 flex flex-col flex-1">
                      
                      <div className="flex justify-between items-start mb-4">
                        {/* Cliente */}
                        <div className="flex flex-col">
                          <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-[#E6007E] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                            Cliente
                          </span>
                          <span className="text-[#0c1f44] font-extrabold text-[15px] mt-1 group-hover:text-[#E6007E] transition-colors">
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

                      {/* Descrição */}
                      <p className="text-gray-500 text-sm leading-relaxed mt-2 group-hover:text-gray-700 transition-colors flex-1">
                        {item.desc}
                      </p>

                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <button 
            onClick={() => swiperInstance?.slideNext()}
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