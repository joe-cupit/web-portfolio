import { Link } from "react-router";
import CVEntry from "./Entry";


export default function Projects({ ref } : { ref: React.RefObject<HTMLElement|null> }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">Projects</h2>
      <CVEntry
        imageUrl="/images/wonderlane-b9-odQi5oDo-unsplash.jpg"
        name="Wainroutes.co.uk - Lake District Walks"
        desc="Built a React web app for planning and exploring Wainwright walks in the Lake District, featuring an interactive GPX route editor. Automated weather updates with Python scripts pulling data from the Met Office API, and optimised performance by serving static files via Cloudflare R2 with a custom worker."
        tools={["React", "JavaScript", "Python", "Cloudflare R2", "Met Office API"]}
      />
      <CVEntry
        imageUrl="/images/wonderlane-b9-odQi5oDo-unsplash.jpg"
        name="A Software Tool to Illustrate Graph Colouring"
        desc="Created a Python-based research tool for experimenting with and benchmarking graph colouring algorithms. Included features like random graph generation, side-by-side algorithm comparison, and visual performance analysis across varying graph types. Backed by independent research and a first-class academic report on algorithm efficiency and real-world applicability."
        tools={["Python", "CherryPy", "JavaScript", "HTML & CSS"]}
      />
      <CVEntry
        imageUrl="/images/wonderlane-b9-odQi5oDo-unsplash.jpg"
        name="Epidemic Simulator"
        desc="Built an interactive Python app using Tkinter to simulate the spread of infectious diseases under different conditions like population density and intervention strategies. Used multithreading to support real-time simulation and responsive user interaction, with parallel runs for visual comparison."
        tools={["Python", "TKinter", "Matplotlib"]}
      />
      <Link to="/projects" className="cv-section__link">View All Projects</Link>
    </section>
  )
}
