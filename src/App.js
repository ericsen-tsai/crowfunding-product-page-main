import React from "react"

import Hero from "./components/Hero/Hero"
import BackCard from "./components/BackCard/BackCard"
import Tracker from "./components/Tracker/Tracker"
import Stand from "./components/Stand/Stand"
import Popup from "./components/Popup/Popup"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <Hero />
      <BackCard />
      <Tracker />
      <Stand />
      <Popup />
    </div>
  )
}

export default App
