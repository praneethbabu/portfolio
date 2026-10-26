import { useState } from "react";
import { Sparkles, Layers, Database, Cloud, CheckCircle2 } from "lucide-react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { RevealOnScroll } from "./RevealOnScroll";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.title)];

  const displayedCategories =
    activeCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Artificial Intelligence":
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
      case "Full-Stack Development":
        return <Layers className="w-5 h-5 text-slate-800" />;
      case "Databases and APIs":
        return <Database className="w-5 h-5 text-emerald-600" />;
      case "Cloud and DevOps":
        return <Cloud className="w-5 h-5 text-sky-600" />;
      default:
        return <Layers className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="skills" className="relative py-32 border-t border-slate-200 overflow-hidden bg-white">
      {/* Animated ambient background orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[140px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[120px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
                04 — Technical Arsenal
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
                Engineering Expertise.
                <br />
                <span className="text-[#475569]">Demonstrated &amp; Battle-Tested.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal">
                Disciplined full-stack engineering, practical generative AI integration, enterprise database design, and cloud infrastructure operations.
              </p>
            </div>

            {/* Interactive Category Filter Pills with Smooth Scaling */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 font-sans ${
                    activeCategory === cat
                      ? "bg-[#0F172A] text-white shadow-md scale-100"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-white hover:scale-[1.02]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Visual Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category, idx) => (
            <RevealOnScroll key={category.title} direction="up" delay={idx * 100}>
              <div className="p-8 sm:p-10 rounded-3xl clean-card bg-[#FAF8F5] flex flex-col justify-between group transition-all duration-300 card-hover-lift shadow-sm hover:border-slate-300 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110">
                        {getCategoryIcon(category.title)}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F172A] tracking-tight group-hover:text-slate-700 transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#64748B] font-mono">
                      VERIFIED
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#475569] font-sans font-normal leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Skills Tags with Micro-Hover Animation */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs px-3 py-2 rounded-lg font-mono transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5 hover:shadow-sm cursor-default ${
                        skill.highlight
                          ? "bg-[#0F172A] text-white font-medium shadow-sm hover:bg-slate-800"
                          : "bg-white text-[#334155] border border-slate-200 hover:border-slate-400"
                      }`}
                    >
                      {skill.production !== false ? (
                        <CheckCircle2
                          className={`w-3.5 h-3.5 ${
                            skill.highlight ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Legend */}
        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Active in Production &amp; Deployed Platforms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Explored in AI Research / Training Curricula</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}