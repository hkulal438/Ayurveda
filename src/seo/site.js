// =========================================================
// SEO SETTINGS — one place for the domain, business details
// and every page's title / description.
// Used by the app (live page tags) and by vite.config.js
// (writes a ready-made HTML file per page at build time).
// =========================================================

// Change this if the site goes live on a different address
export const SITE_URL = "https://www.anchanayurveda.com";

export const BUSINESS = {
  name: "Anchan Ayurvedic Industries",
  alternateName: ["Anchan Ayurveda", "Anchan Ayurveda Padubidri", "Anchan Clinic Padubidri"],
  founder: "Dr. Narayana T. Anchan",
  foundingDate: "1991",
  phone: "+91-820-2555161",
  mobile: "+91-9448445440",
  street: "Anchan Clinic, Arjuna Complex, Dhanvantari Road, NH 66",
  locality: "Padubidri",
  district: "Udupi",
  region: "Karnataka",
  postalCode: "574111",
  country: "IN",
  lat: 13.1415343,
  lng: 74.771067,
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Anchan+Ayurvedic+Industries+Padubidri",
  logo: "/logo.png",
  image: "/og-image.jpg",
};

const BRAND = "Anchan Ayurveda, Padubidri";

// title (≈ 50–60 chars) and description (≈ 140–160 chars) for each page
export const PAGES = {
  "/": {
    title: `${BRAND} | Anchan Ayurvedic Industries – Ayurvedic Medicines`,
    description:
      "Anchan Ayurvedic Industries, Padubidri (Udupi) – GMP-certified maker of classical Ayurvedic medicines: arishtas, asavas, tailas, lehyas & churnas. Clinic of Dr. N. T. Anchan.",
    heading: "Anchan Ayurveda, Padubidri – Anchan Ayurvedic Industries",
  },
  "/about": {
    title: `About Us | ${BRAND}`,
    description:
      "About Anchan Ayurvedic Industries, Padubidri – a family Ayurvedic practice turned GMP-certified manufacturer of authentic, classical Ayurvedic formulations.",
    heading: "About Anchan Ayurvedic Industries, Padubidri",
  },
  "/legacy": {
    title: `Our Legacy – Since 1970s | ${BRAND}`,
    description:
      "The story of Anchan Ayurveda: from Pandit Thoma Poojary's traditional practice in Padubidri to Dr. N. T. Anchan's clinic (1980) and manufacturing unit (1991).",
    heading: "The Legacy of Anchan Ayurveda",
  },
  "/dr-anchan": {
    title: `Dr. N. T. Anchan – Ayurvedic Doctor in Padubidri | Anchan Ayurveda`,
    description:
      "Dr. Narayana T. Anchan – Ayurvedic physician at Anchan Clinic, Padubidri, Udupi, practising since 1980 and founder of Anchan Ayurvedic Industries.",
    heading: "Dr. N. T. Anchan – Ayurvedic Physician, Padubidri",
  },
  "/products": {
    title: `Ayurvedic Products | ${BRAND}`,
    description:
      "Anchan Ayurvedic products – Manasa, Chyavanaprasha Leha, Pusti, Madiphala Rasayana, Kumari Shampoo, Bananthi Taila and many more classical medicines made in Padubidri.",
    heading: "Anchan Ayurvedic Products",
  },
  "/quality": {
    title: `Quality & GMP Manufacturing | ${BRAND}`,
    description:
      "How Anchan Ayurvedic Industries makes its medicines – GMP-certified unit in Padubidri, selected herbs, classical methods and careful quality checks.",
    heading: "Quality at Anchan Ayurvedic Industries",
  },
  "/contact": {
    title: `Contact Us | Anchan Ayurveda, Padubidri, Udupi`,
    description:
      "Contact Anchan Ayurvedic Industries & Anchan Clinic, Arjuna Complex, Dhanvantari Road, NH 66, Padubidri, Karnataka 574111. Call 0820 255 5161 or +91 94484 45440.",
    heading: "Contact Anchan Ayurveda, Padubidri",
  },
};

export const pageFor = (path) => PAGES[path] || PAGES["/"];

// ---------------------------------------------------------
// Structured data (JSON-LD) so Google can show the business
// name, address, phone and map in search results
// ---------------------------------------------------------
export function businessSchema() {
  const b = BUSINESS;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: b.name,
        alternateName: b.alternateName,
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}${b.logo}`,
        image: `${SITE_URL}${b.image}`,
        description: PAGES["/"].description,
        founder: { "@type": "Person", name: b.founder },
        foundingDate: b.foundingDate,
        telephone: [b.phone, b.mobile],
        address: {
          "@type": "PostalAddress",
          streetAddress: b.street,
          addressLocality: b.locality,
          addressRegion: b.region,
          postalCode: b.postalCode,
          addressCountry: b.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng },
        hasMap: b.mapUrl,
        areaServed: ["Padubidri", "Udupi", "Mangalore", "Karnataka", "India"],
        knowsAbout: ["Ayurveda", "Ayurvedic medicine", "Arishta", "Asava", "Taila", "Lehya", "Churna"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Anchan Ayurveda",
        alternateName: b.name,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Physician",
        "@id": `${SITE_URL}/dr-anchan#doctor`,
        name: "Dr. N. T. Anchan",
        alternateName: b.founder,
        medicalSpecialty: "Ayurveda",
        url: `${SITE_URL}/dr-anchan`,
        telephone: b.mobile,
        address: {
          "@type": "PostalAddress",
          streetAddress: b.street,
          addressLocality: b.locality,
          addressRegion: b.region,
          postalCode: b.postalCode,
          addressCountry: b.country,
        },
        parentOrganization: { "@id": `${SITE_URL}/#business` },
      },
    ],
  };
}

// ---------------------------------------------------------
// <head> tags for one page (used at build time for each page)
// ---------------------------------------------------------
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function headHtml(path) {
  const p = pageFor(path);
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  const img = `${SITE_URL}${BUSINESS.image}`;
  return [
    `<title>${esc(p.title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Anchan Ayurveda" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:title" content="${esc(p.title)}" />`,
    `<meta property="og:description" content="${esc(p.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${img}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Anchan Ayurveda products – Anchan Ayurvedic Industries, Padubidri" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(p.title)}" />`,
    `<meta name="twitter:description" content="${esc(p.description)}" />`,
    `<meta name="twitter:image" content="${img}" />`,
  ].join("\n    ");
}

// Plain-text fallback shown only when JavaScript is off
export function noscriptHtml(path) {
  const p = pageFor(path);
  const b = BUSINESS;
  const links = Object.keys(PAGES)
    .map((k) => `<a href="${k}">${esc(PAGES[k].heading)}</a>`)
    .join(" · ");
  return [
    `<h1>${esc(p.heading)}</h1>`,
    `<p>${esc(p.description)}</p>`,
    `<p>${esc(b.name)}, ${esc(b.street)}, ${b.locality}, ${b.district}, ${b.region} ${b.postalCode}. Phone: 0820 255 5161, +91 94484 45440.</p>`,
    `<p>${links}</p>`,
  ].join("\n      ");
}

export const schemaHtml = () =>
  `<script type="application/ld+json">${JSON.stringify(businessSchema())}</script>`;
