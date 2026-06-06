import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const links = ["home", "about", "project", "contact"];
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        h-14 sm:h-16
        bg-white/80 dark:bg-black/80
        backdrop-blur-md
        text-zinc-900 dark:text-white
        font-bold
        flex items-center
        justify-center sm:justify-end
        px-4 sm:px-10
        z-50
      "
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {links.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="
              uppercase
              text-sm sm:text-base md:text-lg lg:text-xl
              px-2 py-1 sm:px-3 sm:py-1.5
              rounded-md
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(52,150,4,0.9)]
              hover:-translate-y-0.5
              active:scale-95
            "
          >
            {item}
          </a>
        ))}

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="
            ml-2 p-2 rounded-xl
            text-zinc-600 dark:text-zinc-300
            hover:text-cyan-600 dark:hover:text-cyan-400
            hover:bg-gray-100 dark:hover:bg-white/10
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-cyan-500/50
          "
        >
          {theme === "dark" ? (
            <FiSun className="text-xl sm:text-2xl" />
          ) : (
            <FiMoon className="text-xl sm:text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
