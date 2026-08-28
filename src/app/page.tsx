// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { AreasDeAtuacao } from "@/components/sections/AreasDeAtuacao";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white overflow-hidden">

      <Hero />
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection delay={0.1}><AreasDeAtuacao /></AnimatedSection>
      <AnimatedSection delay={0.15}><Clients /></AnimatedSection>
      <AnimatedSection delay={0.15}><Testimonials /></AnimatedSection>
      <AnimatedSection delay={0.15}><FAQ /></AnimatedSection>
      <AnimatedSection delay={0.2}><Location /></AnimatedSection>
      <AnimatedSection delay={0.2}><Contact /></AnimatedSection>

    </main>
  );
}