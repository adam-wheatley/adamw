import React from "react"
import "./Contact.scss"

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__header">
        <h1 className="contact__header-title">Get in touch</h1>
        <p className="contact__header-description">
          If you are interested in hiring me, <br />
          or just have some questions please get in touch.
        </p>
      </div>
      <div className="container">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact__form"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control contact__form-control"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control contact__form-control"
              name="telephpne"
              placeholder="Telephone"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control contact__form-control"
              name="message"
              placeholder="Leave a message"
            />
          </div>
          <button type="submit" className="contact__form-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
