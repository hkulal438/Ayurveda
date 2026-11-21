import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Section.css";

// =========================================================
// DUOTONE ICONS — green fill + dark outline
// (drawn for Anchan; each matches its product form)
// =========================================================

const G = "var(--sec-icon-fill)"; // green fill
const S = "var(--sec-icon-line)"; // outline colour

const icons = {
  // bottle with syrup
  syrup: (
    <>
      <path d="M26 6h12v8H26z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M24 14h16v6c5 2 8 6 8 11v23a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V31c0-5 3-9 8-11Z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M16.5 36h31v18a4 4 0 0 1-4 4h-23a4 4 0 0 1-4-4Z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
    </>
  ),
  // oil drop
  oil: (
    <>
      <path d="M32 6C24 18 16 27 16 39a16 16 0 0 0 32 0C48 27 40 18 32 6Z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M26 38c0 4 2 7 5 8" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  // bowl of leha
  leha: (
    <>
      <path d="M18 26c1-6 7-10 14-10s13 4 14 10Z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M8 26h48c0 12-10 22-24 22S8 38 8 26Z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M24 48h16v6H24z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M8 26h48" stroke={S} strokeWidth="2.4" />
    </>
  ),
  // liniment bottle with flip cap
  liniment: (
    <>
      <path d="M27 6h10v10H27z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M22 16h20l3 8v30a4 4 0 0 1-4 4H23a4 4 0 0 1-4-4V24Z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M19 32h26v14H19z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
    </>
  ),
  // ointment jar
  ointment: (
    <>
      <path d="M12 20h40v8H12z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M14 28h36v20a6 6 0 0 1-6 6H20a6 6 0 0 1-6-6Z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M14 36h36v6H14z" fill={G} stroke={S} strokeWidth="2" />
    </>
  ),
  // incense cone with smoke (dhoopa)
  dhoopa: (
    <>
      <path d="M32 26 22 50h20Z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M14 50h36v6H14z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M32 22c-4-4 4-6 0-10s4-6 0-8" fill="none" stroke={S} strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  // spoon of tonic
  tonic: (
    <>
      <ellipse cx="22" cy="40" rx="13" ry="9" fill={G} stroke={S} strokeWidth="2.4" />
      <path d="M33 35 56 18" stroke={S} strokeWidth="5" strokeLinecap="round" />
      <path d="M33 35 56 18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 38c2-2 5-3 8-2" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
    </>
  ),
  // shampoo bottle with pump
  hair: (
    <>
      <path d="M28 4h14v5H28z" fill={G} stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M33 9v7M26 16h14v6H26z" fill="#fff" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M20 22h26v30a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6Z" fill="#fff" stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M20 34h26v12H20z" fill={G} stroke={S} strokeWidth="2.2" />
    </>
  ),
  // aloe leaf with gel drop (skin care)
  skin: (
    <>
      <path d="M14 54C14 30 28 14 48 8c-2 24-12 40-34 46Z" fill={G} stroke={S} strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M14 54 40 20" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M48 34c-3 5-5 8-5 11a5 5 0 0 0 10 0c0-3-2-6-5-11Z" fill="#fff" stroke={S} strokeWidth="2.2" strokeLinejoin="round" />
    </>
  ),
};

// =========================================================
// ANCHAN PRODUCT FORMS
// =========================================================

const forms = [
  {
    icon: "syrup",
    title: "Syrups",
    text: "Classical and proprietary liquid formulations, prepared for easy daily use and gentle, consistent support.",
  },
  {
    icon: "oil",
    title: "Taila / Oils",
    text: "Herbal oils prepared by traditional processing, for massage, hair care and supportive care of the body.",
  },
  {
    icon: "leha",
    title: "Leha / Rasayana",
    text: "Slow-cooked herbal preparations in the Rasayana tradition, made to nourish and support everyday vitality.",
  },
  {
    icon: "liniment",
    title: "Liniments",
    text: "External herbal liniments made for massage and supportive care of muscles and joints.",
  },
  {
    icon: "ointment",
    title: "Malahara / Ointments",
    text: "Traditional ointments prepared for targeted external application and skin care.",
  },
  {
    icon: "dhoopa",
    title: "Dhoopa",
    text: "Herbal fumigation blends prepared in the classical way, for a clean and fresh environment.",
  },
  {
    icon: "tonic",
    title: "Nutritional Tonics",
    text: "Herbal nutritive formulations developed around the everyday needs of growing children.",
  },
  {
    icon: "hair",
    title: "Hair Care",
    text: "Herbal hair-care preparations inspired by traditional Ayurvedic care of the scalp and hair.",
  },
  {
    icon: "skin",
    title: "Skin Care",
    text: "Gentle herbal skin-care formulations based on time-tested plant ingredients.",
  },
];

// leaf-branch line art used as a background decoration
const LeafBranch = ({ className }) => (
  <svg className={className} viewBox="0 0 400 260" fill="none" aria-hidden="true">
    <path d="M0 250C90 210 180 150 260 90S380 20 400 10" stroke="currentColor" strokeWidth="1.5" />
    {[[60, 222, -30], [120, 190, 20], [170, 158, -25], [220, 122, 25], [280, 80, -20], [330, 48, 20]].map(
      ([x, y, r], i) => (
        <path
          key={i}
          d="M0 0C10-26 40-34 70-30C55-8 30 6 0 0Z"
          transform={`translate(${x} ${y}) rotate(${r})`}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      )
    )}
  </svg>
);

const Section = () => {
  const location = useLocation();

  // On the Products page, the button scrolls down to the product
  // showcase; anywhere else it opens the Products page.
  const handleCta = (e) => {
    const showcase = document.getElementById("products-section");
    if (location.pathname === "/products" && showcase) {
      e.preventDefault();
      showcase.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="sec-section" id="product-range">
      <LeafBranch className="sec-leaf sec-leaf--right" />
      <LeafBranch className="sec-leaf sec-leaf--left" />

      <div className="sec-container">
        <h2 className="sec-title" data-aos="fade-up">
          Explore our range of Ayurvedic preparations, each crafted
          with the care and tradition of Anchan Ayurveda.
        </h2>

        <div className="sec-grid">
          {forms.map((form, index) => (
            <article
              key={form.title}
              className="sec-card"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
            >
              <svg
                className="sec-card-icon"
                viewBox="0 0 64 64"
                width="68"
                height="68"
                aria-hidden="true"
              >
                {icons[form.icon]}
              </svg>

              <h3 className="sec-card-title">{form.title}</h3>
              <p className="sec-card-text">{form.text}</p>
            </article>
          ))}
        </div>

        <div className="sec-cta" data-aos="fade-up">
          <Link to="/products" className="sec-btn" onClick={handleCta}>
            Discover Our Ayurvedic Collection
            <span className="sec-btn-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor"
                  strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section;
