import Link from 'next/link';

export const metadata = {
  title: 'Consultoria em TI | Cairo TI',
  description: 'Alinhamento estratégico, redução de custos e transformação digital para o seu negócio.',
};

export default function ConsultoriaPage() {
  const beneficios = [
    {
      titulo: 'Alinhamento Estratégico',
      desc: 'Sua TI deixa de ser um centro de custos e passa a ser uma alavanca para os objetivos do seu negócio.',
      icone: '🎯'
    },
    {
      titulo: 'Redução de Custos',
      desc: 'Identificamos gargalos, eliminamos desperdícios e otimizamos seus recursos tecnológicos atuais.',
      icone: '📉'
    },
    {
      titulo: 'Transformação Digital',
      desc: 'Modernizamos seus processos com as melhores ferramentas e práticas do mercado global.',
      icone: '🚀'
    }
  ];

  return (
    <main className="w-full bg-[#020713] min-h-screen pt-32 pb-20 relative overflow-hidden flex flex-col items-center">
      
      {/* Elementos Decorativos */}
      <div className="absolute top-20 right-10 w-40 h-40 opacity-20 bg-[radial-gradient(#E6007E_1.5px,transparent_1.5px)] [background-size:12px_12px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E6007E]/10 via-[#020713] to-[#020713] pointer-events-none"></div>

      <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-3xl mb-16 mt-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-[#E6007E] text-xs font-black tracking-widest uppercase">Soluções</span>
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Consultoria <span className="text-[#E6007E]">em TI</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Diagnóstico preciso e planejamento inteligente. Apoiamos sua diretoria na tomada de decisões tecnológicas para garantir que cada investimento traga retorno real para a operação.
          </p>
        </div>

        {/* Grid de Benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-20">
          {beneficios.map((item, idx) => (
            <div key={idx} className="bg-[#061129]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#E6007E]/50 transition-colors group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {item.icone}
              </div>
              <h3 className="text-white text-xl font-bold mb-3">{item.titulo}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="w-full bg-gradient-to-r from-[#0a1635] to-[#061129] border border-white/10 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-white text-2xl font-bold mb-2">Precisa de um direcionamento?</h3>
            <p className="text-gray-400">Agende uma reunião estratégica sem compromisso.</p>
          </div>
          <Link href="/#contato" className="bg-[#E6007E] hover:bg-[#c5006c] text-white font-bold py-4 px-8 rounded-xl transition-colors whitespace-nowrap">
            Falar com Especialista
          </Link>
        </div>

      </div>
    </main>
  );
}