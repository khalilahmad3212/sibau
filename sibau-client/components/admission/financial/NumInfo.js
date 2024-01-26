import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/numinfo.module.css";
import { getValueByKey } from "@/apis";

const FinancialAidFacts = () => {
  const [numFacts, setNumbers] = useState([
    {
      title: "40K",
      description: "DEGREE AND DIPLOMA PROGRAMS OFFERED",
      image: "image1.jpg",
    },
    {
      title: "40K",
      description: "DEGREE AND DIPLOMA PROGRAMS OFFERED",
      image: "image2.jpg",
    },
    {
      title: "40K",
      description: "DEGREE AND DIPLOMA PROGRAMS OFFERED",
      image: "image3.jpg",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("financial-facts");
        setNumbers(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-28 lg:px-40 lg:py-16 ">
        <div
          className={`  ${styles.fct_container} flex  flex-wrap justify-around `}
        >
          {numFacts.map((item, index) => (
            <div key={index} className="flex  flex-wrap justify-around">
              <div className={styles.infoBx}>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinancialAidFacts;
