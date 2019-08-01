import React from 'react';
import './scss/AboutMe.scss';

const AboutMe = () => {
    return (
        <section className="about-me">
            <div className="about-me__title">
                <h1 className="about-me__title-text">Freelance Web Developer</h1>
                <div className="about-me__title-pill" />
            </div>
            <div className="about-me__description">
                <p className="about-me__description-text">
                    Hey, my name is <span className="about-me__bold">Adam</span> and I am a <span className="about-me__bold">full stack web developer</span> from Scotland based in the Glasgow Area.
                    I aim to deliver <span className="about-me__bold">high quality</span>, user friendly and modern web solutions.
                    Wether you are an inidivudal, small startup or a large business I should be able to help you with a website that you are happy with.
                </p>
            </div>
        </section>
    )
}

export default AboutMe;
