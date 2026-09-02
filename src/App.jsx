import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Intro from "./components/Intro/Intro";
import Whyus from "./components/Whyus/Whyus";
import Dranchan from "./components/Dranchan/Dranchan";
import Legacy from "./components/Legacy/Legacy";
import Cards from "./components/Cards/cards";
import Product from "./components/Product/Product";
import Quality from "./components/Quality/Quality";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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

    AOS.refresh();

  }, []);


  // =====================================================
  // NAVBAR SECTION SCROLL
  // =====================================================

  useEffect(() => {

    // Get section ID passed from Header
    const scrollToId = location.state?.scrollToId;

    if (!scrollToId) {
      return;
    }

    // Wait until homepage sections are rendered
    const timer = setTimeout(() => {

      const section =
        document.getElementById(scrollToId);

      if (section) {

        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

      // Remove scroll state from URL/history
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );

    }, 150);

    return () => clearTimeout(timer);

  }, [location.pathname, location.state]);


  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main>

        {/* ================= HERO ================= */}

        <Hero />


        {/* ================= ABOUT ================= */}

        <About />


        {/* ================= INTRO ================= */}

        <Intro />


        {/* ================= WHY US ================= */}

        <Whyus />


        {/* ================= DR. ANCHAN ================= */}

        <Dranchan />


        {/* ================= LEGACY ================= */}

        <Legacy />


        {/* ================= INFORMATION CARDS ================= */}

        <Cards />


        {/* ================= PRODUCTS ================= */}

        <Product />


        {/* ================= QUALITY ================= */}

        <Quality />


        {/* ================= GALLERY ================= */}

        <Gallery />
        <Contact />

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </>
  );
}

export default App;