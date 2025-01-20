import NavBar from "./components/nav-bar";
import HeroSection from "./components/hero-section";
import Projects from "./components/project-section";
import Skills from "./components/skills-section";
import ContactUS from "./components/contact-us";
import Footer from "./components/footer";
import Education from "./components/education-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <NavBar />
      <HeroSection />
      <Education />
      <Projects />
      <Skills />
      <ContactUS />
      <Footer />
    </main>
  );
}
