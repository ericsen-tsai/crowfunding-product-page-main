import React, { useState } from "react"

import Navbar from "./Navbar"
import Logo from "../../images/logo.svg"

import "./Hero.scss"

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClick = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={Logo} alt="logo" className="hero__logo" />
        {isOpen && <Navbar />}
        <div
          className={`hero__hamburger ${
            isOpen ? "hero__hamburger--close" : ""
          }`}
          onClick={handleOnClick}
        ></div>
      </div>
    </div>
  )
}

export default Hero
