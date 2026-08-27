import React from "react";
import "./Quality.css";

import Quality1 from "../../images/Quality1.png";
import Quality2 from "../../images/quality2.png";
import Quality3 from "../../images/Quality3.png";
import Quality4 from "../../images/Quality4.png";
import Quality5 from "../../images/Quality5.png";

const qualityCards = [
  {
    title: "Raw Material Testing",
    image: Quality1,
    text: "Raw materials are evaluated for identity, authenticity and quality before being used in manufacturing.",
  },
  {
    title: "In-Process Testing",
    image: Quality2,
    text: "Manufacturing processes are monitored to maintain consistency and defined quality parameters.",
  },
  {
    title: "Finished Product Testing",
    image: Quality3,
    text: "Finished formulations undergo appropriate quality checks to verify their required quality, purity and potency parameters.",
  },
  {
    title: "Stability Studies",
    image: Quality4,
    text: "Stability studies help assess product quality and shelf-life over the specified period.",
  },
  {
    title: "Where Tradition Meets Process",
    image: Quality5,
    text: "Traditional Ayurvedic knowledge forms the foundation of our formulations. Modern quality systems help us bring that knowledge to the present with consistency and responsibility.",
  },
];

const Quality = () => {
  return (
    <section
      className="quality-section"
      id="quality-section"
    >

      {/* Background Decoration */}
      <div className="quality-leaf quality-leaf-left"></div>
      <div className="quality-leaf quality-leaf-right"></div>

      <div className="quality-container">

        {/* =========================
            HEADER
        ========================== */}

        <div
          className="quality-header"
          data-aos="fade-up"
        >

          <span
            className="quality-eyebrow"
            data-aos="fade-up"
          >
            ANCHAN AYURVEDIC INDUSTRIES
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
          >
            QUALITY <span>&</span> MANUFACTURING
          </h2>

          <div
            className="quality-line"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span></span>
            <i>✦</i>
            <span></span>
          </div>

          <h3
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Quality You Can Trust. Processes You Can Measure.
          </h3>

          <p
            className="quality-intro"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            At Anchan Ayurvedic Industries, quality is not a final checkpoint.
            It is part of the journey from raw material to finished product.
          </p>

          <p
            className="quality-intro"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Our Quality Control Laboratory is equipped with modern testing
            facilities and supported by experienced professionals who help
            ensure that our Ayurvedic products meet defined quality standards.
          </p>

        </div>


        {/* =========================
            QUALITY CARDS
        ========================== */}

        <div className="quality-cards">

          {qualityCards.map((card, index) => (

            <article
              className="quality-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 5) * 100}
            >

              <div
                className="quality-card-image"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              >

                {/* Image Overlay */}
                <div className="quality-image-overlay"></div>


                {/* =========================
                    HOVER INFORMATION
                ========================== */}

                <div className="quality-hover-content">

                  <div className="quality-hover-icon">
                    <span>✦</span>
                  </div>

                  <h4>
                    {card.title}
                  </h4>

                  <div className="quality-hover-line">
                    <span></span>
                    <i>✦</i>
                    <span></span>
                  </div>

                  <p>
                    {card.text}
                  </p>

                  <div className="quality-hover-label">
                    QUALITY PROCESS
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>


        {/* =========================
            CLOSING STATEMENT
        ========================== */}

        <div
          className="quality-closing"
          data-aos="fade-up"
        >

          <div
            className="closing-icon"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <span>♧</span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h3>
              Traditional wisdom inspires us.
            </h3>

            <p>
              Quality practices guide us.
            </p>
          </div>

        </div>


        {/* =========================
            BOTTOM FEATURES
        ========================== */}

        <div className="quality-features">

          <div
            className="quality-feature"
            data-aos="fade-up"
            data-aos-delay="100"
          >

            <div className="feature-icon">
              ✿
            </div>

            <div>
              <strong>
                Natural Ingredients
              </strong>

              <span>
                Carefully Selected
              </span>
            </div>

          </div>


          <div
            className="quality-feature"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            <div className="feature-icon">
              ✓
            </div>

            <div>
              <strong>
                Quality Assured
              </strong>

              <span>
                At Every Step
              </span>
            </div>

          </div>


          <div
            className="quality-feature"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <div className="feature-icon">
              ⚗
            </div>

            <div>
              <strong>
                Science Backed
              </strong>

              <span>
                Ayurveda
              </span>
            </div>

          </div>


          <div
            className="quality-feature"
            data-aos="fade-up"
            data-aos-delay="400"
          >

            <div className="feature-icon">
              ♙
            </div>

            <div>
              <strong>
                Expert Team
              </strong>

              <span>
                Ensuring Excellence
              </span>
            </div>

          </div>


          <div
            className="quality-feature"
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <div className="feature-icon">
              ♧
            </div>

            <div>
              <strong>
                Sustainable
              </strong>

              <span>
                Responsible Practices
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Quality;