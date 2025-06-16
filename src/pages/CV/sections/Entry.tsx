import { ExperienceType, ProjectType } from "../CV";


export function ExperienceEntry({ data } : { data: ExperienceType }) {
  return (
    <article className="cv__entry cv__entry-experience">
      <p className="cv__entry-date">{data.dates[0]+" – "+data.dates[1]}</p>

      <div className="cv__entry-main">
        <EntryTitle title={data.title} subtitle={data.subtitle} />
        <p className="cv__entry-desc">{data.description}</p>
        <ToolList tools={data.tools} />
      </div>
    </article>
  )
}


export function ProjectEntry({ data } : { data: ProjectType }) {
  return (
    <article className="cv__entry cv__entry-project cv__entry-main">
      <div className="cv__entry_title-group">
        <h3 className="cv__entry-title">
          {data.siteLink
            ? <a href={data.siteLink} target="_blank">{data.title}</a>
            : data.title
          }
        </h3>
        <div className="cv__entry-date">
          {data.subtitle}
        </div>
      </div>
      <p className="cv__entry-desc">{data.description}</p>

      <div className="cv__entry-images">
        {["1", "2", "3"].map((n, index) => {
          return <img key={index} src={`/images/${data.imageUrl}-${n}.png`} />
        })}
      </div>
    </article>
  )
}


function EntryTitle({ title, subtitle, horizontal=false } : { title: string; subtitle?: string; horizontal?: boolean }) {

  const titleElement = <h3 className="cv__entry-title">{title}</h3>

  return (
    subtitle 
      ? <div className={horizontal ? "cv__entry_title-group" : ""}>
          {titleElement}
          <p className="cv__entry-subtitle">
            {subtitle}
          </p>
        </div>
      : titleElement
  )
}


function ToolList({ tools } : { tools: string[] }) {
  return (
    <ul className="cv__entry-tools">
      {tools.map((tool, index) => {
        return <li key={index} className="cv__entry-tool">{tool} </li>
      })}
    </ul>
  )
}
