import React from "react"

const TrackerDetail = ({ description, amount }) => {
  return (
    <div className="tracker__display-title">
      <h1 className="tracker__display-backed-number">{amount}</h1>
      <p className="tracker__display-backed-description">{description}</p>
    </div>
  )
}

export default TrackerDetail
