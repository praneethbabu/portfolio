import { X, Printer, ExternalLink, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, METRICS, SKILL_CATEGORIES, EDUCATION } from "../data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-8 py-5 border-b border-slate-200 flex items-center justify-between bg-white/95 backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <span className="ml-3 text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono">
              CURRICULUM VITAE · {PERSONAL_INFO.name.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-[0.12em] text-[#0F172A] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-12 space-y-10 text-[#0F172A]">
          {/* Header */}
          <div className="border-b border-slate-200 pb-8">
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0F172A] tracking-tight">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-medium mt-2">
              {PERSONAL_INFO.title}
            </p>

            <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#475569] font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0F172A]" />
                {PERSONAL_INFO.location}
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-[#0F172A] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#0F172A]" />
                {PERSONAL_INFO.email}
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 hover:text-[#0F172A] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0F172A]" />
                {PERSONAL_INFO.phoneDisplay}
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#0F172A] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#0F172A]" />
                LinkedIn
              </a>
            </div>

            <p className="mt-5 text-sm sm:text-base text-[#334155] leading-relaxed max-w-3xl font-sans font-normal">
              {PERSONAL_INFO.bioParagraphs[0]} {PERSONAL_INFO.bioParagraphs[1]}
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-4">
              // IMPACT HIGHLIGHTS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {METRICS.slice(0, 4).map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0F172A]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#475569] mt-1 font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-6">
              // PROFESSIONAL EXPERIENCE
            </h3>
            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="border-l-2 border-slate-300 pl-6 relative">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-[#0F172A]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-lg font-heading font-bold text-[#0F172A]">{exp.role}</h4>
                    <span className="text-xs text-[#64748B] font-mono font-medium">{exp.period}</span>
                  </div>
                  <div className="text-xs text-[#475569] font-semibold mt-0.5">
                    {exp.company} · {exp.location}
                  </div>

                  <ul className="mt-3 space-y-2 text-xs sm:text-sm text-[#334155]">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 leading-relaxed">
                        <span className="text-[#0F172A]">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tech.map((t, k) => (
                      <span
                        key={k}
                        className="text-[11px] px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-[#0F172A] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-4">
              // EDUCATION
            </h3>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-base text-[#0F172A]">
                  {EDUCATION.degree} in {EDUCATION.field}
                </h4>
                <div className="text-xs text-[#475569] font-mono mt-0.5">
                  {EDUCATION.institution} · {EDUCATION.location} ({EDUCATION.period})
                </div>
                <p className="mt-2 text-xs text-[#475569] leading-relaxed font-sans">
                  {EDUCATION.description}
                </p>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#64748B] font-mono font-bold mb-4">
              // TECHNICAL COMPETENCIES
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <div className="text-xs font-heading font-bold text-[#0F172A] uppercase tracking-wide mb-3">
                    {cat.title}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, j) => (
                      <span
                        key={j}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                          s.highlight
                            ? "bg-[#0F172A] text-white font-medium shadow-sm"
                            : "bg-white text-[#334155] border border-slate-200"
                        }`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
