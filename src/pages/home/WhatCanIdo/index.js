import React from "react"
import Webster from './webster.png';
import "./WhatCanIdo.scss"

const WhatCanIdo = () => (
  <div className="what-can-i-do">
    <div className="what-can-i-do__content">
      <div className="what-can-i-do__header">
        <h1>Recent Freelance Work</h1>
        <div className="what-can-i-do__header-pill" />
        {/* <p className="what-can-i-do__header-description">
          If you are an individual, or small to medium size business that is looking for
          a website, or bespoke software solution then I may be what you are looking for.
          I can provide great solution's for a range of needs such as eccomerce, blogs, booking systems and more.
          Feel free to get in touch, even if its just for a chat or advice.
        </p> */}
      </div>
      <div className="what-can-i-do__recent-work">
        <div className="what-can-i-do__recent-work-description">
          <h3 className="what-can-i-do__recent-work-description-header">
            Webster Fire Protection
          </h3>
          <a className="what-can-i-do__recent-work-description-link" target="_blank" href="https://www.websterfireprotection.co.uk" />
          <p className="what-can-i-do__recent-work-description-text">
            If you are an individual, or small to medium size business that is
            looking for a website, or bespoke software solution then I may be
            what you are looking for. I can provide great solution's for a range
            of needs such as eccomerce, blogs, booking systems and more. Feel
            free to get in touch, even if its just for a chat or advice.
          </p>
        </div>
        <div className="what-can-i-do__recent-work-img">
          <img src={Webster} />
        </div>
      </div>
    </div>
  </div>
)

export default WhatCanIdo
