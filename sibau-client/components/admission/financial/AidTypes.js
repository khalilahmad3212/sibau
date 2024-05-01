import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/aid_type.module.css";
import { getValueByKey } from "@/apis";
import { SERVER } from "@/utils/constants";

const AidTypes = ({ data }) => {
  return (
    <secion className="st-1 section-pb block">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <h2 className="sec_h2_heading pb-50">Types of Aid</h2>
          {data?.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className={`card ${styles.card}`}>
                <img
                  className={`card-img-top ${styles.card_image}`}
                  src={`${SERVER}/file-data-images/${item?.Image}`}
                  alt="Card image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h3>{item?.title}</h3>
                  <p className="card-text">{item?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </secion>
  );
};

export default AidTypes;
