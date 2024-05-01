import React, { useEffect, useState } from "react";
import style from "../../styles/home/tutionTable.module.css";
import { getValueByKey } from "@/apis";
const TutionTable = ({ title, cardData, mapKey }) => {

  return (
    <div className={style.tution_table}>
      <div className={style.heading_container}>
        <h4 className={`${style.tbl_heading} pb-3`}>
          {title || "Tuition Costs, 2021-2023"}
        </h4>
      </div>
      <div className={`${style.tbl_detail}`}>
        <ul>
          {cardData?.map((item, index) => {
            return (
              <li className={style.tbl_list_item} key={index}>
                <div className={style.item_content}>
                  <span> {item.text} </span>
                  <span>{item.link} </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TutionTable;
