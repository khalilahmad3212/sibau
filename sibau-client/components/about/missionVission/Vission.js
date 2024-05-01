import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../../styles/about/mission_vission/vission.module.css";
import { getValueByKey } from "@/apis";
import { SERVER } from "@/utils/constants";

const Vission = ({ data }) => {

  return (
    <section className={` bg-gray ${styles.vission_section} `}>
      <div className="container sm:px-0 md:px-32 lg:px-40">
        <div className="row">
          <div className="col-md-5">
            <div className={` ${styles.history_box_container} pl-30`}>
              <div className="vission_icon"></div>
              <div className="heading-container">
                <h2 className="sec_h2_heading">{data.title}</h2>
              </div>
              <div className="sec_content">
                <p>{data.description}</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={styles.vission_image_container}>
              <img
                alt="vission"
                className="card-img-top"
                src={`${SERVER}/file-data-images/${data?.Image}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;
