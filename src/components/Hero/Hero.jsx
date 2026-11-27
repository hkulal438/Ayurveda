import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Hero.css";

// =========================================================
// IMAGES  (src/images/...)
// =========================================================

import heroImage from "../../images/hr.jpeg";
import manasaImage from "../../images/opt/manasa.webp";
import banantiImage from "../../images/bananthi-mother-baby-2.webp";
import chyavanaprashaImage from "../../images/hero-chyavanaprasha.webp";
import ashtangaImage from "../../images/hero-ashtanga-dhoopa.webp";
import ayushLogo from "../../images/opt/ayush-federation-of-india-karnataka-logo.webp";
import gmpLogo from "../../images/gmp.png";

// =========================================================
// SLIDES
//   Slide 1: heading, button and logos.
//   Slide 2: Manasa — picture on the right, headline on the left.
//   Slide 3: Bananthi Taila — mother with baby + headline.
//   Slide 4: Chyavanaprasha Leha banner + headline on the left.
//   Slide 5: Ashtanga Dhoopa banner + headline on the left.
// =========================================================

const SLIDES = [
  {
    id: "products",
    src: heroImage,
    alt: "Anchan Ayurvedic product range",
    content: {
      title: "Rooted in Tradition, Crafted for Wellbeing",
      text: "Discover Anchan’s Ayurvedic heritage, where the richness of nature meets the art of traditional wellness.",
      button: "Learn More",
      action: "about",
      logos: true,
    },
  },
  {
    id: "manasa",
    src: manasaImage,
    alt: "Smiling child holding a bottle of Manasa",
    content: {
      kicker: "Brain & Memory Care",
      title: "Sharper Minds, Brighter Days",
      text: "Manasa — Anchan's brain and nerve tonic that improves memory and focus, and supports restful sleep and a calm mind.",
      button: "Explore Manasa",
      action: "products",
    },
  },
  {
    id: "bananti",
    src: banantiImage,
    alt: "Mother holding her baby with a bottle of Bananthi Taila",
    content: {
      kicker: "Post-Delivery Care",
      title: "Reclaim Your Strength & Glow",
      text: "With authentic Bananthi Taila — a traditional Anchan massage and bath oil for new mothers that supports postnatal recovery and helps reduce stretch marks.",
      button: "Explore Bananthi Taila",
      action: "products",
    },
  },
  {
    id: "chyavanaprasha",
    src: chyavanaprashaImage,
    alt: "Chyavanaprasha Leha jar with amla, herbs and relief from cough",
    content: {
      kicker: "Respiratory Care",
      title: "Breathe Easy, Every Season",
      text: "Chyavanaprasha Leha — the classical rejuvenator for cough, asthma and bronchitis that also improves appetite, digestion and strength.",
      button: "Explore Chyavanaprasha",
      action: "products",
    },
  },
  {
    id: "ashtanga",
    src: ashtangaImage,
    alt: "Ashtanga Dhoopa box with a herbal fumigation pot and a sleeping baby",
    content: {
      kicker: "Child Care",
      title: "Pure Air, Peaceful Sleep",
      text: "Ashtanga Dhoopa — an antimicrobial herbal fumigation that purifies your child's room and helps keep infections away, naturally.",
      button: "Explore Ashtanga Dhoopa",
      action: "products",
    },
  },
];

const SLIDE_DURATION = 8000; // 8 seconds per slide

// =========================================================
// HERO
// =========================================================

export default function Hero() {
  const [active, setActive] = useState(0);
  // keep the last text on screen while an image-only slide is showing,
  // so it can fade out instead of disappearing
  const [shownIndex, setShownIndex] = useState(0);
  const navigate = useNavigate();

  // Advance every 8s. Re-runs whenever `active` changes, so a
  // dot click also restarts the full 8-second timer.
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    if (SLIDES[active].content) setShownIndex(active);
  }, [active]);

  const handleAction = (action) => {
    if (action === "products") {
      navigate("/products");
      return;
    }
    const section = document.getElementById("about-company-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const showContent = Boolean(SLIDES[active].content);
  const content = SLIDES[shownIndex].content;

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

      {/* ================= CONTENT (slides with text) ================= */}
      <div className={`hero-container hero-container--${SLIDES[shownIndex].id}`} aria-hidden={!showContent}>
        <div
          key={SLIDES[shownIndex].id}
          className={`hero-content hero-content--${SLIDES[shownIndex].id}`}
        >
          {content.kicker && <p className="hero-kicker">{content.kicker}</p>}

          {/* the page's main heading (h1) is set in App.jsx */}
          <h2 className="hero-title">{content.title}</h2>

          <p className="hero-description">{content.text}</p>

          <button
            type="button"
            className="hero-btn"
            onClick={() => handleAction(content.action)}
            tabIndex={showContent ? 0 : -1}
          >
            {content.button}
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
          {content.logos && (
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
          )}
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
