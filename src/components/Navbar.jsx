import { Link } from 'react-router'


export default function Navbar() {
  return (
    <header className='navbar'>
      <nav className='navbar-nav'>
        <ul className='navbar-list'>
          <li><Link to="/">Home</Link></li>
          /
          <li><Link to="/projects">Projects</Link></li>
          /
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
