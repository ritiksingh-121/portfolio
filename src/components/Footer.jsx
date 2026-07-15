import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-50 dark:bg-[#09090B] border-t border-zinc-200 dark:border-zinc-900/60 py-12">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-[20%] w-[30%] h-[30%] rounded-full aurora-1 opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-zinc-200 dark:border-zinc-900/60 pb-8">
          
          {/* Logo Brand */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-xl font-black bg-gradient-to-r from-violet-600 to-cyan-400 bg-clip-text text-transparent">
              Ritik Kumar Singh
            </h3>
            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mt-1">
              Building high-performance premium systems
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ritiksingh-121"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition duration-200"
              aria-label="GitHub Profile"
            >
              <FaGithub size={16} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition duration-200"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="mailto:ritikkumarsinghdeo6@gmail.com"
              className="p-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-950 dark:hover:text-white transition duration-200"
              aria-label="Mail Address"
            >
              <Mail size={16} />
            </a>
          </div>

        </div>

        {/* Footnotes copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs font-bold text-zinc-400 dark:text-zinc-500">
          <span>&copy; {new Date().getFullYear()} Ritik Kumar Singh. All rights reserved.</span>
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-1 hover:text-violet-600 dark:hover:text-violet-400 transition"
          >
            Back to Top
            <ArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
