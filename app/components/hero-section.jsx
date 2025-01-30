"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState, useMemo } from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

const HeroSection = () => {
  const [role, setRole] = useState("Full Stack Developer");
  const [displayText, setDisplayText] = useState("");

  const ROLES = useMemo(() => [
    "Full Stack Developer",
    "Mobile Apps Developer",
    "IoT Systems Developer"
  ], []);

  const TIMING = {
    INTERVAL: 3000,
    TYPING: 100
  };

  const rotateRole = useCallback(() => {
    setRole(currentRole => {
      const currentIndex = ROLES.indexOf(currentRole);
      return ROLES[(currentIndex + 1) % ROLES.length];
    });
  }, [ROLES]);

  useEffect(() => {
    const interval = setInterval(rotateRole, TIMING.INTERVAL);
    return () => clearInterval(interval);
  }, [rotateRole, TIMING.INTERVAL]);

  useEffect(() => {
    setDisplayText("");
    const chars = role.split("");
    const timeouts = chars.map((_, index) => 
      setTimeout(() => {
        setDisplayText(prev => prev + chars[index]);
      }, TIMING.TYPING * index)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [role, TIMING.TYPING]);

  // Memoize the cursor animation
  const cursorAnimation = useMemo(() => ({
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0] },
    transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0 }
  }), []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center flex flex-col items-center md:items-center mt-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative w-[300px] h-[300px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 p-1"
            >
              <div 
                className="absolute inset-0 rounded-full blur-md bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 opacity-60"
              />
              <div 
                className="relative w-full h-full rounded-full bg-black/50 backdrop-blur-sm overflow-hidden"
              >
                <Image
                  src="/assets/profile.png"
                  alt="Profile picture"
                  width={300}
                  height={300}
                  className="w-full object-cover object-center rounded-full"
                  priority
                />
              </div>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-5 font-poppins font-medium text-4xl md:text-5xl mb-3 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
            >
              Sumira Pathirana
            </motion.h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={role}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="font-poppins font-extralight text-xl md:text-3xl text-white mb-8 relative"
              >
                {displayText}
                <motion.span
                  {...cursorAnimation}
                  className="absolute ml-1"
                >
                  |
                </motion.span>
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:block w-1 h-80 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" 
          />

          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex-1 text-center md:text-left"
            >
              <p className="text-gray-300 leading-relaxed font-poppins font-light text-lg md:text-xl text-justify px-2">
              A passionate developer specializing in <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">full-stack development</span> and <span className="bg-gradient-to-r from-purple-500 to-indigo-600 bg-clip-text text-transparent">IoT development</span>.  
              With expertise in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">React</span>, <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">Node.js</span>, and cloud technologies, I build scalable, user-friendly applications tailored for seamless user experiences.  
              Additionally, I develop **smart, connected solutions** by integrating <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">ESP32</span>, <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">MQTT</span>, and <span className="bg-blue-700 bg-clip-text text-transparent">automation</span> for real-time monitoring and control systems.  
              Committed to delivering <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">efficient, scalable</span> solutions that bridge the gap between software and hardware innovation.
            </p>

              <div className="px-2 mt-4 flex justify-center gap-6 ">
             <a
              href="https://github.com/sumira/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaGithub size={25} />
            </a>

            <a
              href="https://www.linkedin.com/in/sumira-pathirana/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-blue-500 transition-colors"
            >
              <FaLinkedin size={25}/>
            </a>

            </div>
            </motion.div>

            

              
    
            
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default HeroSection;