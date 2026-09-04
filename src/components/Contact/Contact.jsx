import React from "react";
import "./Contact.css";

// =========================================================
// REUSABLE SVG ICON COMPONENT
// =========================================================

const Icon = ({
  name,
  size = 20,
  strokeWidth = 1.9,
  className = "",
}) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    user: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 20c.7-3.2 3.1-5 6.5-5s5.8 1.8 6.5 5" />
      </>
    ),

    mail: (
      <>
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m5 7 7 5.2L19 7" />
      </>
    ),

    phone: (
      <>
        <path d="M7.2 3.8 5.4 5.6c-.8.8-.8 2.1-.3 3.1 1.9 3.9 5.1 7.1 9 9 .9.5 2.3.5 3.1-.3l1.8-1.8c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.5-.5-1.2-.6-1.8-.2l-1.6 1.1a14.4 14.4 0 0 1-3.8-3.8l1.1-1.6c.4-.6.3-1.3-.2-1.8L9.3 3.8c-.6-.6-1.5-.6-2.1 0Z" />
      </>
    ),

    message: (
      <>
        <path d="M20 11.2a7.2 7.2 0 0 1-7.5 7.2 8.2 8.2 0 0 1-3.1-.6L4 19.5l1.5-4.2a7 7 0 0 1-1.2-4.1A7.2 7.2 0 0 1 12 4a7.2 7.2 0 0 1 8 7.2Z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </>
    ),

    pin: (
      <>
        <path d="M19 10.2c0 5-7 10.2-7 10.2S5 15.2 5 10.2a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10.2" r="2.2" />
      </>
    ),

    building: (
      <>
        <path d="M4 20V5.5A1.5 1.5 0 0 1 5.5 4H14v16" />
        <path d="M14 9h4.5A1.5 1.5 0 0 1 20 10.5V20" />
        <path d="M7.5 7.5h2M7.5 11h2M7.5 14.5h2M16.5 12.5h1.5M16.5 16h1.5M2.5 20h19" />
      </>
    ),

    mobile: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2" />
        <path d="M10.5 5h3M11 18.5h2" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17" />
        <path d="M12 3c2.2 2.4 3.2 5.4 3.2 9S14.2 18.6 12 21" />
        <path d="M12 3c-2.2 2.4-3.2 5.4-3.2 9s1 6.6 3.2 9" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
};


// =========================================================
// CONTACT COMPONENT
// =========================================================

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you for contacting Anchan Ayurvedic Industries. We will get back to you soon."
    );

    e.target.reset();
  };


  return (
    <section
      className="contact-section"
      id="contact"
    >

      {/* =====================================================
          BACKGROUND DECORATIONS
      ====================================================== */}

      <div className="contact-bg-shape contact-bg-shape-one"></div>

      <div className="contact-bg-shape contact-bg-shape-two"></div>

      <div className="contact-bg-leaf contact-leaf-one">
        ❧
      </div>

      <div className="contact-bg-leaf contact-leaf-two">
        ❧
      </div>


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


          {/* =================================================
              CONTACT FORM
          ================================================== */}

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
                  <Icon name="user" />
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
                  <Icon name="mail" />
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
                  <Icon name="phone" />
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
                  <Icon name="message" />
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

              <span>
                Send Message
              </span>


              <span className="contact-arrow">

                <Icon
                  name="arrow"
                  size={21}
                />

              </span>

            </button>

          </form>

        </div>


        {/* =====================================================
            RIGHT SIDE - CONTACT INFORMATION
        ====================================================== */}

        <div className="contact-info-card">

          {/* DECORATIVE CIRCLE */}

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
                INFORMATION LIST
            ================================================== */}

            <div className="contact-information-list">


              {/* CLINIC */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <Icon name="pin" />
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


              {/* MANUFACTURING UNIT */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <Icon name="building" />
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


              {/* PHONE */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <Icon name="phone" />
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


              {/* MOBILE */}

              <div className="contact-information-item">

                <div className="contact-information-icon">
                  <Icon name="mobile" />
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

                <Icon name="globe" />

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

              <span
                className="contact-map-pin"
                aria-hidden="true"
              >

                <Icon
                  name="pin"
                  size={14}
                />

              </span>


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