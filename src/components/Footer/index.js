import React from "react";
import { Link } from 'gatsby';
import './Footer.scss';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 footer__col">
              <h3>Navigation</h3>
              <div className="footer__pill" />
              <ul className="footer__list">
                <li className="footer__list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/">Work</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="footer__list-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer__col">
              <h3>Services</h3>
              <div className="footer__pill" />
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a href="/">Development</a>
                </li>
                <li className="footer__list-item">
                  <a href="/">Design</a>
                </li>
                <li className="footer__list-item">
                  <a href="/">Eccommerce</a>
                </li>
                <li className="footer__list-item">
                  <a href="/">Booking Systems</a>
                </li>
                <li className="footer__list-item">
                  <a href="/">Maintanance</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer__col">
              <h3>Contact Me</h3>
              <div className="footer__pill" />
              <h5>Click here... or</h5>
              <h5 className="footer__email">info@adamwheatley.uk</h5>
              <h5>07393507971</h5>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 footer__col">
              <h3>Summary</h3>
              <div className="footer__pill" />
              <p>
                Hey, I’m <b>Adam</b>. I am a freelance <b>web developer</b> that
                aim's to provide hiqh quality, unqiue & custom web solutions to
                fit your needs.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-copyright">
        <span>Adam Wheatley - 2019 © info@adamwheatley.uk</span>
      </div>
    </React.Fragment>
  );
};

export default Footer;
