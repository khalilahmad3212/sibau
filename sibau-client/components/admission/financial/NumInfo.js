import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/numinfo.module.css";

const FinancialAidFacts = ({ data }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-28 lg:px-40 lg:py-16 ">
        <div
          className={`  ${styles.fct_container} flex  flex-wrap justify-around `}
        >
          {data?.map((item, index) => (
            <div key={index} className="flex md:max-w-sm  flex-wrap justify-around">
              <div className={styles.infoBx}>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAidFacts;
