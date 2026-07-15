import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Award, BookOpen, Target, Sparkles, Code2, HeartHandshake } from "lucide-react";

const TABS = [
  { id: "journey", label: "My Journey", icon: <Sparkles size={16} /> },
  { id: "education", label: "Education", icon: <BookOpen size={16} /> },
  { id: "facts", label: "Quick Facts", icon: <Code2 size={16} /> },
  { id: "goals", label: "Career Goals", icon: <Target size={16} /> },
];

function About() {
  const [activeTab, setActiveTab] = useState("journey");

  const timeline = [
    {
      year: "2024 – Present",
      title: "Full Stack Developer",
      subtitle: "Freelancer & Open Source Contributor",
      desc: "Architecting web interfaces and backends. Building tools for the developer community and optimizing database logic.",
    },
    {
      year: "2023 – 2024",
      title: "Exploring System Design & Core DSA",
      subtitle: "Academic Focus",
      desc: "Delved into complex Data Structures, Algorithms, Databases, and structural system patterns.",
    },
    {
      year: "2023",
      title: "Started B.Tech CSE",
      subtitle: "MAHARANA PRATAP ENGINEERING COLLEGE,KANPUR",
      desc: "Initiated my official computer science training. Discovered a strong passion for web technologies and responsive designs.",
    },
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      inst: "MAHARANA PRATAP ENGINEERING COLLEGE,KANPUR",
      period: "2023 – Present",
      grade: "COMPUTER SCIENCE AND ENGINEERING",
      desc: "Rigorous focus on software engineering, computer architectures, databases (DBMS), structures, and full-stack integration.",
    },
  ];

  const quickFacts = [
    { label: "Development Focus", val: "MERN Stack (React, Node, Express, MongoDB)" },
    { label: "Algorithms Activity", val: "500+ LeetCode problems solved" },
    { label: "Design Principle", val: "Premium, minimal, interactive aesthetics" },
    { label: "Operating System", val: "Linux / Windows Shell environment" },
    { label: "Core Values", val: "Clean architecture, modular widgets, unit logic" },
    { label: "Interests", val: "System Design, Real-time trackers" },
  ];

  const goals = [
    {
      title: "Mastering Distributed Architecture",
      desc: "Diving deeper into distributed systems, load balancing, caching layers (Redis), and microservice message brokers (RabbitMQ/Kafka)."
    },
    {
      title: "Creative Development Integration",
      desc: "Blending rich frontend physics, 3D interaction (Three.js/WebGL), and premium interface aesthetics into everyday web tooling."
    },
    {
      title: "Community Value Contributions",
      desc: "Publishing useful npm open-source templates, code boilerplate setups, and performance optimizations for developers worldwide."
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-zinc-50 dark:bg-[#0A0A0F] scroll-mt-16 border-t border-zinc-200 dark:border-zinc-900/60">

      {/* Glow spots */}
      <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] rounded-full aurora-3 opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">

        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-violet-600 dark:text-violet-400">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-2 text-zinc-950 dark:text-white">
            Engineering Systems,
            <span className="block sm:inline sm:ml-2 bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
              Not Just Interfaces.
            </span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base">
            I bridge the gap between sophisticated backend infrastructure logic and visual interfaces designed with precision.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Panel: Profile Intro Summary card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="p-8 rounded-3xl border border-zinc-200/60 dark:border-zinc-800/60 glass shadow-md">
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-4 flex items-center gap-2">
                <HeartHandshake className="text-violet-600 dark:text-violet-400" size={20} />
                Hi, I'm Ritik
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                I am a dedicated Computer Science student focused on software engineering standards and real-world system design.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                I believe that good software isn't just about functional code — it is about the experience, execution speed, and scalability.
              </p>
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Quality Code Focus</h4>
                  <p className="text-xs text-zinc-500">Adhering to DRY and clean structures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Tabs block */}
          <div className="lg:col-span-8">

            {/* Tabs List */}
            <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3 mb-8">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${activeTab === tab.id
                      ? "text-violet-600 dark:text-white"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300"
                    }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="aboutActiveTab"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className="absolute inset-0 bg-violet-600/10 dark:bg-zinc-800/80 rounded-full border border-violet-600/20 dark:border-zinc-700/50 -z-10"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab content area with transition */}
            <div className="min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >

                  {/* Journey Tab */}
                  {activeTab === "journey" && (
                    <div className="relative pl-6 border-l border-zinc-200 dark:border-zinc-800 space-y-10">
                      {timeline.map((item, index) => (
                        <div key={index} className="relative group">
                          {/* timeline dot */}
                          <span className="absolute -left-[31px] top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white dark:bg-[#0A0A0F] border-2 border-violet-600 group-hover:bg-violet-600 transition duration-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover:bg-white" />
                          </span>
                          {/* content */}
                          <div className="flex items-center gap-2 text-xs font-bold text-violet-600 dark:text-violet-400">
                            <Calendar size={12} />
                            {item.year}
                          </div>
                          <h4 className="text-lg font-bold text-zinc-950 dark:text-white mt-1">
                            {item.title}
                          </h4>
                          <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mt-0.5">
                            {item.subtitle}
                          </p>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Education Tab */}
                  {activeTab === "education" && (
                    <div className="flex flex-col gap-6">
                      {education.map((edu, index) => (
                        <div key={index} className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-[#18181B]/40 hover:border-violet-500/30 transition duration-300">
                          <div className="flex justify-between items-start gap-4">
                            <div>
                              <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">{edu.period}</span>
                              <h4 className="text-xl font-bold text-zinc-950 dark:text-white mt-1">{edu.degree}</h4>
                              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{edu.inst}</p>
                            </div>
                            <span className="px-3 py-1 text-xs font-semibold rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400">
                              {edu.grade}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed">
                            {edu.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Quick Facts Tab */}
                  {activeTab === "facts" && (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {quickFacts.map((fact, index) => (
                        <div key={index} className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-[#18181B]/40 hover:scale-[1.01] hover:border-violet-500/30 transition duration-300">
                          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">{fact.label}</span>
                          <span className="text-sm sm:text-base font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">{fact.val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Career Goals Tab */}
                  {activeTab === "goals" && (
                    <div className="grid gap-6">
                      {goals.map((goal, index) => (
                        <div key={index} className="flex gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-[#18181B]/40">
                          <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mt-1">
                            <Target size={16} />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-950 dark:text-white text-base">{goal.title}</h4>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">{goal.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
