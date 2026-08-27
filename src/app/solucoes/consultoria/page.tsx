import Link from 'next/link';

export const metadata = {
  title: 'Consultoria em TI | Cairo TI',
  description: 'Tecnologia estratégica para o crescimento do seu negócio.',
};

export default function ConsultoriaPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      
      {/* =========================================
          1. HERO (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pt-40 lg:pt-48 pb-20 relative overflow-hidden">
        {/* Elementos Decorativos */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-30 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[#0c1f44] text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Consultoria em TI: Tecnologia Estratégica para o <span className="text-[#008FD5]">Crescimento</span> do Seu Negócio
              </h1>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                No cenário empresarial de hoje, a tecnologia é o motor que mantém qualquer operação rodando. No entanto, gerenciar computadores, redes e a segurança das informações pode desviar o foco da sua equipe e dos seus objetivos principais.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                A <span className="font-bold text-[#0c1f44]">Cairo Tecnologia e Inovação</span> atua como parceira estratégica da sua empresa, oferecendo desde o suporte do dia a dia até projetos avançados de infraestrutura e proteção digital.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                {/* Imagem online de equipe de TI / Consultoria */}
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                  alt="Consultoria em TI e Suporte Estratégico" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#008FD5]/20 to-transparent mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================
          2. OS 3 PILARES DA CONSULTORIA (FUNDO ESCURO)
      ========================================= */}
      <section className="w-full bg-[#020713] py-24 relative overflow-hidden selection:bg-[#E6007E] selection:text-white">
        {/* Elementos Tech de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008FD5]/30 via-[#020713] to-[#020713] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="mb-14 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Conheça nossas soluções completas</h2>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Divididas para atender pontualmente a todas as necessidades do seu ambiente corporativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pilar 1: Suporte */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col group hover:border-[#E6007E]/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/5 flex-shrink-0">💻</div>
              <h3 className="text-white text-2xl font-bold mb-2">Suporte e Informática</h3>
              <span className="text-[#E6007E] text-xs font-black uppercase tracking-wider mb-6 block">A Base da Produtividade</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Problemas em computadores e lentidão no atendimento prejudicam a rotina da equipe. Cuidamos de toda a infraestrutura de ponta a ponta.
              </p>
              
              <ul className="flex flex-col gap-4 mt-auto">
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Manutenção e Upgrades</span>
                  <span className="text-gray-400 text-xs">Diagnóstico, reparo e melhorias de hardware para garantir velocidade e vida útil.</span>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Help Desk (Suporte)</span>
                  <span className="text-gray-400 text-xs">Atendimento ágil e humanizado para resolver dúvidas e falhas cotidianas.</span>
                </li>
              </ul>
            </div>

            {/* Pilar 2: Redes */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col group hover:border-[#008FD5]/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#008FD5] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/5 flex-shrink-0">🌐</div>
              <h3 className="text-white text-2xl font-bold mb-2">Redes e Servidores</h3>
              <span className="text-[#008FD5] text-xs font-black uppercase tracking-wider mb-6 block">O Coração da Empresa</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Para empresas que precisam de estabilidade, compartilhamento seguro de arquivos e sistemas rodando sem quedas.
              </p>
              
              <ul className="flex flex-col gap-4 mt-auto">
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Implantação e Gestão</span>
                  <span className="text-gray-400 text-xs">Estruturamos redes locais e corporativas garantindo cobertura e alta velocidade.</span>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Servidores Dedicados</span>
                  <span className="text-gray-400 text-xs">Instalação, centralização de arquivos, controle de acessos e bancos de dados.</span>
                </li>
              </ul>
            </div>

            {/* Pilar 3: Cibersegurança */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col group hover:border-[#E6007E]/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-2xl mb-6 border border-white/5 flex-shrink-0">🛡️</div>
              <h3 className="text-white text-2xl font-bold mb-2">Cibersegurança</h3>
              <span className="text-[#E6007E] text-xs font-black uppercase tracking-wider mb-6 block">Tranquilidade do Gestor</span>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                O vazamento de informações ou ataques virtuais podem paralisar uma empresa. A prevenção é o melhor caminho.
              </p>
              
              <ul className="flex flex-col gap-4 mt-auto">
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Segurança da Informação</span>
                  <span className="text-gray-400 text-xs">Blindagem contra ameaças, firewall avançado e controle de acessos rigoroso.</span>
                </li>
                <li className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <span className="text-white font-bold text-sm block mb-1">Disaster Recovery & Backup</span>
                  <span className="text-gray-400 text-xs">Cópias em nuvem e planos de contingência para restaurar sistemas rapidamente.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. POR QUE CONTAR COM A CAIRO? (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16">
            <h2 className="text-[#0c1f44] text-3xl md:text-4xl font-extrabold tracking-tight">Por que contar com a Cairo?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {/* Benefício 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 text-[#008FD5] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-[#0c1f44] text-xl font-bold mb-3">Redução de Custos</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Evite gastos desnecessários com manutenções corretivas emergenciais através de uma gestão preventiva eficiente e contínua.
              </p>
            </div>

            {/* Benefício 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-pink-50 text-[#E6007E] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
              </div>
              <h3 className="text-[#0c1f44] text-xl font-bold mb-3">Foco no seu negócio</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Deixe a parte técnica complexa conosco e concentre todo o esforço da sua equipe em crescer a sua empresa e atender seus clientes.
              </p>
            </div>

            {/* Benefício 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-50 text-[#008FD5] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>
              </div>
              <h3 className="text-[#0c1f44] text-xl font-bold mb-3">Atendimento personalizado</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Não oferecemos pacotes engessados. Criamos soluções sob medida, dimensionadas para o tamanho e a realidade exata da sua empresa.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          4. CTA FINAL (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pb-24 relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden mt-12">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[#0c1f44] text-2xl md:text-3xl font-extrabold mb-4">Quer saber como podemos otimizar a tecnologia da sua empresa?</h3>
              <p className="text-gray-600 mb-2">
                Garanta que a infraestrutura da sua empresa seja um acelerador de resultados, não uma dor de cabeça constante.
              </p>
              <p className="text-[#008FD5] font-bold">
                Entre em contato com nossa equipe e solicite uma avaliação.
              </p>
            </div>
            
            <Link href="/#contato" className="relative z-10 bg-gradient-to-r from-[#008FD5] to-[#044e75] hover:opacity-90 text-white font-extrabold py-4 px-8 rounded-full shadow-lg transition-opacity whitespace-nowrap text-sm">
              Solicitar avaliação de TI
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}