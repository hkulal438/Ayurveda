import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Intro.css";
import heroImage from "../../images/Medicinal herbs.png";

const lineage = [
  {
    name: "Pandit Thoma Poojary",
    role: "Founder, Padubidri",
    detail:
      "Prepared classical Ayurvedic medicines by hand, earning the trust of patients and physicians through decades of disciplined practice.",
  },
  {
    name: "Dr. N. T. Anchan",
    role: "Second generation",
    detail:
      "Completed his Ayurvedic education, opened his own clinical practice, and carried his father's knowledge into medicine manufacturing.",
  },
  {
    name: "Anchan Ayurvedic Industries",
    role: "Today",
    detail:
      "A family legacy grown into an organisation bringing traditional formulations to a wider community.",
  },
];

const About = () => {
  /* =================================
     INITIALIZE AOS
  ================================= */

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      delay: 0,
    });

    // Refresh after page/content is rendered
    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-inner">

        {/* =================================
            ABOUT STORY IMAGE
        ================================= */}

        <figure
          className="about-figure"
          data-aos="fade-right"
          data-aos-duration="1100"
          data-aos-offset="100"
        >
          <div className="about-figure-frame">
            <img
              src={heroImage}
              alt="An Ayurvedic practitioner preparing medicinal herbs using traditional methods"
            />
          </div>

          {/* Decorative botanical vein */}

          <svg
            className="about-vein"
            viewBox="0 0 220 520"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M110 8 C60 90 170 140 90 230 C30 300 150 340 100 430 C70 480 120 500 110 512"
              stroke="var(--sea-green)"
              strokeWidth="2"
            />

            <path
              d="M110 60 C90 70 70 78 55 70"
              stroke="var(--forest-green)"
              strokeWidth="1.6"
            />

            <path
              d="M120 170 C145 180 160 190 172 182"
              stroke="var(--forest-green)"
              strokeWidth="1.6"
            />

            <path
              d="M95 300 C70 312 55 322 40 316"
              stroke="var(--forest-green)"
              strokeWidth="1.6"
            />

            <path
              d="M115 420 C138 430 152 438 164 432"
              stroke="var(--forest-green)"
              strokeWidth="1.6"
            />
          </svg>
        </figure>


        {/* =================================
            ABOUT CONTENT
        ================================= */}

        <div className="about-content">

          {/* About Label */}

          <p
            className="about-label"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            About Us
          </p>


          {/* Heading */}

          <h2
            className="about-heading"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="900"
          >
            Our story begins
            <br />
            with tradition.
          </h2>


          {/* First Paragraph */}

          <p
            className="about-copy"
            data-aos="fade-up"
            data-aos-delay="180"
            data-aos-duration="850"
          >
            Anchan Ayurvedic Industries has its roots in the traditional
            Ayurvedic practice of Pandit Thoma Poojary, a respected
            practitioner from Padubidri.
          </p>


          {/* Second Paragraph */}

          <p
            className="about-copy"
            data-aos="fade-up"
            data-aos-delay="260"
            data-aos-duration="850"
          >
            Known for preparing classical Ayurvedic medicines using
            traditional methods, he earned the trust of patients and
            physicians through his dedication to Ayurveda.
          </p>


          {/* Third Paragraph */}

          <p
            className="about-copy"
            data-aos="fade-up"
            data-aos-delay="340"
            data-aos-duration="850"
          >
            His son, Dr. N. T. Anchan, carried this knowledge forward —
            first into his own clinical practice, and later into Ayurvedic
            medicine manufacturing. What began as a family legacy gradually
            evolved into an organisation committed to bringing traditional
            formulations to a wider community.
          </p>


          {/* =================================
              LINEAGE
          ================================= */}

          <ol className="about-lineage">

            {lineage.map((person, index) => (
              <li
                className="about-lineage-item"
                key={person.name}
                data-aos="fade-up"
                data-aos-delay={450 + index * 120}
                data-aos-duration="850"
              >

                <span
                  className="about-leaf"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 20C4 12 8 6 20 4C18 16 12 20 4 20Z"
                      fill="var(--sea-green)"
                    />

                    <path
                      d="M6 18C10 14 14 10 18 6"
                      stroke="var(--ivory)"
                      strokeWidth="1"
                    />
                  </svg>
                </span>


                <div>

                  <p className="about-lineage-name">
                    {person.name}
                  </p>

                  <p className="about-lineage-role">
                    {person.role}
                  </p>

                  <p className="about-lineage-detail">
                    {person.detail}
                  </p>

                </div>

              </li>
            ))}

          </ol>


          {/* =================================
              CTA
          ================================= */}

          <a
            className="about-cta"
            href="#philosophy"
            data-aos="fade-up"
            data-aos-delay="850"
            data-aos-duration="900"
          >
            <span>
              Discover Our Philosophy
            </span>

            <span
              className="about-cta-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </div>


        {/* =================================
            PHILOSOPHY SECTION
        ================================= */}

        <div
          className="intro-philosophy"
          id="philosophy"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="100"
        >

          {/* =================================
              PHILOSOPHY HEADING
          ================================= */}

          <div className="philosophy-heading">

            {/* Label */}

            <div
              className="intro-label"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
            >
              <span className="intro-label-line"></span>

              OUR PHILOSOPHY
            </div>


            {/* Heading */}

            <h3
              data-aos="fade-up"
              data-aos-delay="180"
              data-aos-duration="900"
            >
              Ayurveda Rooted in
              <span> Knowledge &amp; Integrity.</span>
            </h3>


            {/* Description */}

            <p
              data-aos="fade-up"
              data-aos-delay="280"
              data-aos-duration="850"
            >
              We believe authentic Ayurveda requires respect for tradition,
              uncompromising quality and a deep sense of responsibility.
            </p>

          </div>


          {/* =================================
              PHILOSOPHY CARDS
          ================================= */}

          <div className="philosophy-cards">

            {/* =================================
                KNOWLEDGE
            ================================= */}

            <div
              className="philosophy-card"
              data-aos="fade-up"
              data-aos-delay="350"
              data-aos-duration="850"
            >

              <div className="philosophy-number">
                01
              </div>

              <div className="philosophy-icon">
                ✦
              </div>

              <h4>
                Knowledge.
              </h4>

              <p>
                Respect for the principles that have shaped Ayurveda
                for generations.
              </p>

            </div>


            {/* =================================
                QUALITY
            ================================= */}

            <div
              className="philosophy-card active"
              data-aos="fade-up"
              data-aos-delay="480"
              data-aos-duration="850"
            >

              <div className="philosophy-number">
                02
              </div>

              <div className="philosophy-icon">
                ✧
              </div>

              <h4>
                Quality.
              </h4>

              <p>
                Careful attention to ingredients, processes and
                finished formulations.
              </p>

            </div>


            {/* =================================
                RESPONSIBILITY
            ================================= */}

            <div
              className="philosophy-card"
              data-aos="fade-up"
              data-aos-delay="610"
              data-aos-duration="850"
            >

              <div className="philosophy-number">
                03
              </div>

              <div className="philosophy-icon">
                ❋
              </div>

              <h4>
                Responsibility.
              </h4>

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

export default About;