import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, CheckCircle2, ShieldCheck, Calendar } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import profileImg from "../assets/ritik.png";

export default function Hero({ onOpenBooking }) {
  const socials = [
    { icon: <FaGithub size={18} />, url: "https://github.com/ritiksingh-121", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/ritiksingh-121/", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:ritikkumarsinghdeo6@gmail.com", label: "Email" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16"
    >
      {/* Background Grid & Aurora elements */}
      <div className="absolute inset-0 bg-grid opacity-80 pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full aurora-1 opacity-40 pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full aurora-2 opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Column: Heading and Value Prop (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-7 flex flex-col text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Accepting Q3/Q4 Development Sprints
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-zinc-950 dark:text-white">
            We Build Production-Grade{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Web Apps, SaaS & AI Workflows
            </span>{" "}
            at Startup Speed.
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-xl font-normal leading-relaxed">
            From 0-to-1 MVP launches to high-throughput cloud platforms and AI automation pipelines. We partner with founders and companies to ship clean, scalable code in weeks, not quarters.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-xs sm:text-sm bg-violet-600 hover:bg-violet-500 text-white shadow-xl shadow-violet-600/30 transition duration-200 hover:scale-105 active:scale-95"
            >
              <Calendar size={16} />
              <span>Book a 20-Min Discovery Call</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => handleScrollTo("projects")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm border border-zinc-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white transition duration-200"
            >
              <Code2 size={16} className="text-violet-500" />
              <span>View Case Studies</span>
            </button>
          </div>

          {/* Socials & Trust Badges */}
          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800" />
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>100% Code & IP Ownership Guaranteed</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Architectural Visual Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 flex flex-col gap-4"
        >
          {/* Card 1: Agency Profile Card */}
          <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-xl flex items-center gap-5">
            <img
              src={profileImg}
              alt="Ritik Kumar Singh - Lead Systems Architect"
              className="w-20 h-20 rounded-2xl object-cover border-2 border-violet-500/30 shadow-md shrink-0"
            />
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Engineering Studio
              </span>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mt-0.5">Ritik Kumar Singh</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Lead Systems Architect & Full-Stack Engineer specializing in resilient cloud platforms and AI workflows.
              </p>
            </div>
          </div>

          {/* Card 2: Commercial SLA Matrix */}
          <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-[#18181B] shadow-xl space-y-3.5">
            <span className="text-[11px] font-bold text-zinc-950 dark:text-white uppercase tracking-wider block border-b border-zinc-100 dark:border-zinc-800/80 pb-2">
              Engineering SLA Standards:
            </span>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500" />
                API & Query Latency
              </span>
              <span className="font-mono font-bold text-zinc-950 dark:text-white">&lt; 50ms Target</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Average MVP Delivery
              </span>
              <span className="font-mono font-bold text-zinc-950 dark:text-white">4 – 8 Weeks</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500" />
                Production Uptime
              </span>
              <span className="font-mono font-bold text-zinc-950 dark:text-white">99.9% Uptime</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <Zap size={14} className="text-violet-500" />
                Post-Launch Code Warranty
              </span>
              <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400">30 Days Included</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
