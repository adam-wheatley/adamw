import React from 'react';
import barber from './barber.png';
import './CaseStudies.scss';

const CaseStudies = () => {
    return (
        <div className="case-studies">
        <div className="case-studies__header">
          <h1>Case Studies</h1>
          <div className="about__header-pill mx-auto"></div>
        </div>
        <div className="container">
          <div className="row case-studies__info">
            <div className="col">
              <h1>Barber Booking System</h1>
              <div className="about__header-pill"></div>
              <p className="case-studies__info-description"> Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that aim's to provide hiqh quality, unqiue & custom web solutions to fit your needs.</p>
              <a className="case-studies__info-description-link" href="">Read more...</a>
            </div>
            <div className="col text-center">
              <img src={barber} height="250" className="case-studies__info-img" />
            </div>
          </div>
          <div className="row case-studies__info">

          <div className="col text-center">
            <img src={barber} height="250" className="case-studies__info-img" />
          </div>
          <div className="col">
            <h1>Barber Booking System</h1>
            <div className="about__header-pill"></div>
            <p className="case-studies__info-description"> Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that aim's to provide hiqh quality, unqiue & custom web solutions to fit your needs.</p>
            <a className="case-studies__info-description-link" href="">Read more...</a>
          </div>
        </div>

        <div className="row case-studies__info">
            <div className="col">
              <h1>Barber Booking System</h1>
              <div className="about__header-pill"></div>
              <p className="case-studies__info-description"> Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that aim's to provide hiqh quality, unqiue & custom web solutions to fit your needs.</p>
              <a className="case-studies__info-description-link" href="">Read more...</a>
            </div>
            <div className="col text-center">
              <img src={barber} height="250" className="case-studies__info-img" />
            </div>
          </div>

        </div>
      </div>
    );
}

export default CaseStudies;
