import React from "react";
import { skillsData } from "../lib/skills-data";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="text-4xl mb-2 hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <span className="text-sm text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
