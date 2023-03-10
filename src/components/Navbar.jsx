import React, { useState } from "react"
import Logo from "../assets/images/logo.svg"
import Burger from "../assets/images/icon-menu.svg"
import Close from "../assets/images/icon-menu-close.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={isOpen ? "navbar navbar-active" : "navbar"}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li className="nav-link">Home</li>
        <li className="nav-link">New</li>
        <li className="nav-link">Popular</li>
        <li className="nav-link">Trending</li>
        <li className="nav-link">Categories</li>
      </ul>
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <>
            <img src={Close} alt="X" />
          </>
        ) : (
          <>
            <img src={Burger} alt="Menu" />
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
