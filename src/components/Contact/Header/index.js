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
        </div>
      </div>
  )
}

export default ContactHeader
