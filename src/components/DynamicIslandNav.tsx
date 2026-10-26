import { useEffect, useState } from "react";
import { ArrowUp, FileText, Send } from "lucide-react";

interface Section {
  id: string;
  label: string;
  shortLabel: string;
}

const SECTIONS: Section[] = [
  { id: "top", label: "Overview", shortLabel: "Home" },
  { id: "about", label: "About", shortLabel: "About" },
  { id: "services", label: "Services", shortLabel: "Serve" },
  { id: "projects", label: "Projects", shortLabel: "Work" },
  { id: "skills", label: "Skills", shortLabel: "Skills" },
  { id: "training", label: "Training", shortLabel: "Train" },
  { id: "experience", label: "Timeline", shortLabel: "Exp" },
  { id: "contact", label: "Connect", shortLabel: "Contact" },
];

export function DynamicIslandNav({ onOpenResume }: { onOpenResume?: () => void }) {
  const [activeSection, setActiveSection] = useState<string>("top");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 280);

      const sectionElements = SECTIONS.map((sec) => ({
        id: sec.id,
        el: document.getElementById(sec.id),
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.el) {
          const top = item.el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick section navigation"
      className="fixed bottom-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none animate-fade-up"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 p-2 rounded-full bg-white/95 backdrop-blur-2xl border border-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.04)] transition-all duration-300 hover:shadow-2xl hover:border-slate-300">
        {/* Navigation items */}
        <div className="flex items-center gap-1">
          {SECTIONS.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-sans transition-all duration-300 ${
                  isActive
                    ? "text-white font-semibold scale-100"
                    : "text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 font-medium hover:scale-105"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#0F172A] shadow-md -z-10 animate-fade-in" />
                )}
                <span className="hidden md:inline">{sec.label}</span>
                <span className="md:hidden">{sec.shortLabel}</span>
              </button>
            );
          })}
        </div>

        <div className="h-4 w-px bg-slate-200 mx-1 hidden sm:block" />

        {/* Action icons with micro-bounce */}
        <div className="flex items-center gap-1">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="p-1.5 rounded-full text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 transition-all duration-200 hover:scale-110 active:scale-95"
              title="View Resume / CV"
            >
              <FileText className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={() => scrollTo("contact")}
            className="p-1.5 rounded-full text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 transition-all duration-200 hover:scale-110 active:scale-95"
            title="Get In Touch"
          >
            <Send className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("top")}
            className="p-1.5 rounded-full text-[#475569] hover:text-[#0F172A] hover:bg-slate-100 transition-all duration-200 hover:scale-110 active:scale-95"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
