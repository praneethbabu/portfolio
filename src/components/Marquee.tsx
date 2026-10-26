import { MARQUEE_ITEMS } from "../data/portfolioData";

export function Marquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative border-y border-slate-200/90 py-5 overflow-hidden bg-white/60 backdrop-blur-sm">
      {/* Edge gradient mask for smooth fade effect */}
      <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-14 whitespace-nowrap animate-marquee">
        {repeated.map((word, idx) => (
          <div key={idx} className="flex items-center gap-14">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#334155] hover:text-[#0F172A] transition-colors duration-300">
              {word}
            </span>
            <span className="text-slate-300 font-mono text-sm">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}