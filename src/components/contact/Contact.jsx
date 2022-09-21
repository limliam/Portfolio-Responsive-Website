import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section_title">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Contact me for CV or interview!</h3>
          <p className="contact_details">
            The form is demo purpose only. 'Send Message' button will not send
            an actual message. Please use email to contact.
            <br />
            <br />
          </p>
          <h3 className="contact_title">Email: liam.lim@gmail.com</h3>
        </div>

        <form action="" className="contact_form">
          <div className="contact_form-group">
            {/* Name */}
            <div className="contact_form-div">
              <input
                type="text"
                className="contact_form-input"
                placeholder="Name"
              />
            </div>
            {/* Email */}
            <div className="contact_form-div">
              <input
                type="email"
                className="contact_form-input"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="contact_form-div">
            <input
              type="text"
              className="contact_form-input"
              placeholder="Subject"
            />
          </div>

          {/* Message */}
          <div className="contact_form-div contact_form-area">
            <textarea
              name=""
              id=""
              cols="30"
              role="10"
              className="contact_form-input"
              placeholder="Mesasge"
            />
          </div>

          <button className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
