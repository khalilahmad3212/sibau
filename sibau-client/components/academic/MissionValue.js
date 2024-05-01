import React from "react";
import Link from "next/link";
import styles from "../../styles/academic/mission_value.module.css";
import { SERVER } from "@/utils/constants";

const MissionValue = ({ data }) => {
  return (
    <section className="st-1 section-pb">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row relative">
          <div className="col-md-8 bg-yellow">
            <div className="bg-yellow pg-sec-pd">
              <div className="heading-container">
                <h2 className="sec_h2_heading">{data?.heading}</h2>
              </div>
              <div className="sec_content">
                <p>
                  {data?.para}
                </p>
              </div>
              <Link className="anchor-link" href={data?.link}>
                {data?.linkText}
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12 pr-0">
            <div className={styles.mission_value_container}>
              <img src={`${SERVER}/file-data-images/${data?.Image}`} className="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValue;
