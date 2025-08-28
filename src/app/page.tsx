import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Herosection from "@/sections/Herosection";
import Projects from "@/sections/Projects";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <div id="home">
      <Herosection />
      </div>
      <div id="projects">
      <Projects />
      </div>
      <div id="about">
      <About />
      </div>
      <div id="contact">
      <Contact />
      </div>
    </div>
  );
}
