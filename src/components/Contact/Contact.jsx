import React, { useState } from "react";
import "./Contact.css";

// =========================================================
// ICONS
// =========================================================

const Icon = ({ name, size = 20 }) => {
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
      <path d="M7.2 3.8 5.4 5.6c-.8.8-.8 2.1-.3 3.1 1.9 3.9 5.1 7.1 9 9 .9.5 2.3.5 3.1-.3l1.8-1.8c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.5-.5-1.2-.6-1.8-.2l-1.6 1.1a14.4 14.4 0 0 1-3.8-3.8l1.1-1.6c.4-.6.3-1.3-.2-1.8L9.3 3.8c-.6-.6-1.5-.6-2.1 0Z" />
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
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    directions: (
      <>
        <path d="M12 2.8 21.2 12 12 21.2 2.8 12Z" />
        <path d="M9.5 13.5v-2a1 1 0 0 1 1-1h4" />
        <path d="m13 8.5 2 2-2 2" />
      </>
    ),
  };

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name]}
    </svg>
  );
};

// =========================================================
// CONTACT DETAILS
// =========================================================

const details = [
  {
    icon: "pin",
    title: "Visit Our Clinic",
    name: "Anchan Clinic",
    text: "Arjuna Complex, Dhanvantari Road, NH 66, Padubidri, Karnataka - 574 111",
  },
  {
    icon: "building",
    title: "Manufacturing Unit",
    name: "Anchan Ayurvedic Industries (R.)",
    text: "Dhanvantari Road, NH 66, Padubidri, Karnataka - 574 111",
  },
  {
    icon: "phone",
    title: "Phone",
    link: { href: "tel:08202555161", label: "0820 255 5161" },
    text: "Contact our clinic",
  },
  {
    icon: "mobile",
    title: "Mobile",
    link: { href: "tel:+919448445440", label: "+91 94484 45440" },
    text: "Call us for enquiries",
  },
];

// =========================================================
// CONTACT SECTION
// =========================================================

const Contact = () => {
  const [sent, setSent] = useState(false);

  // NOTE: this form is not connected to email or a server yet —
  // it only shows a thank-you message.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
  };

  return (
    <section className="contact-section" id="contact-section">

      {/* =================================================
          FORM (left) + DETAILS (right)
      ================================================= */}
      <div className="contact-body">

        {/* ---------- form ---------- */}
        <div className="contact-form-col" data-aos="fade-up">
          <h2 className="contact-title">
            Get in <span>Touch</span>
          </h2>

          <p className="contact-intro">
            Have a question about our Ayurvedic products, treatments, or
            services? Send us a message and our team will be happy to
            assist you.
          </p>

          {sent ? (
            <div className="contact-thanks" role="status">
              <span className="contact-thanks-icon">
                <Icon name="check" size={28} />
              </span>
              <h3>Thank you for reaching out</h3>
              <p>
                Thank you for contacting Anchan Ayurvedic Industries. We
                will get back to you soon.
              </p>
              <button
                type="button"
                className="contact-again"
                onClick={() => setSent(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field contact-field--full">
                <label htmlFor="firstName">First name</label>
                <div className="contact-control">
                  <span className="contact-control-icon"><Icon name="user" /></span>
                  <input type="text" id="firstName" name="firstName"
                    placeholder="Enter your first name" autoComplete="given-name" required />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="email">Email address</label>
                <div className="contact-control">
                  <span className="contact-control-icon"><Icon name="mail" /></span>
                  <input type="email" id="email" name="email"
                    placeholder="you@example.com" autoComplete="email" required />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="phone">Phone number</label>
                <div className="contact-control">
                  <span className="contact-control-icon"><Icon name="phone" /></span>
                  <input type="tel" id="phone" name="phone"
                    placeholder="Your phone number" autoComplete="tel" required />
                </div>
              </div>

              <div className="contact-field contact-field--full">
                <label htmlFor="message">What do you have in mind?</label>
                <div className="contact-control contact-control--area">
                  <span className="contact-control-icon"><Icon name="message" /></span>
                  <textarea id="message" name="message"
                    placeholder="Tell us how we can help you..." rows="5" required />
                </div>
              </div>

              <button type="submit" className="contact-submit">
                Send Message
                <span className="contact-submit-icon">
                  <Icon name="arrow" size={18} />
                </span>
              </button>
            </form>
          )}
        </div>

        {/* ---------- details ---------- */}
        <aside className="contact-info-col" data-aos="fade-up" data-aos-delay="100">
          <h3 className="contact-info-title">Reach Us</h3>
          <p className="contact-info-text">
            We welcome you to connect with Anchan Ayurvedic Industries and
            experience the wisdom of Ayurveda. Visit our clinic or
            manufacturing unit for more information.
          </p>

          <ul className="contact-rows">
            {details.map((item) => (
              <li key={item.title} className="contact-row">
                <span className="contact-row-icon">
                  <Icon name={item.icon} />
                </span>
                <div className="contact-row-body">
                  <span className="contact-row-label">{item.title}</span>
                  {item.name && <strong>{item.name}</strong>}
                  {item.link && (
                    <a href={item.link.href} className="contact-row-link">
                      {item.link.label}
                    </a>
                  )}
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <a
            className="contact-site"
            href="https://www.anchanayurveda.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="globe" size={18} />
            www.anchanayurveda.com
          </a>
        </aside>
      </div>
      {/* =================================================
          MAP — full width, address card floating on it
      ================================================= */}
      <div className="contact-hero">
        <iframe
          className="contact-hero-map"
          title="Anchan Ayurvedic Industries Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3306022592883!2d74.771067!3d13.141534299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcb270653272bd%3A0xd37b75f5fc70f389!2sAnchan%20Ayurvedic%20Industries!5e0!3m2!1sen!2sin!4v1788274209507!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        <div className="contact-hero-inner">
          <div className="contact-hero-card" data-aos="fade-up">
            <span className="contact-hero-pin">
              <Icon name="pin" size={22} />
            </span>
            <div>
              <h3>Anchan Ayurvedic Industries</h3>
              <p>Dhanvantari Road, NH 66, Padubidri, Karnataka - 574 111</p>
              <a
                className="contact-hero-link"
                href="https://www.google.com/maps/dir/?api=1&destination=Anchan+Ayurvedic+Industries+Padubidri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="directions" size={18} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;
