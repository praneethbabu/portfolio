import { useState } from "react";
import { Copy, Check, Send, Linkedin, Github, ExternalLink, MessageSquare } from "lucide-react";
import bgMarble from "../assets/bg-marble.jpg";
import { PERSONAL_INFO } from "../data/portfolioData";
import { RevealOnScroll } from "./RevealOnScroll";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [inquiryType, setInquiryType] = useState("Software Engineering");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const subject = encodeURIComponent(`[${inquiryType}] Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Praneeth,\n\nI am contacting you regarding: ${inquiryType}\n\n${formState.message}\n\nBest regards,\n${formState.name}\n${formState.email}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 border-t border-slate-200 overflow-hidden bg-white">
      {/* Subtle marble texture */}
      <div
        className="absolute inset-0 bg-fixed-image opacity-15 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${bgMarble})` }}
      />
      {/* Floating ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-100 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <div className="inline-block px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-4">
              07 — Direct Connection
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#0F172A] leading-[1.02] tracking-tight">
              Let's Build
              <br />
              <span className="text-[#475569]">Something Meaningful.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#334155] font-sans font-normal leading-relaxed max-w-2xl">
              {PERSONAL_INFO.contactSubtext}
            </p>
          </div>
        </RevealOnScroll>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct channels & Quick Copy Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Copy Email Card */}
            <RevealOnScroll direction="right" delay={50}>
              <div className="p-8 rounded-3xl clean-card bg-[#FAF8F5] shadow-sm card-hover-lift">
                <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono font-medium">
                  Primary Email
                </span>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] hover:text-slate-600 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="shrink-0 p-3 rounded-xl bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] border border-slate-200 shadow-sm transition-all duration-300 hover:scale-105"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-xs text-emerald-600 font-mono mt-2 font-medium animate-fade-in">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>
            </RevealOnScroll>

            {/* Quick Copy Phone Card */}
            <RevealOnScroll direction="right" delay={120}>
              <div className="p-8 rounded-3xl clean-card bg-[#FAF8F5] shadow-sm card-hover-lift">
                <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono font-medium">
                  Direct Telephone / WhatsApp
                </span>
                <div className="mt-2 flex items-center justify-between gap-4">
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-lg sm:text-xl font-heading font-bold text-[#0F172A] hover:text-slate-600 transition-colors"
                  >
                    {PERSONAL_INFO.phoneDisplay}
                  </a>
                  <button
                    onClick={copyPhone}
                    className="shrink-0 p-3 rounded-xl bg-white hover:bg-[#0F172A] hover:text-white text-[#0F172A] border border-slate-200 shadow-sm transition-all duration-300 hover:scale-105"
                    title="Copy phone number to clipboard"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {copiedPhone && (
                  <p className="text-xs text-emerald-600 font-mono mt-2 font-medium animate-fade-in">
                    ✓ Phone number copied to clipboard!
                  </p>
                )}
              </div>
            </RevealOnScroll>

            {/* Social Networks */}
            <RevealOnScroll direction="right" delay={180}>
              <div className="p-8 rounded-3xl clean-card bg-[#FAF8F5] shadow-sm card-hover-lift">
                <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono font-medium">
                  Professional Verified Profiles
                </span>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-slate-200 text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-slate-200 text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Repositories</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Direct Message Form with Inquiry Routing */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="left" delay={100}>
              <div className="p-8 sm:p-10 rounded-3xl clean-card bg-[#FAF8F5] shadow-sm card-hover-lift">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-[#0F172A]" />
                  <h3 className="text-2xl font-heading font-bold text-[#0F172A] tracking-tight">
                    Send a Direct Message
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
                    <Check className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <h4 className="text-lg font-heading font-bold text-emerald-900">
                      Opening Mail Client...
                    </h4>
                    <p className="text-xs text-emerald-700 mt-1 font-sans">
                      Your message draft has been structured and directed to {PERSONAL_INFO.email}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Inquiry Type Chips */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono mb-2">
                        Inquiry Category
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Software Engineering",
                          "AI Products & Automation",
                          "Technical Workshops / Speaking",
                          "General Collaboration",
                        ].map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:scale-105 ${
                              inquiryType === type
                                ? "bg-[#0F172A] text-white font-semibold shadow-sm"
                                : "bg-white text-[#334155] border border-slate-200 hover:border-slate-400"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Alex Morgan"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F172A] shadow-inner transition-colors font-sans"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="alex@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F172A] shadow-inner transition-colors font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Hi Praneeth, I'd like to discuss an opportunity / project regarding..."
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0F172A] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0F172A] shadow-inner transition-colors resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full py-3.5 rounded-xl bg-[#0F172A] text-white text-xs font-heading font-semibold uppercase tracking-[0.14em] hover:bg-slate-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}