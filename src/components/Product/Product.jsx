import React from "react";
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
import hingoliImage from "../../images/oil.jpeg";
import pustiImage from "../../images/pusti.jpeg";
import bhrangamalakaImage from "../../images/oil.jpeg";
import aloeVeraShampooImage from "../../images/alovera shampoo.png";
import aloeVeraGelImage from "../../images/alovera gel.png";

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
    name: "HINGOLI",
    category:
      "Digestive wellness formulation",
    image: hingoliImage,
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
    name: "ALOE VERA SHAMPOO",
    category:
      "Gentle herbal hair care",
    image: aloeVeraShampooImage,
  },

  {
    name: "ALOE VERA GEL",
    category:
      "Herbal skin-care formulation",
    image: aloeVeraGelImage,
  },
];

// =====================================================
// PRODUCT COMPONENT
// =====================================================

const Product = () => {
  return (
    <section
      className="products-section"
      id="products-section"
    >

      <div className="products-container">

        {/* ================= HEADING ================= */}

        <div
          className="products-heading"
          data-aos="fade-up"
        >

          <span
            className="products-subtitle"
            data-aos="fade-up"
          >
            OUR COLLECTION
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Featured Products
          </h1>

          <div
            className="heading-decoration"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span></span>
            <i>✤</i>
            <span></span>
          </div>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Traditional Ayurvedic formulations for your complete wellness
          </p>

        </div>


        {/* ================= PRODUCT GRID ================= */}

        <div className="card__container">

          {products.map((product, index) => (

            <article
              className={`card__article ${
                index === 1 ? "featured-card" : ""
              }`}
              key={product.name}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >

              {/* ================= PRODUCT IMAGE ================= */}

              <div className="card__image-wrapper">

                <img
                  src={product.image}
                  alt={product.name}
                  className="card__img"
                />

              </div>


              {/* ================= PRODUCT INFORMATION ================= */}

              <div className="card__data">

                <h2 className="card__title">
                  {product.name}
                </h2>

                <p className="card__description">
                  {product.category}
                </p>

                <div className="card__line"></div>

                <a
                  href={`/products/${product.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="card__button"
                >
                  View Product
                  <span>→</span>
                </a>

              </div>

            </article>

          ))}

        </div>


        {/* ================= VIEW ALL PRODUCTS ================= */}

        <div
          className="products__all"
          data-aos="fade-up"
          data-aos-delay="200"
        >

          <a
            href="/products"
            className="products__all-button"
          >
            View All Products
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Product;