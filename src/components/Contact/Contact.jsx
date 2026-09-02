import React from "react";
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Anchan Ayurvedic Industries. We will get back to you soon."
    );

    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact">

      {/* Background Decorations */}
      <div className="contact-bg-shape contact-bg-shape-one"></div>
      <div className="contact-bg-shape contact-bg-shape-two"></div>
      <div className="contact-bg-leaf contact-leaf-one">❧</div>
      <div className="contact-bg-leaf contact-leaf-two">❧</div>

      <div className="contact-container">

        {/* =====================================================
            LEFT SIDE - CONTACT FORM
        ====================================================== */}

        <div className="contact-form-card">

          <div className="contact-form-heading">

            <span className="contact-overline">
              ANCHAN AYURVEDIC INDUSTRIES
            </span>

            <h1>
              Get in <span>Touch</span>
            </h1>

            <div className="contact-heading-line"></div>

            <p>
              Have a question about our Ayurvedic products, treatments,
              or services? Send us a message and our team will be happy
              to assist you.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* FIRST NAME */}
            <div className="contact-field">

              <label htmlFor="firstName">
                FIRST NAME
              </label>

              <div className="contact-input-wrapper">

                <span className="contact-input-icon">
                  ✦
                </span>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  autoComplete="given-name"
                  required
                />

              </div>

            </div>


            {/* EMAIL */}
            <div className="contact-field">

              <label htmlFor="email">
                EMAIL ADDRESS
              </label>

              <div className="contact-input-wrapper">

                <span className="contact-input-icon">
                  ✉
                </span>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  required
                />

              </div>

            </div>


            {/* PHONE */}
            <div className="contact-field">

              <label htmlFor="phone">
                PHONE NUMBER
              </label>

              <div className="contact-input-wrapper">

                <span className="contact-input-icon">
                  ☎
                </span>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />

              </div>

            </div>


            {/* MESSAGE */}
            <div className="contact-field">

              <label htmlFor="message">
                WHAT DO YOU HAVE IN MIND?
              </label>

              <div className="contact-textarea-wrapper">

                <span className="contact-textarea-icon">
                  ✎
                </span>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  rows="5"
                  required
                ></textarea>

              </div>

            </div>


            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="contact-submit-btn"
            >
              <span>Send Message</span>

              <span className="contact-arrow">
                →
              </span>
            </button>

          </form>

        </div>


        {/* =====================================================
            RIGHT SIDE - CONTACT INFORMATION
        ====================================================== */}

        <div className="contact-info-card">

          {/* Decorative Circle */}
          <div className="contact-info-decoration"></div>


          <div className="contact-info-content">

            <span className="contact-info-overline">
              VISIT & CONNECT
            </span>

            <h2>
              Reach <span>Us</span>
            </h2>

            <div className="contact-info-line"></div>

            <p className="contact-info-description">
              We welcome you to connect with Anchan Ayurvedic Industries
              and experience the wisdom of Ayurveda. Visit our clinic or
              manufacturing unit for more information.
            </p>


            {/* =================================================
                CLINIC ADDRESS
            ================================================== */}

            <div className="contact-information-list">

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <span>📍</span>
                </div>

                <div className="contact-information-text">

                  <h3>
                    Visit Our Clinic
                  </h3>

                  <strong>
                    Anchan Clinic
                  </strong>

                  <p>
                    Arjuna Complex, Dhanvantari Road,
                    NH 66, Padubidri, Karnataka - 574 111
                  </p>

                </div>

              </div>


              {/* =================================================
                  MANUFACTURING UNIT
              ================================================== */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <span>🏭</span>
                </div>

                <div className="contact-information-text">

                  <h3>
                    Manufacturing Unit
                  </h3>

                  <strong>
                    Anchan Ayurvedic Industries (R.)
                  </strong>

                  <p>
                    Dhanvantari Road, NH 66,
                    Padubidri, Karnataka - 574 111
                  </p>

                </div>

              </div>


              {/* =================================================
                  PHONE
              ================================================== */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <span>☎</span>
                </div>

                <div className="contact-information-text">

                  <h3>
                    Phone
                  </h3>

                  <a
                    href="tel:08202555161"
                    className="contact-detail-link"
                  >
                    0820 255 5161
                  </a>

                  <p>
                    Contact our clinic
                  </p>

                </div>

              </div>


              {/* =================================================
                  MOBILE
              ================================================== */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <span>📱</span>
                </div>

                <div className="contact-information-text">

                  <h3>
                    Mobile
                  </h3>

                  <a
                    href="tel:+919448445440"
                    className="contact-detail-link"
                  >
                    +91 94484 45440
                  </a>

                  <p>
                    Call us for enquiries
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                WEBSITE
            ================================================== */}

            <div className="contact-website">

              <div className="contact-website-icon">
                🌐
              </div>

              <div className="contact-website-content">

                <span>
                  Our Website
                </span>

                <a
                  href="https://www.anchanayurveda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.anchanayurveda.com
                </a>

              </div>

            </div>

          </div>


          {/* =====================================================
              GOOGLE MAP
          ====================================================== */}

          <div className="contact-map">

            <div className="contact-map-label">
              <span>📍</span>

              <strong>
                Anchan Ayurvedic Industries
              </strong>
            </div>

            <iframe
              title="Anchan Ayurvedic Industries Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3306022592883!2d74.771067!3d13.141534299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb270653272bd%3A0xd37b75f5fc70f389!2sAnchan%20Ayurvedic%20Industries!5e0!3m2!1sen!2sin!4v1788274209507!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;