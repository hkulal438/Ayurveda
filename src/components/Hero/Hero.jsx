import React, { useState, useEffect } from "react";

import "./Hero.css";

// =========================================================
// IMAGES  (src/images/...)
// =========================================================

import heroImage from "../../images/hr.jpeg";
import manasaImage from "../../images/Manasa.png";
import banantiImage from "../../images/Bananti Taila.png";
import ayushLogo from "../../images/AYUSH Federation of India - Karnataka Logo.png";
import gmpLogo from "../../images/gmp.png";

// =========================================================
// SLIDES
//   Slide 1 shows the heading, button and logos.
//   Slides 2 and 3 are image-only.
// =========================================================

const SLIDES = [
  {
    id: "products",
    src: heroImage,
    alt: "Anchan Ayurvedic product range",
    withContent: true,
  },
  {
    id: "manasa",
    src: manasaImage,
    alt: "Child holding Manasa Ayurvedic syrup",
    withContent: false,
  },
  {
    id: "bananti",
    src: banantiImage,
    alt: "Expecting mother with Bananthi Taila",
    withContent: false,
  },
];

const SLIDE_DURATION = 8000; // 8 seconds per slide

// =========================================================
// HERO
// =========================================================

export default function Hero() {
  const [active, setActive] = useState(0);

  // Advance every 8s. Re-runs whenever `active` changes, so a
  // dot click also restarts the full 8-second timer.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [active]);

  const handleLearnMore = () => {
    const section = document.getElementById("about-company-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showContent = SLIDES[active].withContent;

  return (
    <section
      className={`hero ${showContent ? "" : "hero--image-only"}`}
      id="hero-section"
      aria-roledescription="carousel"
    >
      {/* ================= SLIDES ================= */}
      <div className="hero-slides">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide hero-slide--${slide.id} ${
              index === active ? "is-active" : ""
            }`}
            aria-hidden={index !== active}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* ================= CONTENT (slide 1 only) ================= */}
      <div className="hero-container" aria-hidden={!showContent}>
        <div className="hero-content">
          <h1 className="hero-title">
            Rooted in Tradition, Crafted for Wellbeing
          </h1>

          <p className="hero-description">
            Discover Anchan’s Ayurvedic heritage, where the richness of nature
            meets the art of traditional wellness.
          </p>

          <button
            type="button"
            className="hero-btn"
            onClick={handleLearnMore}
            tabIndex={showContent ? 0 : -1}
          >
            Learn More
            <span className="hero-btn-icon" aria-hidden="true">
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
          </button>

          {/* ================= CERTIFICATION LOGOS ================= */}
          <div className="hero-logos">
            <div className="hero-logo-card">
              <img
                src={ayushLogo}
                alt="AYUSH Federation of India – Karnataka"
              />
            </div>

            <div className="hero-logo-card">
              <img src={gmpLogo} alt="GMP Certified" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= DOTS ================= */}
      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show slide ${index + 1}`}
            className={`hero-dot ${index === active ? "is-active" : ""}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  );
}
