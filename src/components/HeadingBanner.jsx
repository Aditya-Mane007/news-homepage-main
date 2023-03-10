import React from "react"
import Image from "../assets/images/image-web-3-desktop.jpg"

const HeadingBanner = () => {
  return (
    <div className="banner">
      <div className="image-container">
        <img src={Image} alt="" />
      </div>
      <div className="text-section">
        <div className="title">
          <h1>
            The Bright Future of <br /> Web 3.0?
          </h1>
        </div>
        <div className="info">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
          <div className="read-more btn">READ MORE</div>
        </div>
      </div>
    </div>
  )
}

export default HeadingBanner
