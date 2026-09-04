import React from "react";
import "./Footer.css";

import FooterLeaves from "../../images/footer-leaves.png";

/* =========================================================
   REUSABLE SVG ICON
   ========================================================= */

const Icon = ({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = "",
}) => {
  const commonProps = {
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
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
        <path d="M9 21v-6h6v6" />
      </>
    ),

    about: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 21c.7-3.3 3-5.2 6.5-5.2s5.8 1.9 6.5 5.2" />
      </>
    ),

    legacy: (
      <>
        <path d="M12 3v18" />
        <path d="M7 6c1.7-1.7 4.3-1.7 6 0" />
        <path d="M11 10c-1.7-1.7-4.3-1.7-6 0" />
        <path d="M13 14c1.7-1.7 4.3-1.7 6 0" />
        <path d="M11 18c-1.7-1.7-4.3-1.7-6 0" />
      </>
    ),

    products: (
      <>
        <path d="M7 4h10" />
        <path d="M8 4v3l-3 4v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8l-3-4V4" />
        <path d="M5 11h14" />
      </>
    ),

    quality: (
      <>
        <path d="m12 3 2.1 2.1 3-.1.8 2.9 2.4 1.8-1.2 2.7 1.2 2.7-2.4 1.8-.8 2.9-3-.1L12 21l-2.1-2.1-3 .1-.8-2.9-2.4-1.8 1.2-2.7-1.2-2.7L6.1 7.9l.8-2.9 3 .1L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    doctor: (
      <>
        <circle cx="12" cy="7" r="3" />
        <path d="M6 21c.5-3.5 2.5-5.5 6-5.5s5.5 2 6 5.5" />
        <path d="M18 3v4M16 5h4" />
      </>
    ),

    contact: (
      <>
        <path d="M20 11.2a7.2 7.2 0 0 1-7.5 7.2 8.2 8.2 0 0 1-3.1-.6L4 19.5l1.5-4.2a7 7 0 0 1-1.2-4.1A7.2 7.2 0 0 1 12 4a7.2 7.2 0 0 1 8 7.2Z" />
        <path d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01" />
      </>
    ),

    location: (
      <>
        <path d="M19 10.2c0 5-7 10.2-7 10.2S5 15.2 5 10.2a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10.2" r="2.2" />
      </>
    ),

    building: (
      <>
        <path d="M4 21V5a2 2 0 0 1 2-2h8v18" />
        <path d="M14 9h4a2 2 0 0 1 2 2v10" />
        <path d="M8 7h2M8 11h2M8 15h2M16 13h2M16 17h2M2 21h20" />
      </>
    ),

    phone: (
      <>
        <path d="M7.2 3.8 5.4 5.6c-.8.8-.8 2.1-.3 3.1 1.9 3.9 5.1 7.1 9 9 .9.5 2.3.5 3.1-.3l1.8-1.8c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.5-.5-1.2-.6-1.8-.2l-1.6 1.1a14.4 14.4 0 0 1-3.8-3.8l1.1-1.6c.4-.6.3-1.3-.2-1.8L9.3 3.8c-.6-.6-1.5-.6-2.1 0Z" />
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

    instagram: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.4"
          cy="6.7"
          r="0.8"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    facebook: (
      <>
        <path d="M14 21v-8h2.8l.5-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H8v3h2.5v8" />
      </>
    ),

    twitter: (
      <>
        <path d="M5 4.5 19 19.5" />
        <path d="M19 4.5 5 19.5" />
        <path d="M8.5 4.5H5l10.5 15H19L8.5 4.5Z" />
      </>
    ),

    whatsapp: (
      <>
        <path d="M20 11.7a8 8 0 0 1-11.7 7L4 20l1.4-4.1A8 8 0 1 1 20 11.7Z" />
        <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4-.1.6l-.6.7c.7 1.2 1.5 2 2.7 2.6l.6-.6c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1.1.4-1.8.2-1.3-.4-2.6-1.2-3.7-2.3-1.1-1.1-1.9-2.4-2.3-3.7-.2-.7-.1-1.4.2-1.8Z" />
      </>
    ),
  };

  return (
    <svg {...commonProps}>
      {icons[name]}
    </svg>
  );
};


/* =========================================================
   QUICK LINKS
   ========================================================= */

const quickLinks = [
  { name: "Home", target: "home", icon: "home" },
  { name: "About Us", target: "about", icon: "about" },
  { name: "Our Legacy", target: "legacy", icon: "legacy" },
  { name: "Products", target: "products", icon: "products" },
  { name: "Quality", target: "quality", icon: "quality" },
  { name: "Dr. Anchan", target: "dr-anchan", icon: "doctor" },
  { name: "Contact", target: "contact", icon: "contact" },
];


/* =========================================================
   PRODUCTS
   Hingoli REMOVED
   ========================================================= */

const products = [
  "Manasa",
  "Madhuna",
  "Madhiphala Rasayana",
  "Shwashari",
  "Nirvedhan Oil",
  "Rumovin Liniment",
  "Chyawanprash",
  "Pusti",
  "Bhrangamalaka Thaila",
  "Kumari Shampoo",
  "Aloe Vera Gel",
 
];


/* =========================================================
   FOOTER COMPONENT
   ========================================================= */

const Footer = () => {
  return (
    <footer className="anchan-footer">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="footer-bg-image"
        style={{
          backgroundImage: `url(${FooterLeaves})`,
        }}
        aria-hidden="true"
      />

      <div
        className="footer-bg-overlay"
        aria-hidden="true"
      />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="footer-container">


        {/* ===================================================
            BRAND
        ==================================================== */}

        <div className="footer-top">

          <h2 className="footer-company">
            ANCHAN AYURVEDIC INDUSTRIES
          </h2>


          <p className="footer-tagline">
            Rooted in tradition. Guided by experience.
            Committed to quality.
          </p>


          <p className="footer-description">
            Anchan Ayurvedic Industries carries forward a legacy
            of traditional Ayurvedic knowledge through authentic
            herbal formulations and quality-focused manufacturing.
          </p>


          {/* =================================================
              SOCIAL MEDIA
          ================================================== */}

          <div
            className="footer-social"
            aria-label="Social media links"
          >

            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="footer-social-link"
            >
              <Icon
                name="instagram"
                size={21}
              />
            </a>


            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="footer-social-link"
            >
              <Icon
                name="facebook"
                size={21}
              />
            </a>


            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
              className="footer-social-link"
            >
              <Icon
                name="twitter"
                size={20}
              />
            </a>


            <a
              href="#"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="footer-social-link"
            >
              <Icon
                name="whatsapp"
                size={21}
              />
            </a>

          </div>

        </div>


        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="footer-divider">
          <span></span>

          <span className="footer-divider-icon">
            <Icon
              name="legacy"
              size={15}
            />
          </span>

          <span></span>
        </div>


        {/* ===================================================
            MAIN FOOTER
        ==================================================== */}

        <div className="footer-main">


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <div className="footer-column footer-quick">

            <h3>
              QUICK LINKS
            </h3>

            <div className="footer-title-line"></div>


            <ul>

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <a href={`#${link.target}`}>

                    <span className="footer-link-icon">
                      <Icon
                        name={link.icon}
                        size={15}
                      />
                    </span>

                    <span>
                      {link.name}
                    </span>

                  </a>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              PRODUCTS
          ================================================== */}

          <div className="footer-column footer-products">

            <h3>
              OUR PRODUCTS
            </h3>

            <div className="footer-title-line"></div>


            <div className="products-grid">

              {products.map((product) => (

                <a
                  href="#products"
                  key={product}
                >

                  <span className="footer-product-icon">
                    <Icon
                      name="products"
                      size={14}
                    />
                  </span>

                  <span>
                    {product}
                  </span>

                </a>

              ))}

            </div>


            <a
              href="#products"
              className="footer-view-products"
            >

              <span>
                VIEW ALL PRODUCTS
              </span>

              <span className="footer-view-icon">
                <Icon
                  name="arrow"
                  size={17}
                />
              </span>

            </a>

          </div>


          {/* =================================================
              GET IN TOUCH
          ================================================== */}

          <div className="footer-column footer-contact">

            <h3>
              GET IN TOUCH
            </h3>

            <div className="footer-title-line"></div>


            {/* CLINIC */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <Icon
                  name="location"
                  size={20}
                />
              </div>


              <div className="contact-content">

                <span className="contact-label">
                  CLINIC ADDRESS
                </span>


                <a
                  href="https://www.google.com/maps/search/?api=1&query=Anchan+Clinic%2C+Arjuna+Complex%2C+Dhanvantari+Road%2C+NH+66%2C+Padubidri%2C+Karnataka+574111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Anchan Clinic,
                  <br />
                  Arjuna Complex, Dhanvantari Road,
                  <br />
                  NH 66, Padubidri,
                  <br />
                  Karnataka - 574111
                </a>

              </div>

            </div>


            {/* MANUFACTURING */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <Icon
                  name="building"
                  size={20}
                />
              </div>


              <div className="contact-content">

                <span className="contact-label">
                  MANUFACTURING UNIT
                </span>


                <p>
                  Anchan Ayurvedic Industries (R.),
                  <br />
                  Dhanvantari Road, NH 66,
                  <br />
                  Padubidri, Karnataka - 574111
                </p>

              </div>

            </div>


            {/* PHONE */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <Icon
                  name="phone"
                  size={20}
                />
              </div>


              <div className="contact-content">

                <span className="contact-label">
                  PHONE
                </span>


                <a
                  href="tel:08202555161"
                  className="contact-link"
                >
                  0820 255 5161
                </a>

              </div>

            </div>


            {/* MOBILE */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <Icon
                  name="mobile"
                  size={20}
                />
              </div>


              <div className="contact-content">

                <span className="contact-label">
                  MOBILE
                </span>


                <a
                  href="tel:+919448445440"
                  className="contact-link"
                >
                  +91 94484 45440
                </a>

              </div>

            </div>


            {/* WEBSITE */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                <Icon
                  name="globe"
                  size={20}
                />
              </div>


              <div className="contact-content">

                <span className="contact-label">
                  WEBSITE
                </span>


                <a
                  href="https://www.anchanayurveda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  www.anchanayurveda.com
                </a>

              </div>

            </div>


            {/* ENQUIRE */}

            <a
              href="#contact"
              className="footer-enquire"
            >

              <span>
                ENQUIRE NOW
              </span>

              <span className="footer-enquire-icon">
                <Icon
                  name="arrow"
                  size={17}
                />
              </span>

            </a>

          </div>

        </div>


        {/* ===================================================
            BOTTOM DIVIDER
        ==================================================== */}

        <div className="footer-divider footer-bottom-divider">

          <span></span>

          <span className="footer-divider-icon">
            <Icon
              name="legacy"
              size={15}
            />
          </span>

          <span></span>

        </div>


        {/* ===================================================
            COPYRIGHT
        ==================================================== */}

        <div className="footer-bottom">

          <p className="copyright">
            © 2026 Anchan Ayurvedic Industries.
            All Rights Reserved.
          </p>


          <div className="footer-legal">

            <a href="#">
              Privacy Policy
            </a>

            <span>|</span>

            <a href="#">
              Terms &amp; Conditions
            </a>

            <span>|</span>

            <a href="#">
              Disclaimer
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};


export default Footer;