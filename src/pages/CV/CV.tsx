import { useEffect, useRef, useState } from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

import CVJson from "../../assets/cv.json";
import Skills from "./sections/Skills";


export type ExperienceType = {
  title: string;
  subtitle?: string;
  dates: [string, string];
  description: string;
  tools: string[];
  link?: string;
}
export type ProjectType = {
  title: string;
  subtitle?: string;
  imageUrl: string;
  description: string;
  tools: string[];
  gitLink?: string;
  siteLink?: string;
}

type CVType = {
  name: string;
  tag: string;
  intro: string;
  sections: {
    about: string[];
    experience: ExperienceType[];
    projects: ProjectType[];
    skills: string[];
  }
}


export default function CV() {

  const data = CVJson as CVType;

  const [currentSection, setCurrentSection] = useState("about");

  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const navSections = [
    {section: "about", ref: aboutRef},
    {section: "projects", ref: projectsRef},
    {section: "experience", ref: experienceRef},
  ]

  const scrollToSection = (secName: string) => {
    switch (secName) {
      case "about":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    function checkSection() {
      const currentScroll = document.scrollingElement?.scrollTop ?? 0;
      const selected = navSections.find(({ ref }) => {
        const ele = ref.current;
        if (ele) {
          return currentScroll + 30 < (ele.offsetTop + ele.getBoundingClientRect().height);
        }
      })

      if (selected) setCurrentSection(selected.section);
      else setCurrentSection("projects");
    }

    setTimeout(checkSection, 100);

    window.addEventListener("scroll", checkSection);
    return () => {
      window.removeEventListener("scroll", checkSection);
    }
  }, [])


  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") ?? "light");
  const setTheme = (theme: string) => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
    localStorage.setItem("theme", theme);
    setCurrentTheme(theme);
  }


  return (
    <div className="cv-page">
      <header className="cv__header">
        <div className="cv__header-top">
          <h1 className="title">{data.name}</h1>
          <p className="subtitle">{data.tag}</p>
          <p className="cv__header-desc">{data.intro}</p>

          <nav className="cv__nav">
            <ul>
              <li><button onClick={() => scrollToSection("about")} data-active={currentSection === "about"}>About</button></li>
              <li><button onClick={() => scrollToSection("projects")} data-active={currentSection === "projects"}>Projects</button></li>
              <li><button onClick={() => scrollToSection("experience")} data-active={currentSection === "experience"}>Experience</button></li>
            </ul>
          </nav>
        </div>
        <div className="cv__socials">
          <a href="https://github.com/joe-cupit" target="_blank" title="Joe Cupit on GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 496 512" fill="currentColor"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/joe-cupit/" target="_blank" title="Joe Cupit on LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 448 512" fill="currentColor"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
          </a>
          <a href="./cv.pdf" target="_blank" title="Full CV PDF">
            <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 384 512" fill="currentColor"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM112 256l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
          </a>
          <button onClick={() => setTheme((currentTheme == "light") ? "dark" : "light")} title="Switch Theme">
            {(currentTheme === "light")
              ? <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg>
            }
          </button>
        </div>
      </header>
      <main className="cv__main">
        <About ref={aboutRef} paragraphs={data.sections.about} />
        <Projects ref={projectsRef} projects={data.sections.projects} />
        <Experience ref={experienceRef} experience={data.sections.experience} />
        <Skills ref={skillsRef} skills={data.sections.skills} />

        <div className="cv__main__bottom">
          <div>Layout inspired by <a href="https://brittanychiang.com/" target="_blank">brittanychiang.com</a></div>
          <div>Joe Cupit, 2025</div>
        </div>
      </main>
    </div>
  )
}

