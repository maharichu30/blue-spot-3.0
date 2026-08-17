import { useEffect, useRef } from "react";
import "../Amenities.css";

const amenities = [
  {
    icon: "🏖️",
    title: "Beachside Living",
  },
  {
    icon: "🛣️",
    title: "Wide Roads",
  },
  {
    icon: "💡",
    title: "Street Lights",
  },
  {
    icon: "💧",
    title: "Water Facility",
  },
  {
    icon: "🌳",
    title: "Green Spaces",
  },
  {
    icon: "🛡️",
    title: "Secure Community",
  },
  {
    icon: "📍",
    title: "Prime Location",
  },
  {
    icon: "🌴",
    title: "Coastal Lifestyle",
  },
  {
    icon: "📈",
    title: "Future Potential",
  },
];

export default function IconAmenities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards =
      sectionRef.current?.querySelectorAll(".amenity-card");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="amenities-section"
      ref={sectionRef}
    >
      <div className="amenities-container">

        {/* Section Heading */}
        <div className="amenities-heading">

          <span className="amenities-badge">
            LIFESTYLE AMENITIES
          </span>

          <h2>
            Designed for
            <span> Better Living</span>
          </h2>

          <p>
            Thoughtfully planned features that complement
            a peaceful coastal lifestyle and comfortable
            everyday living.
          </p>

        </div>

        {/* Amenities Grid */}
        <div className="amenities-grid">

          {amenities.map((amenity, index) => (
            <div
              className="amenity-card"
              key={amenity.title}
              style={{
                "--delay": `${index * 80}ms`,
              }}
            >

              {/* Icon */}
              <div className="amenity-icon">
                <span>{amenity.icon}</span>
              </div>

              {/* Title */}
              <h3>{amenity.title}</h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}