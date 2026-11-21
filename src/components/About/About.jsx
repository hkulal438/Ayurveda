import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "./About.css";

import mainImage from "../../images/ayurveda-main.png";
import herbsImage from "../../images/ayurveda-herbs.png";
import leavesImage from "../../images/ayurveda-leaves.png";
import snakeImage from "../../images/ayurveda-snake.png";

// =========================================================
// APPROACH CARDS
// =========================================================

const APPROACH = [
  {
    title: "Traditional Ayurvedic Principles",
    text: "Classical knowledge passed down through generations.",
    icon: <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 7-7" />,
  },
  {
    title: "Clinical Experience",
    text: "Years of practice in understanding real patient needs.",
    icon: (
      <>
        <path d="M6 3v5a4 4 0 0 0 8 0V3" />
        <path d="M10 12v2a5 5 0 0 0 10 0v-1" />
        <circle cx="20" cy="11" r="2" />
      </>
    ),
  },
  {
    title: "Formulation Knowledge",
    text: "Carefully prepared classical and proprietary formulations.",
    icon: (
      <>
        <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
        <path d="M7.5 15h9" />
      </>
    ),
  },
  {
    title: "Quality-Focused Manufacturing",
    text: "Systematic practices for consistent, dependable medicines.",
    icon: (
      <>
        <path d="M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="about-introduction" id="about-company-section">

        {/* ---------- corner decorations ---------- */}
        <img
          src={leavesImage}
          alt=""
          className="about-corner-leaf about-corner-leaf--tr"
          aria-hidden="true"
        />
        <img
          src={leavesImage}
          alt=""
          className="about-corner-leaf about-corner-leaf--tl"
          aria-hidden="true"
        />
        <img
          src={leavesImage}
          alt=""
          className="about-corner-leaf about-corner-leaf--bl"
          aria-hidden="true"
        />

        {/* snake & mountain — bottom-right of the section */}
        <img
          src={snakeImage}
          alt=""
          className="about-snake-art"
          aria-hidden="true"
        />

        <div className="about-intro-inner">

          {/* ---------- LEFT: deity in a golden halo ---------- */}
          <div className="about-art" data-aos="fade-right">
            <div className="about-halo" aria-hidden="true"></div>

            <img
              src={mainImage}
              alt="Ayurvedic traditional artwork"
              className="about-main-art"
            />

            <img
              src={herbsImage}
              alt=""
              className="about-herbs-art"
              aria-hidden="true"
            />
          </div>

          {/* ---------- RIGHT: content ---------- */}
          <div className="about-intro-content">
            <h2 className="about-title" data-aos="fade-up">
              Rooted in Tradition.
              <span>Crafted with Purpose.</span>
            </h2>

            <p className="about-lead" data-aos="fade-up" data-aos-delay="100">
              Ayurveda is more than a system of medicine. It is a tradition
              of knowledge passed from one generation to the next — and at
              Anchan Ayurvedic Industries, that tradition is at the heart of
              everything we do.
            </p>

            {/* Journey: two generations */}
            <ol className="about-journey">
              <li data-aos="fade-up" data-aos-delay="200">
                <span className="journey-dot" aria-hidden="true"></span>
                <div className="journey-card">
                  <span className="journey-tag">Where it began</span>
                  <h3>Pandit Thoma Poojary</h3>
                  <p>
                    A respected practitioner from Padubidri whose dedication
                    to preparing classical Ayurvedic formulations inspired
                    the next generation to preserve this knowledge through
                    authentic, carefully manufactured herbal medicines.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <span className="journey-dot" aria-hidden="true"></span>
                <div className="journey-card">
                  <span className="journey-tag">Today</span>
                  <h3>Dr. N. T. Anchan</h3>
                  <p>
                    Under his guidance and experience, we continue the
                    journey — bringing together traditional Ayurvedic
                    principles, clinical understanding and systematic
                    quality practices.
                  </p>
                </div>
              </li>
            </ol>

            <Link
              to="/legacy"
              className="about-story-link"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Read Our Story
              <span className="about-story-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path
                    d="M9 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          AYURVEDA & EXPERTISE — dark green band
      ===================================================== */}
      <section className="about-expertise">
        <div className="expertise-inner">

          {/* ---------- LEFT: heading ---------- */}
          <div className="expertise-head">
            <h2 className="expertise-title" data-aos="fade-up">
              Preserving the Knowledge.
              <span>Understanding the Need.</span>
            </h2>

            <p className="expertise-lead" data-aos="fade-up" data-aos-delay="100">
              Ayurveda has evolved through centuries of observation, practice
              and accumulated knowledge. We respect this heritage while
              understanding that today's wellness needs are different.
            </p>

            <p className="expertise-result" data-aos="fade-up" data-aos-delay="200">
              The result is an approach that respects Ayurveda's roots while
              remaining relevant to today's world.
            </p>
          </div>

          {/* ---------- RIGHT: approach cards ---------- */}
          <div className="expertise-cards">
            <h3 className="expertise-subtitle" data-aos="fade-up">
              Our approach combines
            </h3>

            <div className="approach-grid">
              {APPROACH.map((item, index) => (
                <div
                  key={item.title}
                  className="approach-item"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="approach-top">
                    <div className="approach-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {item.icon}
                      </svg>
                    </div>
                    <span className="approach-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
