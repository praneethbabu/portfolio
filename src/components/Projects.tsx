import { useState } from "react";
import { Layers, ArrowRight, Cpu } from "lucide-react";
import { PROJECTS, Project } from "../data/portfolioData";
import { ProjectModal } from "./ProjectModal";
import { RevealOnScroll } from "./RevealOnScroll";

const CATEGORIES = [
  "All",
  "Production Platforms",
  "AI & Products",
  "In Progress",
  "Client & Demonstrations",
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
      case "Live":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "In Progress":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "AI Concept / MVP":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      case "Demonstration":
        return "bg-slate-100 text-slate-700 border-slate-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section id="projects" className="relative py-32 border-t border-slate-200 overflow-hidden bg-[#FAF8F5]">
      {/* Floating ambient glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[160px] pointer-events-none -z-10 animate-float" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
                03 — Featured Projects &amp; Systems
              </div>
              <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#0F172A] leading-[1.05] tracking-tight">
                Featured Work.
                <br />
                <span className="text-[#475569]">From Code to Deployed Products.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal">
                A transparent breakdown of company platforms, AI products, client systems, and technical concepts — complete with role descriptions, tech stacks, and deployment statuses.
              </p>
            </div>

            {/* Category Filter Pills with Smooth Active Pill Transition */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm shrink-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 font-sans ${
                    selectedCategory === cat
                      ? "bg-[#0F172A] text-white shadow-md scale-100"
                      : "text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 hover:scale-[1.02]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid with Staggered Entrance and Hover Elevation */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <RevealOnScroll key={project.id} direction="up" delay={idx % 3 * 80}>
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-10 rounded-3xl clean-card bg-white transition-all duration-500 card-hover-lift shadow-sm hover:border-slate-300 group">
                  {/* Visual Image Preview with Smooth Scale on Parent Hover */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 aspect-video shadow-md">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-[#64748B] gap-2 bg-slate-50">
                          <Layers className="w-8 h-8 text-[#0F172A]" />
                          <span className="text-xs font-mono">Architecture Schematic</span>
                        </div>
                      )}

                      {/* Status Badge Overlay */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wide border shadow-sm backdrop-blur-md ${getStatusBadge(
                            project.status
                          )}`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Featured Metric Overlay */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-[#0F172A] text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                          {project.featuredMetric}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side with Clear Role & Emphasis */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-[#64748B] uppercase tracking-[0.16em]">
                          {project.type}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] tracking-tight group-hover:text-slate-700 transition-colors">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-sans font-normal">
                        {project.blurb}
                      </p>

                      {/* Role & Portfolio Emphasis Box */}
                      <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 transition-colors group-hover:bg-slate-100/70">
                        <div className="text-xs font-mono text-[#0F172A]">
                          <strong className="text-[#64748B] font-semibold">My Role:</strong>{" "}
                          {project.role}
                        </div>
                        <div className="text-xs font-sans text-[#475569]">
                          <strong className="text-[#64748B] font-mono font-semibold">Key Focus:</strong>{" "}
                          {project.emphasis}
                        </div>
                      </div>

                      {/* Tech Chips */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.stack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[#0F172A] font-mono transition-colors hover:bg-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Live Link + Case Study Trigger */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-heading font-semibold text-xs rounded-lg shadow-sm hover:shadow-md transition-all duration-300 uppercase tracking-wider hover:-translate-y-0.5"
                        >
                          <span>Visit Platform</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <span className="inline-block px-3 py-1.5 bg-slate-100 text-[#64748B] font-mono text-xs rounded-lg border border-slate-200">
                          {project.status === "In Progress"
                            ? "Under Development"
                            : project.status === "AI Concept / MVP"
                            ? "Concept / MVP"
                            : "Internal / Demonstration"}
                        </span>
                      )}

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="group/btn inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-mono font-semibold text-[#0F172A] bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                      >
                        <Cpu className="w-3.5 h-3.5 text-slate-700 group-hover/btn:rotate-90 transition-transform duration-300" />
                        <span>Case Study &amp; Architecture</span>
                      </button>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}