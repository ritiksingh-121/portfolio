import { motion } from "framer-motion";
import { Award, ShieldCheck, ArrowUpRight } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development Program",
    issuer: "Udemy / Developer Academy",
    date: "Issued 2024",
    skills: ["React", "Express.js", "MongoDB", "REST APIs"],
    verifyUrl: "#"
  },
  {
    title: "Data Structures & Algorithms in C++",
    issuer: "LeetCode / GFG Prep",
    date: "Issued 2023",
    skills: ["DSA Core", "C++ Core", "Time Complexities"],
    verifyUrl: "#"
  },
  {
    title: "Modern UI/UX & Responsive Web Systems",
    issuer: "Frontend Masters Core Program",
    date: "Issued 2024",
    skills: ["CSS Grid", "Tailwind CSS", "Aesthetics & Micro-interactions"],
    verifyUrl: "#"
  }
];

function Certifications() {
  return (
    <section id="certifications" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[10%] w-[35%] h-[35%] rounded-full aurora-1 opacity-15 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Licenses & Certifications
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Verified qualifications demonstrating focus in algorithms, full-stack, and interface designs.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm flex flex-col justify-between hover:border-violet-500/40 transition duration-300"
            >
              <div>
                {/* Certificate Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400">
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-mono">
                    <ShieldCheck size={12} />
                    Verified
                  </div>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 dark:text-white leading-snug group-hover:text-violet-600 transition">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2 font-mono">{cert.date}</p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[10px] font-bold rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification CTA */}
              <div className="mt-8 border-t border-zinc-100 dark:border-zinc-800/60 pt-4">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition"
                >
                  Verify Credential
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;
