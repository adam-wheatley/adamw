import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import NavigationBar from './../../../components/Nav';
import './Header.scss';

const Header = () => (
    <header className="header">
        <NavigationBar />
        <div className="header__main">
            <div className="header__main__title">
                <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce>
                    <h1 className="header__main__title-text">High Quality Bespoke Web Solutions</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={1250} animateOnce>
                    <h2 className="header__main__sub-title">Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that aim's to provide hiqh quality, unqiue & custom web solutions to fit your needs.</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInUp" delay={1500} animateOnce>
                    <div className="header__main__buttons">
                        <button className="header__main__buttons-button">Get in touch</button>
                        <button className="header__main__buttons-button-alt">Find out more</button>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </header>
);

export default Header;
