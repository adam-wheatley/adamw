import React from 'react';
import './ContactForm.scss';

const ContactForm = () => (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control contact-form__control"
              name="name"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control contact-form__control"
              name="telephpne"
              placeholder="Telephone"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control contact-form__control"
              name="message"
              placeholder="Leave a message"
            />
          </div>
          <button type="submit" className="contact-form__btn">
            Submit
          </button>
        </form>
)

export default ContactForm