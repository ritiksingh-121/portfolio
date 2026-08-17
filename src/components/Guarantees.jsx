import React from "react";
import { ShieldCheck, FileLock2, RefreshCw, Zap } from "lucide-react";

export default function Guarantees() {
  const items = [
    {
      icon: <FileLock2 size={24} className="text-emerald-500" />,
      title: "100% Code & IP Transfer",
      desc: "All source code, database architectures, Figma assets, and deployment keys are transferred in full to your organization upon milestone completion."
    },
    {
      icon: <ShieldCheck size={24} className="text-violet-600 dark:text-violet-400" />,
      title: "Strict Mutual NDA",
      desc: "We sign comprehensive enterprise confidentiality agreements before discovery calls to protect your proprietary algorithms, product concepts, and business logic."
    },
    {
      icon: <RefreshCw size={24} className="text-cyan-500" />,
      title: "30-Day Post-Launch Warranty",
      desc: "We stand behind our code. Every delivered project includes 30 days of proactive bug fixing, SLA monitoring, and deployment support at zero extra charge."
    },
    {
      icon: <Zap size={24} className="text-amber-500" />,
      title: "Weekly Staging Demos",
      desc: "No black-box development. You receive private staging sandbox URLs and async video walkthroughs at the end of every weekly agile sprint."
    }
  ];

  return (
    <section className="relative py-24 border-t border-zinc-200 dark:border-zinc-900/60 bg-zinc-50 dark:bg-[#0A0A0F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
            Zero-Risk Client Protection
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white mt-2">
            Enterprise Trust & Quality Guarantees
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-zinc-950 dark:text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
