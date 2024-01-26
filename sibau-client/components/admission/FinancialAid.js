import React, { useEffect, useState } from "react";
import styles from "../../styles/admission/financial_aid.module.css";
import Link from "next/link";
import { getValueByKey } from "@/apis";

const FinancialAid = ({ aidCard }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="adm-image-container">
              <img
                src="./university-image.webp"
                className="card-img-top"
                alt="Admission"
              />
            </div>
          </div>
          <div className="col-md-6 col-xs-12">
            <div
              className={`${styles.financial_container} lg:pt-[105px] lg:pb-[105px] lg:pl-[80px] sm:p-20`}
            >
              <div className="heading-container">
                <h2 className={styles.adm_heading}> {aidCard?.heading} </h2>
              </div>
              <div className={styles.adm_content}>
                <p>{aidCard?.paragraph}</p>
              </div>
              <div className={styles.adm_link}>
                <Link href={`${aidCard?.link}`}>{aidCard?.linkText}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialAid;
