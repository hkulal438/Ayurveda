import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

// =====================================================
// PRODUCT IMAGES
// =====================================================

import manasaImage from "../../images/manasa.jpeg";
import madhunaImage from "../../images/madina.jpeg";
import madhiphalaImage from "../../images/madipalla.jpeg";
import shwashariImage from "../../images/shwasari.jpeg";
import nirvedhanImage from "../../images/nirvedan.png";
import rumovinImage from "../../images/liniment.jpeg";
import chyawanprashImage from "../../images/chyavanprash.jpeg";
import pustiImage from "../../images/pusti.jpeg";
import bhrangamalakaImage from "../../images/oil.jpeg";
import aloeVeraGelImage from "../../images/alovera gel.png";
import Kumari from "../../images/Kumari.png";

// =====================================================
// PRODUCT DATA
// =====================================================

const products = [
  {
    name: "MANASA",
    category:
      "Herbal formulation for nervous-system and cognitive wellness",
    image: manasaImage,
  },

  {
    name: "MADHUNA",
    category:
      "Herbal formulation for metabolic wellness",
    image: madhunaImage,
  },

  {
    name: "MADHIPHALA RASAYANA",
    category:
      "Traditional formulation for digestive wellness",
    image: madhiphalaImage,
  },

  {
    name: "SHWASHARI",
    category:
      "Traditional respiratory wellness formulation",
    image: shwashariImage,
  },

  {
    name: "NIRVEDHAN OIL",
    category:
      "Ayurvedic external herbal oil",
    image: nirvedhanImage,
  },

  {
    name: "RUMOVIN LINIMENT",
    category:
      "Herbal topical liniment",
    image: rumovinImage,
  },

  {
    name: "CHYAWANPRASH",
    category:
      "Traditional Ayurvedic Rasayana",
    image: chyawanprashImage,
  },

  {
    name: "PUSTI",
    category:
      "Nutritional wellness formulation for children",
    image: pustiImage,
  },

  {
    name: "BHRANGAMALAKA THAILA",
    category:
      "Traditional hair-care oil",
    image: bhrangamalakaImage,
  },

  {
    name: "ALOE VERA GEL",
    category:
      "Herbal skin-care formulation",
    image: aloeVeraGelImage,
  },

  {
    name: "KUMARI",
    category:
      "Traditional Ayurvedic Shampoo",
    image: Kumari,
  }
];

// =====================================================
// PRODUCT URL
// =====================================================

const createProductUrl = (name) => {
  return (
    "/products/" +
    name
      .toLowerCase()
      .replace(/\s+/g, "-")
  );
};

// =====================================================
// PRODUCT COMPONENT
// =====================================================

const Product = () => {
  return (
    <section
      className="products-section"
      id="products-section"
    >

      {/* =====================================================
          DECORATIVE BACKGROUND ELEMENTS
      ===================================================== */}

      <div className="products-decoration decoration-one">
        ✦
      </div>

      <div className="products-decoration decoration-two">
        ❋
      </div>

      <div className="products-decoration decoration-three">
        ✽
      </div>


      <div className="products-container">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="products-heading">

          <span className="products-subtitle">
            OUR COLLECTION
          </span>

          <h1>
            Our Top-Selling Products
          </h1>

          <div className="heading-decoration">

            <span></span>

            <i>✤</i>

            <span></span>

          </div>

          <p>
            Discover our most loved Ayurvedic formulations,
            thoughtfully crafted with traditional knowledge
            and natural ingredients for complete wellness.
          </p>

        </div>


        {/* =====================================================
            PRODUCT GRID
        ===================================================== */}

        <div className="card__container">

          {products.map((product, index) => {

            const cardClass =
              index === 1
                ? "card__article featured-card"
                : "card__article";

            return (
              <article
                className={cardClass}
                key={product.name}
              >

                {/* =====================================================
                    TOP SELLING BADGE
                ===================================================== */}

                {index < 3 && (
                  <div className="top-selling-badge">

                    <span>
                      ✦
                    </span>

                    TOP SELLING

                  </div>
                )}


                {/* =====================================================
                    PRODUCT IMAGE
                ===================================================== */}

                <div className="card__image-wrapper">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="card__img"
                  />

                  <div className="image-overlay">

                    <span>
                      Explore Product
                    </span>

                  </div>

                </div>


                {/* =====================================================
                    PRODUCT INFORMATION
                ===================================================== */}

                <div className="card__data">

                  {/* Product Number */}
                  <span className="product-number">
                    {index + 1 < 10
                      ? `0${index + 1}`
                      : index + 1}
                  </span>


                  {/* Product Name */}
                  <h2 className="card__title">
                    {product.name}
                  </h2>


                  {/* Product Description */}
                  <p className="card__description">
                    {product.category}
                  </p>


                  {/* Decorative Line */}
                  <div className="card__line"></div>


                  {/* View Product */}
                  <Link
                    to={createProductUrl(product.name)}
                    className="card__button"
                  >

                    View Product

                    <span>
                      →
                    </span>

                  </Link>

                </div>

              </article>
            );
          })}

        </div>


        {/* =====================================================
            VIEW ALL PRODUCTS
        ===================================================== */}

        <div className="products__all">

          <Link
            to="/products"
            className="products__all-button"
          >

            <span>
              Explore All Products
            </span>

            <strong>
              →
            </strong>

          </Link>

        </div>

      </div>

    </section>
  );
};


// =====================================================
// EXPORT
// =====================================================

export default Product;