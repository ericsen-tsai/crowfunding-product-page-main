import React, { useState } from "react"

import "./Bookmark.scss"

const Bookmark = () => {
  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
  }

  return (
    <a
      href="#"
      className={`bookmark ${selected ? "bookmark--selected" : ""}`}
      onClick={handleClick}
    >
      <svg
        width="5.6rem"
        height="5.6rem"
        xmlns="http://www.w3.org/2000/svg"
        className={`bookmark__icon ${
          selected ? "bookmark__icon--selected" : ""
        }`}
      >
        <g fill="none" fillRule="evenodd">
          <circle fill="#2F2F2F" cx="2.8rem" cy="2.8rem" r="2.8rem" />
          <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
      {/* <img
        src={BookmarkLogo}
        alt="bookmark"
        className={`bookmark__icon ${
          selected ? "bookmark__icon--selected" : ""
        }`}
      ></img> */}
      <span className="bookmark__tag">
        {selected ? "Bookmarked" : "Bookmark"}
      </span>
    </a>
  )
}

export default Bookmark
