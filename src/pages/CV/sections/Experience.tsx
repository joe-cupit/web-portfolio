import OuterLink from "../../../components/Links/OuterLink";
import { ExperienceEntry } from "./Entry";
import { ExperienceType } from "../CV";


export default function Experience({ ref, experience } : { ref: React.RefObject<HTMLElement|null>; experience: ExperienceType[] }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">Experience</h2>
      {experience.map((e, index) => {
        return <ExperienceEntry key={index} data={e} />
      })}
      <OuterLink href="./cv.pdf">View Full CV</OuterLink>
    </section>
  )
}
