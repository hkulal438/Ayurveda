import React from "react";
import "./Footer.css";

/* =========================================================
   FOOTER BACKGROUND
========================================================= */

import FooterLeaves from "../../images/footer-leaves.png";

/* =========================================================
   SOCIAL ICONS
========================================================= */

import InstagramIcon from "../../images/instagram.png";
import FacebookIcon from "../../images/facebook.png";
import TwitterIcon from "../../images/twitter.png";
import WhatsAppIcon from "../../images/whatsapp.png";


/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  { name: "Home", target: "home" },
  { name: "About Us", target: "about" },
  { name: "Our Legacy", target: "legacy" },
  { name: "Products", target: "products" },
  { name: "Quality", target: "quality" },
  { name: "Dr. Anchan", target: "dr-anchan" },
  { name: "Contact", target: "contact" },
];


/* =========================================================
   PRODUCTS
========================================================= */

const products = [
  "Manasa",
  "Madhuna",
  "Madhiphala Rasayana",
  "Shwashari",
  "Nirvedhan Oil",
  "Rumovin Liniment",
  "Chyawanprash",
  "Hingoli",
  "Pusti",
  "Bhrangamalaka Thaila",
  "Aloe Vera Shampoo",
  "Aloe Vera Gel",
];


const Footer = () => {
  return (
    <footer className="anchan-footer">

      {/* =====================================================
          LEAF BACKGROUND
      ====================================================== */}

      <div
        className="footer-bg-image"
        style={{
          backgroundImage: `url(${FooterLeaves})`,
        }}
      />

      <div className="footer-bg-overlay" />


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="footer-container">

        {/* ===================================================
            BRAND / INTRO
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

          <div className="footer-social">

            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="footer-social-link"
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="footer-social-link"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
              />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
              className="footer-social-link"
            >
              <img
                src={TwitterIcon}
                alt="Twitter"
              />
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              title="WhatsApp"
              className="footer-social-link"
            >
              <img
                src={WhatsAppIcon}
                alt="WhatsApp"
              />
            </a>

          </div>

        </div>


        {/* ===================================================
            DIVIDER
        ==================================================== */}

        <div className="footer-divider">
          <span></span>
          <i>✦</i>
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

            <h3>QUICK LINKS</h3>

            <div className="footer-title-line"></div>

            <ul>

              {quickLinks.map((link) => (
                <li key={link.name}>

                  <a href={`#${link.target}`}>

                    <span className="footer-arrow">
                      →
                    </span>

                    {link.name}

                  </a>

                </li>
              ))}

            </ul>

          </div>


          {/* =================================================
              PRODUCTS
          ================================================== */}

          <div className="footer-column footer-products">

            <h3>OUR PRODUCTS</h3>

            <div className="footer-title-line"></div>

            <div className="products-grid">

              {products.map((product) => (
                <a
                  href="#products"
                  key={product}
                >

                  <span className="footer-arrow">
                    →
                  </span>

                  {product}

                </a>
              ))}

            </div>

            <a
              href="#products"
              className="footer-view-products"
            >
              VIEW ALL PRODUCTS

              <span>
                →
              </span>

            </a>

          </div>


          {/* =================================================
              GET IN TOUCH
          ================================================== */}

          <div className="footer-column footer-contact">

            <h3>GET IN TOUCH</h3>

            <div className="footer-title-line"></div>


            {/* =================================================
                CLINIC ADDRESS
            ================================================== */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ⌖
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


            {/* =================================================
                MANUFACTURING UNIT
            ================================================== */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ⌖
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


            {/* =================================================
                PHONE
            ================================================== */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ☎
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


            {/* =================================================
                MOBILE
            ================================================== */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ☎
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


            {/* =================================================
                WEBSITE
            ================================================== */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                🌐
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


            {/* =================================================
                ENQUIRE
            ================================================== */}

            <a
              href="#contact"
              className="footer-enquire"
            >
              <span>
                ENQUIRE NOW
              </span>

              <b>
                →
              </b>

            </a>

          </div>

        </div>


        {/* ===================================================
            BOTTOM DIVIDER
        ==================================================== */}

        <div className="footer-divider footer-bottom-divider">
          <span></span>
          <i>✦</i>
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