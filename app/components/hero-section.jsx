"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState, useMemo } from "react";

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
          <div className="flex-1 text-center flex flex-col items-center md:items-center">
            <Image
              src="/assets/profile.png"
              alt="Profile picture"
              width={340}
              height={340}
              className="mb-4 transition-all duration-300 hover:scale-105"
              priority
            />
            <h1 className="font-poppins font-medium text-4xl md:text-6xl mb-4 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Sumira Pathirana
            </h1>
            <AnimatePresence mode="wait">
              <motion.h2
                key={role}
                className="font-poppins font-extralight text-2xl md:text-4xl text-white mb-8 relative"
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
          
          <div className="hidden md:block w-1 h-80 bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />

          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-300 leading-relaxed font-poppins font-light text-lg md:text-xl text-justify px-2">
              A passionate developer crafting beautiful web experiences with modern technologies.
              Specializing in full-stack development with expertise in React, Node.js, and cloud technologies.
              Committed to creating efficient, scalable, and user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;