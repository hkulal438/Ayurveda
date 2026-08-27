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
              <span>→</span>
            </a>

          </div>


          {/* =================================================
              GET IN TOUCH
          ================================================== */}

          <div className="footer-column footer-contact">

            <h3>GET IN TOUCH</h3>

            <div className="footer-title-line"></div>


            {/* Address */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ⌖
              </div>

              <div className="contact-content">

                <span className="contact-label">
                  ADDRESS
                </span>

                <p>
                  [CLIENT ADDRESS]
                </p>

              </div>

            </div>


            {/* Phone */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                ☎
              </div>

              <div className="contact-content">

                <span className="contact-label">
                  PHONE
                </span>

                <p>
                  [CLIENT PHONE]
                </p>

              </div>

            </div>


            {/* Email */}

            <div className="footer-contact-item">

              <div className="contact-icon">
                @
              </div>

              <div className="contact-content">

                <span className="contact-label">
                  EMAIL
                </span>

                <p>
                  [CLIENT EMAIL]
                </p>

              </div>

            </div>


            {/* Enquire */}

            <a
              href="#contact"
              className="footer-enquire"
            >
              <span>ENQUIRE NOW</span>
              <b>→</b>
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