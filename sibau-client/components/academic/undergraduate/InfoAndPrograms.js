// acedemics-u-graduate
import React, { useEffect, useState } from "react";
import { getValueByKey } from "@/apis";
import styles from "../../../styles/academic/undergraduate/subLinks.module.css";

import Link from "next/link";

const InfoPrograms = ({ data }) => {

  return (
    <>
      {data?.sections?.map((item, index) => (
        <section key={index} className="my-10">
          <div className="container px-32 py-3">
            <div className="row">
              <div className="col-md-12 ">
                <div className={`bg-blue ${styles.subjLinkBx}`}>
                  <h4 className={styles.subTitle}>{item.title}</h4>
                </div>
                <ul className={styles.sub_links}>
                  {item.links.map((subItem, index) => (
                    <li key={index}>
                      <div>
                        <Link href={`/program/${subItem.link}`}>
                          <span>{subItem.text}</span>
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default InfoPrograms;
