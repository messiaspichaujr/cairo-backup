// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer"; // <-- Adicione a importação do Footer aqui
import Script from "next/script";

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
        
        <Navbar />
        
        {/* O conteúdo de cada página entra aqui */}
        {children}

        {/* Footer Global - Agora vai aparecer em todas as páginas! */}
        <Footer /> 

        {/* Script do TiFlux (Chat Minimizado) */}
        <Script id="tiflux-chat-widget" strategy="afterInteractive">
          {`
            var organization_token = "79ddd0cb577f77d7691350ac1960e559b4c4f9e0";
            var icon_color = "#ce62a4";
            var init_minimal = true;
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