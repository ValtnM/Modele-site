import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'

export default function Navbar() {

  const fixNavbar = () => {
    // console.log(e.target.scrollY);
    console.log(window.scrollY);
  }

  

  return (
    <nav onScroll={() => fixNavbar()} className='navbar'>
        <ul>
            <li>
              <Link to="/">Présentation</Link>
            </li>
            <li>
              <Link to="/engagements">Engagements</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
  )
}
