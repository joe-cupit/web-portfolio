import { ReactNode } from "react";


export default function OuterLink({ href, children } : { href: string; children?: ReactNode }) {
  return (
    <a href={href} target="_blank" className="outer-link">
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
    </a>
  )
}
