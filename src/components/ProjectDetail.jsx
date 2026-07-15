import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Laptop } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechLogo from "./TechLogo";

const PROJECT_DATA = {
  "crawlforge": {
    title: "CrawlForge",
    tagline: "Enterprise-Grade AI Web Scraping Platform",
    overview: "CrawlForge is a production-ready, AI-powered web scraping platform that enables intelligent crawling, structured data extraction, authentication handling, AI-assisted parsing, scheduling, rate limiting, and interactive dashboards. Built with a modern MERN stack, it provides a scalable solution for complex data extraction workflows.",
    problem: "Modern web scraping solutions are either too simplistic or overly complex, lacking intelligent features like AI-powered parsing, authentication management, scheduling, and rate limiting. Developers often have to stitch together multiple tools to build a complete scraping pipeline, leading to maintenance nightmares and brittle architectures.",
    solution: "CrawlForge consolidates everything into one unified platform with an AI-first approach. It handles intelligent crawling with automatic retry logic, provides a dashboard for monitoring scrapes, supports authentication for protected resources, and offers REST APIs for seamless integration with existing systems.",
    features: [
      "AI-powered intelligent crawling with automatic retry and error handling",
      "Authentication support for protected resources (JWT, Basic Auth, OAuth)",
      "Interactive dashboard with real-time scraping metrics and logs",
      "Comprehensive REST APIs for programmatic access",
      "Scheduling and rate limiting for controlled data extraction",
      "Export structured data to JSON and CSV formats",
      "AI-assisted parsing for intelligent data extraction",
      "Modern responsive UI with dark/light mode support"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS", "JWT", "Axios", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/CrawlForge",
    live: "#",
    screenshots: [
      { label: "Dashboard Overview", desc: "Main dashboard with crawling metrics" },
      { label: "Scraping Pipeline", desc: "Real-time scraping pipeline visualization" },
      { label: "Data Export", desc: "JSON and CSV export interface" }
    ]
  },
  "ai-interview-platform": {
    title: "AI Interview Platform",
    tagline: "AI-Powered Mock Interview Preparation",
    overview: "An intelligent interview preparation platform where users can take realistic mock interviews, receive AI-generated questions tailored to their domain, get real-time communication analysis, and receive comprehensive performance evaluation with actionable feedback.",
    problem: "Job seekers lack realistic, AI-driven interview practice platforms that provide instant feedback, speech analysis, and performance evaluation. Traditional mock interviews require human interviewers, are expensive, and don't offer objective metrics or consistent practice opportunities.",
    solution: "This platform leverages AI to generate dynamic interview questions based on the user's target role and experience level. It analyzes speech patterns, provides real-time feedback on communication skills, and generates detailed performance reports covering technical accuracy, clarity, confidence, and areas for improvement.",
    features: [
      "AI-powered mock interview question generation",
      "Real-time speech and communication analysis",
      "Comprehensive performance evaluation reports",
      "Secure authentication with JWT",
      "Interactive dashboard tracking progress over time",
      "Responsive and modern UI with smooth animations",
      "Multiple interview categories and difficulty levels"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "OpenAI/Groq AI", "Framer Motion", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/ai-interview-platform",
    live: "#",
    screenshots: [
      { label: "Interview Session", desc: "Active mock interview interface" },
      { label: "Performance Report", desc: "Detailed performance analysis" },
      { label: "Dashboard", desc: "User progress dashboard" }
    ]
  },
  "ai-video-generator": {
    title: "AI Video Generator",
    tagline: "Automatic Video Generation from Prompts",
    overview: "An AI-powered application that transforms text prompts into complete videos using modern AI APIs and automation pipelines. Users can generate professional-looking video content effortlessly without any video editing experience.",
    problem: "Creating engaging videos requires significant time, specialized skills, and expensive software. There is no simple, accessible way to automatically generate high-quality video content from textual descriptions.",
    solution: "AI Video Generator leverages cutting-edge AI APIs to understand text prompts and generate corresponding video content. The automation pipeline handles the entire generation process, from script creation to final video assembly, making video production accessible to everyone.",
    features: [
      "Prompt-to-video generation with AI understanding",
      "Seamless AI API integration for intelligent content creation",
      "High-quality video output with automatic rendering",
      "Download support for generated videos",
      "Modern, intuitive user interface",
      "Secure authentication for personalized experience",
      "Fast generation with optimized pipelines"
    ],
    tech: ["React", "Node.js", "Express", "AI APIs", "Tailwind CSS", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "#",
    screenshots: [
      { label: "Generation Interface", desc: "Main prompt-to-video interface" },
      { label: "Video Preview", desc: "Generated video preview player" },
      { label: "History", desc: "Previous generations list" }
    ]
  },
  "ai-video-generator-alt": {
    title: "AI Video Generator (Alternate)",
    tagline: "Optimized AI Video Generation Workflow",
    overview: "An alternative implementation of the AI video generator with improved architecture, reusable component design, and optimized frontend experience. Focuses on clean code practices, modularity, and maintainability.",
    problem: "Existing video generation tools often lack modular architecture and reusability, making them difficult to extend, customize, or maintain. Monolithic codebases hinder collaboration and slow down feature development.",
    solution: "This alternative implementation prioritizes clean architecture with well-defined components, reusable modules, and a streamlined frontend experience. The component-based design makes it easy to add new features, swap AI providers, and maintain the codebase over time.",
    features: [
      "Optimized AI video generation workflow",
      "Modular component architecture for easy customization",
      "Fast rendering with optimized frontend performance",
      "Fully responsive design across all devices",
      "Reusable UI components and patterns",
      "Streamlined user experience with minimal friction"
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "AI APIs", "Git"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "#",
    screenshots: [
      { label: "Architecture Overview", desc: "Component architecture visualization" },
      { label: "Generation Workflow", desc: "Step-by-step generation process" },
      { label: "Responsive Design", desc: "Mobile and desktop views" }
    ]
  }
};

function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECT_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-[#09090B]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white">Project not found</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">The project you are looking for does not exist.</p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:underline">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090B]">

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="absolute top-[10%] left-[5%] w-[50%] h-[50%] rounded-full aurora-1 opacity-20 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full aurora-2 opacity-15 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
              Project Detail
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-3 text-zinc-950 dark:text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaGithub size={18} />
                GitHub Repository
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white hover:bg-violet-500 font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">Overview</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
              Project Overview
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-300 max-w-4xl leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-red-200/60 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10"
            >
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">The Problem</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-3xl border border-emerald-200/60 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10"
            >
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">The Solution</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">Features</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
              Key Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B]"
              >
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">Stack</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
              Technology Stack
            </h2>
          </motion.div>

          <div className="flex flex-wrap gap-3 mt-10">
            {project.tech.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#18181B] shadow-sm hover:shadow-lg hover:shadow-violet-500/10 hover:border-violet-500/40 transition-all duration-300"
              >
                <TechLogo name={t} size={18} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">Architecture</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
              Architecture Overview
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B] flex items-center justify-center"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-500/10 border border-violet-500/30 flex items-center justify-center">
                  <Laptop size={24} className="text-violet-600 dark:text-violet-400" />
                </div>
                <span className="text-[10px] font-bold font-mono text-violet-600 dark:text-violet-400">Frontend</span>
                <span className="text-[9px] font-mono text-zinc-500">React + Tailwind</span>
              </div>
              <div className="hidden md:block text-2xl text-zinc-300 dark:text-zinc-600">→</div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Github size={24} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-[10px] font-bold font-mono text-emerald-600 dark:text-emerald-400">Backend</span>
                <span className="text-[9px] font-mono text-zinc-500">Node.js + Express</span>
              </div>
              <div className="hidden md:block text-2xl text-zinc-300 dark:text-zinc-600">→</div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" /></svg>
                </div>
                <span className="text-[10px] font-bold font-mono text-cyan-600 dark:text-cyan-400">Database</span>
                <span className="text-[9px] font-mono text-zinc-500">MongoDB</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-20 border-b border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">Gallery</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
                Screenshots
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {project.screenshots.map((shot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#18181B] overflow-hidden"
                >
                  <div className="h-40 bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border-b border-zinc-200 dark:border-zinc-800">
                    <Laptop size={32} className="text-zinc-300 dark:text-zinc-700" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-zinc-950 dark:text-white">{shot.label}</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{shot.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
              Explore {project.title}
            </h2>
            <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
              Check out the source code or try the live demo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <FaGithub size={18} />
                GitHub Repository
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-violet-600 text-white hover:bg-violet-500 font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

export default ProjectDetail;
