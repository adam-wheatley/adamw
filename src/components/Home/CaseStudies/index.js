import React from "react"
import Designer from './designer.svg'
import Dev from './dev.svg'
import Deploy from './deploy.svg'
import "./CaseStudies.scss"

const CaseStudies = () => {
  return (
    <div className="case-studies">
      <div className="container">
        <div className="row flex-column-reverse flex-md-row case-studies__info">
          <div className="col-sm-12 col-md-6">
            <h1>Web Design</h1>
            <div className="case-studies__header-pill" />
            <p className="case-studies__info-description">
              If you are looking for a Hiqh Quality, Modern look and feeling website then I am the man for you. Keeping up with the newest design trends I make sure I provide web solutions that users enjoy.
              Looking for a Modern, Sleek looking Website? Keeping up with up to date trends I provide high quality user experiences.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <img src={Designer} height="250" className="case-studies__info-img" />
          </div>
        </div>
        <div className="row case-studies__info">
          <div className="col-sm-12 col-md-6 text-center">
            <img src={Dev} height="225" className="case-studies__info-img" />
          </div>
          <div className="col-sm-12 col-md-6">
            <h1>Web Development</h1>
            <div className="case-studies__header-pill" />
            <p className="case-studies__info-description">
              Developed using popular open source technologies allows me to produce performant, responsive & future proof web solutions.
            </p>
          </div>
        </div>

        <div className="row flex-column-reverse flex-md-row case-studies__info">
          <div className="col-sm-12 col-md-6">
            <h1>Deployment</h1>
            <div className="case-studies__header-pill" />
            <p className="case-studies__info-description">
              Using industry standard practices I create web solutions that are highly performant and deployed to fast and secure servers.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 text-center">
            <img src={Deploy} height="250" className="case-studies__info-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
