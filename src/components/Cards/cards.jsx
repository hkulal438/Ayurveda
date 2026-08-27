import React from "react";
import "./cards.css";

const Cards = () => {
  const features = [
    {
      title: "Wellness & Rasayana",
      description:
        "Traditional formulations developed to support general vitality, wellbeing, and rejuvenation.",
      icon: "🌿",
    },
    {
      title: "Digestive Wellness",
      description:
        "Formulations rooted in traditional Ayurvedic approaches to digestive balance and comfort.",
      icon: "🍃",
    },
    {
      title: "Respiratory Wellness",
      description:
        "Herbal formulations developed from traditional Ayurvedic knowledge for respiratory wellness.",
      icon: "🌱",
    },
    {
      title: "Pain & Musculoskeletal Care",
      description:
        "External oils and topical formulations traditionally used for massage and supportive musculoskeletal care.",
      icon: "🪷",
    },
    {
      title: "Hair & Skin Care",
      description:
        "Herbal personal-care formulations inspired by traditional Ayurvedic approaches to scalp, hair, and skin care.",
      icon: "🌸",
    },
    {
      title: "Children's Wellness",
      description:
        "Formulations developed around children's nutritional needs, growth, and general wellbeing.",
      icon: "🌼",
    },
  ];

  return (
    <section className="restaurant section">
      <div className="container">

        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <div className="section-subtitle">
            05 — PRODUCTS
          </div>

          <h2 style={{ color: "#00b67a" }}>
            Our Ayurvedic Formulations
          </h2>

          <div className="decorative-line"></div>
        </div>

        {/* Introduction */}
        <div className="restaurant-info products-intro" data-aos="fade-up">

          <h3>Ayurveda for the Needs of Today</h3>

          <div className="divider"></div>

          <p className="restaurant-description">
            Drawing on decades of clinical experience and traditional
            Ayurvedic knowledge, Anchan Ayurvedic Industries offers a range
            of herbal formulations developed with carefully selected
            ingredients and a focus on contemporary wellness needs.
          </p>

          <p className="restaurant-description">
            Our formulations span everyday wellness, digestive health,
            respiratory care, musculoskeletal support, hair and skin care,
            and children's nutritional wellness.
          </p>

        </div>

        {/* Product Categories */}
        <div className="additional-info">

          <div className="info-card" data-aos="fade-up">

            <div className="info-content">

              <h4 style={{ color: "#00b67a" }}>
                Product Categories
              </h4>

              <div className="restaurant-features">

                {features.map((feature, index) => (
                  <div
                    className="feature-item"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="feature-icon">
                      {feature.icon}
                    </div>

                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cards;