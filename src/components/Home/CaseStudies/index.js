import React from "react"
import barber from "./barber.png"
import Designer from './designer.svg'
import Dev from './dev.svg'
import Deploy from './deploy.svg'
import "./CaseStudies.scss"

const CaseStudies = () => {
  return (
    <div className="case-studies">
      <div className="case-studies__header">
        <h1>Services</h1>
        <div className="about__header-pill mx-auto" />
      </div>
      <div className="container">
        <div className="row case-studies__info">
          <div className="col">
            <h1>Web Design</h1>
            <div className="about__header-pill" />
            <p className="case-studies__info-description">
              If you are looking for a Hiqh Quality, Modern look and feeling website then I am the man for you. Keeping up with the newest design trends I make sure I provide web solutions that users enjoy.
              Looking for a Modern, Sleek looking Website? Keeping up with up to date trends I provide high quality user experiences.
            </p>
          </div>
          <div className="col text-center">
            <img src={Designer} height="250" className="case-studies__info-img" />
          </div>
        </div>
        <div className="row case-studies__info">
          <div className="col text-center">
            <img src={Dev} height="225" className="case-studies__info-img" />
          </div>
          <div className="col">
            <h1>Web Development</h1>
            <div className="about__header-pill" />
            <p className="case-studies__info-description">
              Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that
              aim's to provide hiqh quality, unqiue & custom web solutions to
              fit your needs.
            </p>
          </div>
        </div>

        <div className="row case-studies__info">
          <div className="col">
            <h1>Deployment</h1>
            <div className="about__header-pill" />
            <p className="case-studies__info-description">
              Using industry standard practices I create web solutions that are highly performant and deployed to fast and secure servers.
            </p>
          </div>
          <div className="col text-center">
            <img src={Deploy} height="250" className="case-studies__info-img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies
