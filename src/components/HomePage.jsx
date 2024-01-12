import { useEffect } from "react";
import AboutMe from "./AboutMe"
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects"
import Skills from "./Skills"

function HomePage () {

useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.slice(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);


    return (
      <div>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="education">
            <Education />
        </section>
        <section id="experience">
            <Experience />
        </section>
      </div>
    );
}

export default HomePage

