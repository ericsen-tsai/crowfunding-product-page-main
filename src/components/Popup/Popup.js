import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import PopupCard from "./PopupCard"
import FinishIcon from "../../images/icon-check.svg"
import { selectPlansLeft } from "../../features/trackerSlice"

import "./Popup.scss"

const plans = [
  "Pledge with no reward",
  "Bamboo Stand",
  "Black Edition Stand",
  "Mahogany Special Stand",
]

const Popup = ({ handlePopup }) => {
  const [bambooPlanLeft, setBambooPlanLeft] = useState(0)
  const [blackPlanLeft, setBlackPlanLeft] = useState(0)
  const [mahoganyPlanLeft, setMahoganyPlanLeft] = useState(0)

  const plansLeft = useSelector(selectPlansLeft)

  useEffect(() => {
    setBambooPlanLeft(plansLeft["Bamboo Stand"])
    setBlackPlanLeft(plansLeft["Black Edition Stand"])
    setMahoganyPlanLeft(plansLeft["Mahogany Special Stand"])
  }, [
    plansLeft["Bamboo Stand"],
    plansLeft["Black Edition Stand"],
    plansLeft["Mahogany Special Stand"],
  ])

  const [openPlansInput, setOpenPlansInput] = useState([
    false,
    false,
    false,
    false,
  ])
  const [isFinish, setIsFinish] = useState(false)

  const handleChange = (e) => {
    if (!e.target.id) return
    setOpenPlansInput(plans.map((plan) => plan === e.target.id))
  }

  return (
    <div className="popup" onChange={(e) => handleChange(e)}>
      {!isFinish && (
        <div className="popup__content">
          <i className="popup__close-icon" onClick={() => handlePopup(false)} />
          <h1 className="popup__title">Back this project</h1>
          <p className="popup__description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <PopupCard
            description="Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email."
            isOpen={openPlansInput[0]}
            setIsFinish={setIsFinish}
          />
          <PopupCard
            title="Bamboo"
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
            left={bambooPlanLeft}
            minimum="25"
            isDisabled={bambooPlanLeft === 0}
            isOpen={openPlansInput[1]}
            setIsFinish={setIsFinish}
          />
          <PopupCard
            title="Black Edition"
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included."
            left={blackPlanLeft}
            minimum="75"
            isDisabled={blackPlanLeft === 0}
            isOpen={openPlansInput[2]}
            setIsFinish={setIsFinish}
          />
          <PopupCard
            title="Mahogany Special"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included."
            left={mahoganyPlanLeft}
            minimum="200"
            isDisabled={mahoganyPlanLeft === 0}
            isOpen={openPlansInput[3]}
            setIsFinish={setIsFinish}
          />
        </div>
      )}
      {isFinish && (
        <div className="popup__finish">
          <img
            src={FinishIcon}
            alt="finish-icon"
            className="popup__finish-icon"
          />
          <h3 className="popup__finish-title">Thanks for your suppport!</h3>
          <p className="popup__finish-description">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed. Got it!
          </p>
          <a href="#" className="btn" onClick={() => handlePopup(false)}>
            Got it!
          </a>
        </div>
      )}
    </div>
  )
}

export default Popup
