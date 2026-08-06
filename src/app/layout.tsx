// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O Next.js usa essa fonte por padrão
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar"; // Importando a nossa Navbar
import Script from "next/script"; // Importação necessária para scripts externos no Next.js

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cairo TI - Tecnologia e Inovação",
  description: "Landing page da Cairo TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {/* Navbar renderizada aqui em cima */}
        <Navbar />
        
        {/* O conteúdo das seções vai entrar no {children} */}
        {children}

        {/* Script do TiFlux (Chat) - Carregado após a página para não travar o site */}
        <Script id="tiflux-chat-widget" strategy="afterInteractive">
          {`
            var organization_token = "79ddd0cb577f77d7691350ac1960e559b4c4f9e0";
            var icon_color = "#E6007E"; // Alterado para o Rosa da Cairo TI!
            var init_minimal = false;
            var show_chat_icon = true;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://public-assets.tiflux.com/chat_widget.js?organization_token='+organization_token;
            document.head.appendChild(script);
          `}
        </Script>
      </body>
    </html>
  );
}