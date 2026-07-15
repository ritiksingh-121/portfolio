import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechLogo from "./TechLogo";

const STACKS = [
  { name: "React", category: "Frontend", color: "text-cyan-400", desc: "Interactive UI library" },
  { name: "Next.js", category: "Frontend", color: "text-zinc-400", desc: "Production React framework" },
  { name: "Node.js", category: "Backend", color: "text-emerald-500", desc: "Event-driven runtime" },
  { name: "Express", category: "Backend", color: "text-neutral-400", desc: "Minimalist server framework" },
  { name: "TypeScript", category: "Programming", color: "text-blue-500", desc: "Strict syntactical superset" },
  { name: "MongoDB", category: "Database", color: "text-green-500", desc: "Document-based database" },
  { name: "MySQL", category: "Database", color: "text-cyan-600", desc: "Relational DB engine" },
  { name: "Tailwind CSS", category: "Frontend", color: "text-sky-400", desc: "Utility-first design framework" },
  { name: "Git", category: "Tools", color: "text-orange-500", desc: "Distributed version control" },
  { name: "Docker", category: "Tools", color: "text-blue-400", desc: "Container virtualization" },
  { name: "Linux", category: "Tools", color: "text-yellow-500", desc: "Open-source kernel environment" },
];

function TechStack() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section id="tech-stack" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] rounded-full aurora-2 opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            System Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Core Technologies
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Hover over elements to see description summaries.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden py-4 marquee-container">
          {/* Gradients to mask edges */}
          <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-zinc-50 dark:from-[#0A0A0F] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-zinc-50 dark:from-[#0A0A0F] to-transparent z-10 pointer-events-none" />

          {/* Row 1 - Left to Right */}
          <div className="marquee-content py-2">
            {[...STACKS, ...STACKS].map((tech, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm hover:border-violet-500/40 hover:scale-105 cursor-default transition-all duration-300"
              >
                <TechLogo name={tech.name} size={22} />
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Tooltip Detail Footer */}
        <div className="h-12 mt-10 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {hoveredTech && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="px-5 py-2 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-600 dark:text-violet-400 text-xs font-bold font-mono uppercase tracking-wider"
              >
                {hoveredTech.name} &bull; {hoveredTech.desc}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default TechStack;
