import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <ProjectShowcase />
      <TechStack />
      <Experience />
      <Blog />
      <Contact />
    </main>
  );
}
