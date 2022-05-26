import React, { useState } from "react"

import Hero from "./components/Hero/Hero"
import BackCard from "./components/BackCard/BackCard"
import Tracker from "./components/Tracker/Tracker"
import Stand from "./components/Stand/Stand"
import Popup from "./components/Popup/Popup"

import "./App.scss"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <Hero />
      <BackCard handlePopup={setIsOpen} />
      <Tracker />
      <Stand />
      {isOpen && <Popup handlePopup={setIsOpen} />}
    </div>
  )
}

export default App
