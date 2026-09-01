"use client";

import { useState } from 'react';
import Link from 'next/link';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      pergunta: '1. Vocês atendem apenas com contrato mensal ou também realizam serviços avulsos?',
      resposta: 'Trabalhamos com ambas as modalidades. Oferecemos contratos mensais para gestão e suporte contínuo de TI, garantindo previsibilidade e segurança. No entanto, também realizamos atendimentos sob demanda (avulsos) para resolver necessidades pontuais da sua empresa.'
    },
    {
      pergunta: '2. Minha empresa já tem uma equipe de TI interna. Vocês podem nos ajudar mesmo assim?',
      resposta: 'Com certeza. Além de assumirmos a terceirização completa da tecnologia de nossos clientes, atuamos prestando suporte complementar a equipes de TI internas. Podemos assumir chamados de rotina para desafogar sua equipe ou atuar em projetos de alta complexidade.'
    },
    {
      pergunta: '3. Onde a empresa presta atendimento físico e remoto?',
      resposta: 'Nosso atendimento presencial é realizado diretamente no endereço do cliente em Joinville e região. Já o suporte remoto é feito via internet, por meio de ferramentas de acesso seguro, sem fronteiras geográficas: atendemos empresas em qualquer lugar do mundo, com clientes ativos em países como Estados Unidos, México e Paraguai.'
    },
    {
      pergunta: '4. Como funciona o suporte remoto? Ele é seguro?',
      resposta: 'Sim, o processo é totalmente seguro e rastreável. Realizamos os atendimentos remotos utilizando softwares regularizados e licenciados. Isso nos permite resolver a maioria das demandas diárias de forma imediata, sem a necessidade de deslocamento e sem expor os dados da sua empresa a riscos.'
    },
    {
      pergunta: '5. Quais tipos de serviços de TI vocês executam?',
      resposta: 'Atuamos de ponta a ponta na sua infraestrutura. Nosso escopo vai desde a manutenção básica de computadores (workstations) até a configuração avançada de servidores, implementação de rotinas de backup (físico e em nuvem) e gestão completa de cibersegurança.'
    },
    {
      pergunta: '6. Como a equipe de vocês está estruturada para resolver problemas graves?',
      resposta: 'Para garantir agilidade e assertividade, nosso time técnico é dividido em três níveis de especialização (N1, N2 e N3). Isso significa que, independentemente da complexidade do problema — desde uma simples configuração de e-mail até a recuperação de um servidor —, o chamado será direcionado ao especialista mais preparado para resolvê-lo.'
    },
    {
      pergunta: '7. É possível ter um técnico de vocês alocado permanentemente na minha empresa?',
      resposta: 'Sim. Caso a demanda e o tamanho da sua operação exijam acompanhamento constante, oferecemos a modalidade de terceirização com profissional dedicado. Alocamos um técnico no local da sua empresa para garantir suporte imediato e contínuo.'
    },
    {
      pergunta: '8. Como vocês garantem que o suporte entenderá o funcionamento da minha empresa?',
      resposta: 'Nosso atendimento é totalmente personalizado. Quando iniciamos uma parceria, desenvolvemos documentações técnicas exclusivas e checklists personalizados baseados na sua infraestrutura. Isso padroniza os processos e eleva a qualidade e a agilidade na entrega dos nossos serviços.'
    },
    {
      pergunta: '9. Vocês também fazem consertos eletrônicos de equipamentos danificados?',
      resposta: 'Nosso foco principal é a gestão, infraestrutura e suporte de sistemas. No entanto, quando há necessidade de consertos eletrônicos específicos de hardware, contamos com uma rede de parceiros credenciados e de extrema confiança para resolver essa demanda, centralizando a solução conosco.'
    },
    {
      pergunta: '10. Por que terceirizar a TI da minha empresa com vocês?',
      resposta: 'Porque transformamos a sua TI de uma fonte de problemas em uma ferramenta de crescimento. Unimos atendimento técnico qualificado (N1 ao N3), processos bem documentados e soluções de ponta a ponta (de manutenção a segurança em nuvem) para que você foque 100% no seu negócio, sabendo que seus dados e sistemas estão seguros e operantes.'
    }
  ];

  return (
    <section id="faq" className="w-full pt-20 pb-24 bg-[#f8fafc] rounded-t-[3rem] -mt-12 relative z-20">
      <div className="absolute top-20 right-10 w-40 h-40 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 opacity-30 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden lg:block pointer-events-none"></div>

      <div className="max-w-[900px] mx-auto px-4 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-gray-300"></div>
            <span className="text-[#E6007E] text-xs font-black tracking-widest uppercase">FAQ</span>
            <div className="w-10 h-[1px] bg-gray-300"></div>
          </div>
          <h2 className="text-[#0c1f44] text-4xl md:text-5xl font-black mb-4 tracking-tight">Perguntas Frequentes</h2>
          <p className="text-gray-500 text-lg font-medium">Ainda tem dúvidas? Confira as respostas <br className="hidden md:block"/> para as perguntas mais comuns.</p>
          
          <div className="flex items-center justify-center mt-6 w-full max-w-[200px]">
            <div className="h-[2px] bg-[#008FD5] flex-1"></div>
            <div className="px-2">
              <div className="w-6 h-6 border-2 border-[#008FD5] rounded-full p-1 flex items-center justify-center">
                <div className="w-full h-full bg-[#E6007E] rounded-full"></div>
              </div>
            </div>
            <div className="h-[2px] bg-[#E6007E] flex-1"></div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          {faqs.map((faq, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-[0_8px_30px_rgba(0,0,0,0.06)]' : ''}`}>
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
              >
                <div className="flex items-center gap-4 pr-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 flex-shrink-0 text-[#E6007E] font-bold text-sm">
                    {index % 2 === 0 ? '❔' : '💬'}
                  </div>
                  <span className="font-extrabold text-[#0c1f44] text-[15px] md:text-base leading-snug">
                    {faq.pergunta}
                  </span>
                </div>
                
                <div className="flex-shrink-0">
                  <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ease-out ${openIndex === index ? 'bg-[#E6007E] rotate-180' : 'bg-slate-50 group-hover:bg-slate-100 rotate-0'}`}>
                    <span className={`absolute w-3.5 h-[2px] rounded-full transition-colors duration-300 ${openIndex === index ? 'bg-white' : 'bg-[#008FD5]'}`}></span>
                    <span className={`absolute w-3.5 h-[2px] rounded-full transition-all duration-300 ${openIndex === index ? 'bg-white rotate-0 opacity-0 scale-50' : 'bg-[#008FD5] rotate-90 opacity-100 scale-100'}`}></span>
                  </div>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 md:pl-[72px] pr-6 text-gray-500 font-medium text-[15px] leading-relaxed">
                  {faq.resposta}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[#008FD5]"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[#0c1f44] font-black text-lg mb-1">Não encontrou sua resposta?</h4>
              <p className="text-gray-500 font-medium text-sm">Fale com nossos especialistas e tire todas as suas dúvidas.</p>
            </div>
          </div>
          
          <Link href="#contato" className="w-full md:w-auto bg-[#E6007E] text-white font-bold py-3.5 px-8 rounded-full hover:bg-[#c5006c] transition-all flex items-center justify-center gap-2 flex-shrink-0 shadow-lg shadow-pink-500/20">
            Falar com especialista
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}