// src/components/sections/Location.tsx
export function Location() {
  return (
    <section id="localizacao" className="w-full py-16 lg:py-24 bg-[#e5e7eb] relative z-10">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Coluna da Esquerda: Textos */}
          <div className="w-full lg:w-5/12 flex items-start gap-4">
            {/* Ícone de Pin */}
            <div className="mt-1 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-[#E6007E]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            
            {/* Informações de Endereço */}
            <div>
              <h3 className="text-[#E6007E] text-2xl font-extrabold mb-2">
                Localização
              </h3>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                R. Prof. James Fruhstuck, 410<br />
                Costa e Silva, Joinville – SC<br />
                Próximo ao PA24h Norte.
              </p>
            </div>
          </div>

          {/* Coluna da Direita: Mapa (Iframe) */}
          <div className="w-full lg:w-7/12">
            <div className="w-full h-[350px] lg:h-[450px] rounded-xl overflow-hidden shadow-lg border-4 border-white/50 bg-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3409.7944758793783!2d-48.87075092478658!3d-26.27823387703109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deafef903b4d15%3A0x59a2a54903bd86e5!2sR.%20Prof.%20James%20Fruhstuck%2C%20410%20-%20Costa%20e%20Silva%2C%20Joinville%20-%20SC%2C%2089218-550!5e1!3m2!1spt-BR!2sbr!4v1780546254847!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}