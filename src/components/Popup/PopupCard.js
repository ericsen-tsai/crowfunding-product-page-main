import React, { useState } from "react"

import "./PopupCard.scss"

const PopupCard = ({
  title,
  description,
  left,
  minimum,
  isDisabled,
  isOpen,
  setIsFinish,
}) => {
  const [pledgeAmount, setPledgeAmount] = useState(Number(minimum))

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsFinish(true)
  }

  title = title ? `${title} Stand` : "Pledge with no reward"

  return (
    <div className={`popup__card ${isDisabled ? "popup__card--disabled" : ""}`}>
      <div className="radio__group">
        <input
          type="radio"
          className="radio-input"
          id={title}
          name="stand"
          disabled={isDisabled ? true : false}
        />
        <label htmlFor={title} className="radio-label">
          <div className="radio-span">
            <span className="radio-button"></span>
          </div>
          <div className="popup__card-info">
            <div className="popup__card-plan">
              <h5 className="popup__card-title">{title}</h5>
              <div className="popup__card-data">
                <h5 className="popup__card-minimum">
                  {minimum ? `Pledge $${minimum} or more` : ""}
                </h5>
                <h5 className="popup__card-left">
                  {left && (
                    <>
                      {`${left}`}&nbsp;
                      <span className="popup__card-left-text">left</span>
                    </>
                  )}
                </h5>
              </div>
            </div>

            <p className="popup__card-description">{description}</p>
          </div>
        </label>
      </div>
      {isOpen && (
        <div className="popup__card-pledge">
          <h3 className="popup__card-pledge-text">
            {minimum ? "Enter your pledge" : ""}
          </h3>
          <form
            className="popup__card-pledge-execution"
            onSubmit={handleSubmit}
          >
            {minimum && (
              <>
                <span className="popup__card-pledge-sign">$</span>
                <input
                  type="text"
                  min={minimum}
                  // defaultValue={minimum}
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(e.target.value)}
                  className="popup__card-pledge-input"
                />
              </>
            )}
            <button className="btn">Continue</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default PopupCard
