{
  /* Navigation */
}
export default function NavBar() {
  return (
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
  );
}
