"use client";

import { FaGithub } from "react-icons/fa";

import {
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDjango,
  SiArduino,
  SiNextdotjs,
  SiEspressif,
  SiClerk,
  SiZod,
  SiMqtt,
  SiTailwindcss,
} from "react-icons/si";
import { BiMobileAlt } from "react-icons/bi";

import React, { JSX } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const techStackIcons: { [key: string]: JSX.Element } = {
  MongoDB: <SiMongodb className="text-[#47A248]" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
  Python: <SiPython className="text-[#3776AB]" />,
  Django: <SiDjango className="text-[#092E20]" />,
  Arduino: <SiArduino className="text-[#00979D]" />,
  NextJS: <SiNextdotjs className="text-white" />,
  ESP32: <SiEspressif className="text-[#E7352C]" />,
  GSM: <BiMobileAlt className="text-[#4CAF50]" />,
  Clerk: <SiClerk className="text-[#6C47FF]" />,
  Zod: <SiZod className="text-[#3E67B1]" />,
  MQTT: <SiMqtt className="text-[#ca0c0c]" />,
  GitHub: <FaGithub className="text-[#181717]" />,
  TailwindCSS: <SiTailwindcss className="text-[#06B6D4]" />,
};

const projectData = [
  {
    id: 1,
    title: "BPulse",
    description:
      "BPulse is a battery capacity tester that monitors current, voltage, and temperature during discharging for accurate analysis. Integrated with a Next.js web app, it enables real-time control, data visualization, and historical analysis through a user-friendly interface.",
    image: "assets/projects/bpulse.jpg",
    tech: ["NextJS", "MQTT", "MongoDB", "Arduino", "ESP32"] as const,
    github: "https://github.com/sumira/BPulse",
    demo: "",
  },
  {
    id: 2,
    title: "Aquashield",
    description:
      "AquaShield is a water leak detection system that monitors flow rates to identify sudden leaks in domestic settings. Powered by an ESP32, it provides real-time alerts and notifications, helping users prevent water wastage and damage effectively by real time monitoring.",
    image: "assets/projects/aquashield.jpg",
    tech: ["ESP32", "Arduino", "GSM"] as const,
    github: "https://github.com/sumira/AquaShield",
    demo: "",
  },
  {
    id: 3,
    title: "Institute Management System",
    description:
      "The Vishwa Institute Management System streamlines student, course, and staff management for Vishwa Institute in Balangoda, Sri Lanka. With secure authentication, role-based access, and responsive design, it offers a user-friendly platform tailored to the institute's needs.",
    image: "assets/projects/vishwa.jpg",
    tech: ["NextJS", "MongoDB", "Clerk", "Zod", "TailwindCSS"] as const,
    github: "https://github.com/sahan-chinthaka/vishwa-institute",
    demo: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <Card
              key={project.id}
              className="py-4 bg-black/40 backdrop-blur-3xl border-none hover:scale-105 transition-transform"
              isPressable
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <h4 className="font-bold text-2xl text-blue-500 font-poppins">
                  {project.title}
                </h4>
                <div className="flex gap-3 mt-2">
                  {project.tech.map((tech) => (
                    <div
                      key={tech}
                      className="text-2xl hover:scale-125 transition-transform cursor-pointer"
                      title={tech}
                    >
                      {techStackIcons[tech]}
                    </div>
                  ))}
                </div>
              </CardHeader>
              <CardBody className="overflow-visible px-4 py-4 justify-center items-center">
                <div className="w-[300px] h-[200px] relative ">
                  <Image
                    alt="Project preview"
                    className="object-cover rounded-xl "
                    src={project.image}
                  />
                </div>

                <p className="text-tiny text-white/70 mt-5 text-justify font-poppins px-2">
                  {project.description}
                </p>

                <div className="flex justify-center gap-4 mt-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-700/50 transition-colors"
                    >
                      <FaGithub className="w-6 h-6 text-gray-400 hover:text-white" />
                    </a>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
