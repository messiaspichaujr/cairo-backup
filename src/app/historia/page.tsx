import Image from 'next/image';
import Link from 'next/link';
import PerfilDono from '@/assets/images/sobre-cairo-perfil.png'; // Reutilizando a imagem da home

export const metadata = {
  title: 'Nossa História | Cairo TI',
  description: 'Conheça a trajetória da Cairo TI, unindo 20 anos de experiência em tecnologia.',
};

export default function HistoriaPage() {
  return (
    <main className="w-full bg-[#020713] min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col items-center">
      
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-20 left-10 w-40 h-40 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 opacity-20 bg-[radial-gradient(#008fd5_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008FD5]/10 via-[#020713] to-[#020713] pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* --- HEADER DA PÁGINA --- */}
        <div className="text-center max-w-3xl mb-20 mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#E6007E]"></div>
            <span className="text-[#E6007E] text-xs font-black tracking-widest uppercase">
              Quem Somos
            </span>
            <div className="w-8 h-[2px] bg-[#E6007E]"></div>
          </div>
          
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Uma trajetória movida por <span className="text-[#E6007E]">inovação e resultado.</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Nascemos com o propósito de descomplicar a tecnologia para empresas. Transformamos infraestruturas complexas em soluções inteligentes, seguras e que impulsionam o crescimento.
          </p>
        </div>

        {/* --- CONTEÚDO PRINCIPAL (Foto + Texto) --- */}
        <div className="w-full bg-[#061129]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24 relative overflow-hidden">
          
          {/* Brilho no topo do card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E6007E] to-transparent opacity-50"></div>

          {/* Lado Esquerdo: Imagem do CEO */}
          <div className="w-full lg:w-5/12 flex justify-center relative">
             <div className="relative w-full max-w-[400px] aspect-[1/1] bg-gradient-to-br from-[#008FD5]/20 to-[#044e75]/20 border border-[#008FD5]/30 rounded-[3rem] rounded-tr-[7rem] shadow-xl p-3 flex items-end">
               <Image 
                 src={PerfilDono} 
                 alt="Rodrigo Schmidt - CEO" 
                 className="w-full h-auto object-contain absolute bottom-0 left-0 drop-shadow-2xl" 
                 priority 
               />
               <div className="absolute -bottom-6 -right-4 bg-[#0a1635] border border-white/10 rounded-2xl shadow-xl py-4 px-6 flex flex-col items-center gap-1 z-30">
                 <span className="text-[#E6007E] text-3xl font-black">20+</span>
                 <span className="text-gray-300 text-xs font-bold uppercase tracking-wider text-center">Anos de <br/>Experiência</span>
               </div>
             </div>
          </div>

          {/* Lado Direito: Texto da História */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <h2 className="text-white text-3xl font-bold mb-6">Nossa Essência</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-sm md:text-base">
              <p>
                A <strong>Cairo Tecnologia</strong> foi fundada com uma visão clara: ser o braço tecnológico estratégico das empresas. Liderada por Rodrigo Schmidt, que traz em sua bagagem mais de duas décadas de vivência profunda no setor de TI, a empresa já nasceu com a maturidade necessária para enfrentar grandes desafios corporativos.
              </p>
              <p>
                Ao longo dos nossos <strong>8 anos de atuação como Cairo</strong>, consolidamos parcerias de peso com gigantes globais como Microsoft, Google e Cisco, garantindo que nossos clientes sempre tenham acesso ao que há de mais moderno e seguro no mercado.
              </p>
              <p>
                Hoje, com orgulho, olhamos para trás e vemos uma marca registrada por mais de <strong>500 clientes atendidos</strong> e mais de <strong>1.000 projetos entregues</strong>. Nosso compromisso contínuo é ser muito mais do que um suporte técnico; somos consultores de negócio voltados para o futuro da sua empresa.
              </p>
            </div>

            {/* Badges de Destaque */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold flex items-center gap-2">
                <span className="text-[#E6007E]">✓</span> Foco no Cliente
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold flex items-center gap-2">
                <span className="text-[#008FD5]">✓</span> Excelência Técnica
              </div>
              <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white text-xs font-semibold flex items-center gap-2">
                <span className="text-[#E6007E]">✓</span> Transparência Total
              </div>
            </div>
          </div>
        </div>

        {/* --- CALL TO ACTION (CTA) --- */}
        <div className="w-full flex flex-col items-center text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Pronto para transformar sua TI?</h3>
          <p className="text-gray-400 mb-8">Nossa equipe de especialistas está à disposição para entender o seu cenário.</p>
          <Link 
            href="/#contato" 
            className="bg-gradient-to-r from-[#E6007E] to-[#008FD5] text-white font-bold py-4 px-10 rounded-xl hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
          >
            Falar com um Consultor
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </main>
  );
}