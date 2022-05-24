import React from "react"

import "./StandCard.scss"

const StandCard = ({ title, description, left, minimum, isDisabled }) => {
  return (
    <div className={`stand-card ${isDisabled ? "stand-card--disabled" : ""}`}>
      <div className="stand-card__class">
        <h3 className="stand-card__title">{`${title} Stand`}</h3>
        <p className="stand-card__minimum">{`Pledge $${minimum} or more`}</p>
      </div>
      <p className="stand-card__description">{description}</p>

      <div className="stand-card__info">
        <div className="stand-card__left">
          <h2 className="stand-card__left-num">{left}</h2>
          <p className="stand-card__left-text">left</p>
        </div>
        <a href="#" className={`btn ${isDisabled ? "btn--disabled" : ""}`}>
          {isDisabled ? "Out of stock" : "Select Reward"}
        </a>
      </div>
    </div>
  )
}

export default StandCard
