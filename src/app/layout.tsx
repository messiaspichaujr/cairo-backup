// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O Next.js usa essa fonte por padrão
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar"; // Importando a nossa Navbar

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
      </body>
    </html>
  );
}