export default function CVEntry({ dates, imageUrl, name, desc, tools } : { dates?: string; imageUrl?: string; name: string; desc?: string; tools?: string[] }) {
  return (
    <article className="cv__entry">
      {dates && <div className="cv__entry_date">{dates}</div>}
      {imageUrl && <img src={imageUrl} className="cv__entry_img" />}

      <div className="cv__entry_main">
        <h3 className="cv__entry_title">{name}</h3>
        <p className="cv__entry_desc">{desc}</p>
        <div className="cv__entry_tools">
          {tools?.map((tool, index) => {
            return <div key={index} className="cv__entry_tool">{tool}</div>
          })}
        </div>
      </div>
    </article>
  )
}
