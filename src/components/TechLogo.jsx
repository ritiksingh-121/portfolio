import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiAxios,
  SiDocker,
  SiGit,
  SiVite,
  SiFramer,
  SiOpenai,
  SiSocketdotio,
  SiLeaflet,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiMysql,
  SiLinux
} from "react-icons/si";
import { FaBrain, FaServer } from "react-icons/fa";

const LOGO_MAP = {
  "React": { icon: SiReact, color: "text-cyan-400" },
  "Next.js": { icon: SiNextdotjs, color: "text-zinc-400" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "MySQL": { icon: SiMysql, color: "text-cyan-600" },
  "Linux": { icon: SiLinux, color: "text-yellow-500" },
  "Node.js": { icon: SiNodedotjs, color: "text-emerald-500" },
  "Express": { icon: SiExpress, color: "text-neutral-400" },
  "Express.js": { icon: SiExpress, color: "text-neutral-400" },
  "MongoDB": { icon: SiMongodb, color: "text-green-500" },
  "Tailwind": { icon: SiTailwindcss, color: "text-sky-400" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  "JWT": { icon: SiJsonwebtokens, color: "text-pink-500" },
  "Axios": { icon: SiAxios, color: "text-violet-500" },
  "REST API": { icon: FaServer, color: "text-blue-500" },
  "REST APIs": { icon: FaServer, color: "text-blue-500" },
  "Docker": { icon: SiDocker, color: "text-blue-400" },
  "Git": { icon: SiGit, color: "text-orange-500" },
  "Vite": { icon: SiVite, color: "text-yellow-400" },
  "Framer Motion": { icon: SiFramer, color: "text-pink-500" },
  "OpenAI/Groq AI": { icon: SiOpenai, color: "text-green-400" },
  "OpenAI": { icon: SiOpenai, color: "text-green-400" },
  "AI APIs": { icon: SiOpenai, color: "text-green-400" },
  "Groq": { icon: FaBrain, color: "text-purple-400" },
  "Socket.io": { icon: SiSocketdotio, color: "text-zinc-400" },
  "Leaflet": { icon: SiLeaflet, color: "text-green-600" },
  "HTML": { icon: SiHtml5, color: "text-orange-500" },
  "CSS": { icon: SiCss3, color: "text-blue-500" },
  "JavaScript": { icon: SiJavascript, color: "text-yellow-400" },
  "Vanilla JS": { icon: SiJavascript, color: "text-yellow-400" },
  "AI Integration": { icon: SiOpenai, color: "text-green-400" },
  "AI-powered scraping": { icon: FaBrain, color: "text-violet-400" },
};

function TechLogo({ name, size = 14 }) {
  const entry = LOGO_MAP[name];
  if (!entry) {
    return <span className="text-xs font-semibold text-zinc-500">{name}</span>;
  }
  const Icon = entry.icon;
  return (
    <span className={`inline-flex items-center gap-1.5 ${entry.color}`}>
      <Icon size={size} />
      <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-300">
        {name}
      </span>
    </span>
  );
}

export { LOGO_MAP };
export default TechLogo;
