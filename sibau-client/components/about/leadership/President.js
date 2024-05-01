import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/about/leadership/president.module.css";
import { getValueByKey } from "@/apis";

const President = () => {
  const [vc, setVc] = useState(
    {
      name: "Dr. Syed Mir Muhammad Shah",
      bio: "Dr. Syed Mir Muhammad Shah is the Vice Chancellor of Sukkur IBA University. He has a PhD in Computer Science from the University of Surrey, UK. He has over 20 years of experience in academia and has been associated with Sukkur IBA University since 2006. He has served as the Dean of Faculty of Science and Information Technology and has been the Director of the Institute of Information and Communication Technology. He has a strong research background and has published numerous research papers in reputed journals and conferences.",
      image: "president.webp"
    }
  );
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("leadership-vc");
        setVc(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className={` st-1 ${styles.pre_section} `}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className={` ${styles.history_box_container} pr-40`}>
              <div className="heading-container">
                <h2 className={styles.leadership_heading}>{vc?.name}</h2>
                <div className={styles.tagline}>
                  <span>Office of the President</span>
                </div>
              </div>
              <div className={`sec_content ${styles.leadership_content} `}>
                <p>{vc?.bio}</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={styles.pres_image_container}>
              <img
                alt="vission"
                className="card-img-top"
                src={`../${vc?.image}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
