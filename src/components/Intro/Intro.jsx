import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <section className="intro-section" id="about-us">
      <div className="intro-container">

        {/* =================================
            TOP CONTENT
        ================================= */}
        <div className="intro-top">

          {/* IMAGE SIDE */}
          <div
            className="intro-image-column"
            data-aos="fade-right"
          >

            <div className="intro-image-wrapper">

              {/* Main Ayurvedic Image */}
              <div className="intro-main-image">
                <img
                  src="https://plus.unsplash.com/premium_photo-1726769198572-542339268a7f?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Traditional Ayurvedic heritage"
                />
              </div>

              {/* Small Botanical Image */}
              <div className="intro-small-image">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682098134401-61573db798a1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Ayurvedic herbs"
                />
              </div>

              {/* Decorative Circle */}
              <div className="intro-leaf-circle">
                <span>02</span>
              </div>

            </div>

          </div>


          {/* CONTENT SIDE */}
          <div className="intro-content">

            <div
              className="intro-label"
              data-aos="fade-up"
            >
              <span className="intro-label-line"></span>
              ABOUT US
            </div>

            <h2
              className="intro-heading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Story Begins
              <span> With Tradition.</span>
            </h2>

            <p
              className="intro-lead"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Anchan Ayurvedic Industries has its roots in the traditional
              Ayurvedic practice of <strong>Pandit Thoma Poojary</strong>,
              a respected practitioner from Padubidri.
            </p>

            <p
              className="intro-text"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Known for preparing classical Ayurvedic medicines using
              traditional methods, Pandit Thoma Poojary earned the trust of
              patients and physicians through his dedication to Ayurveda.
            </p>

            <p
              className="intro-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              His son, <strong>Dr. N. T. Anchan</strong>, carried this
              knowledge forward. After completing his Ayurvedic education,
              Dr. Anchan established his clinical practice and later expanded
              into Ayurvedic medicine manufacturing.
            </p>

            <p
              className="intro-text"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              What began as a family legacy gradually evolved into an
              organization committed to bringing traditional Ayurvedic
              formulations to a wider community.
            </p>

            <a
              href="#philosophy"
              className="intro-button"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span>Discover Our Philosophy</span>
              <span className="intro-button-arrow">→</span>
            </a>

          </div>

        </div>


        {/* =================================
            PHILOSOPHY SECTION
        ================================= */}
        <div
          className="intro-philosophy"
          id="philosophy"
          data-aos="fade-up"
        >

          <div className="philosophy-heading">

            <div
              className="intro-label"
              data-aos="fade-up"
            >
              <span className="intro-label-line"></span>
              OUR PHILOSOPHY
            </div>

            <h3
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ayurveda Rooted in
              <span> Knowledge & Integrity.</span>
            </h3>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We believe authentic Ayurveda requires respect for tradition,
              uncompromising quality and a deep sense of responsibility.
            </p>

          </div>


          {/* Philosophy Cards */}
          <div className="philosophy-cards">

            {/* Knowledge */}
            <div
              className="philosophy-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >

              <div className="philosophy-number">
                01
              </div>

              <div className="philosophy-icon">
                ✦
              </div>

              <h4>Knowledge.</h4>

              <p>
                Respect for the principles that have shaped Ayurveda
                for generations.
              </p>

            </div>


            {/* Quality */}
            <div
              className="philosophy-card active"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <div className="philosophy-number">
                02
              </div>

              <div className="philosophy-icon">
                ✧
              </div>

              <h4>Quality.</h4>

              <p>
                Careful attention to ingredients, processes and
                finished formulations.
              </p>

            </div>


            {/* Responsibility */}
            <div
              className="philosophy-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <div className="philosophy-number">
                03
              </div>

              <div className="philosophy-icon">
                ❋
              </div>

              <h4>Responsibility.</h4>

              <p>
                A commitment to developing and providing Ayurvedic
                products with integrity.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Intro;