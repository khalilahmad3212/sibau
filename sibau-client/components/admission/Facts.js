import React, { useEffect, useState } from "react";
import styles from "../../styles/admission/facts.module.css";
import { getValueByKey } from "@/apis";
// import History from '../home/History'

const Facts = ({ factsData }) => {
  return (
    <section className="st-1 iba-bg-black hidden lg:block md:block">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className={styles.fact_img_container}>
            <img
              src="./admission-cover.webp"
              className={` img-responsive  ${styles.fact_img}`}
            />
          </div>
          <div className={styles.fact_content}>
            <h2>Facts</h2>
          </div>
        </div>
        {/* <History/> */}
        <div className={` row ${styles.fct_container} `}>
          {factsData?.facts?.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className={styles.infoBx} style={{ textAlign: "center" }}>
                <span>{item?.title}</span>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
