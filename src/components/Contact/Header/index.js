import React from "react"
import NavigationBar from "./../../../components/Nav"
import BackgroundSection from "../../Home/Header/BackgroundSection"
import "./Header.scss"

const Header = () => (
  <BackgroundSection
    style={{
      width: "100%",
      backgroundRepeat: "repeat-y",
      backgroundImage: `linear-gradient( 109.6deg,  rgba(83,94,161,1) 44.5%, rgba(188,14,107,1) 100.2% );`,
    }}
    imageName="bg2.jpg"
  >
    <div className="contact-header">
      <NavigationBar />
        <h1 className="contact-header__title">Get in touch</h1>
        <p className="contact-header__description">
          If you are interested in hiring me, <br />
          or just have some questions please get in touch.
        </p>
      </div>
      <div className="container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-header__form"
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
  </BackgroundSection>
)

export default Header
