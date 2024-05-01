import React from "react";
import styles from "../../../styles/about/campus/uninfo.module.css";

const UnInfo = ({ data }) => {
  return (
    <section>
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className={styles.info_container}>
          <div className="heading-container">
            <h2 className="sec_h2_heading">
              {data.heading}
            </h2>
          </div>
          <div className={styles.info_content}>
            {/* <h6>
              Access to academic buildings is by reservation only. The four
              buildings below will be open <strong>Monday - Friday</strong> and
              closed on the weekends from <strong>September 15th</strong>{" "}
              through <strong>December 25th</strong>.
            </h6>
            <p>
              Monday to Friday, 7:00 a.m. to 11:00 p.m.,
              <br />
              Saturday to Sunday, closed
            </p> */}
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
      </div>
    </section>
  );
};

export default UnInfo;
