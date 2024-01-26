import React from "react";
import styles from "../../../styles/about/mission_vission/numberInfo.module.css";

const NumberInfo = () => {
  return (
    <section className="st-1 bg-gray">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row">
          <div className={`col-md-12 `}>
            <div className={` ${styles.frm_heading} heading-container `}>
              <h2 className={styles.app_frm_title}>83%</h2>
            </div>
            <div className={styles.content_bx}>
              <p>
                of our students successfully graduate and begin their career
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberInfo;
