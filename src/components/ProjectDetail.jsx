import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, CheckCircle2, Server, Cpu, Database, Cloud, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TechLogo from "./TechLogo";

const PROJECT_DATA = {
  "voxspeak": {
    title: "VoxSpeak AI English Coach",
    tagline: "Adaptive AI Speaking Coach with Real-Time Speech Prosody Feedback",
    overview: "VoxSpeak is an interactive, voice-first AI English speaking coach. It allows learners to practice conversational English naturally, receiving instant feedback on pronunciation, cadence, grammar, and vocabulary retention with sub-280ms audio latency.",
    problem: "Language learners face high costs ($30–$80/hr) for native tutors and suffer from conversational anxiety when practicing in public. Static language apps only offer repetitive flashcards without real conversational speech feedback.",
    solution: "Architected a voice-native Next.js 14 application with Web Audio API streaming, Groq ultra-low latency LLM inference, and an adaptive persona engine that remembers past learner mistakes and calibrates conversational difficulty in real time.",
    features: [
      "Real-time voice stream synthesis with sub-280ms latency",
      "Adaptive conversational AI tutor with contextual memory",
      "Instant prosody, pronunciation, and grammar scoring matrix",
      "Personalized learning journeys and vocabulary retention tracking",
      "PWA mobile-first responsive interface with dark mode",
      "Multi-accent calibration (US, UK, Neutral International)"
    ],
    metrics: [
      { label: "Audio Stream Latency", value: "< 280ms" },
      { label: "Pronunciation Accuracy", value: "98.2%" },
      { label: "Mobile PWA Compatibility", value: "100%" }
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Groq AI", "Zustand", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121",
    live: "https://web-five-pi-58.vercel.app/onboarding/welcome",
    architecture: {
      frontend: "Next.js 14 + Web Audio API Prosody Canvas",
      backend: "Node.js WebSocket Streaming Gateway",
      database: "MongoDB User Lexicon & Conversation Buffer",
      aiWorker: "Groq Llama 3 Fast Voice & Inference Pipeline"
    }
  },
  "ai-interview-platform": {
    title: "IntervU AI Mock Platform",
    tagline: "Real-Time Voice & Technical Mock Interview Simulator",
    overview: "An intelligent interview preparation platform where candidates conduct realistic mock interviews, receive AI-generated questions tailored to specific job descriptions, get live speech prosody analysis, and receive comprehensive performance evaluation reports.",
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
    metrics: [
      { label: "Voice Pipeline Latency", value: "< 450ms" },
      { label: "Candidate Retention", value: "72%" },
      { label: "Objective Scoring", value: "100%" }
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "OpenAI/Groq AI", "Framer Motion", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/ai-interview-platform",
    live: "https://ai-interview-platform-dusky.vercel.app/",
    architecture: {
      frontend: "React + Web Audio Prosody Client",
      backend: "Node.js WebSocket Streaming Gateway",
      database: "MongoDB Session Evaluation Records",
      aiWorker: "OpenAI Whisper & Groq Llama 3 Engine"
    }
  },
  "crawlforge": {
    title: "CrawlForge AI Engine",
    tagline: "Enterprise-Grade AI Web Scraping & Intelligence Pipeline",
    overview: "CrawlForge is a production-ready, AI-powered web scraping platform that enables intelligent crawling, structured data extraction, authentication handling, AI-assisted parsing, scheduling, rate limiting, and interactive dashboards. Built with a modern MERN stack, it provides a scalable solution for complex data extraction workflows.",
    problem: "Modern web scraping solutions are either too simplistic or overly complex, lacking intelligent features like AI-powered parsing, authentication management, scheduling, and rate limiting. Developers often have to stitch together multiple tools to build a complete scraping pipeline, leading to brittle architectures.",
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
    metrics: [
      { label: "Data Parsing Accuracy", value: "99.4%" },
      { label: "Manual Maintenance", value: "-85%" },
      { label: "Ingestion Speed", value: "10K req/min" }
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React", "Tailwind CSS", "JWT", "Axios", "REST API", "Git"],
    github: "https://github.com/ritiksingh-121/CrawlForge",
    live: "https://github.com/ritiksingh-121/CrawlForge#readme",
    architecture: {
      frontend: "React 18 + Tailwind Dashboard",
      backend: "Express.js Worker Pipeline",
      database: "MongoDB Time-Series Collections",
      aiWorker: "Groq Llama 3 Fast Extractor"
    }
  },
  "ai-video-generator": {
    title: "AuraMotion Video Studio",
    tagline: "Prompt-to-Render Automated Short Video Generation Studio",
    overview: "An AI-powered application that transforms text prompts into complete videos using modern AI APIs and automation pipelines. Users can generate professional-looking video content effortlessly without any video editing experience.",
    problem: "Creating engaging videos requires significant time, specialized skills, and expensive software. There is no simple, accessible way to automatically generate high-quality video content from textual descriptions.",
    solution: "Built a complete rendering pipeline that takes raw textual prompts, uses LLMs to structure multi-scene storyboards, generates AI voiceovers, overlays synchronized subtitles, and automates video assembly with FFmpeg.",
    features: [
      "Seamless AI API integration for intelligent content creation",
      "High-quality video output with automatic rendering",
      "Download support for generated videos",
      "Modern, intuitive user interface",
      "Secure authentication for personalized experience",
      "Fast generation with optimized pipelines"
    ],
    metrics: [
      { label: "Render Acceleration", value: "4.2x" },
      { label: "Production Cost", value: "-90%" },
      { label: "Video Resolutions", value: "1080p / 4K" }
    ],
    tech: ["React", "Vite", "Node.js", "Express", "FFmpeg", "Tailwind CSS", "Groq AI", "REST API"],
    github: "https://github.com/ritiksingh-121/Ai_Video_Generator",
    live: "https://github.com/ritiksingh-121/Ai_Video_Generator#readme",
    architecture: {
      frontend: "React 18 Video Canvas Studio",
      backend: "Node.js Queue + FFmpeg Rendering Cluster",
      database: "PostgreSQL Video Metadata Store",
      aiWorker: "Neural Voice TTS + Storyboard LLM"
    }
  },
  "location-tracker": {
    title: "GeoPulse Telemetry Engine",
    tagline: "High-Frequency Real-Time Fleet & Coordinate Tracking Network",
    overview: "A bi-directional, WebSocket-based geo-tracking engine capable of streaming location telemetry, route interpolation, and geofence boundary events at sub-50ms latency.",
    problem: "Standard HTTP polling for live vehicle or asset tracking causes severe server overhead, stale coordinates, battery drain, and poor customer live-tracking experiences.",
    solution: "Architected a lightweight Socket.io pipeline with binary coordinate compression, client-side dead reckoning interpolation, and real-time Leaflet vector map rendering.",
    features: [
      "Sub-50ms real-time coordinate streaming",
      "Interactive Leaflet vector map with smooth marker animation",
      "Geofencing trigger alerts and polygon boundaries",
      "Historical route replay with speed telemetry",
      "Optimized lightweight mobile client library"
    ],
    metrics: [
      { label: "Socket Ping Latency", value: "< 35ms" },
      { label: "Payload Overhead", value: "-70%" },
      { label: "Concurrent Nodes", value: "10,000+" }
    ],
    tech: ["Node.js", "Socket.io", "Leaflet", "Express", "Redis", "Docker"],
    github: "https://github.com/ritiksingh-121/location-tracker",
    live: "https://github.com/ritiksingh-121/location-tracker#readme",
    architecture: {
      frontend: "Leaflet.js + WebSockets Client",
      backend: "Socket.io Clustered Gateway",
      database: "Redis In-Memory Coordinate Buffer",
      aiWorker: "Geofence Polygon Computation Worker"
    }
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECT_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-[#09090B]">
        <div className="text-center p-8">
          <h2 className="text-3xl font-bold text-zinc-950 dark:text-white">Project not found</h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2">The project you are looking for does not exist.</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 hover:underline font-semibold"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090B] text-zinc-900 dark:text-zinc-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="absolute top-[10%] left-[5%] w-[50%] h-[50%] rounded-full aurora-1 opacity-20 pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full aurora-2 opacity-15 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400 font-mono">
              Engineering Case Study
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-3 text-zinc-950 dark:text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-600 dark:text-zinc-300 max-w-2xl">
              {project.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violet-600 text-white hover:bg-violet-500 font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/30"
              >
                <ExternalLink size={17} />
                Launch Live App Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white font-bold text-sm transition-all duration-300 hover:scale-105 active:scale-95 shadow-md"
              >
                <FaGithub size={17} />
                GitHub Repository
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Bar */}
      {project.metrics && (
        <section className="py-8 bg-zinc-100/60 dark:bg-[#0E0E14] border-b border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
                  <span className="text-3xl font-extrabold text-zinc-950 dark:text-white block font-display">
                    {m.value}
                  </span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5 block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Overview Section */}
      <section className="py-16 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
              Overview
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
              Project Architecture & Purpose
            </h2>
            <p className="mt-6 text-base text-zinc-700 dark:text-zinc-300 max-w-4xl leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution Grid */}
      <section className="py-16 border-b border-zinc-200 dark:border-zinc-900/60 bg-zinc-50/50 dark:bg-zinc-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-red-200 dark:border-red-900/30 bg-red-50/50 dark:bg-red-950/10 shadow-sm"
            >
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-4">The Challenge</h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-3xl border border-emerald-200 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-950/10 shadow-sm"
            >
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">The Solution</h3>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Topology Diagram */}
      {project.architecture && (
        <section className="py-16 border-b border-zinc-200 dark:border-zinc-900/60">
          <div className="max-w-6xl mx-auto px-6">
            <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
              System Topology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white mb-8">
              Component Architecture & Data Flow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 text-xs font-bold mb-2">
                  <Cpu size={16} />
                  <span>Frontend / Client</span>
                </div>
                <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                  {project.architecture.frontend}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-2">
                  <Server size={16} />
                  <span>Backend Gateway</span>
                </div>
                <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                  {project.architecture.backend}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-2">
                  <Database size={16} />
                  <span>Database Layer</span>
                </div>
                <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                  {project.architecture.database}
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-zinc-800 shadow-sm">
                <div className="flex items-center gap-2 text-amber-500 text-xs font-bold mb-2">
                  <Cloud size={16} />
                  <span>AI & Workers</span>
                </div>
                <span className="text-xs text-zinc-800 dark:text-zinc-200 font-medium">
                  {project.architecture.aiWorker}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 border-b border-zinc-200 dark:border-zinc-900/60">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white mb-8">
            Key Engineering Features
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-sm"
              >
                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-b border-zinc-200 dark:border-zinc-900/60 bg-zinc-50/50 dark:bg-zinc-950/30">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            Stack
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white mb-8">
            Technologies Applied
          </h2>

          <div className="flex flex-wrap gap-2.5">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/80 shadow-sm"
              >
                <TechLogo name={t} size={14} />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-extrabold text-zinc-950 dark:text-white">
            Need a Similar AI or Real-Time System Built?
          </h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            We architect and ship production software in 4 to 8 week milestone sprints.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-violet-600 text-white hover:bg-violet-500 font-bold text-sm transition-all duration-300 hover:scale-105 shadow-xl shadow-violet-600/30"
            >
              <ExternalLink size={16} />
              Open Live App
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 font-bold text-sm transition"
            >
              Start a Project Conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
