import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import "./Gallery.css";

import image1 from "../../images/opt/1.webp";
import image2 from "../../images/opt/2.webp";
import image3 from "../../images/opt/3.webp";
import image4 from "../../images/opt/4.webp";
import image5 from "../../images/opt/5.webp";
import image6 from "../../images/opt/6.webp";
import image7 from "../../images/opt/7.webp";
import image8 from "../../images/opt/8.webp";
import image9 from "../../images/opt/9.webp";

// all photos, in order (used by the full-screen viewer)
const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

// which photos go in each moving row (index into `images`)
const topRow = [0, 3, 1, 4, 2];       // moves left → right
const bottomRow = [5, 6, 7, 8];       // moves right → left

// one row of photos that loops forever
const GalleryRow = ({ items, reverse, onOpen }) => {
  // each group repeats the row twice so it is always wider than the screen;
  // two groups side by side make the loop seamless
  const group = [...items, ...items];

  return (
    <div className={`gallery-row ${reverse ? "gallery-row--reverse" : ""}`}>
      <div className="gallery-row-track">
        {[0, 1].map((copy) => (
          <ul
            className="gallery-row-group"
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
          >
            {group.map((imgIndex, i) => (
              <li key={`${copy}-${i}`} className="gallery-item">
                <button
                  type="button"
                  className="gallery-item-btn"
                  onClick={() => onOpen(imgIndex)}
                  tabIndex={copy === 1 || i >= items.length ? -1 : 0}
                  aria-label={`Open memory ${imgIndex + 1}`}
                >
                  <img
                    src={images[imgIndex]}
                    alt={`Anchan Ayurveda, Padubidri – memory ${imgIndex + 1}`}
                    decoding="async"
                  />
                  <span className="gallery-item-num" aria-hidden="true">
                    {String(imgIndex + 1).padStart(2, "0")}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  // index of the photo open in the viewer, or null when closed
  const [open, setOpen] = useState(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (dir) => setOpen((i) => (i + dir + images.length) % images.length),
    []
  );

  // keyboard: Esc closes, arrows move
  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  return (
    <section className="gallery-section" id="gallery">

      {/* ================= HEADING ================= */}
      <div className="gallery-heading" data-aos="fade-up">
        <h2 className="gallery-title">
          Gallery of <span>Memories</span>
        </h2>
        <p className="gallery-intro">
          A glimpse into our journey, our people, our heritage and the
          moments that have shaped us.
        </p>
      </div>

      {/* ================= TWO MOVING ROWS ================= */}
      <div className="gallery-rows">
        <GalleryRow items={topRow} onOpen={setOpen} />
        <GalleryRow items={bottomRow} reverse onOpen={setOpen} />
      </div>

      <p className="gallery-hint">Tap any photo to view it larger</p>

      {/* ================= FULL-SCREEN VIEWER ================= */}
      {/* rendered into <body> so it always covers the whole screen */}
      {open !== null && createPortal(
        <div
          className="gallery-viewer"
          role="dialog"
          aria-modal="true"
          aria-label={`Memory ${open + 1} of ${images.length}`}
          onClick={close}
        >
          <figure
            className="gallery-viewer-figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={images[open]} alt={`Memory ${open + 1}`} />
            <figcaption>
              {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </figcaption>
          </figure>

          <button
            type="button"
            className="gallery-viewer-btn gallery-viewer-close"
            onClick={close}
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            className="gallery-viewer-btn gallery-viewer-prev"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            className="gallery-viewer-btn gallery-viewer-next"
            onClick={(e) => { e.stopPropagation(); step(1); }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
