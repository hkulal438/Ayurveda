import React, { useState, useCallback, useEffect } from "react";

import {
  Gallery,
  GalleryMain,
  GalleryItem,
  useGallery,
} from "@wethegit/react-gallery";

import "./Hero.css";

// =========================================================
// AYURVEDA IMAGES
// =========================================================

import Ayurveda from "../../images/ayurveda_image_1.png";
import Anchan from "../../images/scene1.png";
import Dr from "../../images/drtanchan.png";
import Family from "../../images/Family1.png";

// =========================================================
// SLIDER DATA
// =========================================================

const ITEMS = [
  {
    id: 1,
    src: Ayurveda,
    alt: "Ayurvedic herbs and natural ingredients",

    titleLine1: "The Wisdom of",
    titleLine2: "Ayurveda",

    description:
      "Discover the timeless wisdom of Ayurveda through carefully selected herbs and traditional wellness practices inspired by nature.",
  },

  {
    id: 2,
    src: Anchan,
    alt: "Natural Ayurvedic wellness",

    titleLine1: "Pure Natural",
    titleLine2: "Wellness",

    description:
      "Experience natural wellness through authentic ingredients and traditional Ayurvedic knowledge designed to bring balance and harmony.",
  },

  {
    id: 3,
    src: Dr,
    alt: "Ayurvedic care and herbs",

    titleLine1: "Nature in",
    titleLine2: "Every Herb",

    description:
      "Carefully selected botanical ingredients come together to celebrate the purity and richness of traditional Ayurvedic wellness.",
  },

  {
    id: 4,
    src: Family,
    alt: "Traditional Ayurvedic wellness",

    titleLine1: "Tradition Meets",
    titleLine2: "Wellness",

    description:
      "Rooted in traditional knowledge and inspired by nature, our Ayurvedic approach brings timeless wellness into modern living.",
  },
];

const TOTAL = ITEMS.length;

// =========================================================
// FIND ITEM INDEX
// =========================================================

const indexOfId = (id) => {
  return ITEMS.findIndex((item) => item.id === id);
};

// =========================================================
// SLIDES
// =========================================================

function Slides({ thumbOrder }) {
  const { goToIndex } = useGallery();

  return (
    <GalleryMain
      className="track"
      renderGalleryItem={({ item, index, active }) => {
        const offset =
          thumbOrder.indexOf(item.id) -
          (thumbOrder.length - 1) / 2;

        return (
          <GalleryItem
            key={item.id}
            index={index}
            active={active}
            className="item"
            data-active={String(active)}
          >
            <div
              className="slide"
              style={{
                "--offset": offset,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="image"
                data-slide-id={item.id}
              />

              <div className="imageOverlay" />

              {!active && (
                <button
                  type="button"
                  className="thumbButton"
                  tabIndex={-1}
                  onClick={() => goToIndex(index)}
                  aria-label={`Show ${item.titleLine1} ${item.titleLine2}`}
                >
                  <span className="visuallyHidden">
                    Show {item.titleLine1} {item.titleLine2}
                  </span>
                </button>
              )}
            </div>
          </GalleryItem>
        );
      }}
    />
  );
}

// =========================================================
// ACTIVE CONTENT
// =========================================================

function ActiveContent({ thumbOrder }) {
  const {
    activeIndex,
    goToIndex,
  } = useGallery();

  const item = ITEMS[activeIndex];

  if (!item) {
    return null;
  }

  const previousIndex = indexOfId(
    thumbOrder[thumbOrder.length - 1]
  );

  const nextIndex = indexOfId(
    thumbOrder[0]
  );

  return (
    <div className="rail">

      <div
        className="content"
        key={item.id}
      >
        <span className="ayurvedaTag">
          NATURAL • PURE • AYURVEDIC
        </span>

        <p className="kicker">
          {String(activeIndex + 1).padStart(2, "0")}
          {" / "}
          {String(TOTAL).padStart(2, "0")}
        </p>

        <h1 className="title">
          <span>
            {item.titleLine1}
          </span>

          <span>
            {item.titleLine2}
          </span>
        </h1>

        <p className="description">
          {item.description}
        </p>

        <button
          type="button"
          className="exploreButton"
        >
          <span>
            Explore Wellness
          </span>

          <span className="arrow">
            →
          </span>
        </button>
      </div>

      <div className="controls">

        <button
          type="button"
          className="navBtn"
          aria-label="Previous slide"
          onClick={() => goToIndex(previousIndex)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="navBtn"
          aria-label="Next slide"
          onClick={() => goToIndex(nextIndex)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

      </div>

    </div>
  );
}

// =========================================================
// MAIN GALLERY
// =========================================================

function EnlargeGallery() {
  const [thumbOrder, setThumbOrder] = useState(() =>
    ITEMS.slice(1).map((item) => item.id)
  );

  const [isScrolled, setIsScrolled] = useState(false);

  // =======================================================
  // NAVBAR SCROLL STATE
  // =======================================================

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // =======================================================
  // SLIDER CHANGE
  // =======================================================

  const handleChange = useCallback(
    ({ oldIndex, newIndex }) => {
      setThumbOrder((order) => [
        ...order.filter(
          (id) => id !== ITEMS[newIndex].id
        ),
        ITEMS[oldIndex].id,
      ]);
    },
    []
  );

  return (
    <section
      className={`hero ${
        isScrolled ? "hero-scrolled" : ""
      }`}
      id="hero-section"
    >

      <Gallery
        items={ITEMS}
        draggable={false}
        className="gallery"
        onChange={handleChange}
      >
        <Slides
          thumbOrder={thumbOrder}
        />

        <ActiveContent
          thumbOrder={thumbOrder}
        />
      </Gallery>


      {/* =====================================================
          DECORATIVE ELEMENTS
      ===================================================== */}

      <div
        className="decorativeCircle circleOne"
        aria-hidden="true"
      />

      <div
        className="decorativeCircle circleTwo"
        aria-hidden="true"
      />

      <div
        className="decorativeDot dotOne"
        aria-hidden="true"
      />

      <div
        className="decorativeDot dotTwo"
        aria-hidden="true"
      />

      <div
        className="verticalText"
        aria-hidden="true"
      >
        NATURAL WELLNESS
      </div>

    </section>
  );
}

// =========================================================
// EXPORT
// =========================================================

export default function Hero() {
  return <EnlargeGallery />;
}