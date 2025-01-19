import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiArduino,
  SiGit,
  SiDocker,
  SiLinux,
  SiCplusplus,
} from "react-icons/si";
import { BiMobileAlt } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { JSX } from "react";

export interface Skill {
  name: string;
  icon: JSX.Element;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "IoT"
    | "Programming Languages";
}

export const skillsData: Skill[] = [
  // Frontend
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-[#F7DF1E]" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" />,
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    category: "Frontend",
  },

  // Backend
  {
    name: "Python",
    icon: <SiPython className="text-[#3776AB]" />,
    category: "Backend",
  },
  {
    name: "Node.js",
    icon: <FaServer className="text-[#339933]" />,
    category: "Backend",
  },

  // Database
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-[#47A248]" />,
    category: "Database",
  },

  // DevOps
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    category: "DevOps",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-[#2496ED]" />,
    category: "DevOps",
  },
  {
    name: "Linux",
    icon: <SiLinux className="text-white" />,
    category: "DevOps",
  },

  // IoT
  {
    name: "Arduino",
    icon: <SiArduino className="text-[#00979D]" />,
    category: "IoT",
  },
  {
    name: "Mobile Apps",
    icon: <BiMobileAlt className="text-[#4CAF50]" />,
    category: "IoT",
  },

  // Programming Languages
  {
    name: "C++",
    icon: <SiCplusplus className="text-[#00599C]" />,
    category: "Programming Languages",
  },
  {
    name: "Java",
    icon: <SiTypescript className="text-[#007396]" />,
    category: "Programming Languages",
  },
];
