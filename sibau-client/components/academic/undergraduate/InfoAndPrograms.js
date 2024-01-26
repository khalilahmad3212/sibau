// acedemics-u-graduate
import React, { useEffect, useState } from "react";
import { getValueByKey } from "@/apis";
import styles from "../../../styles/academic/undergraduate/subLinks.module.css";

import Link from "next/link";

const InfoPrograms = ({ key }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey(key || "academics-u-graduate");
        setData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {data?.departments.map((item, index) => (
        <section key={index} className="my-10">
          <div className="container px-32 py-3">
            <div className="row">
              <div className="col-md-12 ">
                <div className={`bg-blue ${styles.subjLinkBx}`}>
                  <h4 className={styles.subTitle}>{item.name}</h4>
                </div>
                <ul className={styles.sub_links}>
                  {item.programs.map((subItem, index) => (
                    <li key={index}>
                      <div>
                        <Link href={`/program/${subItem.link}`}>
                          <span>{subItem.name}</span>
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
