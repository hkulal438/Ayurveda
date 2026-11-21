import React, { useState, useEffect } from "react";
import { Link as RouterLink, NavLink, useLocation } from "react-router-dom";

import "./Header.css";

import logo from "../../images/Anchan_Ayurvedic_industries_-_Logo-removebg-preview (1).png";

// =====================================================
// NAV ITEMS — each one opens its own page
// =====================================================

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Legacy", to: "/legacy" },
  { label: "Products", to: "/products" },
  { label: "Quality", to: "/quality" },
  { label: "Dr. Anchan", to: "/dr-anchan" },
  { label: "Contact", to: "/contact" },
];

const ArrowIcon = () => (
  <span className="pill-icon" aria-hidden="true">
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
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // =====================================================
  // SHADOW ONCE THE PAGE IS SCROLLED
  // =====================================================

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close the mobile menu whenever the page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* ================= LOGO ================= */}
        <div className="logo">
          <RouterLink to="/" onClick={closeMenu}>
            <img src={logo} alt="Anchan Ayurvedic Industries" />
          </RouterLink>
        </div>

        {/* ================= NAVIGATION ================= */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile-only CTA inside the menu */}
            <li className="mobile-cta">
              <RouterLink to="/contact" className="pill-btn" onClick={closeMenu}>
                Enquire Now
                <ArrowIcon />
              </RouterLink>
            </li>
          </ul>
        </nav>

        {/* ================= HEADER ACTIONS ================= */}
        <div className="header-actions">
          <RouterLink
            to="/contact"
            className="pill-btn enquire-btn"
            onClick={closeMenu}
          >
            Enquire Now
            <ArrowIcon />
          </RouterLink>

          <button
            type="button"
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
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
