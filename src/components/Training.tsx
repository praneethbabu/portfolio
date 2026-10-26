import {
  GraduationCap,
  Users,
  Sparkles,
  Trophy,
  Globe,
  ArrowRight,
  Code2,
  Camera,
} from "lucide-react";
import { TRAINING_SECTION, WORKSHOP_GALLERY } from "../data/portfolioData";
import { AnimatedCounter } from "./AnimatedCounter";
import { RevealOnScroll } from "./RevealOnScroll";

export function Training() {
  return (
    <section id="training" className="relative py-32 border-t border-slate-200 overflow-hidden bg-[#FAF8F5]">
      {/* Animated ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[130px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-14">
            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
              05 — Technical Training &amp; Leadership
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
              Empowering Developers.
              <br />
              <span className="text-[#475569]">Practical Engineering in Action.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal leading-relaxed">
              {TRAINING_SECTION.subtext}
            </p>
          </div>
        </RevealOnScroll>

        {/* 6 Key Highlights Grid with Animated Counters and Staggered Entrance */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-16">
          {TRAINING_SECTION.highlights.map((item, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 60}>
              <div className="p-5 rounded-2xl clean-card bg-white flex flex-col justify-between shadow-sm card-hover-lift h-full group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#0F172A] transition-transform duration-300 group-hover:scale-110">
                      {idx === 0 && <Users className="w-4 h-4 text-indigo-600" />}
                      {idx === 1 && <GraduationCap className="w-4 h-4 text-emerald-600" />}
                      {idx === 2 && <Trophy className="w-4 h-4 text-amber-600" />}
                      {idx === 3 && <Globe className="w-4 h-4 text-sky-600" />}
                      {idx === 4 && <Code2 className="w-4 h-4 text-slate-800" />}
                      {idx === 5 && <Sparkles className="w-4 h-4 text-purple-600" />}
                    </div>
                  </div>
                  <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight block">
                    <AnimatedCounter value={item.metric} />
                  </span>
                  <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0F172A] mt-1 group-hover:text-slate-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] sm:text-xs text-[#64748B] leading-snug font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Visual Workshop & Hackathon Showcase Gallery (Online Photography) */}
        <div className="mb-20">
          <RevealOnScroll direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#64748B] font-mono font-semibold">
                  <Camera className="w-3.5 h-3.5 text-indigo-600" />
                  <span>ON-SITE MOMENTS &amp; MENTORSHIP</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] mt-1">
                  Live Workshop &amp; Hackathon Showcase
                </h3>
              </div>
              <span className="text-xs font-mono text-[#64748B]">
                10,000+ Engineers Trained · 20+ Hackathons
              </span>
            </div>
          </RevealOnScroll>

          {/* 4-Card Visual Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {WORKSHOP_GALLERY.map((photo, pIdx) => (
              <RevealOnScroll key={photo.id} direction="up" delay={pIdx * 100}>
                <div className="group relative rounded-3xl overflow-hidden clean-card bg-slate-950 text-white shadow-md card-hover-lift h-full flex flex-col justify-end min-h-[340px] sm:min-h-[380px]">
                  {/* High-Resolution Unsplash Event Imagery */}
                  <img
                    src={photo.image}
                    alt={photo.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* Rich Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-3 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-[#0F172A] shadow-md border border-white/20">
                      {photo.tag}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-[11px] font-mono font-bold text-white shadow-md">
                      {photo.reach}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="relative p-6 sm:p-8 z-10">
                    <h4 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-amber-200 transition-colors">
                      {photo.title}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-200 font-sans leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Topics I Teach Section with Crisp Visual Cards (Less Theory, More Actionable Skills) */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="p-8 sm:p-12 rounded-3xl clean-card bg-white shadow-sm mb-12 card-hover-lift">
            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono">
                CURRICULA &amp; MASTERCLASSES
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] mt-1">
                Hands-on Engineering Modules
              </h3>
              <p className="text-sm text-[#475569] mt-2 font-sans">
                Project-based masterclasses taking students from core syntax to functional, production-ready cloud software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {TRAINING_SECTION.topics.map((topic, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2.5 py-0.5 rounded bg-white text-[#475569] border border-slate-200 shadow-xs">
                        {topic.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        0{i + 1}
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-[#0F172A] mt-1 group-hover:text-slate-800 transition-colors">
                      {topic.name}
                    </h4>
                    <p className="text-xs text-[#475569] mt-1.5 leading-relaxed font-sans">
                      {topic.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Pedagogical Approach Callout */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="p-8 rounded-2xl bg-[#0F172A] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl card-hover-lift">
            <div className="max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                TEACHING PHILOSOPHY
              </span>
              <h4 className="text-xl sm:text-2xl font-heading font-bold text-white mt-1">
                "Learn by Building"
              </h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed font-sans">
                {TRAINING_SECTION.approach}
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#0F172A] text-xs font-heading font-semibold uppercase tracking-[0.14em] hover:bg-slate-100 transition-all duration-300 shrink-0 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Request a Workshop</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

// Keep export alias for backwards compatibility
export const Workshops = Training;
