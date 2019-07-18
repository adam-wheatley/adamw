import React from 'react';
import flag from './flag.png';
import ScrollAnimation from 'react-animate-on-scroll';
import './About.scss';

const About = () => {
    return (
        <div className="about">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 about__header">
                        <h1>Freelance Web Developer</h1>
                        <div className="about__header-pill"></div>
                </div>
                <div className="col-sm-12 col-md-6 about__description">
                    <p>
                        I'm Adam, a full-time web developer based in Scotland <img alt="scottish-flag" src={flag} height="25" className="mr-2" />
                        I provide bespoke web solutions for indivduals, startup's or small to medium size businesses.
                        I specialize in creating quality user expereince using modern front-end development technologies.
                        I aim to deliver solutions that are reliable, fast and secure.
                    </p>
                </div>
            </div>
            </div>
      </div>
    );
}

export default About;
