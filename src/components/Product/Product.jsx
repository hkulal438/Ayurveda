import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

// =====================================================
// PRODUCT IMAGES
// =====================================================

import manasaImage from "../../images/manasa.jpeg";
import madhunaImage from "../../images/madina.jpeg";
import madhiphalaImage from "../../images/madipalla.jpeg";
import shwasariImage from "../../images/shwasari.jpeg";
import nirvedhanImage from "../../images/nirvedan.png";
import rumovinImage from "../../images/liniment.jpeg";
import chyawanprashImage from "../../images/chyavanprash.jpeg";
import pustiImage from "../../images/pusti.jpeg";
import bhringamalakadiImage from "../../images/oil.jpeg";
import aloeVeraGelImage from "../../images/aloe-gel.webp";
import kumariImage from "../../images/kumari-shampoo.webp";
import balagrahaImage from "../../images/balagruha.jpg";
import bananthiImage from "../../images/bananthi.jpg";
import gandhakaImage from "../../images/Gandhaka.jpg";
import ashtangaImage from "../../images/astanga doopa.jpg";

// =====================================================
// PRODUCT DATA
// =====================================================

const productList = [
  {
    name: "Manasa",
    category: "Brain and nerve tonic — helps with sleeplessness, high blood pressure and stress-related conditions, and improves memory.",
    image: manasaImage,
  },
  {
    name: "Madhuna",
    category: "Oral herbal powder for diabetes — for insulin-dependent and non-insulin-dependent diabetes and its related conditions.",
    image: madhunaImage,
  },
  {
    name: "Madiphala Rasayana",
    category: "Relieves indigestion, abdominal pain and burning, nausea and vomiting — including morning sickness.",
    image: madhiphalaImage,
  },
  {
    name: "Shwasari",
    category: "For cough and breathing difficulty — in bronchitis, bronchial asthma, COPD and eosinophilia.",
    image: shwasariImage,
  },
  {
    name: "Nirvedan Oil",
    category: "Pain-relieving oil for arthritis joint pain and nerve pain from the lower back or neck.",
    image: nirvedhanImage,
  },
  {
    name: "Rumovin Liniment",
    category: "Pain-relieving liniment for arthritis joint pain and nerve pain from the lower back or neck.",
    image: rumovinImage,
  },
  {
    name: "Chyavanaprasha Leha",
    category: "Classical rejuvenator for cough, asthma and bronchitis — improves appetite and digestion, and supports the heart, kidneys and memory.",
    image: chyawanprashImage,
  },
  {
    name: "Pusti",
    category: "Nutritive tonic for all ages — for general weakness, poor appetite, weight loss and anaemia.",
    image: pustiImage,
  },
  {
    name: "Bhringamalakadi Taila",
    category: "Hair oil that promotes hair growth and helps prevent hair fall, dandruff and premature greying; also good for eyes, hearing and teeth.",
    image: bhringamalakadiImage,
  },
  {
    name: "Aloe Vera Gel",
    category: "For dry skin, acne, facial pigmentation, burn wounds and other skin problems.",
    image: aloeVeraGelImage,
  },
  {
    name: "Kumari Shampoo",
    category: "Herbal shampoo that promotes hair growth and helps prevent hair fall, dandruff and premature greying.",
    image: kumariImage,
  },
  {
    name: "Balagraha Taila",
    category: "Traditional oil for children, used in Balagraha (Grahadosha) conditions.",
    image: balagrahaImage,
  },
  {
    name: "Bananthi Taila",
    category: "Post-delivery bath oil for new mothers — helps reduce stretch marks and restores strength.",
    image: bananthiImage,
  },
  {
    name: "Gandhaka Malahara",
    category: "Ointment for skin diseases and fungal infections — athlete's foot, jock itch, ringworm and Sibba.",
    image: gandhakaImage,
  },
  {
    name: "Ashtanga Dhoopa",
    category: "Antimicrobial herbal fumigation, especially for children — purifies the room and helps prevent infections.",
    image: ashtangaImage,
  },
];

// shown Z to A in the list
const products = [...productList].sort((a, b) => b.name.localeCompare(a.name));

// =====================================================
// PRODUCT URL  (e.g. /products/bananthi-taila)
// =====================================================

const createProductUrl = (name) =>
  "/products/" + name.toLowerCase().replace(/\s+/g, "-");

// =====================================================
// PRODUCT SHOWCASE
// =====================================================

const Product = () => {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section className="products-section" id="products-section">
      <div className="pshow-card">

        {/* ================= MOVING TITLE BAND ================= */}
        <div className="pshow-band" aria-hidden="true">
          <div className="pshow-band-track">
            {[0, 1].map((copy) => (
              <div className="pshow-band-group" key={copy}>
                {[0, 1, 2].map((n) => (
                  <span className="pshow-band-item" key={n}>
                    Our Top Products
                    <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                      <path d="M4 20C4 11 11 4 20 4C20 13 13 20 4 20Z" />
                    </svg>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* curved point that drips down from the band */}
        <svg
          className="pshow-drop"
          viewBox="0 0 400 190"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0 H400 C300 0 212 40 200 190 C188 40 100 0 0 0 Z" />
        </svg>

        <h2 className="pshow-sr">Our Top Products</h2>

        <div className="pshow-body">

          {/* ================= PRODUCT LIST ================= */}
          <ul className="pshow-list" role="tablist" aria-label="Products">
            {products.map((item, index) => (
              <li key={item.name} role="presentation">
                <button
                  type="button"
                  role="tab"
                  id={`pshow-tab-${index}`}
                  aria-selected={index === active}
                  aria-controls="pshow-panel"
                  className={`pshow-tab ${index === active ? "is-active" : ""}`}
                  onClick={() => setActive(index)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* ================= PRODUCT IMAGE ================= */}
          <Link
            to={createProductUrl(product.name)}
            className="pshow-figure"
            aria-label={`View ${product.name}`}
          >
            <img
              key={product.name}
              src={product.image}
              alt={product.name}
              className="pshow-img"
            />
          </Link>

          {/* ================= PRODUCT TEXT ================= */}
          <div
            className="pshow-info"
            id="pshow-panel"
            role="tabpanel"
            aria-labelledby={`pshow-tab-${active}`}
            key={product.name}
          >
            <span className="pshow-count">
              {String(active + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </span>

            <h3 className="pshow-name">{product.name}</h3>

            <p className="pshow-desc">{product.category}</p>

            <Link to={createProductUrl(product.name)} className="pshow-btn">
              Read More
              <span className="pshow-btn-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="14" height="14">
                  <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                    strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            <Link to="/products" className="pshow-all">
              Explore All Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
