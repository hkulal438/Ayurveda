import React, { useEffect, useRef, useState } from "react";
import "./Legacy.css";

import pandithImage from "../../images/Pandith.png";
import doctorImage from "../../images/doctor.png";
import manufacturingImage from "../../images/manufacturing.png";
import beyondImage from "../../images/beyond.png";
import traditionImage from "../../images/tradition.png";

// Small leaf glyph
const LeafMark = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 20C4 11 11 4 20 4C20 13 13 20 4 20Z" fill="currentColor" />
    <path
      d="M4 20C8 16 12 12 19 5"
      stroke="#ffffff"
      strokeOpacity="0.7"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const timelineData = [
  {
    year: "1970s",
    title: "The Foundation",
    image: pandithImage,
    imageAlt:
      "Pandit Thoma Poojary, traditional Ayurvedic practitioner from Padubidri",
    paragraphs: [
      "The story of Anchan Ayurveda begins with the late Pandit Thoma Poojary, a traditional Ayurvedic practitioner from Padubidri. He was known for his dedicated practice and for personally preparing classical Ayurvedic formulations using traditional methods.",
      "His preparations included Asavas, Arishtas, Lehyas, Vatis, and other herbal formulations. His knowledge, commitment to Ayurveda, and close relationship with patients created a strong foundation for the next generation.",
    ],
  },
  {
    year: "1975 – 1980",
    title: "A New Chapter",
    image: doctorImage,
    imageAlt:
      "Dr. Narayana T. Anchan representing his Ayurvedic education and clinical practice",
    paragraphs: [
      "Inspired by his father's knowledge and practice, Dr. Narayana T. Anchan pursued formal education in Ayurveda. He completed his Ayurvedic qualification during 1975 – 1980, followed by further studies at SDM College of Ayurveda, Udupi.",
      "In 1980, he began his clinical practice, carrying forward the traditional Ayurvedic knowledge he had inherited while developing his own clinical experience.",
    ],
  },
  {
    year: "1991",
    title: "From Clinical Practice to Manufacturing",
    image: manufacturingImage,
    imageAlt: "Anchan Ayurvedic manufacturing facility and production process",
    paragraphs: [
      "As Dr. Anchan's clinical experience grew, so did the need for reliable Ayurvedic formulations. His work gradually expanded from clinical practice and formulation development into Ayurvedic herbal medicine manufacturing.",
      "In 1991, this journey took a significant step forward with the establishment and expansion of an herbal medicine manufacturing unit.",
    ],
  },
  {
    year: "Four Decades",
    title: "Beyond Clinical Practice",
    image: beyondImage,
    imageAlt: "Ayurvedic community awareness and educational activities",
    paragraphs: [
      "Dr. Anchan has also contributed to Ayurvedic education and community awareness, conducting programs for schools, colleges, and youth organizations on wellness, preventive healthcare, and medicinal plants.",
      "His contributions have been recognized through honours including the National Kamala Patra Award, Vaidya Rathna Award, and Samaj Ratna Award, alongside leadership roles within Ayurvedic professional organizations.",
    ],
  },
  {
    year: "Today",
    title: "Tradition Continues",
    image: traditionImage,
    imageAlt:
      "Modern Ayurvedic manufacturing facility carrying the tradition forward",
    paragraphs: [
      "Today, Anchan Ayurvedic Industries continues the legacy established by Pandit Thoma Poojary and carried forward by Dr. N. T. Anchan.",
      "The organization remains committed to preserving the principles of traditional Ayurveda while embracing systematic manufacturing, quality-focused processes, and responsible formulation practices to meet contemporary healthcare needs.",
    ],
  },
];

// Journey stages — each with a matching icon.
// Icons are Lucide shapes (lucide.dev, ISC licence) drawn inline,
// so no extra package is needed.
const journeySteps = [
  {
    label: "Traditional Practice",
    // Lucide "leaf" — traditional herbal knowledge
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
  {
    label: "Clinical Experience",
    // Lucide "stethoscope"
    icon: (
      <>
        <path d="M11 2v2" />
        <path d="M5 2v2" />
        <path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" />
        <path d="M8 15a6 6 0 0 0 12 0v-3" />
        <circle cx="20" cy="10" r="2" />
      </>
    ),
  },
  {
    label: "Formulation Development",
    // Lucide "flask-conical"
    icon: (
      <>
        <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
        <path d="M6.453 15h11.094" />
        <path d="M8.5 2h7" />
      </>
    ),
  },
  {
    label: "Manufacturing",
    // Lucide "factory"
    icon: (
      <>
        <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
        <path d="M17 18h1" />
        <path d="M12 18h1" />
        <path d="M7 18h1" />
      </>
    ),
  },
  {
    label: "Quality-Focused Ayurveda",
    // Lucide "badge-check" — quality assured
    icon: (
      <>
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];


export default function Legacy() {
  // which chapter is in the middle of the screen
  const [active, setActive] = useState(0);
  const chapterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      // a thin band across the middle of the viewport
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    chapterRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="legacy-root"
      id="legacy-section"
      aria-labelledby="legacy-heading"
    >
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="legacy-hero" data-aos="fade-up">
        <span className="legacy-eyebrow">
          <LeafMark className="legacy-eyebrow-icon" />
          Heritage &amp; Legacy
        </span>

        <h2 id="legacy-heading" className="legacy-title">
          A Legacy Passed From
          <span>One Generation to the Next</span>
        </h2>
      </header>

      {/* =====================================================
          CHAPTERS — sticky photo on the left changes as each
          chapter on the right scrolls into view
      ===================================================== */}
      <div className="legacy-chapters">

        {/* ---------- sticky stage (desktop) ---------- */}
        <div className="legacy-stage" aria-hidden="true">
          <div className="legacy-stage-frame">
            {timelineData.map((item, index) => (
              <img
                key={item.year}
                src={item.image}
                alt=""
                className={`legacy-stage-img ${index === active ? "is-active" : ""}`}
              />
            ))}

            <div className="legacy-stage-year">
              <span className="legacy-stage-count">
                {String(active + 1).padStart(2, "0")} / {String(timelineData.length).padStart(2, "0")}
              </span>
              <strong key={active}>{timelineData[active].year}</strong>
            </div>
          </div>

          {/* progress dots */}
          <ol className="legacy-progress">
            {timelineData.map((item, index) => (
              <li
                key={item.year}
                className={index <= active ? "is-done" : ""}
              />
            ))}
          </ol>
        </div>

        {/* ---------- chapters ---------- */}
        <ol className="legacy-timeline">
          {timelineData.map((item, index) => (
            <li
              key={item.year}
              data-index={index}
              ref={(el) => (chapterRefs.current[index] = el)}
              className={`legacy-chapter ${index === active ? "is-active" : ""}`}
            >
              {/* photo shown inline on tablet / phone */}
              <figure className="legacy-chapter-media">
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
              </figure>

              <div className="legacy-chapter-head">
                <span className="legacy-node" aria-hidden="true">
                  <LeafMark className="legacy-node-leaf" />
                </span>
                <span className="legacy-year">{item.year}</span>
              </div>

              <h3 className="legacy-entry-title">{item.title}</h3>

              {item.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </li>
          ))}
        </ol>
      </div>

      {/* =====================================================
          JOURNEY — cream band, big numbers, gold line with dots
      ===================================================== */}
      <div className="legacy-journey" data-aos="fade-up">
        <div className="legacy-journey-head">
          <h2 className="legacy-journey-title">
            A Journey Built
            <span>on Experience</span>
          </h2>

          <p className="legacy-journey-note">
            Over more than four decades, Dr. Anchan has continued his clinical
            practice while contributing to the development and awareness of
            Ayurveda.
          </p>
        </div>

        <ol className="legacy-jsteps">
          {journeySteps.map((step, index) => (
            <li key={step.label} className="legacy-jstep">
              <span className="legacy-jstep-num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="legacy-jstep-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
                  stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round">
                  {step.icon}
                </svg>
              </span>

              <span className="legacy-jstep-dot" aria-hidden="true"></span>

              <span className="legacy-jstep-name">{step.label}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* =====================================================
          VISION
      ===================================================== */}
      <div className="legacy-vision" data-aos="fade-up">
        <LeafMark className="legacy-vision-leaf legacy-vision-leaf--a" />
        <LeafMark className="legacy-vision-leaf legacy-vision-leaf--b" />

        <span className="legacy-vision-label">Our Vision</span>

        <p className="legacy-vision-statement">
          To make safe, affordable, and responsible Ayurvedic healthcare
          accessible to all.
        </p>

        <p className="legacy-vision-tag">
          The journey continues {"—"} from traditional knowledge to a
          continuing commitment to Ayurveda.
        </p>
      </div>
    </section>
  );
}
