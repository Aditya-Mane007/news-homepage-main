import React from "react"
import Image1 from "../assets/images/image-retro-pcs.jpg"
import Image2 from "../assets/images/image-top-laptops.jpg"

const Articles = () => {
  return (
    <div className="articles">
      <div className="article">
        <div className="image">
          <img src={Image1} alt="" />
        </div>
        <div className="text-section">
          <div className="no">01</div>
          <div className="title">Reviving Retro PCs</div>
          <div className="subtitle">
            What happens when old PCs are given modern upgrades?
          </div>
        </div>
      </div>
      <div className="article">
        <div className="image">
          <img src={Image2} alt="" />
        </div>
        <div className="text-section">
          <div className="no">02</div>
          <div className="title">Top 10 Laptops of 2022</div>
          <div className="subtitle">
            Our best picks for various needs and budgets.
          </div>
        </div>
      </div>
      <div className="article">
        <div className="image">
          <img src={Image1} alt="" />
        </div>
        <div className="text-section">
          <div className="no">03</div>
          <div className="title">The Growth of Gaming</div>
          <div className="subtitle">
            How the pandemic has sparked fresh opportunities.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
