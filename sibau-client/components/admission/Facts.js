import React, { use, useEffect, useState } from "react";
import styles from "../../styles/admission/facts.module.css";
import { getValueByKey } from "@/apis";
import { SERVER } from "@/utils/constants";
// import History from '../home/History'

const Facts = ({ factsData }) => {

  const [factImage, setFactImage] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const factImageResult = await getValueByKey("ADMISSION_FACT_IMAGE");
        setFactImage(JSON.parse(factImageResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <section className="st-1 iba-bg-black hidden lg:block md:block">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className={styles.fact_img_container}>
            <img
              src={`${SERVER}/file-data-images/${factImage?.Image}`}
              className={` img-responsive  ${styles.fact_img}`}
            />
          </div>
          <div className={styles.fact_content}>
            <h2>Facts</h2>
          </div>
        </div>
        {/* <History/> */}
        <div className={` row justify-evenly ${styles.fct_container} `}>
          {factsData?.map((item, index) => (
            <div key={index} className="col-md-4 md:max-w-xs col-sm-6 col-xs-12">
              <div className={styles.infoBx}>
                <span>{item?.title}</span>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
