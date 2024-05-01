import React from "react";
import Link from "next/link";
import styles from "../../../styles/about/campus/direction.module.css";

const Direction = ({ data }) => {
  return (
    <section className={` st-1 ${styles.direction_section} `}>
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row ">
          <div className="col-md-7">
            <div className={` bg-blue pg-sec-pd ${styles.clr_white} `}>
              <div className="heading-container">
                <h2 className="sec_h2_heading">{data.heading}</h2>
              </div>
              {/* <div className="sec_content">
                <p>
                  We prepare you to launch your career by providing a
                  supportive, creative, and professional. Our mission is to
                  prepare students to understand, contribute to, and succeed in
                  a rapidly changing society, thus making the world a better and
                  more just place
                </p>
              </div> */}
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>
          <div className="col-md-5 pl0 pr0">
            <div className={styles.iframe_container}>
              <iframe
                className={styles.iframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6929336424773!2d68.81655977459823!3d27.726765624636336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4af0e0f6721%3A0x6a57455ae708c7b!2sSukkur%20IBA%20University!5e0!3m2!1sen!2s!4v1682947176601!5m2!1sen!2s"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Direction;
