// src/components/sections/About.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

import PerfilDono from '@/assets/images/sobre-cairo-perfil.png';

import CertGoogle from '@/assets/certificados/certificado-google.png';
import CertUfs from '@/assets/certificados/certificado-microsoft.jpeg'; 
import CertMicrosoftReal from '@/assets/certificados/certified-microsoft.jpeg';
import CertCybersecurity from '@/assets/certificados/URSCA.jpeg';
import CertWireless from '@/assets/certificados/UWA.jpeg';

export function About() {
  const stats = [
    {
      id: 1,
      value: '8',
      label: 'anos de mercado',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#008FD5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15z" />
        </svg>
      )
    },
    {
      id: 2,
      value: '+500',
      label: 'clientes atendidos',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#008FD5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      id: 3,
      value: '1.000',
      label: 'projetos entregues',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#008FD5]">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699-2.74a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      )
    }
  ];

  // Matriz com o novo formato e configurações visuais
  const certificacoes = [
    { 
      nome: 'Google', 
      subtitulo: 'Suporte em TI',
      tag: 'CERTIFICAÇÃO OFICIAL',
      image: CertGoogle,
      oQueE: 'Capacitação global voltada para diagnóstico de falhas, redes, sistemas operacionais e segurança.',
      aplicacao: 'Garante suporte de alto nível para resolver incidentes com precisão e segurança no dia a dia.',
      style: {
        bottomLine: 'bg-[#008FD5]',
        tagBg: 'bg-blue-50 text-[#008FD5]',
        iconType: 'shield-blue'
      }
    },
    { 
      nome: 'Microsoft', 
      subtitulo: 'Partner',
      tag: 'PARCERIA OFICIAL',
      image: CertMicrosoftReal,
      oQueE: 'Selo de parceria oficial reconhecido mundialmente no ecossistema e tecnologias corporativas Microsoft.',
      aplicacao: 'Proporciona acesso direto a recursos avançados, suporte especializado e diretrizes oficiais.',
      style: {
        bottomLine: 'bg-[#008FD5]',
        tagBg: 'bg-blue-50 text-[#008FD5]',
        iconType: 'ribbon-blue'
      }
    },
    { 
      nome: 'UFSP', 
      subtitulo: 'Full Stack',
      tag: 'CERTIFICAÇÃO OFICIAL',
      image: CertUfs,
      oQueE: 'Especialização em redes gerenciadas por software (SDN), centralizando o controle de toda a infraestrutura de TI.',
      aplicacao: 'Permite o monitoramento em tempo real, gestão remota e rápida resolução de gargalos na rede.',
      style: {
        bottomLine: 'bg-[#E6007E]',
        tagBg: 'bg-blue-50 text-[#008FD5]', // Conforme a imagem, a tag continua azul
        iconType: 'shield-pink'
      }
    },
    { 
      nome: 'URSCA', 
      subtitulo: 'Routing, Switching & Cybersecurity',
      tag: 'CERTIFICAÇÃO OFICIAL',
      image: CertCybersecurity,
      oQueE: 'Formação avançada em roteamento, comutação e segurança da informação em redes corporativas.',
      aplicacao: 'Garante projetos de rede mais seguros, estáveis e preparados para ambientes de alta performance.',
      style: {
        bottomLine: 'bg-[#E6007E]',
        tagBg: 'bg-blue-50 text-[#008FD5]',
        iconType: 'shield-pink'
      }
    },
    { 
      nome: 'UWA', 
      subtitulo: 'Wireless Admin',
      tag: 'CERTIFICAÇÃO OFICIAL',
      image: CertWireless,
      oQueE: 'Especialização na administração e gerenciamento de redes wireless de alta performance em ambientes corporativos.',
      aplicacao: 'Assegura conectividade estável, segura e escalável para usuários e dispositivos em qualquer lugar.',
      style: {
        bottomLine: 'bg-[#E6007E]',
        tagBg: 'bg-blue-50 text-[#008FD5]',
        iconType: 'ribbon-pink'
      }
    }
  ];

// Função auxiliar para renderizar o ícone do canto superior direito
  const renderBadgeIcon = (type: string) => {
    if (type === 'shield-blue') return (
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#008FD5] border border-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    );
    if (type === 'ribbon-blue') return (
      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#008FD5] border border-blue-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <circle cx="12" cy="9" r="6" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l1.5 1.5 3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 13.8L17 22l-5-3-5 3 1.5-8.2" />
        </svg>
      </div>
    );
    if (type === 'shield-pink') return (
      <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E6007E] border border-pink-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    );
    if (type === 'ribbon-pink') return (
      <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E6007E] border border-pink-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <circle cx="12" cy="9" r="6" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l1.5 1.5 3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 13.8L17 22l-5-3-5 3 1.5-8.2" />
        </svg>
      </div>
    );
    return null;
  };

  return (
    <section id="sobre" className="w-full bg-[#f8fafc] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute top-12 left-8 w-32 h-32 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* PARTE 1: SOBRE A CAIRO (MANTIDA IGUAL) */}
        <div className="flex flex-col lg:flex-row items-center gap-16 xl:gap-24 mb-24">
          <div className="w-full lg:w-5/12 flex justify-center relative">
            <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#E6007E] rounded-full shadow-md z-20"></div>
            <div className="relative w-full max-w-[440px] aspect-[1/1] bg-gradient-to-br from-[#008FD5] to-[#044e75] rounded-[3rem] rounded-tr-[7rem] shadow-xl p-3 flex items-end overflow-visible">
              <Image src={PerfilDono} alt="Rodrigo Schmidt - CEO da Cairo" className="w-full h-auto object-contain absolute bottom-0 left-0 rounded-b-[2.7rem] rounded-tr-[6.7rem]" priority />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl py-3 px-6 border border-gray-100 flex items-center gap-3 z-30">
                <div className="w-10 h-10 bg-pink-50 rounded-full flex items-center justify-center text-[#E6007E] font-bold text-sm">👤</div>
                <div className="flex flex-col">
                  <span className="text-gray-900 font-extrabold text-sm tracking-tight">Rodrigo Schmidt</span>
                  <span className="text-gray-400 font-medium text-xs">CEO da Cairo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#E6007E] text-xs font-black uppercase tracking-widest">Sobre a Cairo</span>
              <div className="w-10 h-[2px] bg-[#E6007E]"></div>
            </div>

            <h2 className="text-[#070b12] text-4xl md:text-5xl font-black tracking-tight leading-[1.15] mb-6 max-w-xl">
              Tecnologia que gera <br />
              <span className="text-[#E6007E]">vantagem competitiva.</span>
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl mb-10 font-medium">
              Unindo 20 anos de experiência de sua liderança a 8 anos de história no mercado, ajudamos empresas de diferentes segmentos a crescerem através de soluções tecnológicas inteligentes, seguras e escaláveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
              {stats.map((stat) => (
                <div key={stat.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col items-center lg:items-start text-center lg:text-left transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-4 border border-slate-100">{stat.icon}</div>
                  <span className="text-[#E6007E] text-3xl font-black tracking-tight mb-1">{stat.value}</span>
                  <span className="text-gray-400 font-bold text-xs leading-tight">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link href="/historia" className="bg-[#E6007E] hover:bg-[#c5006c] text-white font-extrabold px-8 py-3.5 rounded-full text-sm shadow-md shadow-pink-600/10 transition-all flex items-center gap-2 group w-max">
              Conheça nossa história
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* PARTE 2: NOVO BLOCO DE CERTIFICAÇÕES (BASEADO NO DESIGN) */}
        <div className="w-full relative z-10 pt-16">
          
          {/* Cabeçalho das Certificações */}
          <div className="flex flex-col items-center justify-center text-center mb-14">
             <h3 className="text-[#0c1f44] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Certificações & Parcerias
             </h3>
             <p className="text-gray-500 text-base max-w-2xl mx-auto font-medium">
                Parcerias e certificações que comprovam nosso compromisso com excelência, segurança e inovação.
             </p>
          </div>
          
          {/* Grid de Cards (3 na primeira linha, 2 centralizados na segunda) */}
          <div className="flex flex-wrap justify-center gap-6 max-w-[1300px] mx-auto">
            {certificacoes.map((cert, idx) => (
              <div 
                key={idx} 
                className="relative w-full md:w-[calc(50%-12px)] xl:w-[calc(33.333%-16px)] bg-white rounded-3xl p-6 sm:p-8 flex flex-col overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow border border-gray-100 group"
              >
                {/* Linha de Base Colorida */}
                <div className={`absolute bottom-0 left-0 w-full h-1.5 ${cert.style.bottomLine}`}></div>

                {/* Header do Card (Logo + Textos + Badge) */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    {/* Imagem / Logo */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0">
                      <div className="relative w-full h-full">
                         <Image src={cert.image} alt={cert.nome} fill className="object-contain" />
                      </div>
                    </div>
                    {/* Títulos e Tag */}
                    <div className="flex flex-col">
                      <h4 className="text-[#0c1f44] font-black text-xl sm:text-2xl leading-none mb-1">{cert.nome}</h4>
                      <span className="text-[#0c1f44] font-bold text-sm sm:text-base mb-2">{cert.subtitulo}</span>
                      <span className={`text-[10px] sm:text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-md w-max ${cert.style.tagBg}`}>
                        {cert.tag}
                      </span>
                    </div>
                  </div>
                  {/* Badge no canto superior direito */}
                  <div className="hidden sm:block">
                     {renderBadgeIcon(cert.style.iconType)}
                  </div>
                </div>

                {/* Body do Card (O que é / Aplicação) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
                  {/* Bloco: O que é */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-[#008FD5] bg-blue-50 p-1.5 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
                      </div>
                      <span className="text-[#0c1f44] font-black text-xs uppercase tracking-wider">O que é</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{cert.oQueE}</p>
                  </div>
                  
                  {/* Bloco: Aplicação */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="text-[#E6007E] bg-pink-50 p-1.5 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <span className="text-[#0c1f44] font-black text-xs uppercase tracking-wider">Aplicação</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{cert.aplicacao}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Rodapé da Seção */}
          <div className="mt-16 flex items-center justify-center gap-3 text-center">
            <div className="text-[#008FD5]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <p className="text-gray-600 text-sm">
              Compromisso com qualidade, segurança e inovação em cada parceria. <span className="font-extrabold text-[#0c1f44]">Tecnologia que gera confiança.</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}