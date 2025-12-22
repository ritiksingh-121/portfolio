import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/ritiksingh-121" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ritik-kumar-singh-1784a328a/" },
    { icon: <MdEmail />, url: "mailto:ritikkumarsinghdeo6@gmail.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/918677275869" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#020014] flex items-center justify-center overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent_40%)]" />

      {/* content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
        
        {/* NAME */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
            font-bold tracking-tight sm:tracking-wide
            bg-gradient-to-r from-yellow-500 to-green-400
            bg-clip-text text-transparent
            drop-shadow-[0_0_25px_rgba(239,68,68,0.25)]
          "
        >
          RITIK KUMAR SINGH
        </h1>

        {/* ROLE */}
        <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl text-zinc-300 font-semibold">
          Full-Stack Developer & Problem Solver
        </p>

        {/* TAGLINE */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-200 leading-relaxed font-medium">
          I build clean, scalable web applications with a strong focus on{" "}
          <span className="text-cyan-400">frontend quality</span>,{" "}
          <span className="text-cyan-400">backend logic</span>, and{" "}
          <span className="text-cyan-400">problem-solving</span>.
        </p>

        {/* SOCIALS */}
        <div className="mt-8 sm:mt-10 flex gap-5 sm:gap-6 justify-center">
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-3xl sm:text-4xl md:text-5xl
                text-zinc-100
                transition-all duration-300
                hover:shadow-[0_0_35px_rgba(12,190,248,0.8)]
                hover:-translate-y-1
              "
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
