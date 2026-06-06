import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profileImg from "../assets/ritik.png";

function Hero() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/ritiksingh-121" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/" },
    { icon: <MdEmail />, url: "mailto:ritikkumarsinghdeo6@gmail.com" },
    { icon: <FaWhatsapp />, url: "https://wa.me/918677275869" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-[#f8f9fa] dark:bg-[#0a0a0f] text-zinc-900 dark:text-white flex items-center px-6 md:px-16"
    >
      <div className="grid md:grid-cols-2 gap-10 w-full items-center">
        {/* LEFT SIDE — INFO */}
        <div className="flex flex-col justify-center">
          <p className="text-cyan-600 dark:text-cyan-400 mb-3 text-lg">
            Hi, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Ritik Kumar Singh
          </h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-zinc-600 dark:text-zinc-300">
            Full Stack Developer
          </h2>

          <p className="mt-6 text-zinc-500 dark:text-zinc-400 max-w-xl">
            I build scalable, clean, and performance-focused web applications.
            Focused on real-world problem solving and strong system design.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-5 mt-8 text-2xl text-zinc-600 dark:text-zinc-400">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.url}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — PROFILE IMAGE */}
        <div className="flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-20"></div>

            {/* image */}
            <img
              src={profileImg}
              alt="Ritik Kumar Singh"
              className="
                relative w-full h-full
                object-cover
                object-top
                rounded-full
                border border-gray-200 dark:border-white/20
                shadow-xl
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
