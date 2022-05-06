import React from 'react'
import './Navbar.scss'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li>
              <Link to="/">Présentation</Link>
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
