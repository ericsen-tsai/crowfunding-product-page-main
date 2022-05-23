import React from "react"

import BackCardBtn from "./BackCardBtn"
import Bookmark from "./Bookmark"

import LogoMasterCraft from "../../images/logo-mastercraft.svg"
import "./BackCard.scss"

const BackCard = () => {
  return (
    <div className="back-card">
      <img
        src={LogoMasterCraft}
        alt="logo-mastercraft"
        className="back-card__logo"
      />
      <h2 className="back-card__title">Mastercraft Bamboo Monitor Riser</h2>
      <p className="back-card__description">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="back-card__interactive">
        <BackCardBtn />
        <Bookmark />
      </div>
    </div>
  )
}

export default BackCard
