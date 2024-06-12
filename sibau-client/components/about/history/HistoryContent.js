import React from "react";
import styles from "../../../styles/about/history/historyContent.module.css";
const HistoryContent = (props) => {
  return (
    <section className={`st-1 ${styles.historySection} `}>
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row pb-8">
          <div className="col-md-5">
            <div className={styles.history_content}>
              <h2>{props.heading}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.history_content}>
              <p>{props.tagline}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col-md-12 ${styles.uniHistory}`}>
            <div dangerouslySetInnerHTML={{ __html: props.content }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryContent;
