"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import PerfilDono from '@/assets/images/sobre-cairo-perfil.png';

// Imports Antigos
import CertGoogle from '@/assets/certificados/certificado-google.png';
import CertUfs from '@/assets/certificados/certificado-microsoft.jpeg';
import CertMicrosoftReal from '@/assets/certificados/certified-microsoft.jpeg';
import CertCybersecurity from '@/assets/certificados/URSCA.jpeg';
import CertWireless from '@/assets/certificados/UWA.jpeg';

// Imports Acronis
import CertAcronisBackup from '@/assets/certificados/blob.png';
import CertAcronisCloud from '@/assets/certificados/blob-1.png';
import CertAcronisM365 from '@/assets/certificados/blob-3.png';
import CertAcronisRMM from '@/assets/certificados/blob-4.png';
import CertAcronisEDR from '@/assets/certificados/blob-5.png';
import CertAcronisUltimate from '@/assets/certificados/blob-6.png';

export function About() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [selectedCert, setSelectedCert] = useState<any | null>(null);

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

  const certificacoes = [
    {
      nome: 'Google',
      subtitulo: 'Suporte em TI',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'SEGURANÇA',
      image: CertGoogle,
      oQueE: 'Capacitação global voltada para diagnóstico de falhas, redes, sistemas operacionais e segurança.',
      aplicacao: 'Garante suporte de alto nível para resolver incidentes com precisão e segurança no dia a dia.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'shield-blue' }
    },
    {
      nome: 'Microsoft',
      subtitulo: 'Partner',
      tag: 'PARCERIA OFICIAL',
      categoria: 'INFRAESTRUTURA',
      image: CertMicrosoftReal,
      oQueE: 'Selo de parceria oficial reconhecido mundialmente no ecossistema e tecnologias corporativas Microsoft.',
      aplicacao: 'Proporciona acesso direto a recursos avançados, suporte especializado e diretrizes oficiais.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'ribbon-blue' }
    },
    {
      nome: 'UFSP',
      subtitulo: 'Full Stack',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'DESENVOLVIMENTO',
      image: CertUfs,
      oQueE: 'Especialização em redes gerenciadas por software (SDN), centralizando o controle de toda a infraestrutura de TI.',
      aplicacao: 'Permite o monitoramento em tempo real, gestão remota e rápida resolução de gargalos na rede.',
      style: { bottomLine: 'bg-[#E6007E]', iconType: 'shield-pink' }
    },
    {
      nome: 'URSCA',
      subtitulo: 'Routing, Switching & Cybersecurity',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'REDES E CYBERSECURITY',
      image: CertCybersecurity,
      oQueE: 'Formação avançada em roteamento, comutação e segurança da informação em redes corporativas.',
      aplicacao: 'Garante projetos de rede mais seguros, estáveis e preparados para ambientes de alta performance.',
      style: { bottomLine: 'bg-[#E6007E]', iconType: 'shield-pink' }
    },
    {
      nome: 'UWA',
      subtitulo: 'Wireless Admin',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'REDES SEM FIO',
      image: CertWireless,
      oQueE: 'Especialização na administração e gerenciamento de redes wireless de alta performance em ambientes corporativos.',
      aplicacao: 'Assegura conectividade estável, segura e escalável para usuários e dispositivos em qualquer lugar.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'ribbon-blue' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'Backup',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'BACKUP E RECUPERAÇÃO',
      image: CertAcronisBackup,
      oQueE: 'Certificação avançada em soluções corporativas de backup e recuperação de dados em múltiplos ambientes.',
      aplicacao: 'Garante a integridade e disponibilidade dos dados através de rotinas de cópias de segurança de alta confiabilidade.',
      style: { bottomLine: 'bg-[#E6007E]', iconType: 'shield-pink' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'Cyber Protect Cloud',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'PROTEÇÃO CLOUD',
      image: CertAcronisCloud,
      oQueE: 'Formação nas soluções integradas de proteção cibernética e ambientes operacionais em nuvem.',
      aplicacao: 'Centraliza a gestão de segurança, backup e recuperação de desastres em um único painel ágil e seguro.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'ribbon-blue' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'M365',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'MICROSOFT 365',
      image: CertAcronisM365,
      oQueE: 'Especialização em proteção contínua e estratégias de backup focadas no ecossistema Microsoft 365.',
      aplicacao: 'Protege e-mails, arquivos e dados colaborativos do Office 365 contra perdas acidentais, exclusões ou ataques.',
      style: { bottomLine: 'bg-[#E6007E]', iconType: 'shield-pink' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'RMM & PSA',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'GESTÃO DE TI',
      image: CertAcronisRMM,
      oQueE: 'Capacitação em monitoramento remoto (RMM) e automação de serviços profissionais de TI (PSA).',
      aplicacao: 'Permite gerenciar pró-ativamente a infraestrutura do cliente, antecipando falhas e automatizando a resposta a incidentes.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'shield-blue' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'EDR',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'SEGURANÇA DE ENDPOINT',
      image: CertAcronisEDR,
      oQueE: 'Certificação em Endpoint Detection and Response baseada em comportamento.',
      aplicacao: 'Identifica, bloqueia e investiga ameaças avançadas diretamente nos dispositivos dos usuários antes que afetem a rede.',
      style: { bottomLine: 'bg-[#E6007E]', iconType: 'shield-pink' }
    },
    {
      nome: 'Acronis Academy',
      subtitulo: 'Ultimate 365 Solution',
      tag: 'CERTIFICAÇÃO OFICIAL',
      categoria: 'SOLUÇÃO COMPLETA',
      image: CertAcronisUltimate,
      oQueE: 'Domínio completo das soluções de ponta a ponta desenvolvidas para a segurança total do Microsoft 365.',
      aplicacao: 'Assegura a blindagem e a continuidade ininterrupta de negócios para ferramentas de produtividade na nuvem.',
      style: { bottomLine: 'bg-[#008FD5]', iconType: 'ribbon-blue' }
    }
  ];

  const visibleCerts = showAllCerts ? certificacoes : certificacoes.slice(0, 6);

  const renderBadgeIcon = (type: string) => {
    if (type === 'shield-blue') return (
      <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-[#008FD5]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    );
    if (type === 'ribbon-blue') return (
      <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-[#008FD5]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <circle cx="12" cy="9" r="6" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 9.5l1.5 1.5 3-3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 13.8L17 22l-5-3-5 3 1.5-8.2" />
        </svg>
      </div>
    );
    if (type === 'shield-pink') return (
      <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-[#E6007E]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    );
    if (type === 'ribbon-pink') return (
      <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center text-[#E6007E]">
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
    <>
      <section id="sobre" className="w-full bg-[#f8fafc] pt-24 pb-20 relative overflow-hidden">
        <div className="absolute top-12 left-8 w-32 h-32 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block"></div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">

          {/* SOBRE A CAIRO */}
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
                Unindo 20 anos de experiência de seu fundador aos 8 anos de história no mercado, a empresa ajuda negócios de diferentes segmentos a crescerem através de soluções tecnológicas inteligentes, seguras e escaláveis.
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

          {/* CERTIFICAÇÕES */}
          <div className="w-full relative z-10 pt-16">

            <div className="flex flex-col items-center justify-center text-center mb-14">
              <h3 className="text-[#0c1f44] text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Certificações & <span className="text-[#E6007E]">Parcerias</span>
              </h3>
              <p className="text-gray-500 text-base max-w-xl mx-auto font-medium">
                Acreditamos que conhecimento e parceria são a base para entregar soluções mais seguras e inovadoras.
              </p>
            </div>

            {/* Divisor */}
            <div className="max-w-[1100px] mx-auto w-full flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-[#0c1f44] font-bold text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
                Principais certificações
              </div>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Grid com animação suave */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto mb-10">
              <AnimatePresence>
                {visibleCerts.map((cert, idx) => (
                  <motion.div
                    layout
                    key={cert.subtitulo + idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.04 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setSelectedCert(cert)}
                    className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg transition-shadow p-6 flex flex-col relative overflow-hidden group cursor-pointer h-full min-h-[140px]"
                  >
                    <div className={`absolute bottom-0 left-0 w-full h-1 ${cert.style.bottomLine} transition-all duration-300 group-hover:h-1.5`}></div>

                    <div className="flex items-start justify-between w-full">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 relative flex-shrink-0">
                          <Image src={cert.image} alt={cert.nome} fill className="object-contain" />
                        </div>

                        <div className="flex flex-col">
                          <h4 className="text-[#0c1f44] font-extrabold text-lg leading-tight mb-0.5">{cert.nome}</h4>
                          <span className="text-[#0c1f44] font-medium text-sm mb-2">{cert.subtitulo}</span>

                          <div className="flex items-center gap-1 text-[#008FD5]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-1.64.453l1.321 5.372a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.321-5.372a.563.563 0 00-.164-.453L3.1 8.385a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                            <span className="text-[9px] font-black uppercase tracking-wider">{cert.tag}</span>
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        {renderBadgeIcon(cert.style.iconType)}
                      </div>
                    </div>

                    <div className="mt-auto pt-6 text-left">
                      <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{cert.categoria}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Botão Ver Todas */}
            {!showAllCerts && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setShowAllCerts(true)}
                  className="flex items-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-[#0c1f44] font-bold text-sm hover:border-[#008FD5] hover:text-[#008FD5] transition-colors cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  Ver todas as certificações
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                </button>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* MODAL COM ANIMAÇÃO SUAVE */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#020713]/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 max-w-lg w-full relative shadow-2xl border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#E6007E] transition-colors p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-20 h-20 relative flex-shrink-0">
                  <Image src={selectedCert.image} alt={selectedCert.nome} fill className="object-contain" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[#0c1f44] font-extrabold text-2xl leading-tight">{selectedCert.nome}</h3>
                  <span className="text-[#008FD5] font-bold text-base">{selectedCert.subtitulo}</span>
                  <span className="text-gray-400 text-[10px] font-black uppercase tracking-widest mt-1">{selectedCert.categoria}</span>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-blue-50/50 rounded-xl p-5 border border-blue-100/30">
                  <div className="flex items-center gap-2 mb-2 text-[#0c1f44]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>
                    <span className="text-[11px] font-black uppercase tracking-wider">O que é</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{selectedCert.oQueE}</p>
                </div>

                <div className="bg-pink-50/50 rounded-xl p-5 border border-pink-100/30">
                  <div className="flex items-center gap-2 mb-2 text-[#E6007E]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[11px] font-black uppercase tracking-wider">Aplicação Prática</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed font-medium">{selectedCert.aplicacao}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}