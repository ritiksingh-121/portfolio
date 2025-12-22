import React from "react";

function Navbar() {
  const links = ["home", "about", "project", "contact"];

  return (
    <nav
      className="
        fixed top-0 left-0 w-full
        h-14 sm:h-16
        bg-black/80 backdrop-blur-md
        text-white font-bold
        flex items-center
        justify-center sm:justify-end
        px-4 sm:px-10
        z-50
      "
    >
      <div className="flex gap-3 sm:gap-4 md:gap-6">
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
      </div>
    </nav>
  );
}

export default Navbar;
