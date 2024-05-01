import React, { useState, useEffect } from "react";
import styles from "../../styles/about/aboutTestimonial.module.css";
import { TESTIMONIALS } from "../../utils/constants";
import { getValueByKey } from "@/apis";
const AboutTestimonial = ({ index }) => {
  const [testimonial, setTestimonial] = useState([{
    name: "John Doe",
    image: "./about-2.webp",
    alt: "About Image 2"
  },
  {
    name: "John Doe",
    image: "./about-2.webp",
    alt: "About Image 2"
  }
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey(TESTIMONIALS);
        // debugger
        setTestimonial(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="st-1 section-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 col-md-offset-3">
            <div className={styles.testimonialIcon}>
              <div className={styles.iconBox}>
                <img
                  className="card-img-top"
                  src={testimonial?.[index]?.image}
                  alt={testimonial?.[index]?.alt}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className={styles.testimonial_content}>
              <h3>{testimonial?.[index]?.name}</h3>
              <span className={styles.testimonial_tagline}>
                BA Literary Studies
              </span>
              <p>
                “For me, it’s about the academic sphere. The University is
                interesting, conceptual. We acknowledge how important it is to
                be experimental.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
