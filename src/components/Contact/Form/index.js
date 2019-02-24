import React from "react"
import "./Form.scss"

const ContactForm = () => {
  return (
    <section className="contact-form">
      <div className="container">
        <form
          className="contact-form__form"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control contact-form__form-control"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control contact-form__form-control"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control contact-form__form-control"
              name="telephpne"
              placeholder="Telephone"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control contact-form__form-control"
              name="message"
              placeholder="Leave a message"
            />
          </div>
          <button type="submit" className="contact-form__form-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
