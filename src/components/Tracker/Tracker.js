import React, { useState } from "react"

import TrackerDetail from "./TrackerDetail"

import "./Tracker.scss"

const Tracker = () => {
  const [money, setMoney] = useState(89914)
  const [backerNum, setBackerNum] = useState(5007)
  const [days, setDays] = useState(56)
  const [percentage, setPercentage] = useState(money / 1000)

  return (
    <div className="tracker">
      <div className="tracker__display">
        <TrackerDetail
          description={"of $100,000 backed"}
          amount={`$${money.toLocaleString()}`}
        />
        <TrackerDetail
          description={"total backers"}
          amount={backerNum.toLocaleString()}
        />
        <TrackerDetail description={"days left"} amount={days} />
      </div>
      <div className="tracker__progress-bar">
        <span
          className="tracker__progress-percentage"
          style={{ width: percentage + "%" }}
        ></span>
      </div>
    </div>
  )
}

export default Tracker
