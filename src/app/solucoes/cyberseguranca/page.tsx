import Link from 'next/link';

export const metadata = {
  title: 'Cybersegurança | Cairo TI',
  description: 'Proteja o ativo mais importante da sua empresa — seus dados.',
};

export default function CybersegurancaPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      
      {/* =========================================
          1. HERO (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pt-40 lg:pt-48 pb-20 relative overflow-hidden">
        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-30 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* O texto "Soluções em Segurança" foi removido daqui */}
              
              <h1 className="text-[#0c1f44] text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Proteja o Ativo Mais Importante da Sua Empresa — <span className="text-[#E6007E]">Seus Dados</span>
              </h1>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Você sabia que, hoje, uma empresa sofre tentativas de ataques digitais a cada minuto? Com a crescente digitalização dos negócios, a internet trouxe oportunidades incríveis, mas também abriu as portas para ameaças complexas como invasões por brechas de segurança, ataques de engenharia social (fraudes que manipulam pessoas) e espionagem industrial.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Na <span className="font-bold text-[#0c1f44]">Cairo Tecnologia e Inovação</span>, acreditamos que a segurança não é um luxo, mas uma necessidade estratégica. Além de proteger o seu negócio, nossa consultoria garante que sua empresa esteja em total conformidade com a LGPD (Lei Geral de Proteção de Dados), evitando multas e danos irreparáveis à sua marca.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Cybersegurança e Proteção de Dados" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#008FD5]/20 to-transparent mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================
          2. SEÇÃO DE CARDS (FUNDO ESCURO - BENTO GRID)
      ========================================= */}
      <section className="w-full bg-[#020713] py-24 relative overflow-hidden selection:bg-[#E6007E] selection:text-white">
        {/* Elementos Tech de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E6007E]/30 via-[#020713] to-[#020713] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Por que investir em segurança agora?</h2>
            <p className="text-gray-400 max-w-3xl leading-relaxed mx-auto md:mx-0">
              O objetivo da nossa consultoria é prevenir a "parada repentina" e o vazamento de informações. Uma falha pode paralisar sua operação, gerar prejuízos financeiros severos e destruir a confiança que seus clientes depositam em você. Para mitigar esses riscos, implementamos uma camada de defesa robusta e integrada:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Firewall */}
            <div className="md:col-span-2 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#E6007E]/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🧱</div>
              <h3 className="text-white text-2xl font-bold mb-3">Firewall de Nova Geração</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Criamos uma barreira inteligente que monitora e bloqueia acessos maliciosos antes que eles entrem na rede da sua empresa.
              </p>
            </div>

            {/* Card 2: Antivírus */}
            <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#008FD5]/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#008FD5] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🦠</div>
              <h3 className="text-white text-xl font-bold mb-3">Antivírus e Antimalware</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Proteção ativa em todos os dispositivos, detectando e neutralizando ameaças em tempo real, mesmo as mais sofisticadas.
              </p>
            </div>

            {/* Card 3: Antispam */}
            <div className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#008FD5]/50 transition-colors">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#008FD5] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">✉️</div>
              <h3 className="text-white text-xl font-bold mb-3">Antispam Profissional</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Filtramos tentativas de phishing e e-mails maliciosos que visam enganar sua equipe e obter acesso às senhas ou dados bancários.
              </p>
            </div>

            {/* Card 4: Backup */}
            <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/30 transition-colors flex flex-col justify-center">
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:10px_10px] mask-image:linear-gradient(to_left,white,transparent)"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🔄</div>
                <h3 className="text-white text-2xl font-bold mb-3">Backup e Recuperação (Plano de Continuidade)</h3>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  Em caso de desastres, ataques de ransomware (sequestro de dados) ou falhas técnicas, garantimos que suas informações estejam salvas e que a restauração seja rápida. <span className="text-white font-bold">Sua empresa não para.</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          3. CTA FINAL (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] py-20 relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left relative overflow-hidden">
            {/* Detalhe de fundo do banner */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-pink-50 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[#0c1f44] text-2xl md:text-3xl font-extrabold mb-4">O seu negócio está preparado para os desafios atuais?</h3>
              <p className="text-gray-600 mb-2">
                Não espere sofrer um incidente para descobrir que a sua segurança precisava de atenção. A adequação da sua TI à realidade atual de ameaças digitais é o passo mais importante para garantir a longevidade e a competitividade do seu negócio.
              </p>
              <p className="text-[#E6007E] font-bold">
                Não deixe o seu patrimônio digital vulnerável.
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                A Cairo Tecnologia e Inovação avalia os riscos do seu ambiente e implementa as defesas necessárias para você trabalhar com tranquilidade.
              </p>
            </div>
            
            <Link href="/#contato" className="relative z-10 bg-gradient-to-r from-[#008FD5] to-[#044e75] hover:opacity-90 text-white font-extrabold py-4 px-8 rounded-full shadow-lg transition-opacity whitespace-nowrap text-sm">
              Falar com um especialista
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}