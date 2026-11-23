import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import "./pages.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Whyus from "./components/Whyus/Whyus";
import Dranchan from "./components/Dranchan/Dranchan";
import Legacy from "./components/Legacy/Legacy";
import Cards from "./components/Cards/cards";
import Product from "./components/Product/Product";
import MoreProducts from "./components/MoreProducts/MoreProducts.jsx";
import Section from "./components/Section/Section";
import Quality from "./components/Quality/Quality";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

// =========================================================
// PAGES
// Each navigation item now opens its own page.
// =========================================================

// Home: Hero + Top products + Product range + About + Gallery
const HomePage = () => (
  <>
    <Hero />
    <Product />
    <Section />
    <About />
    <Gallery />
  </>
);

// Every other page starts below the fixed header
const Page = ({ children }) => <div className="page">{children}</div>;

const AboutPage = () => (
  <Page>
    <Intro />
    <Whyus />
  </Page>
);

const LegacyPage = () => (
  <Page>
    <Legacy />
    <Cards />
  </Page>
);

const DrAnchanPage = () => (
  <Page>
    <Dranchan />
  </Page>
);

const ProductsPage = () => (
  <Page>
    <Product />
    <MoreProducts />
  </Page>
);

const QualityPage = () => (
  <Page>
    <Quality />
  </Page>
);

const ContactPage = () => (
  <Page>
    <Contact />
  </Page>
);

function App() {
  const location = useLocation();

  // =====================================================
  // AOS INITIALIZATION
  // =====================================================

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  // =====================================================
  // NEW PAGE → START AT THE TOP
  // (and let AOS pick up the new page's elements)
  // =====================================================

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    const timer = setTimeout(() => AOS.refreshHard(), 100);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          <Route path="/dr-anchan" element={<DrAnchanPage />} />
          <Route path="/products" element={<ProductsPage />} />
          {/* individual product links (e.g. /products/manasa) show the products page for now */}
          <Route path="/products/:slug" element={<ProductsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* old address used by the Enquire button */}
          <Route path="/enquire" element={<Navigate to="/contact" replace />} />
          {/* anything unknown → home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
