import { useState } from "react";
import {
  Sparkles,
  Cloud,
  GraduationCap,
  Activity,
  ShieldCheck,
  Zap,
} from "lucide-react";
import bgArchitecture from "../assets/bg-architecture.jpg";
import heroPortraitPng from "../assets/hero-portrait.png";
import { RevealOnScroll } from "./RevealOnScroll";

interface ArchitectureNode {
  id: string;
  name: string;
  role: string;
  metric: string;
  detail: string;
  badge: string;
}

const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: "dns",
    name: "Route53 DNS",
    role: "Global Routing & Health Checks",
    metric: "< 15ms Latency",
    detail:
      "Directs incoming user traffic to AWS EC2 instances with latency-based routing, health checks, and automatic failover.",
    badge: "Layer 1 · Edge",
  },
  {
    id: "proxy",
    name: "Nginx Reverse Proxy",
    role: "SSL & Micro-Caching Engine",
    metric: "100K Concurrency Spike",
    detail:
      "Caches static assets and short-lived result payloads to offload 85% of traffic from backend compute services during national spike events.",
    badge: "Layer 2 · Edge Cache",
  },
  {
    id: "compute",
    name: "Node.js / Express EC2",
    role: "Clustered Compute Workers",
    metric: "Zero Dropped Requests",
    detail:
      "Process clustering across CPU cores with connection pooling, PM2 process management, and asynchronous non-blocking I/O execution.",
    badge: "Layer 3 · Compute",
  },
  {
    id: "db",
    name: "MongoDB / MySQL",
    role: "Relational & Document Datastores",
    metric: "Sub-5ms Query Time",
    detail:
      "Compound indexing, lean projection queries, connection pooling, and read-replica distribution during heavy concurrent operations.",
    badge: "Layer 4 · Database",
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState<"visual" | "architecture">("visual");
  const [activeNode, setActiveNode] = useState<ArchitectureNode>(ARCHITECTURE_NODES[1]);

  return (
    <section id="about" className="relative py-28 overflow-hidden border-t border-slate-200 bg-[#FAF8F5]">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-fixed-image opacity-10 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url(${bgArchitecture})` }}
      />
      {/* Floating ambient glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-slate-200/40 rounded-full blur-[140px] pointer-events-none -z-10 animate-float-slow" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-block px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs uppercase tracking-[0.16em] text-[#475569] font-mono mb-3 shadow-xs">
                01 — About Me
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.08] tracking-tight">
                Engineering with Purpose.
                <br />
                <span className="text-[#475569]">Building What Comes Next.</span>
              </h2>
            </div>

            {/* View Mode Switcher with Smooth Slide */}
            <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200 shadow-inner shrink-0">
              <button
                onClick={() => setActiveTab("visual")}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeTab === "visual"
                    ? "bg-white text-[#0F172A] shadow-sm scale-100"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                Visual Overview
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`px-4 py-2 rounded-lg text-xs font-heading font-semibold uppercase tracking-[0.12em] transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === "architecture"
                    ? "bg-white text-[#0F172A] shadow-sm scale-100"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>Scale &amp; Telemetry</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Tab 1: Visual Bento Grid (Less Theory, More Images) */}
        {activeTab === "visual" && (
          <div className="space-y-6 animate-fade-in">
            {/* Top Row Bento: Large Profile Spotlight + AI Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Card 1: Executive Profile Spotlight with Photo */}
              <RevealOnScroll direction="up" delay={50} className="lg:col-span-7">
                <div className="p-8 rounded-3xl clean-card bg-white shadow-sm h-full flex flex-col justify-between card-hover-lift">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        src={heroPortraitPng}
                        alt="Praneeth Babu Yeddula"
                        className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shadow-sm"
                      />
                      <div>
                        <h3 className="font-heading font-bold text-xl text-[#0F172A]">
                          Praneeth Babu Yeddula
                        </h3>
                        <p className="text-xs font-mono text-[#64748B]">
                          Senior Software Engineer · AI Generalist · Technical Program Lead
                        </p>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-sans">
                      At <strong className="text-[#0F172A] font-semibold">Brainovision Solutions India Pvt. Ltd.</strong>, I architect production web platforms, engineer certificate verification systems (BSCGS), develop AI-powered business automations, and manage high-concurrency cloud deployments on AWS.
                    </p>

                    <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed font-sans">
                      Alongside engineering, I lead technical bootcamps — having trained <strong className="text-[#0F172A] font-semibold">10,000+ students</strong> across <strong className="text-[#0F172A] font-semibold">100+ workshops</strong> and mentored in <strong className="text-[#0F172A] font-semibold">20+ hackathons</strong> across India.
                    </p>
                  </div>

                  {/* Core Stack Pills */}
                  <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                    {["React.js", "Java Spring Boot", "Node.js", "Generative AI", "AWS Cloud", "Docker"].map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-md bg-slate-100 text-[#0F172A] font-mono border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>

              {/* Card 2: AI Products & Intelligence with Online Tech Visual */}
              <RevealOnScroll direction="up" delay={120} className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden clean-card bg-slate-900 text-white shadow-sm h-full flex flex-col justify-between group card-hover-lift min-h-[320px]">
                  {/* Background Image from Online Unsplash Tech Collection */}
                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80"
                    alt="AI Products & Intelligent Automation"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                  <div className="relative p-6 sm:p-8 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-emerald-400 text-xs font-mono font-semibold border border-white/15">
                      <Sparkles className="w-3.5 h-3.5" />
                      AI &amp; AGENTIC AUTOMATION
                    </span>
                  </div>

                  <div className="relative p-6 sm:p-8 z-10">
                    <h3 className="font-heading font-bold text-2xl text-white">
                      AI Product Builder
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Integrating Generative AI, LLMs, RAG knowledge retrieval, and autonomous agents into practical applications like FlowPilot and ProblemForge.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Bottom Row Bento: Cloud Scale Card + Education Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 3: Cloud Infrastructure & 100K Concurrency Visual */}
              <RevealOnScroll direction="up" delay={180}>
                <div className="relative rounded-3xl overflow-hidden clean-card bg-slate-900 text-white shadow-sm h-full flex flex-col justify-between group card-hover-lift min-h-[280px]">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
                    alt="Cloud Infrastructure & Scale"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                  <div className="relative p-6 sm:p-8 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sky-400 text-xs font-mono font-semibold border border-white/15">
                      <Cloud className="w-3.5 h-3.5" />
                      AWS &amp; CLOUD ARCHITECTURE
                    </span>
                  </div>

                  <div className="relative p-6 sm:p-8 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-2xl text-white">
                        Sustaining 100K+ Load
                      </h3>
                      <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                        99.9% Uptime
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      AWS EC2, Nginx reverse proxy micro-caching, PM2 clustering, and zero-downtime containerized releases.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Card 4: 10,000+ Students Mentored Visual */}
              <RevealOnScroll direction="up" delay={240}>
                <div className="relative rounded-3xl overflow-hidden clean-card bg-slate-900 text-white shadow-sm h-full flex flex-col justify-between group card-hover-lift min-h-[280px]">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                    alt="Technical Training & Mentorship"
                    className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                  <div className="relative p-6 sm:p-8 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-400 text-xs font-mono font-semibold border border-white/15">
                      <GraduationCap className="w-3.5 h-3.5" />
                      TECH EDUCATOR &amp; LEAD
                    </span>
                  </div>

                  <div className="relative p-6 sm:p-8 z-10">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-2xl text-white">
                        10,000+ Students Trained
                      </h3>
                      <span className="text-xs font-mono font-semibold text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded border border-amber-500/30">
                        100+ Workshops
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      Bridging academia and practical engineering through live coding, project reviews, and national hackathon mentoring.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive High-Concurrency Architecture Widget */}
        {activeTab === "architecture" && (
          <div className="space-y-8 animate-fade-in">
            {/* Visual Architecture Inspector Widget */}
            <div className="p-8 sm:p-12 rounded-2xl clean-card bg-white shadow-sm relative overflow-hidden">
              {/* Traffic Flow Glow Bar Animation */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-indigo-500 animate-gradient-x" />

              <div className="max-w-2xl mb-8">
                <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono">
                  PRODUCTION SYSTEM TELEMETRY
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0F172A] mt-1">
                  AWS Multi-Tier High Concurrency Architecture
                </h3>
                <p className="text-sm text-[#475569] mt-2">
                  Click through the layers below to inspect how we sustained 50K–100K live visitor spikes with zero dropped requests.
                </p>
              </div>

              {/* Interactive Pipeline Track */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {ARCHITECTURE_NODES.map((node) => {
                  const isSelected = activeNode.id === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNode(node)}
                      className={`p-5 rounded-xl text-left transition-all duration-300 relative border ${
                        isSelected
                          ? "bg-[#0F172A] text-white border-[#0F172A] shadow-lg scale-[1.02]"
                          : "bg-[#F8F9FA] text-[#0F172A] border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] uppercase font-mono font-bold tracking-wider ${
                            isSelected ? "text-emerald-400" : "text-[#64748B]"
                          }`}
                        >
                          {node.badge}
                        </span>
                        <Activity
                          className={`w-3.5 h-3.5 ${
                            isSelected ? "text-emerald-400 animate-pulse" : "text-slate-400"
                          }`}
                        />
                      </div>
                      <h4 className="font-heading font-bold text-base sm:text-lg leading-tight">
                        {node.name}
                      </h4>
                      <div
                        className={`text-xs mt-1.5 font-mono font-medium ${
                          isSelected ? "text-slate-300" : "text-[#475569]"
                        }`}
                      >
                        {node.metric}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Node Telemetry Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-[#F8F9FA] border border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 rounded-md bg-[#0F172A] text-white text-xs font-mono font-semibold shadow-sm">
                      Active Telemetry: {activeNode.name}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">
                      {activeNode.role}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans font-normal">
                    {activeNode.detail}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shrink-0 text-right shadow-sm card-hover-lift">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#64748B] font-mono block">
                    BENCHMARK
                  </span>
                  <span className="font-heading text-2xl font-bold text-[#0F172A]">
                    {activeNode.metric}
                  </span>
                </div>
              </div>
            </div>

            {/* 3 High-Impact Cards with Staggered Reveals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Cloud className="w-6 h-6 text-[#0F172A]" />,
                  label: "AWS Infrastructure",
                  title: "Zero-Downtime Releases",
                  desc: "Automated CI/CD pipelines via GitHub Actions, rolling EC2 container deployments, and Route53 DNS management.",
                  metricLabel: "Deployment SLA",
                  metricValue: "99.9% Uptime",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#0F172A]" />,
                  label: "Queue Automation",
                  title: "10,000+ Credentials",
                  desc: "Asynchronous worker queues processing batch high-resolution certificate generation with cryptographic verification QR codes.",
                  metricLabel: "Batch Pipeline",
                  metricValue: "10,000+ Units",
                },
                {
                  icon: <Zap className="w-6 h-6 text-[#0F172A]" />,
                  label: "Full-Stack Precision",
                  title: "Spring Boot & React",
                  desc: "Disciplined Java OOP architecture coupled with component-driven React interfaces optimized for sub-second Core Web Vitals.",
                  metricLabel: "Core Web Vitals",
                  metricValue: "Sub-Second",
                },
              ].map((card, cIdx) => (
                <div
                  key={cIdx}
                  className="p-8 rounded-2xl clean-card bg-white flex flex-col justify-between card-hover-lift"
                  style={{ transitionDelay: `${cIdx * 70}ms` }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F1F5F9] border border-slate-200 flex items-center justify-center text-[#0F172A] mb-6 shadow-sm">
                      {card.icon}
                    </div>
                    <span className="text-xs uppercase tracking-[0.16em] text-[#64748B] font-mono">
                      {card.label}
                    </span>
                    <h3 className="text-2xl font-heading font-bold text-[#0F172A] mt-1 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#475569] leading-relaxed font-sans font-normal">
                      {card.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono font-semibold text-[#0F172A]">
                    <span>{card.metricLabel}</span>
                    <span>{card.metricValue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}