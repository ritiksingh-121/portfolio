import { motion } from "framer-motion";
import { GraduationCap, Briefcase, GitPullRequest, Calendar, CheckCircle2 } from "lucide-react";

const EXPERIENCES = [
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Self-Employed / Freelance",
    period: "2024 – Present",
    icon: <Briefcase size={18} />,
    color: "border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-600/5",
    achievements: [
      "Designed and deployed multiple full-stack web applications featuring secure REST backends and responsive responsive interfaces.",
      "Optimized query structures and database transactions in MongoDB, cutting request loading times.",
      "Engineered a real-time coordinates socket mapping client using Leaflet maps to support simultaneous live users."
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Leaflet"]
  },
  {
    type: "work",
    role: "Open Source Contributor",
    company: "GitHub / Developer Community",
    period: "2024 – Present",
    icon: <GitPullRequest size={18} />,
    color: "border-cyan-500/20 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5",
    achievements: [
      "Contributing bug-fixes, feature optimizations, and helper libraries to public repositories.",
      "Building accessible utilities for the web community, focusing on component reuse and semantic layouts.",
      "Reviewing repository logs to refine workflows, resolve logic exceptions, and improve testing setups."
    ],
    tech: ["Git", "GitHub Actions", "JavaScript", "Markdown", "Linux CLI"]
  },
  {
    type: "education",
    role: "B.Tech in Computer Science",
    company: "University Academic Program",
    period: "2022 – Present",
    icon: <GraduationCap size={18} />,
    color: "border-blue-500/20 text-blue-600 dark:text-blue-400 bg-blue-500/5",
    achievements: [
      "Rigorous core curriculum studies: Data Structures & Algorithms, Database Management Systems (DBMS), and Software Architecture.",
      "Active team leader in internal development sprints, formatting modular repositories and code logic guides.",
      "Deepening analytical understanding of object-oriented algorithms, computation complexities, and network protocols."
    ],
    tech: ["C++ Core", "Data Structures", "Algorithms", "SQL / DBMS", "Operating Systems"]
  }
];

function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute top-[40%] right-0 w-[45%] h-[40%] rounded-full aurora-2 opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Timeline
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Experience & Education
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Chronological records of professional contributions, open-source work, and academic backgrounds.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative pl-6 sm:pl-0">
          {/* Vertical central connector line */}
          <div className="absolute left-[15px] sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-cyan-400 to-transparent -translate-x-1/2" />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-stretch ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Central Dot Badge */}
                  <div className="absolute left-[15px] sm:left-1/2 top-2 h-9 w-9 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0A0A0F] shadow-md flex items-center justify-center -translate-x-1/2 z-10 text-violet-600 dark:text-violet-400">
                    {exp.icon}
                  </div>

                  {/* Left Column (spacing in desktop) */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Right Column (timeline card) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 80 }}
                    className="w-full sm:w-1/2 pl-10 sm:pl-0 sm:px-8"
                  >
                    <div className="p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm hover:border-violet-500/40 transition duration-300">
                      
                      {/* Timeline Card Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider font-mono bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
                          {exp.type === "education" ? "Education" : "Experience"}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 dark:text-zinc-500 font-mono">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="text-sm font-bold text-violet-600 dark:text-violet-400 mt-1">
                        {exp.company}
                      </h4>

                      {/* Achievements/Responsibilities list */}
                      <ul className="mt-6 space-y-3">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                              {ach}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Timeline Card Footer - Tech badges */}
                      <div className="flex flex-wrap gap-1.5 mt-8 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                        {exp.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-xs font-bold rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;
