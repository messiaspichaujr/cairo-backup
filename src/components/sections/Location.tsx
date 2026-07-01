"use client";

import Link from 'next/link';

export function Location() {
  return (
    <section id="localizacao" className="w-full py-24 bg-[#f8fafc] relative overflow-hidden z-10">
      
      {/* Elementos Decorativos de Fundo (Formas abstratas nas bordas) */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#E6007E] to-transparent opacity-10 rounded-br-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#008FD5] to-transparent opacity-10 rounded-tl-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>
      
      {/* Grid de Pontos */}
      <div className="absolute top-1/2 left-10 w-32 h-32 opacity-20 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] hidden xl:block pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-[1300px] mx-auto px-4 relative z-10">
        
        {/* Container Principal Branco */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-6 md:p-10 lg:p-12">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            
            {/* Coluna da Esquerda: Textos e Grid de Contato */}
            <div className="w-full lg:w-5/12 flex flex-col">
              
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#E6007E]">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                <span className="text-[#E6007E] font-bold text-xs tracking-widest uppercase">
                  Localização
                </span>
              </div>

              {/* Título */}
              <h2 className="text-[#0c1f44] text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
                Venha nos <br /> conhecer.
              </h2>
              
              <p className="text-gray-500 font-medium text-base mb-6 max-w-sm leading-relaxed">
                Estamos em Joinville e teremos prazer em receber você. Agende uma visita ou venha tomar um café conosco!
              </p>

              {/* Linha Divisória de Estilo */}
              <div className="flex items-center mb-8">
                <div className="w-12 h-[2px] bg-[#008FD5]"></div>
                <div className="w-2 h-2 rounded-full bg-[#008FD5] mx-1"></div>
                <div className="w-12 h-[2px] bg-[#E6007E]"></div>
              </div>

              {/* Grid de Informações (4 Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                
                {/* Endereço */}
                <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100 flex flex-col gap-3 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[#E6007E] font-extrabold text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Endereço
                  </div>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    R. Prof. James Fruhstuck, 410 <br />
                    Costa e Silva, Joinville – SC <br />
                    Próximo ao PA24h Norte.
                  </p>
                </div>

                {/* Atendimento */}
                <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100 flex flex-col gap-3 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[#008FD5] font-extrabold text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Atendimento
                  </div>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    Segunda a Sexta <br />
                    08h às 18h
                  </p>
                </div>

                {/* Telefone */}
                <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100 flex flex-col gap-3 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[#E6007E] font-extrabold text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.66-5.056-3.825-6.715-6.715l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Telefone
                  </div>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    (47) 3026-1066 <br />
                    (47) 99999-9999 <span className="inline-block ml-1 text-green-500">💬</span>
                  </p>
                </div>

                {/* E-mail */}
                <div className="bg-[#f8fafc] rounded-2xl p-5 border border-slate-100 flex flex-col gap-3 transition-transform hover:-translate-y-1">
                  <div className="flex items-center gap-2 text-[#008FD5] font-extrabold text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    E-mail
                  </div>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed break-all">
                    comercial@cairoti.com.br <br />
                    contato@cairoti.com.br
                  </p>
                </div>

              </div>

              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
                <a 
                  href="https://maps.google.com/?q=R.+Prof.+James+Fruhstuck,+410+-+Costa+e+Silva,+Joinville+-+SC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4A60E9] to-[#E6007E] text-white font-bold py-3.5 px-8 rounded-full shadow-[0_8px_20px_rgba(230,0,126,0.25)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Abrir no Google Maps
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </a>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=R.+Prof.+James+Fruhstuck,+410+-+Costa+e+Silva,+Joinville+-+SC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#008FD5] font-bold text-sm hover:text-[#E6007E] transition-colors border-b-2 border-[#008FD5] hover:border-[#E6007E] pb-0.5"
                >
                  Traçar rota
                </a>
              </div>

            </div>

            {/* Coluna da Direita: Mapa Interativo com Card Sobreposto */}
            <div className="w-full lg:w-7/12 relative min-h-[400px] rounded-3xl overflow-hidden border border-gray-100 shadow-inner group">
              
              {/* Card Flutuante Simulando o Google Maps UI */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 z-20 w-[90%] max-w-[340px] border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#008FD5] to-[#E6007E] flex items-center justify-center flex-shrink-0 text-white shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex flex-col flex-1">
                  <h4 className="text-[#0c1f44] font-black text-sm leading-tight mb-0.5">Cairo Tecnologia e Inovação</h4>
                  <p className="text-gray-500 text-[10px] leading-snug">
                    R. Prof. James Fruhstuck, 410 <br />
                    Costa e Silva, Joinville – SC <br />
                    89218-550
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a href="#" className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#008FD5] hover:bg-[#008FD5] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                  </a>
                  <a href="#" className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-[#008FD5] hover:bg-[#008FD5] hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  </a>
                </div>
              </div>

              {/* Botão de Localização no Canto Inferior Direito */}
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-[#E6007E] z-20 cursor-pointer hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>

              {/* Iframe Real do Google Maps */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.472935706429!2d-48.86812892376993!3d-26.278772067087612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deaf620d418659%3A0xc31eb6f6fb0c4b2!2sR.%20Prof.%20James%20Fruhstuck%2C%20410%20-%20Costa%20e%20Silva%2C%20Joinville%20-%20SC%2C%2089218-550!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '450px' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>

          </div>

          {/* Banner Inferior: Agendar Visita */}
          <div className="mt-12 bg-[#f8fafc] rounded-[2rem] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                {/* Ícone de Café */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#008FD5]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v2.25m-3-2.25v2.25m6-2.25v2.25M4.5 10.5a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-1.5a6 6 0 00-6-6h-3a6 6 0 00-6 6v1.5zm0 0h12m-12 0v5.25c0 3.314 2.686 6 6 6s6-2.686 6-6V10.5m-3 9v1.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 014.5 21v-1.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#0c1f44] font-black text-lg mb-1">Preferiu conversar pessoalmente?</h4>
                <p className="text-gray-500 font-medium text-sm">Agende uma visita e conheça nossas instalações. <br className="hidden sm:block"/>Será um prazer recebê-lo!</p>
              </div>
            </div>
            
            <Link 
              href="#contato"
              className="w-full md:w-auto bg-transparent border-2 border-[#E6007E] text-[#E6007E] font-bold py-3.5 px-8 rounded-full hover:bg-[#E6007E] hover:text-white transition-all flex items-center justify-center gap-2 flex-shrink-0"
            >
              Agendar visita
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}