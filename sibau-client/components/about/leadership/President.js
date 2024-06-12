import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/about/leadership/president.module.css";
import { getValueByKey } from "@/apis";

const President = ({
  name,
  bio,
  image,
  email,
  faculty,
  officeExtension
}) => {

  return (
    <section className={` st-1 ${styles.pre_section} `}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className={` ${styles.history_box_container} pr-40`}>
              <div className="heading-container">
                <h2 className={styles.leadership_heading}>{name}</h2>
                {/* <div className={styles.tagline}>
                  <span>Dean  */}
                    {/* <span className="font-bold">{faculty.split('-').map((e) => e.substring(0, 1).toUpperCase() + e.substring(1)).join(' ')}</span> */}
                    {/* </span>
                </div> */}
                <div className={styles.leadership_heading}>Dean</div>
              </div>
    {email && (
      <div>
        <p><span className="font-bold">Email: </span>{email}</p>
        <p><span className="font-bold">Office Extension: </span>{officeExtension}</p>
      </div>
    )}
              <div className={`sec_content ${styles.leadership_content} `}>
                <p>{bio}</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={styles.pres_image_container}>
              <img
                alt="vission"
                className="card-img-top"
                src={image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default President;
