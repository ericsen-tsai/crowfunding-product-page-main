import React from "react"

import "./BackCardBtn.scss"

const BackCardBtn = ({ handlePopup }) => {
  return (
    <a href="#" className="btn" onClick={() => handlePopup(true)}>
      Back this project
    </a>
  )
}

export default BackCardBtn
