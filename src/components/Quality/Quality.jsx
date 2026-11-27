import React from "react";
import "./Quality.css";

import Quality1 from "../../images/opt/quality1.webp";
import Quality2 from "../../images/opt/quality2.webp";
import Quality3 from "../../images/opt/quality3.webp";
import Quality4 from "../../images/Quality4.png";
import Quality5 from "../../images/opt/quality5.webp";

// =========================================================
// THE FOUR TESTING STAGES (raw material → shelf life)
// =========================================================

const qualitySteps = [
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
];

const tradition = {
  title: "Where Tradition Meets Process",
  image: Quality5,
  text: "Traditional Ayurvedic knowledge forms the foundation of our formulations. Modern quality systems help us bring that knowledge to the present with consistency and responsibility.",
};

// =========================================================
// FEATURE ICONS — Lucide shapes (lucide.dev, ISC licence),
// drawn inline so no extra package is needed
// =========================================================

const features = [
  {
    title: "Natural Ingredients",
    text: "Carefully Selected",
    // leaf
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
  {
    title: "Quality Assured",
    text: "At Every Step",
    // badge-check
    icon: (
      <>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Science Backed",
    text: "Ayurveda",
    // flask-conical
    icon: (
      <>
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
        <path d="M6.453 15h11.094" />
        <path d="M8.5 2h7" />
      </>
    ),
  },
  {
    title: "Expert Team",
    text: "Ensuring Excellence",
    // users
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: "Sustainable",
    text: "Responsible Practices",
    // sprout
    icon: (
      <>
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </>
    ),
  },
];

const Icon = ({ children, size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
    stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const Quality = () => {
  return (
    <section className="quality-section" id="quality-section">
      <div className="quality-container">

        {/* =====================================================
            HEADER — heading left, intro right
        ===================================================== */}
        <header className="quality-header">
          <div className="quality-header-title" data-aos="fade-up">
            <h2 className="quality-title">
              Quality &amp; Manufacturing
            </h2>
            <p className="quality-tagline">
              Quality You Can Trust. Processes You Can Measure.
            </p>
          </div>

          <div className="quality-header-text" data-aos="fade-up" data-aos-delay="100">
            <p>
              At Anchan Ayurvedic Industries, quality is not a final
              checkpoint. It is part of the journey from raw material to
              finished product.
            </p>
            <p>
              Our Quality Control Laboratory is equipped with modern testing
              facilities and supported by experienced professionals who help
              ensure that our Ayurvedic products meet defined quality
              standards.
            </p>
          </div>
        </header>

        {/* =====================================================
            PROCESS — four stages joined by a dotted line
        ===================================================== */}
        <ol className="quality-process">
          {qualitySteps.map((step, index) => (
            <li
              key={step.title}
              className="quality-step"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <figure className="quality-step-media">
                <img src={step.image} alt={step.title} loading="lazy" />
                {/* round "quality stamp" with the step number */}
                <span className="quality-stamp" aria-hidden="true">
                  <small>Step</small>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figure>

              <h3 className="quality-step-title">{step.title}</h3>
              <p className="quality-step-text">{step.text}</p>
            </li>
          ))}
        </ol>

        {/* =====================================================
            TRADITION MEETS PROCESS — wide feature card
        ===================================================== */}
        <article className="quality-feature-card" data-aos="fade-up">
          <figure className="quality-feature-media">
            <img src={tradition.image} alt={tradition.title} loading="lazy" />
          </figure>

          <div className="quality-feature-body">
            <h3 className="quality-feature-title">{tradition.title}</h3>
            <p className="quality-feature-text">{tradition.text}</p>

            <p className="quality-motto">
              Traditional wisdom inspires us.
              <span>Quality practices guide us.</span>
            </p>
          </div>
        </article>

        {/* =====================================================
            FEATURES ROW
        ===================================================== */}
        <ul className="quality-features">
          {features.map((item, index) => (
            <li
              key={item.title}
              className="quality-feat"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <span className="quality-feat-icon">
                <Icon>{item.icon}</Icon>
              </span>
              <span className="quality-feat-text">
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Quality;
