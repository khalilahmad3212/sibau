import React from "react";
import Link from "next/link";
import styles from "../../styles/academic/mission_value.module.css";

const MissionValue = () => {
  return (
    <section className="st-1 section-pb">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row relative">
          <div className="col-md-8 bg-yellow">
            <div className="bg-yellow pg-sec-pd">
              <div className="heading-container">
                <h2 className="sec_h2_heading">Mission & Value</h2>
              </div>
              <div className="sec_content">
                <p>
                  We prepare you to launch your career by providing a
                  supportive, creative, and professional. Our mission is to
                  prepare students to understand, contribute to, and succeed in
                  a rapidly changing society, thus making the world a better and
                  more just place
                </p>
              </div>
              <Link className="anchor-link" href="/">
                Schedule A Tour
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 pr-0">
            <div className={styles.mission_value_container}>
              <img src="./academic-mission.webp" className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValue;
