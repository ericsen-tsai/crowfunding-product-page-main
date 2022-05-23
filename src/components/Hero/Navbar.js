import React from "react"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__list">
        <a href="#" className="navbar__link">
          About
        </a>
      </li>
      <li className="navbar__list">
        <a href="#" className="navbar__link">
          Discover
        </a>
      </li>
      <li className="navbar__list">
        <a href="#" className="navbar__link">
          Get Started
        </a>
      </li>
    </ul>
  )
}

export default Navbar
