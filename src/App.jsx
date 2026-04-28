import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Hero from "./components/Hero";
import Divider from "./components/Divider";
import {FaGithub,FaLinkedin,FaWhatsapp} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
import { FaCode, FaServer } from "react-icons/fa";


function App() {
  const homeCards = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind", "Responsive UI", "Accessibility"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
  },
  {
    title: "Problem Solving",
    skills: ["DSA", "LeetCode", "DBMS", "Algorithms"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];
  const aboutCards = [
    {
      title:"Github",
      icon: <FaGithub />,
      url: "https://github.com/ritiksingh-121"
    },
    { title:"linkedin",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ritik-kumar-singh-1784a328a/"
    },
    {title:"Email",
    icon: <MdEmail />,
       url: "mailto:ritikkumarsinghdeo6@gmail.com",
     },
     { title:"Whatsapp",
       icon: <FaWhatsapp />,
       url: "https://wa.me/918677275869", // replace with your number
     }
  ];
  const projects = [
  {
    title: "Location Tracker",
    description: "Real-time location tracking using sockets and maps.",
    tech: ["Node.js","CSS", "Socket.io", "Leaflet"],
    github: "https://github.com/ritiksingh-121/location-tracker",
    live: "#",
  },
  {
    title: "URL Shortener",
    description: "Shorten URLs with redirection and analytics tracking.",
    tech: ["React","REST APIs", "Node.js", "MongoDB"],
    github: "https://github.com/ritiksingh-121/URL-Shortener",
    live: "",
  },
  {
    title: "Amazon Clone",
    description: "Frontend clone with product UI and flows.",
    tech: [ "HTML","CSS"],
    github: "https://github.com/ritiksingh-121/amazon-clone",
    live: "",
  },
  {
    title: "Day Tracker",
    description: "Checks password strength in real time.",
    tech: ["JavaScript", "HTML","CSS"],
    github: "https://github.com/ritiksingh-121/Live-Tracker",
    live: " https://ritiksingh-121.github.io/Live-Tracker/",
  },
];

  

  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
    

      {/* HOME SECTION */}
     
      
      
<Divider />

      {/* ABOUT */}
     <Section id="about" title="">
  <div className="max-w-7xl  mx-auto px-6">

    {/* HEADER */}
    <div className="flex items-center gap-4 mb-16">
      <span className="h-px w-16 bg-cyan-400"></span>
      <p className="tracking-widest text-xl font-semibold text-cyan-400 uppercase">
        About Me
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-16">

      {/* LEFT — STORY */}
      <div className="relative">

        {/* vertical line */}
        <div className="absolute left-0 top-2 w-[2px] h-full bg-gradient-to-b from-cyan-400 to-transparent"></div>

        <div className="pl-6">
          <h2 className="text-4xl text-white md:text-5xl font-bold leading-tight mb-6">
            I build <span className="text-cyan-400">systems</span>, <br />
            not just <span className="text-orange-500">interfaces</span>.
          </h2>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Computer Science student focused on building scalable,
            production-ready web applications with clean architecture.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            I work across the stack — from crafting responsive UIs
            to designing APIs and solving backend logic problems.
          </p>

          <p className="text-cyan-300 font-medium">
            Currently improving <span className="text-white"> System Design, DSA, and code quality.</span>
          </p>
        </div>
      </div>

      {/* RIGHT — SKILLS */}
      <div className="grid sm:grid-cols-2 gap-6">

        {[
          {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
          },
          {
            title: "Backend",
            skills: ["Node.js", "Express", "MongoDB", "MySQL"],
          },
          {
            title: "Problem Solving",
            skills: ["DSA", "Algorithms", "LeetCode", "DBMS"],
          },
          {
            title: "Tools",
            skills: ["Git", "GitHub", "Postman", "VS Code"],
          },
        ].map((group) => (
          <div
            key={group.title}
            className="
              group p-6 rounded-xl 
              bg-white/5 backdrop-blur-lg 
              border border-white/10
              hover:scale-105 hover:-translate-y-1
              transition duration-300
            "
          >
            {/* TITLE */}
            <h3 className="text-xl font-semibold text-cyan-400 mb-4 group-hover:text-white transition">
              {group.title}
            </h3>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    text-sm px-3 py-1 rounded-full
                    border border-white/10
                    text-zinc-300
                    group-hover:text-white
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>

    </div>
  </div>
</Section>
<Divider />

      

     <Section id="project" title="Project">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative h-[380px] rounded-2xl
                     bg-zinc-800 overflow-hidden hover:shadow-[0_0_25px_rgba(125,5,248,1)] 
                     transition-transform duration-300
                     hover:-translate-y-2"
        >
          {/* DEFAULT VIEW */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
            <h3 className="text-3xl font-bold uppercase text-cyan-400 tracking-wide mb-2">
              {project.title}
            </h3>
            <p className="text-xl text-white">
              Hover to view details
            </p>
          </div>

          {/* HOVER OVERLAY */}
          <div
            className="absolute inset-0 z-20 bg-[#020617]/95
                       translate-y-full group-hover:translate-y-0
                       transition-transform duration-300
                       flex flex-col justify-center p-6"
          >
            <h3 className="text-5xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-lg text-white mb-4">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xl px-3 py-1 rounded-full
                             border border-white/10
                             text-yellow-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* LINKS */}
            <div className="flex gap-6 text-sm">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-white transition"
              >
                GitHub →
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 hover:text-red-400 transition"
              >
              
              </a>
            </div>
          </div>
        </div>
      ))}

    </div>
  </div>
</Section>
<Divider />

      {/* CONTACT */}
      <Section id="contact" title="">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT — CTA */}
    <div>
      <h2 className="text-5xl text-white  font-bold leading-tight mb-6">
        Let’s create something{" "}
        <span className="text-cyan-400">impactful</span>.
      </h2>

      <p className="text-zinc-400 text-lg max-w-xl mb-8">
        Got an idea, project, or opportunity? I’m always open to meaningful
        conversations and building real-world solutions.
      </p>

      {/* BIG CTA BUTTON */}
      <a
        href="mailto:ritikkumarsinghdeo6@gmail.com"
        className="inline-block px-8 py-4 bg-cyan-500 rounded-xl text-lg font-semibold 
                   hover:bg-cyan-400 transition shadow-[0_0_20px_rgba(0,255,255,0.4)]"
      >
        Let’s Talk →
      </a>
    </div>

    {/* RIGHT — CONTACT PANEL */}
    <div className="flex  text-white flex-col gap-6">

      {[
        {
          title: "GitHub",
          icon: <FaGithub />,
          url: "https://github.com/ritiksingh-121",
        },
        {
          title: "LinkedIn",
          icon: <FaLinkedin />,
          url: "https://linkedin.com",
        },
        {
          title: "Email",
          icon: <MdEmail />,
          url: "mailto:ritikkumarsinghdeo6@gmail.com",
        },
        {
          title: "WhatsApp",
          icon: <FaWhatsapp />,
          url: "https://wa.me/918677275869",
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group flex items-center justify-between
            p-5 rounded-xl
            bg-white/5 backdrop-blur-lg border border-white/10
            hover:scale-[1.02] hover:bg-white/10
            transition duration-300
          "
        >
          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">
            <div className="text-3xl text-cyan-400 group-hover:scale-110 transition">
              {item.icon}
            </div>
            <span className="text-lg font-medium">
              {item.title}
            </span>
          </div>

          {/* RIGHT ARROW */}
          <span className="text-zinc-400 group-hover:text-white transition">
            →
          </span>
        </a>
      ))}

    </div>

  </div>
</Section>
      
    </>
  );
}

export default App;
