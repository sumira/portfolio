import React from 'react'
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <Image
            src="/assets/profile.jpg"
            alt="Profile picture"
            width={180}
            height={180}
            className="rounded-full mb-8 mx-auto ring-4 ring-blue-500/30"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
            Sumira Pathirana
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Full Stack Developer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
            A passionate developer crafting beautiful web experiences with
            modern technologies.
          </p>
          <div className="mt-10 flex justify-center gap-6">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
              Contact Me
            </button>
            <button className="px-8 py-3 border border-blue-600 rounded-full hover:bg-purple-600/10 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default HeroSection
