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
      <Hero />
      <Divider />
      <Navbar />

      {/* HOME SECTION */}
      
<Divider />

      {/* ABOUT */}
     <Section id="about" title="">
  <div className="relative max-w-7xl mx-auto px-6">

    {/* SECTION LABEL */}
    <div className="flex items-center gap-4 mb-16">
      <span className="h-px w-20  bg-red-600"></span>
      <p className="tracking-widest text-2xl font-bold text-white uppercase">
        About Me
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

      {/* LEFT — TEXT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
          I build <span className="text-green-700">System.</span>,<br />
          not just <span className="text-red-600">interfaces.</span>
        </h2>

        <p className="text-white font-bold leading-relaxed mb-6 max-w-xl">
          I’m a Computer Science student and software developer focused on
          building clean, scalable, and production-ready web applications.
        </p>

        <p className="text-white font-bold  leading-relaxed mb-6 max-w-xl">
          I work across the stack — from crafting responsive user experiences
          to designing APIs and solving backend logic problems.
        </p>

        <p className="text-green-200 font-bold  leading-relaxed max-w-xl">
          Currently sharpening my problem-solving skills, system design
          fundamentals, and code quality.
        </p>
      </div>

      {/* RIGHT — SKILL STACK */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

        {[
         {
  title: "Frontend",
  icon: <FaCode />,
  skills: ["React", "Tailwind", "Responsive UI", "Accessibility"],
},
{
  title: "Backend",
  icon: <FaServer />,
  skills: ["Node.js", "Express", "MongoDB", "REST APIs"],
},

          {
            title: "Problem Solving",
            skills: ["DSA", "Algorithms", "DBMS", "LeetCode"],
          },
          {
            title: "Tools",
            skills: ["Git", "GitHub", "Postman", "VS Code"],
          },
        ].map((group) => (
        <div
  key={group.title}
  className="relative border border-white/10 rounded-xl p-6
             bg-[#020617]  hover:shadow-[0_0_25px_rgba(34,197,94,0.6)]

  transition"
>
  {/* TITLE + ICON */}
  <div className="flex items-center gap-3 mb-4 ">
    <span className="text-red-500 text-2xl">
      {group.icon}
    </span>
    <h3 className="text-3xl font-semibold uppercase text-green-500 text-white">
      {group.title}
    </h3>
  </div>

  {/* SKILLS */}
  <div className="flex flex-wrap gap-2">
    {group.skills.map((skill) => (
      <span
        key={skill}
        className="text- px-3 py-1 rounded-full
                   border border-white/10
                   text-white font-bold hover:text-red-400 transition"
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
                     bg-zinc-800 overflow-hidden hover:shadow-[0_0_25px_rgba(125,5,248,1)] transition
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
                Live Demo →
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
      <Section id="contact" title="Contact Details">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="text-left">
      <h2 className="text-4xl font-semibold mb-2 text-white">
        Let’s build something <span className="text-green-600">meaningful.</span>
      </h2>

      <p className="text-white font-bold leading-relaxed text-xl mb-6">
        I’m always open to discussing new opportunities,
        collaborations, or interesting ideas.
        Whether you have a project in mind, a question,
        or just want to connect — feel free to reach out.
      </p>

      
    </div>
    </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{
          aboutCards.map((item,index) => (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer"
             className="h-60 w-60 bg-zinc-800 rounded-xl flex flex-col items-center justify-center gap-4
                        hover:shadow-[0_0_25px_rgba(239,68,68,1)]
 transition transform hover:-translate-y-1 text-white uppercase font-bold">
               <div className="text-7xl text-red-600">{item.icon}</div>
              <p className="text-3xl font-semibold">{item.title}</p>

            </a>
            

          ))
        }

        </div>
      </Section>
      
      
    </>
  );
}

export default App;
