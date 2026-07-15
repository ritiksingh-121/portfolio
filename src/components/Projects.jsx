import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Link2, Search, Globe, Video, Camera, Monitor } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechLogo from "./TechLogo";

const PROJECTS = [
  {
    title: "Location Tracker",
    slug: "location-tracker",
    desc: "Real-time coordinate transmission mapping engine. Utilizes sockets and leaflet components to broadcast GPS points instantaneously on a live map.",
    tech: ["Node.js", "Socket.io", "Leaflet", "Express"],
    github: "https://github.com/ritiksingh-121/location-tracker",
    live: "#",
    category: "Real-time Systems",
    tags: ["Web", "Full Stack", "Real-time Systems"],
    mockup: (
      <div className="relative w-full h-full bg-[#0d0e12] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative w-2/3 h-2/3 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col p-2">
          <div className="flex gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <div className="h-10 w-10 rounded-full border border-violet-500 bg-violet-500/10 flex items-center justify-center animate-pulse">
              <MapPin size={16} className="text-violet-400" />
            </div>
            <div className="absolute top-2 right-2 border border-cyan-500/50 bg-cyan-500/10 rounded-md px-1.5 py-0.5 text-[8px] font-mono text-cyan-400">
              Active Connection
            </div>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path d="M 40,40 Q 90,20 130,50" fill="transparent" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" strokeDasharray="3,3" />
            </svg>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "URL Shortener",
    slug: "url-shortener",
    desc: "A performant analytics-backed link shortener. Generates hashes for URLs, handles database redirections, and charts access logs, referrers, and clicks.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com/ritiksingh-121/URL-Shortener",
    live: "#",
    category: "Full Stack",
    tags: ["Full Stack", "MERN", "Web"],
    mockup: (
      <div className="relative w-full h-full bg-[#0e0f14] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="w-3/4 h-3/4 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col p-3">
          <div className="flex items-center justify-between text-[8px] font-mono text-zinc-500 border-b border-zinc-900 pb-1.5 mb-2">
            <span>/analytics</span>
            <span className="text-emerald-400">+14.2%</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-6 w-full rounded bg-zinc-900/60 border border-zinc-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5">
                <Link2 size={10} className="text-cyan-400" />
                <span className="text-[9px] text-zinc-300 font-mono">r.tk/12a8</span>
              </div>
              <span className="text-[8px] text-zinc-500">120 Clicks</span>
            </div>
            <div className="flex-1 flex items-end gap-1 px-1">
              {[30, 60, 45, 80, 50, 95, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-violet-600 to-cyan-400" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "CrawlForge",
    slug: "crawlforge",
    desc: "Enterprise-grade AI-powered web scraping platform supporting intelligent crawling, structured data extraction, authentication, AI-assisted parsing, scheduling, and dashboards.",
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS", "JWT", "Axios", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/CrawlForge",
    live: "#",
    category: "Full Stack",
    tags: ["Full Stack", "Web", "MERN", "Automation"],
    mockup: (
      <div className="relative w-full h-full bg-[#0d0e12] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative w-5/6 h-5/6 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col p-2">
          <div className="flex gap-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2 text-[7px] font-mono text-emerald-400 border-b border-zinc-800 pb-1.5 mb-1.5">
            <span className="animate-pulse">{'>'}</span>
            <span>crawlforge scan --target example.com</span>
          </div>
          <div className="flex-1 flex flex-col gap-0.5 text-[7px] font-mono">
            <div className="flex items-center justify-between bg-zinc-900/50 rounded px-1.5 py-0.5 text-zinc-400">
              <span>/api/products</span>
              <span className="text-emerald-400">200 (0.3s)</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 rounded px-1.5 py-0.5 text-zinc-400">
              <span>/api/users</span>
              <span className="text-emerald-400">200 (0.5s)</span>
            </div>
            <div className="flex items-center justify-between bg-zinc-900/50 rounded px-1.5 py-0.5 text-zinc-400">
              <span>/api/auth</span>
              <span className="text-red-400">401 (0.1s)</span>
            </div>
            <div className="flex-1 flex items-center justify-center mt-1">
              <div className="relative">
                <div className="h-7 w-7 border-2 border-violet-500 rounded-full animate-spin border-t-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Search size={8} className="text-violet-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "AI Interview Platform",
    slug: "ai-interview-platform",
    desc: "An AI-powered interview preparation platform where users can take mock interviews, receive AI-generated questions, communication analysis, and instant feedback.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "OpenAI/Groq AI", "Framer Motion", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/ai-interview-platform",
    live: "#",
    category: "AI",
    tags: ["AI", "Full Stack", "MERN"],
    mockup: (
      <div className="relative w-full h-full bg-[#0e0f14] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="w-5/6 h-5/6 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between bg-zinc-900 px-3 py-1.5 border-b border-zinc-800">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            </div>
            <Camera size={10} className="text-zinc-500" />
            <span className="text-[6px] font-mono text-zinc-600">ai-interview</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative bg-zinc-900/30">
            <div className="h-12 w-12 rounded-full border-2 border-violet-500/30 bg-violet-500/5 flex items-center justify-center">
              <Monitor size={16} className="text-violet-400" />
            </div>
            <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between px-2">
              <div className="flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[6px] font-mono text-red-400">REC</span>
              </div>
              <div className="border border-zinc-700 bg-zinc-800/50 rounded px-1.5 py-0.5 text-[6px] font-mono text-emerald-400">
                Q: Tell me about yourself
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "AI Video Generator",
    slug: "ai-video-generator",
    desc: "AI-powered application that generates videos automatically from prompts using modern AI APIs and automation pipelines.",
    tech: ["React", "Node.js", "Express", "AI APIs", "Tailwind CSS", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "#",
    category: "AI",
    tags: ["AI", "Automation"],
    mockup: (
      <div className="relative w-full h-full bg-[#0d0e12] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative w-5/6 h-5/6 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col p-2">
          <div className="flex gap-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="h-6 rounded bg-zinc-900/60 border border-zinc-800 flex items-center px-2 gap-2">
              <Video size={8} className="text-violet-400" />
              <span className="text-[7px] font-mono text-zinc-500 flex-1">Enter your video prompt...</span>
              <div className="h-3.5 w-3.5 rounded bg-violet-500/20 border border-violet-500/40 flex items-center justify-center">
                <div className="h-1.5 w-1.5 bg-violet-500 rounded-full" />
              </div>
            </div>
            <div className="flex-1 bg-zinc-900/30 rounded border border-zinc-800 flex items-center justify-center">
              <div className="relative">
                <div className="h-10 w-14 rounded border border-zinc-700 bg-zinc-800/50 flex items-center justify-center">
                  <div className="h-0 w-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-violet-400 border-b-[5px] border-b-transparent ml-0.5" />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 px-1 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-[5px] font-mono text-emerald-400">
                  Generating...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "AI Video Generator (Alternate)",
    slug: "ai-video-generator-alt",
    desc: "Alternative implementation showcasing AI video generation workflow with improved architecture, reusable components, and optimized frontend experience.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "AI APIs", "Git"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "#",
    category: "AI",
    tags: ["AI", "Automation"],
    mockup: (
      <div className="relative w-full h-full bg-[#0e0f14] border-b border-zinc-800 flex items-center justify-center overflow-hidden">
        <div className="w-5/6 h-5/6 border border-zinc-800 rounded-xl bg-zinc-950 flex flex-col p-2">
          <div className="flex gap-1.5 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <span className="w-2 h-2 rounded-full bg-yellow-500" />
            <span className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-1 text-[7px] font-mono text-zinc-600 border-b border-zinc-800 pb-1 mb-1.5">
            <Globe size={7} />
            <span>Architecture: Component-Based</span>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border border-zinc-800 bg-zinc-900/30 rounded p-1 flex flex-col items-center justify-center gap-0.5">
                <div className={`h-3 w-3 rounded-full ${i % 2 === 0 ? 'bg-violet-500/30' : 'bg-cyan-500/30'} flex items-center justify-center`}>
                  <div className={`h-1.5 w-1.5 rounded-full ${i % 2 === 0 ? 'bg-violet-400' : 'bg-cyan-400'}`} />
                </div>
                <span className="text-[5px] font-mono text-zinc-600">Module {i}</span>
              </div>
            ))}
          </div>
          <div className="mt-1 flex items-center justify-center gap-1">
            <div className="h-1 w-8 rounded bg-violet-500/40" />
            <div className="h-1 w-8 rounded bg-zinc-800" />
            <div className="h-1 w-8 rounded bg-zinc-800" />
          </div>
        </div>
      </div>
    )
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">

      <div className="absolute bottom-[10%] left-[5%] w-[45%] h-[40%] rounded-full aurora-3 opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            A handpicked selection of tools, APIs, and systems demonstrating code hygiene and functional logic.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((proj) => (
            <motion.div
              key={proj.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] overflow-hidden shadow-sm hover:shadow-xl hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="h-56 w-full relative overflow-hidden bg-zinc-950">
                {proj.mockup}
                <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  {proj.category}
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-950 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-300">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed flex-1">
                  {proj.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
                    >
                      <TechLogo name={t} size={14} />
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mt-8 border-t border-zinc-100 dark:border-zinc-800/60 pt-6">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200"
                  >
                    <FaGithub size={16} />
                    Source Code
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-violet-600 dark:text-violet-400 hover:text-violet-500 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <Link
                    to={`/project/${proj.slug}`}
                    className="ml-auto inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
                  >
                    Details
                    <ExternalLink size={12} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
