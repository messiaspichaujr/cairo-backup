import Link from 'next/link';

export const metadata = {
  title: 'Desenvolvimento Web | Cairo TI',
  description: 'A vitrine digital e o motor de vendas da sua empresa.',
};

export default function DesenvolvimentoPage() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      
      {/* =========================================
          1. HERO & SOLUÇÕES (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pt-40 lg:pt-48 pb-20 relative overflow-hidden">
        {/* Elementos Decorativos */}
        <div className="absolute top-20 right-10 w-64 h-64 opacity-30 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
              <h1 className="text-[#0c1f44] text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
                Desenvolvimento Web: A Vitrine Digital e o <span className="text-[#E6007E]">Motor de Vendas</span> da Sua Empresa
              </h1>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                No mercado atual, o site da sua empresa é muitas vezes o primeiro contato que um potencial cliente tem com a sua marca. Mais do que bonito, ele precisa ser rápido, confiável, fácil de navegar e, acima de tudo, gerar resultados para o seu negócio.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                Na <span className="font-bold text-[#0c1f44]">Cairo Tecnologia e Inovação</span>, unimos design inteligente, alta performance e a robustez da nossa infraestrutura de TI para criar presenças digitais marcantes. Desenvolvemos projetos sob medida para posicionar sua marca no topo e transformar visitantes em clientes.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                {/* Imagem de Desenvolvimento/Design UI */}
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                  alt="Desenvolvimento Web e UI Design" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E6007E]/20 to-transparent mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Cards de Soluções */}
          <div className="w-full">
            <h2 className="text-[#0c1f44] text-3xl font-extrabold tracking-tight mb-8 text-center md:text-left">
              Soluções Web Desenvolvidas para o Seu Negócio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Portais */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  💻
                </div>
                <h3 className="text-[#0c1f44] text-xl font-bold mb-3">Portais Institucionais</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Sua empresa merece um canal profissional, moderno e seguro para apresentar sua história, serviços e diferenciais ao mercado. Desenvolvemos sites totalmente responsivos (que se adaptam perfeitamente a celulares, tablets e computadores), otimizados para mecanismos de busca (SEO) e estruturados para transmitir toda a credibilidade que o seu negócio possui.
                </p>
              </div>

              {/* Card 2: E-commerce */}
              <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-pink-50 border border-pink-100 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                  🛍️
                </div>
                <h3 className="text-[#0c1f44] text-xl font-bold mb-3">Lojas Virtuais (E-commerce)</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Quer vender online com segurança e eficiência? Criamos plataformas de comércio eletrônico completas, integradas com meios de pagamento, sistemas de frete e ferramentas de gestão. Tudo pensado para garantir uma experiência de compra impecável para o seu cliente e uma operação simples e organizada para você.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================
          2. O DIFERENCIAL (FUNDO ESCURO - BENTO GRID)
      ========================================= */}
      <section className="w-full bg-[#020713] py-24 relative overflow-hidden selection:bg-[#E6007E] selection:text-white">
        {/* Elementos Tech de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008FD5]/30 via-[#020713] to-[#020713] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">O Diferencial de Desenvolver com quem entende de TI</h2>
            <p className="text-gray-400 max-w-3xl leading-relaxed mx-auto md:mx-0">
              Muitas agências criam sites bonitos, mas que caem com frequência ou ficam vulneráveis a ataques. O grande diferencial de construir sua web com a Cairo Tecnologia e Inovação é que unimos o desenvolvimento à nossa expertise técnica em infraestrutura e cibersegurança:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Performance */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#008FD5]/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#008FD5] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">⚡</div>
              <h3 className="text-white text-xl font-bold mb-3">Performance e Velocidade</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Sites hospedados em ambientes otimizados, garantindo carregamento rápido e melhor retenção de visitantes e posicionamento no Google.
              </p>
            </div>

            {/* Card 2: Segurança */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#E6007E]/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🛡️</div>
              <h3 className="text-white text-xl font-bold mb-3">Segurança desde a Concepção</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Implementação de certificados SSL, proteção contra invasões e backups regulares para que seu site e os dados dos seus clientes nunca fiquem vulneráveis.
              </p>
            </div>

            {/* Card 3: Suporte */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/30 transition-colors">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-0 group-hover:opacity-5 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🤝</div>
              <h3 className="text-white text-xl font-bold mb-3">Suporte Contínuo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Não entregamos apenas o projeto e sumimos; estamos ao seu lado para realizar evoluções, manutenções e garantir que sua operação digital nunca pare.
              </p>
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
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl">
              <h3 className="text-[#0c1f44] text-2xl md:text-3xl font-extrabold mb-4">Vamos tirar o seu projeto do papel?</h3>
              <p className="text-gray-600 mb-2">
                Seja para criar o primeiro site institucional da sua empresa ou para expandir suas vendas através de um e-commerce de alta performance, nós temos a solução ideal.
              </p>
              <p className="text-[#008FD5] font-bold">
                Leve a sua marca mais longe no ambiente digital.
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                Entre em contato com a nossa equipe e vamos conversar sobre o seu próximo projeto web.
              </p>
            </div>
            
            <Link href="/#contato" className="relative z-10 bg-gradient-to-r from-[#E6007E] to-[#c5006c] hover:opacity-90 text-white font-extrabold py-4 px-8 rounded-full shadow-lg transition-opacity whitespace-nowrap text-sm">
              Solicitar proposta de desenvolvimento web
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}