import React, { useState } from "react";
import "./Gallery.css";

import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import image4 from "../../images/4.png";
import image5 from "../../images/5.png";
import image6 from "../../images/6.png";
import image7 from "../../images/7.png";
import image8 from "../../images/8.png";
import image9 from "../../images/9.png";

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const totalImages = images.length;

  const getIndex = (index) => {
    return (index + totalImages) % totalImages;
  };

  const previousIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  const goNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => getIndex(prev + 1));
  };

  const goPrevious = () => {
    setDirection("prev");
    setCurrentIndex((prev) => getIndex(prev - 1));
  };

  return (
    <section className="gallery-section" id="gallery">

      {/* Decorative background elements */}
      <div className="gallery-glow gallery-glow-left"></div>
      <div className="gallery-glow gallery-glow-right"></div>

      {/* Decorative leaf - top right */}
      <div className="gallery-leaf gallery-leaf-top">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Decorative leaf - bottom left */}
      <div className="gallery-leaf gallery-leaf-bottom">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Heading */}
      <div className="gallery-heading">

        <div className="gallery-eyebrow">
          <span className="heading-line"></span>
          <span>OUR MEMORIES</span>
          <span className="heading-line"></span>
        </div>

        <h2>
          Gallery of <em>Memories</em>
        </h2>

        <p>
          A glimpse into our journey, our people, our heritage and the
          moments that have shaped us.
        </p>

      </div>

      {/* Main Gallery */}
      <div
        className={`gallery-slider gallery-direction-${direction}`}
        key={currentIndex}
      >

        {/* Previous Arrow */}
        <button
          className="gallery-arrow gallery-prev"
          onClick={goPrevious}
          aria-label="Previous image"
        >
          <span>‹</span>
        </button>

        {/* Images */}
        <div className="gallery-track">

          {/* Previous Image */}
          <div className="gallery-slide gallery-slide-side gallery-slide-left">
            <img
              src={images[previousIndex]}
              alt={`Memory ${previousIndex + 1}`}
            />
          </div>

          {/* Active Image */}
          <div className="gallery-slide gallery-slide-main">

            <img
              src={images[currentIndex]}
              alt={`Memory ${currentIndex + 1}`}
            />

            <div className="gallery-image-overlay"></div>

            <span className="gallery-image-number">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

          </div>

          {/* Next Image */}
          <div className="gallery-slide gallery-slide-side gallery-slide-right">
            <img
              src={images[nextIndex]}
              alt={`Memory ${nextIndex + 1}`}
            />
          </div>

        </div>

        {/* Next Arrow */}
        <button
          className="gallery-arrow gallery-next"
          onClick={goNext}
          aria-label="Next image"
        >
          <span>›</span>
        </button>

      </div>

    </section>
  );
};

export default Gallery;