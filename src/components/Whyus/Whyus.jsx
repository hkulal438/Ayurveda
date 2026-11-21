import React from "react";
import { Link } from "react-router-dom";
import "./Whyus.css";

const ayurvedicImages = {
  center:
    "https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg",

  topLeft:
    "https://images.pexels.com/photos/30089164/pexels-photo-30089164.jpeg",

  topRight:
    "https://images.pexels.com/photos/4871301/pexels-photo-4871301.jpeg",

  bottomLeft:
    "https://images.pexels.com/photos/7615457/pexels-photo-7615457.jpeg",

  bottomRight:
    "https://images.pexels.com/photos/5480150/pexels-photo-5480150.jpeg",

  bottomCenter:
    "https://images.pexels.com/photos/29387141/pexels-photo-29387141.jpeg",
};

// image behind the "Begin Your Journey" card
const images = {
  cta: "https://images.pexels.com/photos/7615457/pexels-photo-7615457.jpeg",
};

const principles = [
  "Respect the tradition",
  "Understand the science",
  "Maintain the quality",
  "Serve with purpose",
];

const Leaf = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
    <path d="M4 20C4 12 8 6 20 4C18 16 12 20 4 20Z" />
  </svg>
);

const Whyus = () => {
  return (
    <section className="whyus-section" id="why-anchan">

      {/* =====================================================
          SECTION HEADER
      ====================================================== */}

      <div
        className="whyus-header"
        data-aos="fade-up"
      >
        <span className="whyus-label">WHY ANCHAN</span>

        <h2>Why Anchan Ayurvedic Industries?</h2>

        <p>
          A legacy of traditional Ayurvedic knowledge supported by
          responsible manufacturing and a commitment to quality.
        </p>
      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="whyus-container">

        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div className="whyus-left">

          <div
            className="whyus-content-box"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="whyus-number">01</span>

            <h3>Generations of Ayurvedic Knowledge</h3>

            <p>
              Our foundations are deeply connected to traditional
              Ayurvedic practice and the knowledge passed down
              through generations.
            </p>
          </div>


          <div
            className="whyus-content-box"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <span className="whyus-number">02</span>

            <h3>Decades of Clinical Experience</h3>

            <p>
              Our formulations are informed by extensive clinical
              experience and practical understanding of Ayurveda.
            </p>
          </div>


          <div
            className="whyus-content-box"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <span className="whyus-number">03</span>

            <h3>Quality-Focused Manufacturing</h3>

            <p>
              Quality is monitored across raw materials, production
              processes and finished Ayurvedic products.
            </p>
          </div>

        </div>


        {/* =================================================
            CENTER CIRCLE
        ================================================== */}

        <div
          className="whyus-visual"
          data-aos="zoom-in"
        >

          <div className="whyus-circle">

            {/* Center image */}

            <div className="whyus-center-image">
              <img
                src={ayurvedicImages.center}
                alt="Ayurvedic preparation"
              />
            </div>


            {/* Top Left */}

            <div className="whyus-image whyus-top-left">
              <img
                src={ayurvedicImages.topLeft}
                alt="Ayurvedic herbs"
              />
            </div>


            {/* Top Right */}

            <div className="whyus-image whyus-top-right">
              <img
                src={ayurvedicImages.topRight}
                alt="Ayurvedic ingredients"
              />
            </div>


            {/* Bottom Left */}

            <div className="whyus-image whyus-bottom-left">
              <img
                src={ayurvedicImages.bottomLeft}
                alt="Natural Ayurvedic ingredients"
              />
            </div>


            {/* Bottom Right */}

            <div className="whyus-image whyus-bottom-right">
              <img
                src={ayurvedicImages.bottomRight}
                alt="Traditional Ayurveda"
              />
            </div>


            {/* Bottom Center */}

            <div className="whyus-image whyus-bottom-center">
              <img
                src={ayurvedicImages.bottomCenter}
                alt="Ayurvedic medicine"
              />
            </div>


            {/* Center Logo */}

            <div className="whyus-logo">
              <span>A</span>
              <small>ANCHAN</small>
              <small>AYURVEDIC</small>
            </div>

          </div>

        </div>


        {/* =================================================
            RIGHT CONTENT
        ================================================== */}

        <div className="whyus-right">

          <div
            className="whyus-content-box"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <span className="whyus-number">04</span>

            <h3>Traditional Formulations</h3>

            <p>
              We respect the principles and heritage of classical
              Ayurveda while preserving the authenticity of traditional
              formulations.
            </p>
          </div>


          <div
            className="whyus-content-box"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <span className="whyus-number">05</span>

            <h3>Modern Quality Practices</h3>

            <p>
              Traditional knowledge is supported by systematic testing
              and contemporary manufacturing practices.
            </p>
          </div>


          <div
            className="whyus-content-box"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <span className="whyus-number">06</span>

            <h3>A Commitment to Accessible Ayurveda</h3>

            <p>
              Our aim is to make responsible Ayurvedic healthcare
              accessible to a wider community.
            </p>
          </div>

        </div>

      </div>


      {/* =====================================================
          2. PHILOSOPHY — statement + moving ribbon
      ===================================================== */}
      <div className="whyus-philosophy">
        <div className="whyus-philosophy-inner">
          <h2 className="whyus-heading whyus-heading--center" data-aos="fade-up">
            Ancient Knowledge.
            <span>Contemporary Responsibility.</span>
          </h2>

          <p className="whyus-philosophy-text" data-aos="fade-up" data-aos-delay="100">
            We believe Ayurveda belongs both to its heritage and to the
            future. Our responsibility is to preserve the wisdom of
            traditional Ayurveda while continuously improving the way
            Ayurvedic products are manufactured, tested and presented to the
            modern world.
          </p>

          <p className="whyus-approach" data-aos="fade-up" data-aos-delay="200">
            This is our approach to Ayurveda.
          </p>
        </div>

        {/* scrolling ribbon of the four principles */}
        <div className="whyus-ribbon" aria-label="Our principles">
          <div className="whyus-ribbon-track">
            {[0, 1].map((copy) => (
              <ul
                className="whyus-ribbon-list"
                key={copy}
                aria-hidden={copy === 1 ? "true" : undefined}
              >
                {principles.map((item) => (
                  <li key={item}>
                    <Leaf />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>

      {/* =====================================================
          3. CALL TO ACTION — photo card
      ===================================================== */}
      <div className="whyus-cta-wrap">
        <div className="whyus-cta" data-aos="fade-up">
          <img className="whyus-cta-bg" src={images.cta} alt="" aria-hidden="true" loading="lazy" />

          <div className="whyus-cta-content">
            <h2 className="whyus-heading whyus-heading--light">
              Begin Your Journey
              <span>With Ayurveda</span>
            </h2>

            <p>
              Discover the formulations, knowledge and legacy behind Anchan
              Ayurvedic Industries.
            </p>

            <div className="whyus-cta-buttons">
              <Link to="/products" className="whyus-btn whyus-btn--primary">
                Explore Products
                <span className="whyus-btn-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                      strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>

              <Link to="/contact" className="whyus-btn whyus-btn--ghost">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
