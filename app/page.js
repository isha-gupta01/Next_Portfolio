import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape"; 
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import ContactSection  from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import {Experience} from "@/sections/Experience";
export default function Home() {
  return (
    <div id="home">
      <div className="z-50"><Header/></div>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <TestimonialsSection/>
      <Experience/>
      <div className="z-10"><AboutSection/></div>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
