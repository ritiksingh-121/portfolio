import React from "react";
import { Compass, Cpu, ShieldCheck, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery & System Specs",
      icon: <Compass size={22} className="text-violet-600 dark:text-violet-400" />,
      duration: "Week 1",
      description: "We audit your requirements, map out database schemas, design interactive wireframes, and establish clear technical milestones with guaranteed delivery timelines."
    },
    {
      number: "02",
      title: "Agile Sprint Engineering",
      icon: <Cpu size={22} className="text-cyan-600 dark:text-cyan-400" />,
      duration: "Weeks 2 – 5",
      description: "We write clean, typed code in high-velocity weekly sprints with asynchronous progress reports, staging sandbox deployments, and continuous PR reviews."
    },
    {
      number: "03",
      title: "Automated QA & Security Testing",
      icon: <ShieldCheck size={22} className="text-emerald-600 dark:text-emerald-400" />,
      duration: "Week 6",
      description: "We run end-to-end load tests, input sanitization vulnerability sweeps, database index profiling, and cross-device responsive stress testing."
    },
    {
      number: "04",
      title: "Production Handoff & Warranty",
      icon: <Rocket size={22} className="text-amber-500" />,
      duration: "Week 7+",
      description: "Zero-downtime deployment to your cloud environment, complete Git repository ownership transfer, architecture documentation, and 30-day code warranty."
    }
  ];

  return (
    <section id="process" className="relative py-28 border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 overflow-hidden">
      <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] rounded-full aurora-1 opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-mono tracking-widest text-violet-600 dark:text-violet-400 font-bold">
            Execution Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 dark:text-white mt-3 tracking-tight">
            How We Ship High-Impact Software
          </h2>
          <p className="mt-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300">
            A disciplined, milestone-driven development process engineered to prevent scope creep and guarantee on-time delivery.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] relative flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 shadow-sm group"
            >
              <div>
                {/* Header with step number & duration */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-zinc-300 dark:text-zinc-700 group-hover:text-violet-500/50 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {step.duration}
                  </span>
                </div>

                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 w-fit mb-5">
                  {step.icon}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-3">{step.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{step.description}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
                <span>Phase {step.number} Complete</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-medium">100% Deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
