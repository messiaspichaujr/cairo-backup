import Link from 'next/link';

export const metadata = {
  title: 'Infraestrutura e Cloud | Cairo TI',
  description: 'A Evolução do seu Ambiente de TI. Migre para a nuvem com segurança.',
};

export default function InfraestruturaPage() {
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
                Infraestrutura e Cloud: A <span className="text-[#008FD5]">Evolução</span> do seu Ambiente de TI
              </h1>
              
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Ter um servidor físico dentro da empresa, muitas vezes, traz desafios como altos custos com energia, necessidade de refrigeração, manutenções constantes e o risco de interrupções por quedas de energia ou falhas locais.
              </p>
              
              <p className="text-gray-600 text-base leading-relaxed">
                Se você busca liberdade, escalabilidade e máxima performance, a solução é levar a infraestrutura da sua empresa para a nuvem. Na <span className="font-bold text-[#0c1f44]">Cairo Tecnologia e Inovação</span>, nós transformamos a forma como você consome tecnologia, garantindo que seus sistemas estejam disponíveis onde e quando você precisar.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                {/* Imagem de Data Center / Cloud */}
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                  alt="Servidores e Infraestrutura em Nuvem" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#008FD5]/30 to-transparent mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================
          2. POR QUE MIGRAR? (FUNDO ESCURO - BENTO GRID)
      ========================================= */}
      <section className="w-full bg-[#020713] py-24 relative overflow-hidden selection:bg-[#008FD5] selection:text-white">
        {/* Elementos Tech de Fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#008FD5]/30 via-[#020713] to-[#020713] pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Por que migrar sua infraestrutura para a Nuvem?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Escalabilidade (1 coluna) */}
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#E6007E]/50 transition-colors">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E6007E] opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700"></div>
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">📈</div>
              <h3 className="text-white text-xl font-bold mb-3">Flexibilidade e Escalabilidade</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Precisa de mais poder de processamento ou espaço de armazenamento? Na nuvem, você cresce ou ajusta seus recursos conforme a demanda da sua empresa, sem precisar comprar novos equipamentos físicos.
              </p>
            </div>

            {/* Card 2: Link Dedicado e Segurança (2 colunas - Destaque Técnico) */}
            <div className="md:col-span-2 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-[#008FD5]/50 transition-colors flex flex-col justify-center">
              <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] [background-size:10px_10px] mask-image:linear-gradient(to_left,white,transparent)"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-white/5">🔒</div>
                <h3 className="text-white text-2xl font-bold mb-3">Segurança e Estabilidade com Conexões Dedicadas</h3>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  Para clientes que exigem o mais alto nível de performance, não dependemos apenas da internet convencional. Trabalhamos com data centers de ponta que permitem a criação de uma <span className="text-white font-bold">Nuvem Privada</span>. <br/><br/>
                  Através de um link de fibra dedicado (MPLS/VPN), criamos um túnel criptografado, exclusivo e seguro entre a sua empresa e o servidor, garantindo uma velocidade e estabilidade muito superiores à conexão comum.
                </p>
              </div>
            </div>

            {/* Card 3: Disponibilidade (Ocupa as 3 colunas em baixo) */}
            <div className="md:col-span-3 bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/30 transition-colors flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl border border-white/5 flex-shrink-0">⚡</div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Disponibilidade Total (24/7)</h3>
                <p className="text-gray-400 leading-relaxed max-w-4xl text-sm md:text-base">
                  Centralize seus recursos — arquivos, banco de dados, sistemas de telefonia (VoIP) ou gestão de câmeras de segurança — em um ambiente hiper protegido, com monitoramento ininterrupto e redundância de energia, garantindo que sua operação nunca saia do ar.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================
          3. O QUE PODEMOS LEVAR? (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pt-24 pb-12 relative overflow-hidden">
        <div className="max-w-[1300px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-[#0c1f44] text-3xl md:text-4xl font-extrabold tracking-tight mb-4">O que podemos levar para a Nuvem?</h2>
            <p className="text-gray-600 leading-relaxed">
              Nossa equipe é especialista em migrar e gerenciar ambientes críticos. Entre as soluções que podemos hospedar com total segurança para você, destacam-se:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Item 1 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-blue-50 text-[#008FD5] rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">📁</div>
              <h3 className="text-[#0c1f44] text-lg font-bold mb-2">Servidores de Arquivos</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Acesse seus documentos com segurança, de qualquer lugar, como se estivessem dentro do escritório.</p>
            </div>

            {/* Item 2 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-blue-50 text-[#008FD5] rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">🗄️</div>
              <h3 className="text-[#0c1f44] text-lg font-bold mb-2">Bancos de Dados</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Performance totalmente otimizada para manter os sistemas de gestão (ERP) da sua empresa rodando lisos.</p>
            </div>

            {/* Item 3 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-pink-50 text-[#E6007E] rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-[#0c1f44] text-lg font-bold mb-2">Telefonia Corporativa</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Sistemas de comunicação unificada (VoIP) que garantem que sua equipe esteja sempre conectada.</p>
            </div>

            {/* Item 4 */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-transform group">
              <div className="w-12 h-12 bg-pink-50 text-[#E6007E] rounded-xl flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform">🎥</div>
              <h3 className="text-[#0c1f44] text-lg font-bold mb-2">CFTV e Segurança</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Monitoramento centralizado e seguro, sem risco de perda de gravações por problemas físicos no local.</p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. CTA FINAL (FUNDO CLARO)
      ========================================= */}
      <section className="w-full bg-[#f8fafc] pb-24 relative overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-4 lg:px-8 relative z-10">
          
          <div className="w-full bg-white border border-gray-100 shadow-xl rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left relative overflow-hidden mt-6">
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl">
              <h3 className="text-[#0c1f44] text-2xl md:text-3xl font-extrabold mb-4">Deixe a gestão da infraestrutura conosco</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Migrar para a nuvem não significa perder o controle, pelo contrário: significa ter uma infraestrutura profissional, monitorada e pronta para o futuro. A Cairo Tecnologia e Inovação cuida de todo o processo de migração, configuração e gestão, permitindo que você foque no que realmente importa: a gestão e o crescimento do seu negócio.
              </p>
              <p className="text-[#008FD5] font-bold text-lg">
                Pronto para modernizar a sua TI? 
              </p>
              <p className="text-gray-600 mt-1 text-sm">
                Vamos avaliar o seu cenário atual e desenhar o melhor projeto de nuvem para a sua empresa.
              </p>
            </div>
            
            <Link href="/#contato" className="relative z-10 bg-gradient-to-r from-[#008FD5] to-[#044e75] hover:opacity-90 text-white font-extrabold py-4 px-8 rounded-full shadow-lg transition-opacity whitespace-nowrap text-sm text-center">
              Solicitar um projeto na nuvem
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}