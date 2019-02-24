import React from "react";
import './Header.scss';

const ContactHeader = () => {
  return (
    <div className="contact-header">
      <div className="contact-header__header">
        <h1 className="contact-header__header-title">Get in touch</h1>
        <p className="contact-header__header-description">
          If you are interested in hiring me, <br />
          or just have some questions please get in touch.
        </p>
        <section className="contact-header">
        <div className="container">
          <form
            className="contact-header__form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control contact-header__form-control"
                name="name"
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control contact-header__form-control"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control contact-header__form-control"
                name="telephpne"
                placeholder="Telephone"
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control contact-header__form-control"
                name="message"
                placeholder="Leave a message"
              />
            </div>
            <button type="submit" className="contact-header__form-btn">
              Submit
            </button>
          </form>
        </div>
      </section>
      </div>
    </div>
  )
}

export default ContactHeader
