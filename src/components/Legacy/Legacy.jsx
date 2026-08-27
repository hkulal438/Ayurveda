import React from "react";
import "./Legacy.css";

import pandithImage from "../../images/Pandith.png";
import doctorImage from "../../images/doctor.png";
import manufacturingImage from "../../images/manufacturing.png";
import beyondImage from "../../images/beyond.png";
import traditionImage from "../../images/tradition.png";

// Small leaf glyph used as the eyebrow icon and timeline node marker.
const LeafMark = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M4 20C4 11 11 4 20 4C20 13 13 20 4 20Z"
      fill="currentColor"
    />
    <path
      d="M4 20C8 16 12 12 19 5"
      stroke="var(--legacy-ivory)"
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
    year: "1975–76 – 1980",
    title: "A New Chapter",
    image: doctorImage,
    imageAlt:
      "Dr. Narayana T. Anchan representing his Ayurvedic education and clinical practice",
    paragraphs: [
      "Inspired by his father's knowledge and practice, Dr. Narayana T. Anchan pursued formal education in Ayurveda. He completed his Ayurvedic qualification during 1975–76, followed by further studies at SDM College of Ayurveda, Udupi.",
      "In 1980, he began his clinical practice, carrying forward the traditional Ayurvedic knowledge he had inherited while developing his own clinical experience.",
    ],
  },
  {
    year: "1991",
    title: "From Clinical Practice to Manufacturing",
    image: manufacturingImage,
    imageAlt:
      "Anchan Ayurvedic manufacturing facility and production process",
    paragraphs: [
      "As Dr. Anchan's clinical experience grew, so did the need for reliable Ayurvedic formulations. His work gradually expanded from clinical practice and formulation development into Ayurvedic herbal medicine manufacturing.",
      "In 1991, this journey took a significant step forward with the establishment and expansion of an herbal medicine manufacturing unit.",
    ],
  },
  {
    year: "Four Decades",
    title: "Beyond Clinical Practice",
    image: beyondImage,
    imageAlt:
      "Ayurvedic community awareness and educational activities",
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

const journeySteps = [
  "Traditional Practice",
  "Clinical Experience",
  "Formulation Development",
  "Manufacturing",
  "Quality-Focused Ayurveda",
];

export default function Legacy() {
  return (
    <section
      className="legacy-root"
      id="legacy-section"
      aria-labelledby="legacy-heading"
    >
      <header
        className="legacy-hero"
        data-aos="fade-up"
      >
        <span
          className="legacy-eyebrow"
          data-aos="fade-up"
        >
          <LeafMark className="legacy-eyebrow-icon" />
          Heritage &amp; Legacy
        </span>

        <h1
          id="legacy-heading"
          className="legacy-title"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A Legacy Passed From One Generation to the Next
        </h1>
      </header>

      <ol className="legacy-timeline">
        {timelineData.map((item, index) => (
          <li
            className={`legacy-row ${
              index % 2 === 0
                ? "is-media-left"
                : "is-media-right"
            }`}
            key={item.year}
            data-aos={
              index % 2 === 0
                ? "fade-right"
                : "fade-left"
            }
            data-aos-delay={index * 100}
          >
            <figure className="legacy-media">
              <img
                src={item.image}
                alt={item.imageAlt}
                loading="lazy"
              />
            </figure>

            <div
              className="legacy-node"
              aria-hidden="true"
            >
              <span className="legacy-node-dot">
                <LeafMark className="legacy-node-leaf" />
              </span>
            </div>

            <div className="legacy-content">
              <span className="legacy-year">
                {item.year}
              </span>

              <h3 className="legacy-entry-title">
                {item.title}
              </h3>

              {item.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>
                  {paragraph}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div
        className="legacy-journey"
        data-aos="fade-up"
      >
        <h2 data-aos="fade-up">
          A Journey Built on Experience
        </h2>

        <div className="legacy-journey-flow">
          {journeySteps.map((step, index) => (
            <React.Fragment key={step}>
              <span
                className="legacy-journey-step"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {step}
              </span>

              {index < journeySteps.length - 1 && (
                <span
                  className="legacy-journey-arrow"
                  aria-hidden="true"
                >
                  &#8594;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          className="legacy-journey-note"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Over more than four decades, Dr. Anchan has continued his clinical
          practice while contributing to the development and awareness of
          Ayurveda.
        </p>
      </div>

      <div
        className="legacy-vision"
        data-aos="fade-up"
      >
        <span
          className="legacy-eyebrow legacy-eyebrow--on-dark"
          data-aos="fade-up"
        >
          <LeafMark className="legacy-eyebrow-icon" />
          Our Vision
        </span>

        <p
          className="legacy-vision-statement"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          To make safe, affordable, and responsible Ayurvedic healthcare
          accessible to all.
        </p>

        <p
          className="legacy-vision-tag"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          The journey continues {"\u2014"} from traditional knowledge to a
          continuing commitment to Ayurveda.
        </p>
      </div>
    </section>
  );
}