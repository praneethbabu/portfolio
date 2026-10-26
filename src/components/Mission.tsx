import { Quote, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { RevealOnScroll } from "./RevealOnScroll";

export function Mission() {
  return (
    <section className="relative py-28 border-t border-slate-200 overflow-hidden bg-[#0F172A] text-white">
      {/* Floating Animated Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none animate-float" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-emerald-500/15 rounded-full blur-[140px] pointer-events-none animate-float-reverse" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Monogram / Icon */}
        <RevealOnScroll direction="down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.2em] font-mono text-emerald-400 mb-8 shadow-sm transition-transform hover:scale-105">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Personal Mission &amp; Guiding Principle</span>
          </div>
        </RevealOnScroll>

        {/* Big Quote with Reveal */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="relative">
            <Quote className="w-12 h-12 text-slate-700/60 mx-auto mb-6 rotate-180 transition-transform duration-500 hover:scale-110" />
            <blockquote className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-relaxed tracking-tight max-w-4xl mx-auto">
              "{PERSONAL_INFO.missionStatement}"
            </blockquote>
          </div>
        </RevealOnScroll>

        {/* Attribution & Signature with Staggered Entrance */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span className="text-white font-semibold uppercase tracking-wider">
              {PERSONAL_INFO.name}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{PERSONAL_INFO.title}</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
