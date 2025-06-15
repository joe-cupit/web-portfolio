import InnerLink from "../../../components/Links/InnerLink";
import { ProjectEntry } from "./Entry";
import { ProjectType } from "../CV";


export default function Projects({ ref, projects } : { ref: React.RefObject<HTMLElement|null>; projects: ProjectType[] }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">Projects</h2>
      {projects.map((p, index) => {
        return <ProjectEntry key={index} data={p} />
      })}
      <InnerLink to="/projects">View All Projects</InnerLink>
    </section>
  )
}
