import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Radio, Link2, Bot, Layers, Sparkles, Activity, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechLogo from "./TechLogo";

const PROJECTS = [
  {
    title: "VoxSpeak AI English Coach",
    slug: "voxspeak",
    desc: "Real-time AI English speaking coach with speech prosody analysis, adaptive learning journeys, and low-latency audio waveform feedback.",
    tech: ["Next.js 14", "Web Audio API", "Groq AI", "Tailwind CSS", "Zustand", "PWA"],
    github: "https://github.com/ritiksingh-121",
    live: "https://web-five-pi-58.vercel.app/onboarding/welcome",
    category: "AI Systems",
    tags: ["AI Systems", "Speech Synthesis", "Web Audio"],
    badge: "Sub-280ms Audio"
  },
  {
    title: "IntervU AI Platform",
    slug: "ai-interview-platform",
    desc: "Voice-enabled mock interview platform with real-time speech prosody analysis, dynamic question generation, and actionable scoring matrix.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "OpenAI/Groq", "MongoDB"],
    github: "https://github.com/ritiksingh-121/ai-interview-platform",
    live: "https://ai-interview-platform-dusky.vercel.app/",
    category: "AI Systems",
    tags: ["AI Systems", "Speech", "WebSockets"],
    badge: "Sub-450ms Voice"
  },
  {
    title: "CrawlForge AI Engine",
    slug: "crawlforge",
    desc: "Enterprise-grade web crawling and structured intelligence pipeline with AI-assisted parsing, rate-limiting management, and interactive metrics dashboards.",
    tech: ["Node.js", "Express", "MongoDB", "React", "Groq AI", "JWT"],
    github: "https://github.com/ritiksingh-121/CrawlForge",
    live: "https://github.com/ritiksingh-121/CrawlForge#readme",
    category: "AI & Automation",
    tags: ["AI Systems", "Full Stack", "Data Extraction"],
    badge: "Enterprise Pipeline"
  },
  {
    title: "AuraMotion Video Studio",
    slug: "ai-video-generator",
    desc: "Automated prompt-to-render video generation studio leveraging neural text-to-speech, dynamic subtitle synchronization, and FFmpeg video encoding.",
    tech: ["React", "Next.js", "Node.js", "FFmpeg", "Groq API", "Tailwind CSS"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "https://github.com/ritiksingh-121/Ai_Video_Generator#readme",
    category: "AI Systems",
    tags: ["AI Systems", "FFmpeg", "Generative AI"],
    badge: "4.2x Faster Render"
  },
  {
    title: "GeoPulse Telemetry Engine",
    slug: "location-tracker",
    desc: "Bi-directional coordinate streaming engine supporting live fleet geofencing, dead reckoning interpolation, and high-frequency WebSocket sync.",
    tech: ["Node.js", "Socket.io", "Leaflet", "Express", "Redis"],
    github: "https://github.com/ritiksingh-121/location-tracker",
    live: "https://github.com/ritiksingh-121/location-tracker#readme",
    category: "Real-time Systems",
    tags: ["WebSockets", "Full Stack", "Telemetry"],
    badge: "Sub-35ms Ping"
  }
];

const CATEGORIES = ["All", "AI Systems", "AI & Automation", "Real-time Systems"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <section
      id="projects"
      className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60"
    >
      <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[40%] rounded-full aurora-3 opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400 font-mono">
            Flagship Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Featured Systems & Case Studies
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            Production architectures, AI pipelines, and telemetry platforms built to solve mission-critical technical bottlenecks.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md"
                  : "bg-white/80 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all duration-300"
              >
                {/* Visual Header */}
                <div className="h-52 w-full relative overflow-hidden bg-[#0d0e14] border-b border-zinc-800/80 p-6 flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-widest uppercase rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                      <Activity size={10} className="animate-pulse" />
                      {project.badge}
                    </span>
                  </div>

                  <div className="relative z-10 p-3 rounded-xl bg-black/60 border border-zinc-800/80 backdrop-blur-md">
                    <span className="text-[11px] font-mono text-zinc-400 block font-bold text-white">
                      {project.title}
                    </span>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="h-1 flex-1 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 w-3/4 animate-pulse" />
                      </div>
                      <span className="text-[9px] font-mono text-cyan-400">Live Architecture</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2.5 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-5">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                        >
                          <TechLogo name={tech} size={13} />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-4 mt-8 pt-5 border-t border-zinc-100 dark:border-zinc-800/60">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200"
                      >
                        <FaGithub size={15} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        <ExternalLink size={13} />
                        Live Demo
                      </a>
                    </div>

                    <Link
                      to={`/project/${project.slug}`}
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-xl text-xs font-bold bg-violet-600/10 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white transition-all duration-200"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
