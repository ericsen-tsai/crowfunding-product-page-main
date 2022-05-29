import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import TrackerDetail from "./TrackerDetail"
import {
  selectTotalAmount,
  selectTotalBacker,
} from "../../features/trackerSlice"

import "./Tracker.scss"

const Tracker = () => {
  const totalAmount = useSelector(selectTotalAmount)
  const totalBacker = useSelector(selectTotalBacker)
  const [days, setDays] = useState(56)
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    setPercentage(totalAmount / 1000)
  }, [totalAmount])

  return (
    <div className="tracker">
      <div className="tracker__display">
        <TrackerDetail
          description={"of $100,000 backed"}
          amount={`$${totalAmount.toLocaleString()}`}
        />
        <TrackerDetail
          description={"total backers"}
          amount={totalBacker.toLocaleString()}
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
