import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Layers,
  Cloud,
} from "lucide-react";
import bgCode from "../assets/bg-code.jpg";
import { EXPERIENCES, EDUCATION } from "../data/portfolioData";
import { RevealOnScroll } from "./RevealOnScroll";

export function Experience() {
  return (
    <section id="experience" className="relative py-32 border-t border-slate-200 overflow-hidden bg-white">
      {/* Subtle fixed background code texture */}
      <div
        className="absolute inset-0 bg-fixed-image opacity-10 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${bgCode})` }}
      />
      {/* Animated ambient glow */}
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
              06 — Experience &amp; Education
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
              Career Trajectory.
              <br />
              <span className="text-[#475569]">From Engineering Fundamentals to Leadership.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal">
              A journey rooted in hands-on delivery — spanning enterprise web applications, high-concurrency cloud deployments, AI product exploration, and national technical education.
            </p>
          </div>
        </RevealOnScroll>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-200 ml-4 sm:ml-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 90}>
              <div className="relative pl-8 sm:pl-12 group">
                {/* Timeline marker with pulsing animation */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#0F172A] group-hover:scale-125 group-hover:border-emerald-600 transition-all duration-300 shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A] group-hover:bg-emerald-600 transition-colors" />
                </div>

                {/* Card Container with Hover Lift and Visual Image Banner */}
                <div className="rounded-3xl clean-card bg-[#FAF8F5] transition-all duration-300 card-hover-lift shadow-sm hover:border-slate-300 overflow-hidden">
                  {/* Visual Enterprise Banner */}
                  <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
                      alt={exp.company}
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/40 to-transparent" />

                    {/* Top Floating Badge Strip */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3">
                      <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono font-bold text-[#0F172A] shadow-sm flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-800" />
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/85 backdrop-blur-md text-xs font-mono text-white shadow-sm">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 pt-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] tracking-tight group-hover:text-slate-700 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.badge && (
                            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono font-bold tracking-wider bg-[#0F172A] text-white shadow-sm">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-[#475569] mt-2 font-mono">
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {exp.summary && (
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6 font-sans">
                        {exp.summary}
                      </p>
                    )}

                    {/* If pillars are present (Current Senior Role), show the 3 pillars clearly */}
                    {exp.pillars ? (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 pt-4 border-t border-slate-200">
                        {exp.pillars.map((pillar, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-5 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                {pIdx === 0 && <Layers className="w-4 h-4 text-slate-800" />}
                                {pIdx === 1 && <Cloud className="w-4 h-4 text-sky-700" />}
                                {pIdx === 2 && <Sparkles className="w-4 h-4 text-emerald-700" />}
                                <h4 className="font-heading font-bold text-sm text-[#0F172A]">
                                  {pillar.title}
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {pillar.items.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-start gap-2 text-xs text-[#475569] leading-relaxed font-sans">
                                    <span className="text-slate-400 mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="mt-4 space-y-2">
                        {exp.points.map((pt, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#475569] leading-relaxed font-sans">
                            <CheckCircle2 className="w-4 h-4 text-[#0F172A] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tech Chips */}
                    <div className="mt-6 pt-5 border-t border-slate-200 flex flex-wrap gap-1.5">
                      {exp.tech.map((t, k) => (
                        <span
                          key={k}
                          className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#0F172A] font-mono shadow-sm transition-colors hover:bg-slate-100"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}

          {/* Education Milestone Card with Visual Campus Banner */}
          <RevealOnScroll direction="up" delay={200}>
            <div className="relative pl-8 sm:pl-12 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-emerald-600 group-hover:scale-125 transition-transform duration-300 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              </div>

              <div className="rounded-3xl clean-card bg-[#FAF8F5] transition-all duration-300 card-hover-lift shadow-sm hover:border-slate-300 overflow-hidden">
                {/* Visual Campus Banner */}
                <div className="relative h-40 sm:h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                    alt={EDUCATION.institution}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-3">
                    <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-mono font-bold text-[#0F172A] shadow-sm flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-emerald-700" />
                      {EDUCATION.institution}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-900/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30">
                      {EDUCATION.period}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 pt-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] tracking-tight">
                        {EDUCATION.degree} in {EDUCATION.field}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[#475569] mt-1 font-mono">
                        <span className="font-semibold text-[#0F172A]">{EDUCATION.institution}</span>
                        <span>•</span>
                        <span>{EDUCATION.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                    {EDUCATION.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200 grid sm:grid-cols-3 gap-4">
                    {EDUCATION.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-[#334155] font-sans transition-transform duration-200 hover:translate-x-1"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}