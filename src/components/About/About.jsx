import React from "react";
import "./About.css";
import medicinalHerbs from "../../images/Medicinal herbs.png";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-leaf about-bg-leaf-1"></div>
      <div className="about-bg-leaf about-bg-leaf-2"></div>

      <div className="about-container">

        <div className="about-label">
          <span>ABOUT US</span>
          <div className="about-label-line"></div>
        </div>

        <div className="about-grid">

          {/* IMAGE */}
          <div className="about-visual">
            <div className="about-image-wrapper">

              <div className="about-corner about-corner-top"></div>

              <img
                src={medicinalHerbs}
                alt="Traditional Ayurvedic medicinal herbs"
                className="about-herbs-image"
              />

              <div className="about-corner about-corner-bottom"></div>

            </div>

            <div className="about-badge">
              <div className="about-badge-inner">
                <span>ROOTED IN</span>
                <strong>TRADITION</strong>
                <span>INSPIRED BY NATURE</span>
              </div>
            </div>

            <div className="about-image-caption">
              <span className="caption-line"></span>
              <span>THE ANCHAN HERITAGE</span>
            </div>
          </div>

          {/* CONTENT */}
          <div className="about-story-content">

            <span className="about-overline">
              OUR HERITAGE
            </span>

            <h2 className="about-title">
              Our Story Begins
              <br />
              <span>With Tradition.</span>
            </h2>

            <div className="about-title-decoration">
              <span></span>
              <i></i>
            </div>

            {/* STORY */}
            <div className="about-timeline">

              <div className="timeline-item">
                <div className="timeline-marker">01</div>

                <div className="timeline-content">
                  <p>
                    Anchan Ayurvedic Industries has its roots in the
                    traditional Ayurvedic practice of{" "}
                    <strong>Pandit Thoma Poojary</strong>, a respected
                    practitioner from Padubidri.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">02</div>

                <div className="timeline-content">
                  <p>
                    Known for preparing classical Ayurvedic medicines
                    using traditional methods, Pandit Thoma Poojary
                    earned the trust of patients and physicians through
                    his dedication to Ayurveda.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">03</div>

                <div className="timeline-content">
                  <p>
                    His son, <strong>Dr. N. T. Anchan</strong>, carried
                    this knowledge forward. After completing his
                    Ayurvedic education, Dr. Anchan established his
                    clinical practice and later expanded into Ayurvedic
                    medicine manufacturing.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">04</div>

                <div className="timeline-content">
                  <p>
                    What began as a family legacy gradually evolved into
                    an organization committed to bringing traditional
                    Ayurvedic formulations to a wider community.
                  </p>
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="about-action">
              <a href="#philosophy" className="about-button">
                <span>Discover Our Philosophy</span>
                <span className="about-arrow">→</span>
              </a>
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="about-footer">

          <div className="about-footer-line"></div>

          <div className="about-footer-text">
            <span>ANCIENT WISDOM</span>
            <b>•</b>
            <span>NATURAL HEALING</span>
            <b>•</b>
            <span>TRUSTED TRADITION</span>
          </div>

          <div className="about-footer-line"></div>

        </div>

      </div>
    </section>
  );
};

export default About;