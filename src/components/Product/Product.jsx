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
import aloeVeraGelImage from "../../images/alovera gel.png";
import kumariImage from "../../images/Kumari.png";
import balagrahaImage from "../../images/balagruha.jpg";
import bananthiImage from "../../images/bananthi.jpg";
import gandhakaImage from "../../images/Gandhaka.jpg";
import ashtangaImage from "../../images/astanga doopa.jpg";

// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
  {
    name: "Manasa",
    category: "Herbal formulation for nervous-system and cognitive wellness",
    image: manasaImage,
  },
  {
    name: "Madhuna",
    category: "Herbal formulation for metabolic wellness",
    image: madhunaImage,
  },
  {
    name: "Madhiphala Rasayana",
    category: "Traditional formulation for digestive wellness",
    image: madhiphalaImage,
  },
  {
    name: "Shwasari",
    category: "Traditional respiratory wellness formulation",
    image: shwasariImage,
  },
  {
    name: "Nirvedhan Oil",
    category: "Ayurvedic external herbal oil",
    image: nirvedhanImage,
  },
  {
    name: "Rumovin Liniment",
    category: "Herbal topical liniment",
    image: rumovinImage,
  },
  {
    name: "Chyawanprash",
    category: "Traditional Ayurvedic Rasayana",
    image: chyawanprashImage,
  },
  {
    name: "Pusti",
    category: "Nutritional wellness formulation for children",
    image: pustiImage,
  },
  {
    name: "Bhringamalakadi Taila",
    category: "Traditional hair-care oil",
    image: bhringamalakadiImage,
  },
  {
    name: "Aloe Vera Gel",
    category: "Herbal skin-care formulation",
    image: aloeVeraGelImage,
  },
  {
    name: "Kumari",
    category: "Traditional Ayurvedic Shampoo",
    image: kumariImage,
  },
  {
    name: "Balagraha Taila",
    category: "Traditional Ayurvedic oil for children's care",
    image: balagrahaImage,
  },
  {
    name: "Bananthi Taila",
    category: "Traditional Ayurvedic oil for postnatal care",
    image: bananthiImage,
  },
  {
    name: "Gandhaka Malahara",
    category: "Traditional Ayurvedic ointment for skin care",
    image: gandhakaImage,
  },
  {
    name: "Ashtanga Dhoopa",
    category: "Traditional Ayurvedic herbal fumigation",
    image: ashtangaImage,
  },
];

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
