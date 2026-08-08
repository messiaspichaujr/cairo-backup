"use client";

import { useRef } from 'react';
import { Carousel, type CarouselHandle } from '@/components/shared/Carousel';

// Usando o caminho da imagem do fundo
import FundoDepoimentos from '@/assets-novo/WEBP/fundo-depoimentos.png';

export function Testimonials() {
  const carouselRef = useRef<CarouselHandle>(null);

  // Depoimentos atualizados, limpos e formatados (8 itens)
  const depoimentos = [
    {
      nome: 'Cliente',
      cargo: 'Cliente',
      empresa: 'Desenvolvimento Web',
      texto: 'Gostei muito da experiência do desenvolvimento do meu site. Desde o início foram muito atenciosos, disponíveis e ágeis em me auxiliar em todas as etapas. Além de entregarem o site, também me ajudaram no processo de alimentação do conteúdo. Fiquei muito satisfeita com o resultado e com o atendimento como um todo.',
      estrelas: 5,
    },
    {
      nome: 'Julio César Bosco',
      cargo: 'Cliente',
      empresa: 'Grupo Tecnoiso',
      texto: 'Essa parceria com a Cairo Tecnologia transformou nossa infraestrutura tecnológica por meio de um suporte técnico altamente responsável e engajado. A dedicação diária e o propósito claro em servir com excelência garantem a continuidade e a segurança das nossas operações.',
      estrelas: 5,
    },
    {
      nome: 'Vinicius Schiochet',
      cargo: 'Cliente',
      empresa: 'IdHera Medicina e Saúde',
      texto: 'O Rodrigo e a equipe da Cairo já cuidam de nosso TI há 14 anos, sempre com serviço de excelência, atendendo as demandas e nos ajudando a manter tudo funcionando com um custo adequado, sem extravagâncias.',
      estrelas: 5,
    },
    {
      nome: 'Gean Marcos D. Correa',
      cargo: 'Cliente',
      empresa: 'SolvoBR',
      texto: 'Conheço o Rodrigo há mais de 20 anos e sei da sua competência técnica que busca sempre não somente a melhor opção para seus clientes, mas sim a mais adequada para sua atual realidade. Deixo o relato de uma total confiança no Rodrigo e em sua equipe.',
      estrelas: 5,
    },
    {
      nome: 'Carla Merkle',
      cargo: 'Cliente',
      empresa: 'Avaliação de Imóveis',
      texto: 'Trabalho com eles há anos. Pessoas de confiança, sabe? Fizeram o meu site e o site do meu esposo, cuidam dos nossos computadores e nos salvam sempre que precisamos quando o assunto é computador!',
      estrelas: 5,
    },
    {
      nome: 'Guilherme Aquino',
      cargo: 'Cliente',
      empresa: 'Reis & Pereira Advocacia',
      texto: 'O suporte prestado pelo Rodrigo e toda a sua equipe da Cairo é ágil, resolutivo e conduzido com grande profissionalismo. É uma empresa séria que transmite segurança e se destaca pela qualidade da parceria.',
      estrelas: 5,
    },
    {
      nome: 'Vinicius',
      cargo: 'Cliente',
      empresa: 'SteelGuard',
      texto: 'A Cairo está sempre disponível quando precisamos e disposta a apresentar soluções que cabem no nosso orçamento.',
      estrelas: 5,
    },
    {
      nome: 'Mauro',
      cargo: 'Cliente',
      empresa: 'Suin',
      texto: 'Empresa parceira há muitos anos, sempre trazendo soluções para todas as nossas demandas.',
      estrelas: 5,
    }
  ];

  // Componente de Estrelas
  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-400">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <section
      id="depoimentos"
      className="w-full pt-24 pb-32 bg-[#020b1f] bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: `url(${FundoDepoimentos.src})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">

        {/* Cabeçalho */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-[#E6007E]"></div>
            <span className="text-[#E6007E] text-sm font-bold tracking-widest uppercase">
              Depoimentos
            </span>
            <div className="w-10 h-[1px] bg-[#E6007E]"></div>
          </div>
          <h2 className="text-white text-5xl font-extrabold mb-4 tracking-tight">
            Quem confia, recomenda.
          </h2>
          <p className="text-gray-300 text-lg font-medium">
            Veja o que nossos clientes dizem sobre a experiência<br className="hidden md:block" /> de trabalhar com a Cairo.
          </p>
        </div>

        {/* Carrossel */}
        <div className="flex items-center justify-center gap-4 md:gap-6 relative px-2 md:px-12">

          <button
            onClick={() => carouselRef.current?.prev()}
            aria-label="Depoimento anterior"
            className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all flex-shrink-0 z-20 absolute left-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="w-full max-w-[1050px] py-4">
            <Carousel
              ref={carouselRef}
              slidesPerView={{ base: 1, 768: 2, 1024: 3 }}
              gap={24}
              loop
              autoplay={5000}
              ariaLabel="Depoimentos de clientes"
              className="py-4"
              slideClassName="h-full"
            >
              {depoimentos.map((dep, index) => (
                <div
                  key={index}
                  className="bg-[#0a1635]/80 backdrop-blur-md rounded-2xl border border-white/5 p-8 flex flex-col h-full shadow-2xl transition-transform duration-300 hover:-translate-y-2"
                >
                  {/* Estrelas */}
                  <div className="flex gap-1 mb-6">
                    {renderStars(dep.estrelas)}
                  </div>

                  {/* Texto com aspas */}
                  <div className="flex gap-3 mb-8 flex-1">
                    <span className="text-[#E6007E] text-2xl font-serif font-black leading-none mt-1">“</span>
                    <p className="text-gray-200 text-sm leading-relaxed font-medium">
                      {dep.texto}
                    </p>
                  </div>

                  {/* Rodapé do Card (Perfil) */}
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#008FD5] to-[#E6007E] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {dep.nome.charAt(0)}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-white font-bold text-sm tracking-tight">{dep.nome}</span>
                      <span className="text-gray-400 text-xs mb-1">{dep.cargo}</span>
                      {/* Logo da Empresa Placeholder */}
                      <span className="text-white/60 font-black text-[10px] tracking-widest uppercase flex items-center gap-1">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
                        {dep.empresa}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </Carousel>
          </div>

          <button
            onClick={() => carouselRef.current?.next()}
            aria-label="Próximo depoimento"
            className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center text-white hover:bg-white/10 hover:border-white/40 transition-all flex-shrink-0 z-20 absolute right-0"
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