// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Solutions } from "@/components/sections/Solutions";
import { AreasDeAtuacao } from "@/components/sections/AreasDeAtuacao";
import { Clients } from "@/components/sections/Clients";
import { SpecialProjects } from "@/components/sections/SpecialProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">
      
      <Hero />
      <About />
      <Solutions />
      <AreasDeAtuacao />
      <Clients />
      <SpecialProjects />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      
    </main>
  );
}