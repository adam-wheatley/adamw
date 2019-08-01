import React from 'react';
import Deliver from './deliver.svg';
import './scss/GetStarted.scss';

const GetStarted = () => {
    return (
        <section className="get-started">
            <div className="get-started__wrapper">
                <div className="get-started__title">
                    <img src={Deliver} className="get-started__title-img" />
                </div>
                <div className="get-started__description">
                    <h1 className="get-started__description-header">Let's get started!</h1>
                    <div className="get-started__description-pill" />
                    <p className="get-started__description-text">
                       If you are interested in my services, or want to just find about me and what I can do for you then please feel free to get in touch.
                    </p>
                    <button className="get-started__button">Get in touch</button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;
