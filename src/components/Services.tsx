import { Code2, Bot, Cloud, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES } from "../data/portfolioData";
import { RevealOnScroll } from "./RevealOnScroll";

export function Services() {
  const getIcon = (id: string) => {
    switch (id) {
      case "full-stack":
        return <Code2 className="w-5 h-5 text-slate-800" />;
      case "ai-products":
        return <Bot className="w-5 h-5 text-indigo-700" />;
      case "cloud-devops":
        return <Cloud className="w-5 h-5 text-sky-700" />;
      case "training-mentorship":
        return <GraduationCap className="w-5 h-5 text-emerald-700" />;
      default:
        return <Code2 className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="services" className="relative py-28 border-t border-slate-200 overflow-hidden bg-white">
      {/* Animated ambient light orb */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[160px] pointer-events-none -z-10 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
              02 — Services &amp; Capabilities
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
              What I Build &amp; Deliver.
              <br />
              <span className="text-[#475569]">Practical solutions that scale.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal">
              Specialized engineering and educational services available for technical teams, founders, enterprises, and educational institutions.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Service Cards Grid with Rich Images and Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => (
            <RevealOnScroll key={service.id} direction="up" delay={idx * 100}>
              <div className="rounded-3xl clean-card bg-white flex flex-col justify-between group transition-all duration-300 card-hover-lift h-full shadow-sm hover:border-slate-300 overflow-hidden">
                {/* Visual Image Header from Online Collection */}
                <div className="relative aspect-[21/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Floating Tag Overlay */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-[#0F172A] border border-white/20 shadow-sm flex items-center gap-1.5">
                      {getIcon(service.id)}
                      {service.shortTag}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#0F172A] tracking-tight group-hover:text-slate-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm text-[#475569] leading-relaxed font-sans font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-[#64748B] font-mono font-semibold block">
                        Core Deliverables:
                      </span>
                      {service.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-[#334155] transition-transform duration-200 hover:translate-x-1"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies / Tools */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-2">
                    {service.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-[#0F172A] font-mono border border-slate-200 transition-colors hover:bg-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA Strip */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-12 p-8 rounded-2xl bg-[#FAF8F5] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm card-hover-lift">
            <div>
              <h4 className="font-heading font-bold text-lg text-[#0F172A]">
                Have an engineering project or workshop requirement?
              </h4>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5 font-sans">
                Available for full-time engineering roles, AI product consulting, and college guest masterclasses.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0F172A] text-white text-xs font-heading font-semibold uppercase tracking-[0.14em] hover:bg-slate-800 transition-all duration-300 shadow-sm shrink-0 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Discuss Requirements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
