import { useEffect } from "react";
import AboutMe from "./AboutMe"
import Timeline from "./Timeline";
import Projects from "./Projects"
import Skills from "./Skills"
import ContactMe from "./ContactMe";

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
      <div className="homepage">
        <section id="aboutme">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="timeline">
            <Timeline />
        </section>
        <section id="contactme">
            <ContactMe />
        </section>
      </div>
    );
}

export default HomePage

