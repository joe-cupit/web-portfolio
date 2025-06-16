import icons from "../../../assets/icons";


export default function Skills({ ref, skills } : { ref: React.RefObject<HTMLElement|null>; skills: string[] }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">Skills & Tools</h2>
      <div className="cv-section__skills">
        {skills.map((skill, index) => (
          <div key={index} className="cv-skills_skill">
            <div className="cv-skills_skill-icon">
              {icons[skill.toLowerCase()]}
            </div>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
