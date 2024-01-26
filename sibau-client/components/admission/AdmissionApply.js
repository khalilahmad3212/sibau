import React, { useEffect, useState } from "react";
import styles from "../../styles/admission/admission_apply.module.css";
import { getValueByKey } from "@/apis";

const AdmissionApply = ({ applyData }) => {
  return (
    <section className={` st-1 ${styles.apply_section} `}>
      <div className="container sm:px-0 md:px-20 lg:px-28">
        <div className="row">
          <div className="col-md-5 col-xs-11">
            <div className={` ${styles.apply_container} pr-20  lg:pr-36`}>
              <div className="heading-container">
                <h2 className={styles.admission_app_heading}>
                  {applyData?.heading}
                </h2>
              </div>
              <div className={`sec_content ${styles.apply_content} `}>
                <p>{applyData?.paragraph}</p>
                <a href={`${applyData?.link}`}>{applyData?.linkText}</a>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-xs-11">
            <div className={styles.app_image_container}>
              <img
                alt="apply"
                className="card-img-top"
                src="./apply-section.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionApply;
