import { ReactNode } from "react";
import { Link } from "react-router";


export default function InnerLink({ to, children } : { to: string; children?: ReactNode }) {
  return (
    <Link to={to} className="inner-link">
      <span>{children}</span>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
    </Link>
  )
}
