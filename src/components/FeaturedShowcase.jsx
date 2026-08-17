import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  Mic,
  Volume2,
  CheckCircle2,
  Play,
  Pause,
  Layers,
  Cpu,
  Activity,
  ArrowRight,
  TrendingUp,
  BrainCircuit,
  MessageSquare
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function FeaturedShowcase() {
  const [activeTab, setActiveTab] = useState("voxspeak");
  const [isPlayingAudio, setIsPlayingAudio] = useState(true);
  const [interactiveScore, setInteractiveScore] = useState(94);
  const [simulatedFeedback, setSimulatedFeedback] = useState("Pronunciation: Excellent (98%) · Natural Cadence");

  // Simulated live audio wave animation
  const [waveHeights, setWaveHeights] = useState([40, 65, 85, 50, 95, 70, 45, 80, 60, 90, 55, 75]);

  useEffect(() => {
    if (!isPlayingAudio) return;
    const interval = setInterval(() => {
      setWaveHeights(
        Array.from({ length: 12 }, () => Math.floor(Math.random() * 65) + 30)
      );
    }, 180);
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const projects = {
    voxspeak: {
      id: "voxspeak",
      name: "VoxSpeak",
      badge: "Real-Time AI Voice Coach",
      tagline: "Adaptive AI English Speaking Coach with Instant Speech Prosody Feedback",
      liveUrl: "https://web-five-pi-58.vercel.app/onboarding/welcome",
      githubUrl: "https://github.com/ritiksingh-121",
      accentColor: "from-cyan-500 to-blue-600",
      stats: [
        { label: "Speech Response Time", value: "< 280ms" },
        { label: "Pronunciation Accuracy", value: "98.2%" },
        { label: "Architecture", value: "Next.js 14 + Web Audio" }
      ],
      tags: ["Next.js 14", "Web Audio API", "Groq AI", "Tailwind CSS", "PWA Ready", "Zustand"]
    },
    intervu: {
      id: "intervu",
      name: "IntervU AI",
      badge: "AI Mock Interview Platform",
      tagline: "Real-Time Speech & Technical Simulator with Dynamic Question Generation",
      liveUrl: "https://ai-interview-platform-dusky.vercel.app/",
      githubUrl: "https://github.com/ritiksingh-121/ai-interview-platform",
      accentColor: "from-violet-600 to-indigo-600",
      stats: [
        { label: "End-to-End Latency", value: "< 450ms" },
        { label: "Evaluation Criteria", value: "Multi-Factor Scoring" },
        { label: "Architecture", value: "React + WebSockets + Whisper" }
      ],
      tags: ["React", "TypeScript", "Node.js", "WebSockets", "OpenAI Whisper", "Llama 3"]
    }
  };

  const current = projects[activeTab];

  return (
    <section className="relative py-28 overflow-hidden bg-zinc-900/40 dark:bg-[#07070A] border-t border-zinc-200 dark:border-zinc-900/80 scroll-mt-16">
      {/* Background Ambient Glow */}
      <div className="absolute top-[20%] left-[10%] w-[45%] h-[45%] rounded-full aurora-1 opacity-20 pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[40%] rounded-full aurora-2 opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-600 dark:text-violet-300 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={14} className="text-cyan-400 animate-pulse" />
            <span>Interactive Flagship Innovations</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white max-w-4xl">
            Live AI Product Demonstrations
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 max-w-2xl">
            Experience our production-grade AI speech pipelines and voice simulators. Test the interactive modules below or open the live deployed applications.
          </p>

          {/* Interactive Project Switcher */}
          <div className="mt-10 p-1.5 rounded-full bg-zinc-200/80 dark:bg-zinc-900/90 border border-zinc-300/80 dark:border-zinc-800 flex items-center gap-2 shadow-inner">
            <button
              onClick={() => {
                setActiveTab("voxspeak");
                setSimulatedFeedback("Pronunciation: Excellent (98%) · Natural Cadence");
                setInteractiveScore(96);
              }}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "voxspeak"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <Mic size={16} />
              <span>VoxSpeak AI Coach</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("intervu");
                setSimulatedFeedback("Answer Clarity: 94% · Technical Depth: High");
                setInteractiveScore(92);
              }}
              className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === "intervu"
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/25 scale-105"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
              }`}
            >
              <BrainCircuit size={16} />
              <span>IntervU AI Simulator</span>
            </button>
          </div>
        </div>

        {/* Live Interactive Canvas Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Product Info & Specs (5 Cols) */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 p-8 sm:p-10 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#15151C] shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-violet-500/10 border border-violet-500/30 text-violet-600 dark:text-violet-400">
                  {current.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-500">
                  <Activity size={13} className="animate-pulse" />
                  <span>Live on Vercel</span>
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
                {current.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                {current.tagline}
              </p>

              {/* Stats Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8">
                {current.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-center"
                  >
                    <span className="font-extrabold text-lg sm:text-xl text-zinc-950 dark:text-white block font-display">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-medium">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2 mb-8">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block font-mono">
                  Engineered With:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {current.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Launch Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={current.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-xs text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r ${current.accentColor}`}
              >
                <span>Launch Live Application</span>
                <ExternalLink size={15} />
              </a>

              <a
                href={current.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition"
                aria-label="GitHub Repository"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right: Live Interactive Audio & UI Sandbox (7 Cols) */}
          <motion.div
            key={`${activeTab}-sandbox`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 p-6 sm:p-10 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:20px_20px]" />

            {/* Live Interactive Header */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-zinc-400 ml-2">
                  {activeTab === "voxspeak" ? "voxspeak.engine / speech-session" : "intervu.engine / mock-eval"}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition"
              >
                {isPlayingAudio ? <Pause size={12} className="text-cyan-400" /> : <Play size={12} className="text-emerald-400" />}
                <span>{isPlayingAudio ? "Active Stream" : "Stream Paused"}</span>
              </button>
            </div>

            {/* Central Interactive Simulation Canvas */}
            <div className="relative z-10 py-10 flex flex-col items-center justify-center space-y-8">
              {/* Dynamic Waveform Visualizer */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 h-28 w-full max-w-lg px-4">
                {waveHeights.map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${isPlayingAudio ? h : 15}%` }}
                    className={`w-2 sm:w-3 rounded-full transition-all duration-150 ${
                      activeTab === "voxspeak"
                        ? "bg-gradient-to-t from-cyan-500 to-blue-400 shadow-md shadow-cyan-500/30"
                        : "bg-gradient-to-t from-violet-600 to-purple-400 shadow-md shadow-violet-600/30"
                    }`}
                  />
                ))}
              </div>

              {/* Live AI Speech Recognition Dialogue Box */}
              <div className="w-full max-w-lg p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Volume2 size={15} />
                    <span>
                      {activeTab === "voxspeak" ? "AI Voice Coach Speaking..." : "Technical Interviewer Asking..."}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    99.4% Confidence
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-200 font-medium leading-relaxed italic">
                  {activeTab === "voxspeak"
                    ? "“Let's practice your pitch. Focus on natural emphasis on key technical metrics...”"
                    : "“Can you walk me through how you optimize database latency under 10,000 concurrent socket connections?”"}
                </p>

                {/* Real-Time Prosody & Feedback Tag */}
                <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-zinc-300 font-mono text-[11px] flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    {simulatedFeedback}
                  </span>
                  <span className="font-bold text-cyan-400 font-mono">
                    Score: {interactiveScore}%
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="relative z-10 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="text-zinc-500">Test Preset:</span>
                <button
                  onClick={() => {
                    setInteractiveScore(98);
                    setSimulatedFeedback("Pronunciation: Native Level (98%) · Perfect Prosody");
                  }}
                  className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white"
                >
                  High Accuracy
                </button>
                <button
                  onClick={() => {
                    setInteractiveScore(89);
                    setSimulatedFeedback("Cadence Alert: Slow down speech by 10% for clarity");
                  }}
                  className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white"
                >
                  Pacing Calibration
                </button>
              </div>

              <a
                href={current.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:underline font-bold"
              >
                <span>Try Complete Session</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
