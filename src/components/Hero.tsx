import { ArrowRight, FileText, Sparkles, Activity, Code2, Bot, Cloud } from "lucide-react";
import heroPortraitWebp from "../assets/hero-portrait.webp";
import heroPortraitPng from "../assets/hero-portrait.png";
import bgMarble from "../assets/bg-marble.jpg";
import { PERSONAL_INFO, METRICS } from "../data/portfolioData";
import { AnimatedCounter } from "./AnimatedCounter";

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-between pt-32 pb-16 overflow-hidden">
      {/* Subtle fixed texture background */}
      <div
        className="absolute inset-0 bg-fixed-image opacity-15 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(https://www.pngmagic.com/image_small/hero-background-examples-for-corporate-websites_NCH.webp)` }}
      />

      {/* Floating Animated Ambient Glow Orbs */}
      <div className="absolute top-16 right-1/4 w-[550px] h-[550px] bg-slate-200/50 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-[420px] h-[420px] bg-amber-100/50 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-sky-100/40 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-subtle" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Bold Executive Typography & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 animate-fade-up">
            {/* Status Pill with Pulsing Radar and Shimmer */}
            <div className="relative overflow-hidden inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6 group cursor-default">
              <div className="absolute inset-0 shimmer-badge pointer-events-none" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#475569] font-mono font-medium relative z-10">
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Candidate Full Name with Gradient Touch */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
              Praneeth Babu
              <br />
              <span className="text-[#475569]">Yeddula</span>
            </h1>

            {/* Professional Title with Glowing Separators */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.15em] text-[#64748B] font-mono font-semibold">
              <span className="text-[#0F172A] hover:text-emerald-700 transition-colors">Senior Software Engineer</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0F172A] hover:text-indigo-700 transition-colors">AI Generalist</span>
              <span className="text-slate-300">•</span>
              <span className="text-[#0F172A] hover:text-sky-700 transition-colors">Technical Program Lead</span>
            </div>

            {/* Recommended Headline Card with Subtle Hover Lift */}
            <div className="mt-6 p-4 rounded-xl bg-white/95 border border-slate-200/90 shadow-sm max-w-2xl card-hover-lift">
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-mono font-semibold text-emerald-700">
                <Sparkles className="w-3.5 h-3.5 animate-spin text-emerald-600" style={{ animationDuration: "8s" }} />
                <span>Primary Focus</span>
              </div>
              <p className="mt-1.5 text-lg sm:text-xl font-heading font-bold text-[#0F172A] leading-snug">
                {PERSONAL_INFO.heroHeadline}
              </p>
            </div>

            {/* Subtitle / Core Value Proposition */}
            <p className="mt-5 text-base sm:text-lg text-[#334155] leading-relaxed font-sans font-normal max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            {/* Core Domain Badges with Interactive Hover Bounce */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {PERSONAL_INFO.heroPills.map((pill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0F172A] text-xs font-mono font-medium border border-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  {idx === 0 && <Code2 className="w-3.5 h-3.5 text-slate-700" />}
                  {idx === 1 && <Sparkles className="w-3.5 h-3.5 text-amber-600" />}
                  {idx === 2 && <Bot className="w-3.5 h-3.5 text-indigo-600" />}
                  {idx === 3 && <Cloud className="w-3.5 h-3.5 text-sky-600" />}
                  <span>{pill}</span>
                </span>
              ))}
            </div>

            {/* Primary Action Buttons with Micro-interactions */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#0F172A] text-white text-xs font-heading font-semibold uppercase tracking-[0.14em] hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-xs font-heading font-semibold uppercase tracking-[0.14em] text-[#0F172A] bg-white border border-slate-200 hover:border-slate-400 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 text-xs font-heading font-semibold uppercase tracking-[0.14em] text-[#475569] hover:text-[#0F172A] transition-colors px-2 py-3.5 group"
                >
                  <FileText className="w-4 h-4 text-[#475569] group-hover:text-[#0F172A] group-hover:scale-110 transition-transform" />
                  <span>Curriculum Vitae</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Clean Framed Executive Portrait with Hover Elevation */}
          <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-sm sm:max-w-md group">
              {/* Animated soft glow backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-slate-200 via-slate-100 to-amber-100/60 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-700" />

              {/* Main Image Card with Smooth Hover Zoom */}
              <div className="relative rounded-2xl overflow-hidden clean-card p-2.5 bg-white shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1">
                <picture className="overflow-hidden block rounded-xl">
                  <source srcSet={heroPortraitWebp} type="image/webp" />
                  <img
                    src={heroPortraitPng}
                    alt="Praneeth Babu Yeddula - Senior Software Engineer, AI Generalist & Technical Program Lead"
                    width={500}
                    height={625}
                    className="w-full aspect-[4/5] object-cover rounded-xl filter contrast-105 group-hover:scale-105 transition-all duration-700"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>

                {/* Overlaid Engineering Card with Glassmorphism */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl glass-card border border-slate-200/90 flex items-center justify-between transition-all duration-300 group-hover:bg-white/95 shadow-md">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#64748B] font-mono">
                      CORE SPECIALIZATION
                    </div>
                    <div className="text-sm font-heading font-bold text-[#0F172A] mt-0.5">
                      Full-Stack · GenAI · Cloud
                    </div>
                    <div className="text-[11px] text-[#475569] font-sans mt-0.5">
                      Brainovision Solutions India Pvt. Ltd.
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Counters Strip with Animated Rolling Numbers */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16 pt-10 border-t border-slate-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {METRICS.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl clean-card bg-white flex flex-col justify-between card-hover-lift"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
                <AnimatedCounter value={item.value} />
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.14em] text-[#0F172A] font-heading font-bold block">
                {item.label}
              </span>
              <span className="mt-1 text-xs text-[#64748B] font-sans font-normal line-clamp-2">
                {item.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}