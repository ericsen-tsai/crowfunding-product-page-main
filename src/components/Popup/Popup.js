import React from "react"

import PopupCard from "./PopupCard"

import "./Popup.scss"

const Popup = () => {
  return (
    <div className="popup">
      <div className="popup__content">
        <i className="popup__close-icon" />
        <h1 className="popup__title">Back this project</h1>
        <p className="popup__description">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <PopupCard
          description="Choose to support us without a reward if you simply believe in our project. As a backer, 
          you will be signed up to receive product updates via email."
        />
        <PopupCard
          title="Bamboo"
          description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
          left="101"
          minimum="25"
          isDisabled={false}
        />
        <PopupCard
          title="Black Edition"
          description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included."
          left="64"
          minimum="75"
          isDisabled={false}
        />
        <PopupCard
          title="Mahogany Special"
          description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included."
          left="0"
          minimum="200"
          isDisabled={true}
        />
      </div>
    </div>
  )
}

export default Popup
