import React from "react";
import "./Dranchan.css";

import gmp from "../../images/gmp.jpg";
import ayush from "../../images/AYUSH Federation of India - Karnataka Logo.png";
import doc from "../../images/anchan1.png";

const Dranchan = () => {
  return (
    <section
      className="dr-anchan-section"
      id="dr-anchan-section"
    >

      <div className="dr-anchan-container">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}
        <div
          className="dr-anchan-left"
          data-aos="fade-right"
        >

          {/* Doctor Image */}
          <div className="dr-anchan-image-box">

            <img
              src={doc}
              alt="Dr. N. T. Anchan"
            />

            <div className="dr-anchan-image-caption">

              <span>
                Dr. N. T. Anchan
              </span>

              <small>
                Dedicated to Ayurveda Since 1980
              </small>

            </div>

          </div>


          {/* =================================================
              CERTIFICATIONS
          ================================================= */}
          <div className="dr-certifications">

            {/* AYUSH */}
            <div
              className="certification-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <img
                src={ayush}
                alt="AYUSH Federation of India Karnataka"
              />

            </div>


            {/* GMP */}
            <div
              className="certification-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <img
                src={gmp}
                alt="Good Manufacturing Practice Certification"
              />

            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT SIDE CONTENT
        ===================================================== */}
        <div
          className="dr-anchan-content"
          data-aos="fade-left"
        >

          {/* LABEL */}
          <span
            className="dr-anchan-label"
            data-aos="fade-up"
          >
            DR. N. T. ANCHAN
          </span>


          {/* HEADING */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A Lifetime Dedicated
            <br />
            <em>to Ayurveda</em>
          </h2>


          {/* GREEN LINE */}
          <div
            className="dr-green-line"
            data-aos="fade-right"
            data-aos-delay="150"
          ></div>


          {/* PARAGRAPH 1 */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            For more than four decades,{" "}
            <strong>
              Dr. Narayana T. Anchan
            </strong>{" "}
            has dedicated his life to the practice and
            advancement of Ayurveda.
          </p>


          {/* PARAGRAPH 2 */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Following in the footsteps of his father,{" "}
            <strong>
              Pandit Thoma Poojary
            </strong>
            , Dr. Anchan has combined traditional Ayurvedic
            knowledge with formal education and extensive
            clinical experience.
          </p>


          {/* PARAGRAPH 3 */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Since beginning his practice in{" "}
            <strong>1980</strong>, he has worked with patients
            across India and developed herbal formulations
            inspired by the health challenges he encountered
            in clinical practice.
          </p>


          {/* =================================================
              QUOTE
          ================================================= */}
          <div
            className="dr-quote"
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <span className="quote-mark">
              “
            </span>

            <p>
              To make safe, accessible and authentic Ayurvedic
              healthcare available to more people.
            </p>

          </div>


          {/* =================================================
              BUTTON
          ================================================= */}
          <a
            href="#contact-section"
            className="dr-anchan-button"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Meet Dr. Anchan
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Dranchan;