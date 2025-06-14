import OuterLink from "../../../components/Links/OuterLink";
import CVEntry from "./Entry";


export default function Experience({ ref } : { ref: React.RefObject<HTMLElement|null> }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">Experience</h2>
      <CVEntry
        dates="2024 — 2025"
        name="Software Developer Intern | Vocalyse"
        desc="Worked as a Software Developer Intern on research-focused tools in forensic linguistics. Ported legacy Java apps to Python, built React-based interfaces, and deployed them with Docker on a dedicated server. Also maintained educational tools used by 100+ students, collaborated with staff on bespoke research software, and redesigned the company website to boost client engagement."
        tools={["Python", "Java", "JavaScript", "React", "Docker"]}
      />
      <CVEntry
        dates="2021 — 2024"
        name="BSc Computer Science and Mathematics | The University of Manchester"
        desc="Studied topics including machine learning, AI, software engineering, and quantum computing, with a focus on algorithm design and applied modelling. Built predictive models using neural networks in Python, and developed strong analytical skills through modules in graph theory and calculus. Worked on team software projects using Git, and authored academic reports on optimisation and mathematical modelling."
        tools={["Python", "Java", "JavaScript", "HTML & CSS", "MATLAB", "C/C++"]}
      />
      <OuterLink href="./cv/cv.pdf">View Full CV</OuterLink>
    </section>
  )
}
