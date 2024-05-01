import React, { useEffect, useState } from "react";
import styles from "../../../styles/about/campus/campusInfo.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { getValueByKey } from "@/apis";

const CampusInfo = ({ data }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("campus-activity");
        setAbout(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="bg-yellow my-6 mb-0 py-20">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row">
          <div className="col-md-12">
            <p className={styles.campusTxt}>{data?.heading}</p>
          </div>
        </div>
        <div className="row">
          {data?.sections?.map((item, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 col-xs-12 py-3 lg:p-0"
            >
              <div className={styles.campus_info_links}>
                <h5 className="font-extrabold text-[26px]">{item.title}</h5>

                <ul>
                  {item?.links.map((subItem, subIndex) => (
                    <li key={subIndex} className="">
                      <Link href={subItem.link} className="">
                        <span className="flex items-center">
                          {subItem.text}
                          <span className="mx-1">
                            <FaArrowRight />
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusInfo;
