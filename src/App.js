import React from "react"

import Hero from "./components/Hero/Hero"
import BackCard from "./components/BackCard/BackCard"
import Tracker from "./components/Tracker/Tracker"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Hero />
      <BackCard />
      <Tracker />
    </div>
  )
}

export default App
