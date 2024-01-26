import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/about/leadership/president.module.css";
import { getValueByKey } from "@/apis";

const President = () => {
  const [vc, setVc] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getValueByKey("leadership-vc");
      setVc(JSON.parse(result.value));
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
