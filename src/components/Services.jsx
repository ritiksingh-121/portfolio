import React from "react";
import { Rocket, Layers, BrainCircuit, Check, ArrowRight } from "lucide-react";

export default function Services({ onOpenBooking }) {
  const services = [
    {
      id: "mvp-rapid",
      title: "MVP Rapid Engineering",
      badge: "0 to 1 Launch",
      tagline: "Take your product idea from specification to production launch in 4 to 8 weeks.",
      idealFor: "Funded early-stage startups and founders who need to validate their product with real users and investors quickly.",
      timeline: "4 – 8 Weeks Delivery",
      featured: true,
      deliverables: [
        "Full-stack web application (React/Next.js + Node/Python)",
        "Secure authentication, session management & RBAC",
        "Database architecture with scalable schemas & indexing",
        "Stripe / LemonSqueezy payment & subscription gateway",
        "Automated CI/CD pipeline and zero-downtime Vercel/AWS deployment",
        "100% full IP and source code repository transfer"
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL / MongoDB", "Tailwind CSS", "Vercel"]
    },
    {
      id: "saas-scaling",
      title: "Custom SaaS & Platform Scaling",
      badge: "Enterprise Grade",
      tagline: "Architect high-throughput, multi-tenant web applications built to support millions of requests.",
      idealFor: "Scaling businesses looking to replace legacy software, automate operations, or launch custom customer-facing portals.",
      timeline: "6 – 12 Weeks Sprints",
      deliverables: [
        "Modular microservices or robust modular monolith architecture",
        "Multi-tenant database tenancy with strict tenant isolation",
        "Real-time WebSocket telemetry, live sync & notifications",
        "Comprehensive REST and GraphQL programmatic APIs",
        "Audit logging, enterprise security compliance & rate limiting",
        "30-day post-launch code warranty and bug guarantee"
      ],
      techStack: ["React", "Node.js", "Redis", "Docker", "PostgreSQL", "Socket.io", "AWS / Cloudflare"]
    },
    {
      id: "ai-workflows",
      title: "AI Systems & Intelligent Automation",
      badge: "Next-Gen AI",
      tagline: "Embed custom LLM agents, intelligent scrapers, and automated data processing pipelines into your business.",
      idealFor: "Companies seeking a competitive edge by automating cognitive workflows, document extraction, and conversational agents.",
      timeline: "3 – 6 Weeks Sprints",
      deliverables: [
        "Custom LLM agent workflows (Groq, OpenAI, Claude, Llama 3)",
        "Retrieval-Augmented Generation (RAG) with vector databases (Pinecone/Qdrant)",
        "Intelligent web scrapers and unstructured document extraction engines",
        "Voice synthesis, real-time STT/TTS audio pipelines",
        "Cost-optimized inference routing with fallback models",
        "Full telemetry tracking token usage, latency, and costs"
      ],
      techStack: ["Python", "FastAPI", "Node.js", "OpenAI/Groq", "LangChain/LlamaIndex", "Pinecone", "Docker"]
    }
  ];

  const getIcon = (id) => {
    switch (id) {
      case "mvp-rapid":
        return <Rocket size={24} className="text-violet-600 dark:text-violet-400" />;
      case "saas-scaling":
        return <Layers size={24} className="text-cyan-600 dark:text-cyan-400" />;
      case "ai-workflows":
        return <BrainCircuit size={24} className="text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Rocket size={24} className="text-violet-600 dark:text-violet-400" />;
    }
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      <div className="absolute top-[20%] right-[5%] w-[35%] h-[35%] rounded-full aurora-2 opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-violet-600 dark:text-violet-400 font-bold">
            Core Agency Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white mt-3 tracking-tight">
            Engineered for Growth. Packaged for Speed.
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
            Transparent, milestone-based software engineering packages designed to eliminate technical risk and deliver high-impact digital products.
          </p>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                pkg.featured
                  ? "border-violet-500 bg-white dark:bg-[#15151C] shadow-2xl shadow-violet-950/20 ring-1 ring-violet-500/50"
                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Most Popular for Startups
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60">
                    {getIcon(pkg.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {pkg.timeline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-2">{pkg.title}</h3>
                <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-4">{pkg.badge}</p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">{pkg.tagline}</p>

                {/* Ideal for box */}
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/60 mb-6">
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                    Best Suited For:
                  </span>
                  <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-snug">{pkg.idealFor}</p>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold text-zinc-950 dark:text-white uppercase tracking-wider block">
                    Key Deliverables:
                  </span>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/60 mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {pkg.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-3.5 px-5 rounded-2xl font-semibold text-xs flex items-center justify-center gap-2 transition-all duration-200 ${
                    pkg.featured
                      ? "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/30"
                      : "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 dark:hover:text-white"
                  }`}
                >
                  <span>Inquire About Package</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
