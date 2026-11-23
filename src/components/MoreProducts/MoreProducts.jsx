import React from "react";

import "./MoreProducts.css";
import moreProducts from "./tiles-data";
import { SHOP_URL, shopProductUrl } from "../../config/shop";

// =========================================================
// MORE PRODUCTS — simple tiles below the top-products showcase.
// "More info" opens the product on the Anchan online shop.
// =========================================================

const Arrow = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MoreProducts = () => (
  <section className="mp-section" id="more-products">
    <div className="mp-container">
      <div className="mp-head" data-aos="fade-up">
        <h2 className="mp-title">More From Anchan</h2>
        <p className="mp-lead">
          A few more of our classical and proprietary preparations. Tap “More info” to see
          pack sizes, prices and details on our online shop.
        </p>
      </div>

      <div className="mp-grid">
        {moreProducts.map((p, i) => (
          <article key={p.id} className="mp-card" data-aos="fade-up" data-aos-delay={(i % 4) * 80}>
            <a href={shopProductUrl(p.id)} className="mp-media" target="_blank" rel="noopener noreferrer" aria-label={`More info about ${p.name}`}>
              <img src={p.image} alt={p.name} loading="lazy" />
            </a>
            <div className="mp-body">
              <span className="mp-type">{p.type}</span>
              <h3 className="mp-name">{p.name}</h3>
              <p className="mp-text">{p.text}</p>
              <a href={shopProductUrl(p.id)} className="mp-link" target="_blank" rel="noopener noreferrer">
                More info <Arrow />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mp-cta" data-aos="fade-up">
        <a href={SHOP_URL} className="mp-btn" target="_blank" rel="noopener noreferrer">
          Visit Our Online Shop
          <span className="mp-btn-icon"><Arrow /></span>
        </a>
      </div>
    </div>
  </section>
);

export default MoreProducts;
