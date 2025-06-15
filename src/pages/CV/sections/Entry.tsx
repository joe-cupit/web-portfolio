import { ExperienceType, ProjectType } from "../CV";


export function ExperienceEntry({ data } : { data: ExperienceType }) {
  return (
    <article className="cv__entry cv__entry-experience">
      <p className="cv__entry_date">{data.dates[0]+" – "+data.dates[1]}</p>

      <div className="cv__entry_main">
        <EntryTitle title={data.title} subtitle={data.subtitle} />
        <p className="cv__entry_desc">{data.description}</p>
        <ToolList tools={data.tools} />
      </div>
    </article>
  )
}


export function ProjectEntry({ data } : { data: ProjectType }) {
  return (
    <article className="cv__entry cv__entry-project cv__entry_main">
      <EntryTitle title={data.title} subtitle={data.subtitle} horizontal={true} />
      <p className="cv__entry_desc">{data.description}</p>
      <ToolList tools={data.tools} />
      {/* <img src={"/images/"+data.imageUrl} className="cv__entry_img" /> */}
    </article>
  )
}


function EntryTitle({ title, subtitle, horizontal=false } : { title: string; subtitle?: string; horizontal?: boolean }) {

  const titleElement = <h3 className="cv__entry_title">{title}</h3>

  return (
    subtitle 
      ? <div className={horizontal ? "cv__entry_title-group" : ""}>
          {titleElement}
          <p className="cv__entry_subtitle">
            {subtitle}
          </p>
        </div>
      : titleElement
  )
}


function ToolList({ tools } : { tools: string[] }) {
  return (
    <ul className="cv__entry_tools">
      {tools.map((tool, index) => {
        return <li key={index} className="cv__entry_tool">{tool}</li>
      })}
    </ul>
  )
}
