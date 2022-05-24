import React from "react"

import Hero from "./components/Hero/Hero"
import BackCard from "./components/BackCard/BackCard"
import Tracker from "./components/Tracker/Tracker"
import Stand from "./components/Stand/Stand"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Hero />
      <BackCard />
      <Tracker />
      <Stand />
    </div>
  )
}

export default App
