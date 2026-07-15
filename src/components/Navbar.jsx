import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let observer;
    if (isHome) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          });
        },
        { rootMargin: "-40% 0px -40% 0px" }
      );

      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer) observer.disconnect();
    };
  }, [isHome]);

  const handleClick = (id) => {
    setMenuOpen(false);
    if (!isHome) {
      navigate("/#" + id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 transition-all duration-300">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 ${
          scrolled 
            ? "glass shadow-lg py-2 px-6" 
            : "bg-transparent py-4 px-6 border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleClick("home")}
            className="text-2xl font-black tracking-tighter bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition duration-300"
          >
            RS.
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id, label }) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className="relative px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition duration-300"
                >
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 bg-violet-600/10 dark:bg-white/10 rounded-full border border-violet-600/20 dark:border-white/10"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Tools (Theme, Socials, Resume) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Socials */}
            <div className="flex items-center gap-2 border-r border-zinc-200 dark:border-zinc-800 pr-4">
              <a
                href="https://github.com/ritiksingh-121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            {/* Dark Mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Resume button */}
            <a
              href="#"
              className="px-4 py-2 text-xs font-semibold rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-violet-600 dark:hover:bg-violet-500 hover:text-white dark:hover:text-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass rounded-3xl mt-2 overflow-hidden shadow-2xl border border-zinc-200/50 dark:border-zinc-800/50"
          >
            <div className="flex flex-col gap-2 p-6">
              {NAV_LINKS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`text-left py-3 px-4 rounded-xl font-semibold text-lg transition duration-200 ${
                    active === id
                      ? "bg-violet-600/10 text-violet-600 dark:bg-white/10 dark:text-white"
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="h-px bg-zinc-200 dark:bg-zinc-800 my-2" />
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/ritiksingh-121"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-zinc-600 dark:text-zinc-400"
                  >
                    <FaGithub size={22} />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-zinc-600 dark:text-zinc-400"
                  >
                    <FaLinkedin size={22} />
                  </a>
                </div>
                <a
                  href="#"
                  className="px-6 py-3 font-semibold text-sm rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-center"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
