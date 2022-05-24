import React from "react"

import StandCard from "./StandCard"

import "./Stand.scss"

const Stand = () => {
  return (
    <div className="stand">
      <h2 className="stand__title">About this project</h2>
      <p className="stand__description">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <br />
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <StandCard
        title="Bamboo"
        description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
        left="101"
        minimum="25"
        isDisabled={false}
      />
      <StandCard
        title="Black Edition"
        description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
          member list. Shipping is included."
        left="64"
        minimum="75"
        isDisabled={false}
      />
      <StandCard
        title="Mahogany Special"
        description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
          to our Backer member list. Shipping is included."
        left="0"
        minimum="200"
        isDisabled={true}
      />
    </div>
  )
}

export default Stand
