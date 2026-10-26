import { X, ExternalLink, Cpu, CheckCircle2, Layers, Briefcase, Sparkles } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
      case "Live":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "In Progress":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "AI Concept / MVP":
        return "bg-indigo-50 text-indigo-800 border-indigo-200";
      case "Demonstration":
        return "bg-slate-100 text-slate-800 border-slate-200";
      default:
        return "bg-slate-100 text-slate-800 border-slate-200";
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-slate-200 flex items-center justify-between bg-white/90 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${getStatusColor(
                project.status
              )}`}
            >
              {project.status}
            </span>
            <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
              // {project.type}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Image preview frame */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 aspect-video flex items-center justify-center shadow-sm">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-[#64748B] gap-2">
                <Layers className="w-8 h-8 text-[#0F172A]" />
                <span className="text-xs font-mono">Architecture Schematic</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-[#0F172A] font-mono font-semibold shadow-sm">
                Metric: {project.featuredMetric}
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Title & Blurb */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-2 text-[#475569] text-sm sm:text-base leading-relaxed font-sans font-normal">
              {project.blurb}
            </p>
          </div>

          {/* Role & Portfolio Emphasis Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] flex items-center gap-1.5 font-bold mb-1">
                <Briefcase className="w-3.5 h-3.5 text-slate-700" />
                Engineering Role
              </span>
              <p className="text-sm font-semibold text-[#0F172A] font-sans">
                {project.role}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#64748B] flex items-center gap-1.5 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Portfolio Focus
              </span>
              <p className="text-xs text-[#334155] font-sans">
                {project.emphasis}
              </p>
            </div>
          </div>

          {/* Implementation & Engineering Deep Dive */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#0F172A]" />
              Implementation &amp; Architecture Details
            </h4>
            <p className="text-sm text-[#334155] leading-relaxed font-sans font-normal">
              {project.details}
            </p>
          </div>

          {/* Stack list */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-3">
              Technologies &amp; Architecture Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-white border border-slate-200 text-[#0F172A] flex items-center gap-1.5 shadow-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
