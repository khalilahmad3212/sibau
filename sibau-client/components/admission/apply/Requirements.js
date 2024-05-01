import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/apply/requirements.module.css";
import { getValueByKey } from "@/apis";

const Requirements = ({ requirements }) => {
  return (
    <section className="st-1 bg-gray section-pb">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className={styles.reqHeading}>
            <h2 className={` sec_h2_heading center `}>Requirements</h2>
          </div>
          {requirements.map((item, index) => (
            <div key={index} className={` col-md-6 ${styles.reqBx} `}>
              <h3>{item.title}:</h3>
              <div className={styles.reqPR}>
                <div dangerouslySetInnerHTML={{ __html: item.description }} />
                {/* {item.requirements.map((para, index) => (
                  <p key={index}>– {para}</p>
                ))} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Requirements;
