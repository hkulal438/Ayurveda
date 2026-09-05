import React, { useState, useEffect } from "react";

import {
  Link as RouterLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "./Header.css";

import logo from "../../images/Anchan_Ayurvedic_industries_-_Logo-removebg-preview (1).png";


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  // =====================================================
  // HEADER SCROLL EFFECT
  // =====================================================

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);


  // =====================================================
  // MOBILE MENU
  // =====================================================

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };


  // =====================================================
  // SCROLL TO SECTION
  // =====================================================

  const scrollToSection = (id) => {

    // ---------------------------------------------------
    // If not on homepage, navigate home first.
    // The home page can then use the state value to
    // perform the scroll.
    // ---------------------------------------------------

    if (location.pathname !== "/") {

      navigate("/", {
        state: {
          scrollToId: id,
        },
      });

      closeMenu();

      return;
    }


    // ---------------------------------------------------
    // Find requested section
    // ---------------------------------------------------

    const section = document.getElementById(id);

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }


    closeMenu();
  };


  // =====================================================
  // PRODUCTS
  // =====================================================

  const products = [
    "Manasa",
    "Madhuna",
    "Madhiphala Rasayana",
    "Shwashari",
    "Nirvedhan Oil",
    "Rumovin Liniment",
    "Chyawanprash",
    "Hingoli",
    "Pusti",
    "Bhrangamalaka Thaila",
    "Aloe Vera Shampoo",
    "Aloe Vera Gel",
  ];


  // =====================================================
  // PRODUCT SLUG
  // =====================================================

  const createSlug = (product) =>
    product
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");


  return (

    <header
      className={`header ${
        isScrolled ? "scrolled" : ""
      }`}
    >

      <div className="header-container">


        {/* =================================================
            LOGO
        ================================================= */}

        <div className="logo">

          <RouterLink
            to="/"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="Anchan Ayurvedic Industries"
            />

          </RouterLink>

        </div>


        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`nav ${
            isMenuOpen ? "open" : ""
          }`}
        >

          <ul className="nav-list">


            {/* ================= HOME ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("hero-section")
                }
              >
                Home
              </button>

            </li>


            {/* ================= ABOUT ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("about-company-section")
                }
              >
                About Us
              </button>

            </li>


            {/* ================= LEGACY ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("legacy-section")
                }
              >
                Our Legacy
              </button>

            </li>


            {/* =================================================
                PRODUCTS
            ================================================= */}

            <li
              className={`dropdown ${
                activeDropdown === "products"
                  ? "active"
                  : ""
              }`}

              onMouseEnter={() =>
                setActiveDropdown("products")
              }

              onMouseLeave={() =>
                setActiveDropdown(null)
              }
            >

              <button
                type="button"
                className="nav-link products-button"

                onClick={() => {

                  scrollToSection(
                    "products-section"
                  );

                  setActiveDropdown(null);

                }}
              >

                Products

                <span className="dropdown-arrow"></span>

              </button>


              {/* ================= PRODUCT DROPDOWN ================= */}

              <div className="products-dropdown">

                <div className="dropdown-header">

                  <span className="dropdown-label">
                    OUR PRODUCTS
                  </span>

                  <p>
                    Explore our range of Ayurvedic products
                  </p>

                </div>


                <div className="products-grid">

                  {products.map(
                    (product, index) => (

                      <RouterLink
                        key={product}

                        to={`/products/${createSlug(
                          product
                        )}`}

                        className="product-item"

                        onClick={closeMenu}
                      >

                        <span className="product-number">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>

                        <span className="product-name">
                          {product}
                        </span>

                        <span className="product-arrow">
                          →
                        </span>

                      </RouterLink>

                    )
                  )}

                </div>


                {/* ================= VIEW ALL ================= */}

                <RouterLink
                  to="/products"
                  className="view-all-products"
                  onClick={closeMenu}
                >

                  View All Products

                  <span>
                    →
                  </span>

                </RouterLink>

              </div>

            </li>


            {/* ================= QUALITY ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("quality-section")
                }
              >
                Quality
              </button>

            </li>


            {/* ================= DR ANCHAN ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("dr-anchan-section")
                }
              >
                Dr. Anchan
              </button>

            </li>


            {/* ================= CONTACT ================= */}

            <li>

              <button
                type="button"
                className="nav-link"
                onClick={() =>
                  scrollToSection("contact-section")
                }
              >
                Contact
              </button>

            </li>

          </ul>

        </nav>


        {/* =================================================
            HEADER ACTIONS
        ================================================= */}

        <div className="header-actions">


          {/* ================= ENQUIRE ================= */}

          <RouterLink
            to="/enquire"
            className="enquire-btn"
            onClick={closeMenu}
          >

            Enquire Now

            <span>
              ↗
            </span>

          </RouterLink>


          {/* ================= MOBILE MENU ================= */}

          <button
            type="button"

            className={`menu-toggle ${
              isMenuOpen ? "open" : ""
            }`}

            onClick={toggleMenu}

            aria-label="Toggle navigation"

            aria-expanded={isMenuOpen}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </div>

    </header>
  );
};


export default Header;