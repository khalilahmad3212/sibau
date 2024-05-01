import React, { useState } from "react";
import styles from "../../styles/home/scholarship.module.css";
import LinkBtn from "./LinkBtn";
import { getValueByKey } from "@/apis";

const Scholarship = () => {
  const [paragraph, setPara] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut libero tincidunt aliquam. In hac habitasse platea dictumst. Curabitur nec orci ac nisi ultrices fermentum. Sed nec mi ut elit luctus luctus. Nullam ac metus at turpis lacinia tincidunt. In hac habitasse platea dictumst. Curabitur nec orci ac nisi ultrices fermentum. Sed nec mi ut elit luctus luctus."
  );
  useState(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("Scholarship-home-heading");
        // console.log("called the api");
        setPara(result.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="bg-yellow st-1 pb-6 py-6 md:py-6">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="row ">
          <div
            className="col-md-3"
            data-aos="fade-zoom-in"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h2 className={`${styles.scholarHeading} py-1 lg:py-4 md:py-3 `}>
              {"Scholarship Programs"}
            </h2>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-zoom-in"
            data-aos-duration="400"
            data-aos-delay="300"
          >
            <div className={styles.scholarContent}>
              <p>{paragraph}</p>
            </div>
          </div>
          <div
            className="col-md-3"
            data-aos="fade-zoom-in"
            data-aos-duration="200"
            data-aos-delay="8000"
          >
            <div className={`${styles.scholarLinkBtn} `}>
              <LinkBtn title={"Financial Aid "} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
