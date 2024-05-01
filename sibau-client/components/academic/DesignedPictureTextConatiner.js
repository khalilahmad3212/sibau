import React from "react";
import Link from "next/link";
import styles from "../../styles/academic/mission_value.module.css";

const DesignedPictureTextContainer = ({
  content = `We prepare you to launch your career by providing a
  supportive, creative, and professional. Our mission is to
  prepare students to understand, contribute to, and succeed in
  a rapidly changing society, thus making the world a better and
  more just place`,
  image = "./academic-mission.webp",
  heading = `Mission & Value`,
  linkText = `Schedule A Tour`,
  link = "/",
}) => {
  return (
    <section className="st-1 section-pb">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row relative">
          <div className="col-md-8 bg-yellow">
            <div className="bg-yellow pg-sec-pd">
              <div className="heading-container">
                <h2 className="sec_h2_heading">{heading}</h2>
              </div>
              <div className="sec_content">
                <p>{content}</p>
              </div>
              <Link
                className="anchor-link text-[17px] underline hover:text-blue-800 hover:text-[20px] transition-all"
                href={link}
              >
                {linkText}
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 pr-0">
            <div className={styles.mission_value_container}>
              <img src={`http://localhost:5001/file-data-images/${image}`} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignedPictureTextContainer;
