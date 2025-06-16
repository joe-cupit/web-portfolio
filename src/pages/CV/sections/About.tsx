import ReactMarkdown from "react-markdown";


export default function About({ ref, paragraphs } : { ref: React.RefObject<HTMLElement|null>; paragraphs: string[] }) {
  return (
    <section className="cv-section" ref={ref}>
      <h2 className="cv-section__title">About Me</h2>
      <div className="cv-section__about">
        {paragraphs.map((p, index) => {
          return (
            <ReactMarkdown
              key={index}
              components={
                {a: ({ node, ...props }) =>
                  <a {...props} target="_blank" rel="noopener noreferrer">
                    {props.children}
                  </a>
                }
              }
            >
              {p}
            </ReactMarkdown>
          )
        })}
      </div>
    </section>
  )
}
