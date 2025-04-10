
export default function Projects() {
  return (
    <main className="projects-page">
      <div className="title-group">
        <h1 className="title">My Work</h1>
        <p className="subtitle">A collection of projects & designs</p>
      </div>

      <ul className="projects-list">
        <Project />
        <Project />
        <Project />
      </ul>
    </main>
  )
}


function Project() {

  return (
    <li className="project">
      <div className="project-details">
        <h2>Project title</h2>
        <p>description</p>
      </div>
      <div className="project-showcase">
        project screenshot
      </div>
    </li>
  )
}
