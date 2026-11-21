import React from "react";
import { Link } from "react-router-dom";
import "./Dranchan.css";

import gmp from "../../images/gmp.png";
import ayush from "../../images/AYUSH Federation of India - Karnataka Logo.png";
import doc from "../../images/anchan1.png";

const Dranchan = () => {
  return (
    <section className="dr-anchan-section" id="dr-anchan-section">
      <div className="dr-anchan-container">

        {/* =====================================================
            LEFT SIDE — photo, caption, certifications
        ===================================================== */}
        <div className="dr-anchan-left" data-aos="fade-right">

          <div className="dr-anchan-image-wrap">
            <div className="dr-anchan-image-box">
              <img src={doc} alt="Dr. N. T. Anchan in his Ayurvedic clinic" />
            </div>

          </div>

          {/* ================= CERTIFICATIONS ================= */}
          <div className="dr-certifications">
            <div className="dr-cert-card" data-aos="fade-up" data-aos-delay="200">
              <img src={ayush} alt="AYUSH Federation of India Karnataka" />
            </div>

            <div className="dr-cert-card" data-aos="fade-up" data-aos-delay="300">
              <img src={gmp} alt="Good Manufacturing Practice Certification" />
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — content
        ===================================================== */}
        <div className="dr-anchan-content" data-aos="fade-left">

          <span className="dr-anchan-label" data-aos="fade-up">
            Dr. N. T. Anchan
          </span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            A Lifetime Dedicated
            <span>to Ayurveda</span>
          </h2>

          <div className="dr-green-line" data-aos="fade-right" data-aos-delay="150"></div>

          <p data-aos="fade-up" data-aos-delay="200">
            For more than four decades,{" "}
            <strong>Dr. Narayana T. Anchan</strong> has dedicated his life to
            the practice and advancement of Ayurveda.
          </p>

          <p data-aos="fade-up" data-aos-delay="300">
            Following in the footsteps of his father,{" "}
            <strong>Pandit Thoma Poojary</strong>, Dr. Anchan has combined
            traditional Ayurvedic knowledge with formal education and
            extensive clinical experience.
          </p>

          <p data-aos="fade-up" data-aos-delay="400">
            Since beginning his practice in <strong>1980</strong>, he has worked
            with patients across India and developed herbal formulations
            inspired by the health challenges he encountered in clinical
            practice.
          </p>

          {/* ================= QUOTE ================= */}
          <div className="dr-quote" data-aos="fade-up" data-aos-delay="500">
            <span className="dr-quote-mark" aria-hidden="true">“</span>
            <p>
              To make safe, accessible and authentic Ayurvedic healthcare
              available to more people.
            </p>
          </div>

          {/* ================= BUTTON ================= */}
          <Link
            to="/contact"
            className="dr-anchan-button"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Meet Dr. Anchan
            <span className="dr-anchan-button-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                  strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dranchan;
