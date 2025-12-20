import React from "react";
import { FaGithub, FaLinkedin,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  const socials = [
    { icon: <FaGithub />, url: "https://github.com/ritiksingh-121" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ritik-kumar-singh-1784a328a/" },
    {
    icon: <MdEmail />,
    url: "mailto:ritikkumarsinghdeo6@gmail.com",
  },
  {
    icon: <FaWhatsapp />,
    url: "https://wa.me/918677275869", // replace with your number
  },
    
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-full bg-[#020014] flex items-center justify-center overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.15),transparent_40%)]"></div>

      {/* content */}
      <div className="relative z-10 text-center px-6">
        {/* NAME */}
        <h1 className="text-9xl md:text-7xl font-bold tracking-wide
               bg-gradient-to-r from-red-600 to-red-400
               bg-clip-text text-transparent
               drop-shadow-[0_0_25px_rgba(239,68,68,0.25)]">
  RITIK KUMAR SINGH
</h1>


        {/* ROLE */}
        <p className="mt-4 text-3xl text-zinc-300 tracking-wide font-bold">
  Full-Stack Developer & Problem Solver
</p>


        {/* TAGLINE */}
        <p className="mt-8 max-w-x text-xl   text-white leading-relaxed font-bold">
  I build clean, scalable web applications with a strong focus on <span></span>
   <span className="text-cyan-400">frontend quality</span>, <span className="text-cyan-400">backend logic</span>, and <span className="text-cyan-400">problem-solving.</span>
</p>


      
        

        {/* SOCIALS */}
       <div className="mt-10 flex gap-6 justify-center">
  {socials.map((item, i) => (
    <a
      key={i}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-100 text-6xl
                 transition-all duration-300
                 hover:shadow-[0_0_45px_rgba(12,190,248,1)] hover:-translate-y-1 "
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
