import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Code, Cpu, Database, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/ritik.png";

function Hero() {
  const socials = [
    { icon: <FaGithub size={20} />, url: "https://github.com/ritiksingh-121" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/" },
    { icon: <Mail size={20} />, url: "mailto:ritikkumarsinghdeo6@gmail.com" },
  ];

  const stats = [
    { value: "4+", label: "Completed Projects" },
    { value: "100+", label: "DSA Problems Solved" },
    { value: "95%", label: "Lighthouse Performance" },
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
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-zinc-50 dark:bg-[#09090B] scroll-mt-16"
    >
      {/* Background Grid & Aurora elements */}
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full aurora-1 opacity-50 pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full aurora-2 opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Left Column: Heading and Stats */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col text-left"
        >
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Opportunities
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none text-zinc-950 dark:text-white">
            Designing 
            <span className="block bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Scalable Systems
            </span>
            Building Clean Code.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl font-normal leading-relaxed">
            I am a Computer Science student and Full Stack Developer focused on building high-performance, premium web applications with clean architecture and exceptional attention to detail.
          </p>

          {/* Call to actions */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <button
              onClick={() => handleScrollTo("projects")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm bg-zinc-900 hover:bg-violet-600 text-white dark:bg-white dark:text-zinc-900 dark:hover:bg-violet-500 dark:hover:text-white transition duration-300 shadow-xl"
            >
              Explore Projects
              <ArrowUpRight size={16} />
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm border border-zinc-300 dark:border-zinc-800 bg-white/5 hover:bg-zinc-100 dark:hover:bg-zinc-900/50 text-zinc-900 dark:text-white transition duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4 mt-10">
            <span className="text-xs uppercase font-bold tracking-widest text-zinc-400">Social Connections:</span>
            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-white text-zinc-500 hover:text-zinc-950 dark:hover:text-white bg-transparent transition duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-zinc-200 dark:border-zinc-800 mt-12 pt-8">
            {stats.map((st, i) => (
              <div key={i}>
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
                  {st.value}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium leading-tight">
                  {st.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Hero Profile Image container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing Aura directly behind the profile card */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-violet-600 blur-3xl opacity-20 dark:opacity-35 pointer-events-none" />

          {/* Framer motion tilt container */}
          <motion.div
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative p-3 rounded-[32px] border border-zinc-200/80 dark:border-zinc-800/80 glass shadow-2xl"
          >
            {/* The existing image file is displayed exactly as it is, maintaining size and layout properties */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-[24px]">
              <img
                src={profileImg}
                alt="Ritik Kumar Singh"
                className="w-full h-full object-cover object-top border border-zinc-200/50 dark:border-zinc-800/50"
              />
            </div>

            {/* Decorative Floating Tech badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 p-3 rounded-2xl glass border border-zinc-200 dark:border-zinc-800 shadow-lg text-violet-600 dark:text-violet-400"
            >
              <Code size={20} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 p-3 rounded-2xl glass border border-zinc-200 dark:border-zinc-800 shadow-lg text-cyan-500"
            >
              <Cpu size={20} />
            </motion.div>
            <motion.div
              animate={{ x: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -left-8 p-3 rounded-2xl glass border border-zinc-200 dark:border-zinc-800 shadow-lg text-blue-500"
            >
              <Database size={20} />
            </motion.div>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-1/3 -right-8 p-3 rounded-2xl glass border border-zinc-200 dark:border-zinc-800 shadow-lg text-emerald-500"
            >
              <Award size={20} />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
