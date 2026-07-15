import { motion } from "framer-motion";
import { Laptop, Server, Database, Cloud, Terminal, Code, Settings, Brain, Users } from "lucide-react";
import TechLogo from "./TechLogo";

const SKILL_TECH_MAP = {
  "HTML5 / CSS3": ["HTML", "CSS"],
  "JavaScript (ES6+)": "JavaScript",
  "React": "React",
  "Tailwind CSS": "Tailwind CSS",
  "Node.js": "Node.js",
  "Express.js": "Express",
  "REST APIs": "REST API",
  "Socket.io": "Socket.io",
  "MongoDB": "MongoDB",
  "MySQL": "MySQL",
  "JavaScript": "JavaScript",
  "Git / GitHub": "Git",
  "Docker basics": "Docker",
  "Linux Command Line": "Linux",
  "API Models (Gemini/OpenAI)": "OpenAI",
  "Collaborative Git flows": "Git",
};

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Laptop size={20} className="text-violet-600 dark:text-violet-400" />,
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={20} className="text-blue-500" />,
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    title: "Database",
    icon: <Database size={20} className="text-cyan-500" />,
    skills: ["MongoDB", "MySQL", "Prisma ORM", "SQL Basics"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud size={20} className="text-emerald-500" />,
    skills: ["Vercel Hosting", "GitHub Actions", "Docker basics", "Linux Command Line"],
  },
  {
    title: "Programming",
    icon: <Code size={20} className="text-amber-500" />,
    skills: ["C++ Core", "JavaScript", "Data Structures", "Algorithms"],
  },
  {
    title: "Tools & OS",
    icon: <Settings size={20} className="text-rose-500" />,
    skills: ["Git / GitHub", "Postman", "VS Code IDE", "Windows Powershell"],
  },
  {
    title: "AI Integration",
    icon: <Brain size={20} className="text-purple-500" />,
    skills: ["Prompt Design", "Copilot Integrations", "API Models (Gemini/OpenAI)", "RAG pipelines core"],
  },
  {
    title: "Soft Skills",
    icon: <Users size={20} className="text-teal-500" />,
    skills: ["Technical Writing", "Problem Analysis", "Collaborative Git flows", "Continuous Learning"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">
      
      {/* Glow backgrounds */}
      <div className="absolute top-[30%] left-0 w-[45%] h-[40%] rounded-full aurora-1 opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[40%] h-[40%] rounded-full aurora-2 opacity-25 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Skills & Abilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            My Tech Toolbox
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Categorized skills highlighting libraries, systems, environments, and professional methods.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 glass shadow-sm hover:border-violet-500/40 hover:shadow-lg dark:hover:shadow-violet-950/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 group-hover:bg-violet-600/10 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => {
                  const mapped = SKILL_TECH_MAP[skill];
                  return (
                    <li key={sIdx} className="flex items-center gap-2">
                      {mapped ? (
                        Array.isArray(mapped) ? (
                          <span className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
                            {mapped.map((t) => <TechLogo key={t} name={t} size={16} />)}
                          </span>
                        ) : (
                          <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
                            <TechLogo name={mapped} size={16} />
                          </span>
                        )
                      ) : (
                        <>
                          <span className="h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-violet-500 transition-colors duration-300" />
                          <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300">
                            {skill}
                          </span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;
