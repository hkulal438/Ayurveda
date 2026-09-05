import React from "react";
import "aos/dist/aos.css";
import "./About.css";

import mainImage from "../../images/ayurveda-main.png";
import herbsImage from "../../images/ayurveda-herbs.png";
import leavesImage from "../../images/ayurveda-leaves.png";
import snakeImage from "../../images/ayurveda-snake.png";

const About = () => {
  return (
    <main className="about-page">

      {/* =====================================================
          INTRODUCTION SECTION
      ===================================================== */}
      <section
        className="about-introduction"
        id="about-company-section"
      >

        {/* Soft background glow */}
        <div className="about-bg-glow"></div>

        {/* Top decorative leaves — NO ANIMATION */}
        <img
          src={leavesImage}
          alt=""
          className="about-top-leaves"
          aria-hidden="true"
        />

        {/* Bottom-right snake — NO ANIMATION */}
        <img
          src={snakeImage}
          alt=""
          className="about-snake-art"
          aria-hidden="true"
        />

        {/* =================================================
            LEFT SIDE — AYURVEDA ARTWORK
        ================================================= */}
        <div className="about-art-wrapper">

          <div className="about-art-glow"></div>

          {/* Main Devatha — NO ANIMATION */}
          <img
            src={mainImage}
            alt="Ayurvedic traditional artwork"
            className="about-main-art"
          />

          {/* Herbal artwork — NO ANIMATION */}
          <img
            src={herbsImage}
            alt=""
            className="about-herbs-art"
            aria-hidden="true"
          />

        </div>


        {/* =================================================
            RIGHT SIDE — INTRODUCTION CONTENT
        ================================================= */}
        <div className="about-intro-content">

          <div
            className="about-eyebrow"
            data-aos="fade-up"
          >
            <span></span>
            INTRODUCTION
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Rooted in Tradition.
            <br />
            <span>Crafted with Purpose.</span>
          </h1>

          <p
            className="about-lead"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ayurveda is more than a system of medicine. It is a
            tradition of knowledge passed from one generation to
            the next.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Anchan Ayurvedic Industries, that tradition is at
            the heart of everything we do. Our journey began with
            the traditional Ayurvedic knowledge of Pandit Thoma
            Poojary, a respected practitioner from Padubidri. His
            dedication to preparing classical Ayurvedic
            formulations inspired the next generation to preserve
            this knowledge through authentic, carefully
            manufactured herbal medicines.
          </p>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Today, under the guidance and experience of Dr. N. T.
            Anchan, we continue that journey — bringing together
            traditional Ayurvedic principles, clinical
            understanding and systematic quality practices.
          </p>

          <a
            href="#our-story"
            className="about-story-link"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <span>Read Our Story</span>
            <span className="story-arrow">→</span>
          </a>

        </div>

      </section>


      {/* =====================================================
          AYURVEDA & EXPERTISE
      ===================================================== */}
      <section className="about-expertise">

        {/* Decorative leaves — NO ANIMATION */}
        <img
          src={leavesImage}
          alt=""
          className="expertise-leaf expertise-leaf-left"
          aria-hidden="true"
        />

        <img
          src={leavesImage}
          alt=""
          className="expertise-leaf expertise-leaf-right"
          aria-hidden="true"
        />

        {/* Subtle herb decoration — NO ANIMATION */}
        <img
          src={herbsImage}
          alt=""
          className="expertise-herbs"
          aria-hidden="true"
        />


        {/* =================================================
            EXPERTISE CONTENT
        ================================================= */}
        <div className="expertise-content">

          {/* Section label */}
          <div
            className="expertise-eyebrow"
            data-aos="fade-up"
          >
            <span></span>
            AYURVEDA &amp; EXPERTISE
            <span></span>
          </div>


          {/* Heading */}
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Preserving the Knowledge.
            <br />
            <span>Understanding the Need.</span>
          </h2>


          {/* Decorative divider */}
          <div
            className="expertise-divider"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <i></i>
          </div>


          {/* Description */}
          <p
            className="expertise-lead"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Ayurveda has evolved through centuries of observation,
            practice and accumulated knowledge.
          </p>

          <p
            className="expertise-description"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Anchan Ayurvedic Industries, we respect this heritage
            while understanding that today's wellness needs are
            different.
          </p>


          {/* Approach heading */}
          <h3
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span>✦</span>
            Our approach combines
            <span>✦</span>
          </h3>


          {/* =================================================
              APPROACH CARDS
              NO PLUS MARKS
          ================================================= */}
          <div className="approach-grid">

            {/* CARD 01 */}
            <div
              className="approach-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="approach-icon">
                ◈
              </div>

              <div className="approach-number">
                01
              </div>

              <h4>
                Traditional
                <br />
                Ayurvedic Principles
              </h4>

            </div>


            {/* CARD 02 */}
            <div
              className="approach-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="approach-icon">
                ✦
              </div>

              <div className="approach-number">
                02
              </div>

              <h4>
                Clinical
                <br />
                Experience
              </h4>

            </div>


            {/* CARD 03 */}
            <div
              className="approach-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="approach-icon">
                ✧
              </div>

              <div className="approach-number">
                03
              </div>

              <h4>
                Formulation
                <br />
                Knowledge
              </h4>

            </div>


            {/* CARD 04 */}
            <div
              className="approach-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >

              <div className="approach-icon">
                ✓
              </div>

              <div className="approach-number">
                04
              </div>

              <h4>
                Quality-Focused
                <br />
                Manufacturing
              </h4>

            </div>

          </div>


          {/* =================================================
              FINAL STATEMENT
          ================================================= */}
          <div
            className="expertise-result"
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <span className="result-line"></span>

            <p>
              The result is an approach that respects Ayurveda's
              roots while remaining relevant to today's world.
            </p>

            <span className="result-line"></span>

          </div>

        </div>

      </section>

    </main>
  );
};

export default About;