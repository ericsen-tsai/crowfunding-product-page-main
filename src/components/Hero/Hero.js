import React from "react"

import Navbar from "./Navbar"
import Logo from "../../images/logo.svg"

import "./Hero.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__nav">
        <img src={Logo} alt="logo" className="hero__logo" />
        <Navbar />
      </div>
    </div>
  )
}

export default Hero
