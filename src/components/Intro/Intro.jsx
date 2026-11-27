import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Intro.css";
import heroImage from "../../images/opt/medicinal-herbs.webp";

// =========================================================
// LINEAGE — told as a plant growing: seed → sapling → tree
// =========================================================

const lineage = [
  {
    stage: "The Seed",
    name: "Pandit Thoma Poojary",
    role: "Founder, Padubidri",
    detail:
      "Prepared classical Ayurvedic medicines by hand, earning the trust of patients and physicians through decades of disciplined practice.",
    // seed
    icon: (
      <>
        <path d="M12 20c-4 0-6-3-6-6 0-4 3-8 6-10 3 2 6 6 6 10 0 3-2 6-6 6Z" />
        <path d="M12 20v-8" />
      </>
    ),
  },
  {
    stage: "The Sapling",
    name: "Dr. N. T. Anchan",
    role: "Second generation",
    detail:
      "Completed his Ayurvedic education, opened his own clinical practice, and carried his father's knowledge into medicine manufacturing.",
    // sprout
    icon: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5Z" />
        <path d="M12 14c0-3-2.5-5-6-5 0 3 2.5 5 6 5Z" />
        <path d="M7 21h10" />
      </>
    ),
  },
  {
    stage: "The Tree",
    name: "Anchan Ayurvedic Industries",
    role: "Today",
    detail:
      "A family legacy grown into an organisation bringing traditional formulations to a wider community.",
    // tree
    icon: (
      <>
        <path d="M12 21v-6" />
        <path d="M12 15c-4.5 0-7-2.5-7-5.5S7.5 4 9.5 4.5C10 3 11 2.5 12 2.5S14 3 14.5 4.5C16.5 4 19 6.5 19 9.5S16.5 15 12 15Z" />
        <path d="M9 21h6" />
      </>
    ),
  },
];

// =========================================================
// PHILOSOPHY — three pillars
// =========================================================

const values = [
  {
    title: "Knowledge",
    text: "Respect for the principles that have shaped Ayurveda for generations.",
  },
  {
    title: "Quality",
    text: "Careful attention to ingredients, processes and finished formulations.",
  },
  {
    title: "Responsibility",
    text: "A commitment to developing and providing Ayurvedic products with integrity.",
  },
];

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="intro-section" id="about">

      {/* =====================================================
          1. STORY — panorama feature: wide photo with the
          heading set on it, story text in two columns below
      ===================================================== */}
      <div className="intro-story">
        <div className="intro-story-inner">

          <figure className="intro-pano" data-aos="fade-up">
            <img
              src={heroImage}
              alt="An Ayurvedic practitioner preparing medicinal herbs using traditional methods"
            />
          </figure>

          <div className="intro-story-content">
            <h2 className="intro-heading intro-story-heading" data-aos="fade-up">
              Our story begins
              <span>with tradition.</span>
            </h2>

            <div className="intro-story-body">
              <p className="intro-story-lead" data-aos="fade-up">
                Anchan Ayurvedic Industries has its roots in the traditional
                Ayurvedic practice of <strong>Pandit Thoma Poojary</strong>, a
                respected practitioner from Padubidri.
              </p>

              <p className="intro-copy" data-aos="fade-up" data-aos-delay="100">
                Known for preparing classical Ayurvedic medicines using
                traditional methods, he earned the trust of patients and
                physicians through his dedication to Ayurveda.
              </p>

              <p className="intro-copy" data-aos="fade-up" data-aos-delay="180">
                His son, <strong>Dr. N. T. Anchan</strong>, carried this
                knowledge forward — first into his own clinical practice, and
                later into Ayurvedic medicine manufacturing. What began as a
                family legacy gradually evolved into an organisation committed
                to bringing traditional formulations to a wider community.
              </p>

              <a
                className="intro-cta"
                href="#philosophy"
                data-aos="fade-up"
                data-aos-delay="260"
              >
                Discover Our Philosophy
                <span className="intro-cta-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14">
                    <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                      strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          2. LINEAGE — a vine that grows seed → sapling → tree
      ===================================================== */}
      <div className="intro-growth">
        <h2 className="intro-heading intro-heading--center" data-aos="fade-up">
          Three generations,
          <span>one living tradition.</span>
        </h2>

        <div className="intro-growth-track">
          {/* the growing vine */}
          <svg
            className="intro-vine"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M40 230 C 260 230, 300 150, 600 140 S 940 40, 1160 30"
              fill="none"
              stroke="url(#introVine)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="2 10"
            />
            <defs>
              <linearGradient id="introVine" x1="0" x2="1">
                <stop offset="0" stopColor="#c8a45c" />
                <stop offset="1" stopColor="#8cc63f" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="intro-growth-list">
            {lineage.map((person, index) => (
              <li
                key={person.name}
                className={`intro-growth-step intro-growth-step--${index + 1}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <span className="intro-growth-node" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none"
                    stroke="currentColor" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round">
                    {person.icon}
                  </svg>
                </span>

                <p className="intro-growth-stage">{person.stage}</p>
                <h3 className="intro-growth-name">{person.name}</h3>
                <p className="intro-growth-role">{person.role}</p>
                <p className="intro-growth-detail">{person.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* =====================================================
          3. PHILOSOPHY — editorial index rows
      ===================================================== */}
      <div className="intro-philosophy" id="philosophy">
        <div className="intro-philosophy-inner">

          <div className="intro-philosophy-head">
            <h2 className="intro-heading" data-aos="fade-up">
              Ayurveda Rooted in
              <span>Knowledge &amp; Integrity.</span>
            </h2>

            <p className="intro-philosophy-text" data-aos="fade-up" data-aos-delay="100">
              We believe authentic Ayurveda requires respect for tradition,
              uncompromising quality and a deep sense of responsibility.
            </p>
          </div>

          <ol className="intro-principles">
            {values.map((value, index) => (
              <li
                key={value.title}
                className="intro-principle"
                data-aos="fade-up"
                data-aos-delay={120 + index * 120}
              >
                <span className="intro-principle-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="intro-principle-title">{value.title}</h3>
                <p className="intro-principle-text">{value.text}</p>
                <span className="intro-principle-arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none"
                    stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Intro;
