import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-black/20 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">SumiraGP</span>
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-purple-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <Image
            src="/profile.jpg"
            alt="Profile picture"
            width={180}
            height={180}
            className="rounded-full mb-8 mx-auto ring-4 ring-purple-500/30"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
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
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors">
              Contact Me
            </button>
            <button className="px-8 py-3 border border-purple-600 rounded-full hover:bg-purple-600/10 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add Project Cards */}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add Skill Items */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-xl mx-auto">{/* Add Contact Form */}</div>
        </div>
      </section>
    </main>
  );
}
