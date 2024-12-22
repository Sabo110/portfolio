import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { NavBarMobile } from "@/components/NavBarMobile";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Temoignages } from "@/components/Temoignages";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <NavBarMobile />
        <HeroSection />
        <Skills />
        <Experience />
        <AboutMe />
        <Projects />
        <Temoignages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
