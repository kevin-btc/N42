import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const clearForm = () => {
    document.getElementById("contact-form").reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_USER
      )
      .then(
        () => {
          alert("Message sent !");
          clearForm();
        },
        () => {
          alert("Message not sent !");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="author-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7">
            {/* Intro */}
            <div className="intro text-center">
              <span>Contact</span>
              <h3 className="mt-3 mb-0">Get In Touch</h3>
              <p>
                For any questions, complaints or anything else, send me an email
                through this form
              </p>
            </div>
            {/* Item Form */}
            <form
              id="contact-form"
              className="item-form card no-hover"
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required="required"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      cols={30}
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button className="btn w-100 mt-3 mt-sm-4">
                    <i className="icon-paper-plane mr-2" />
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
