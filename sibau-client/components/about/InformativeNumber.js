import React from "react";
import styles from "../../styles/about/informativeNumber.module.css";
import { useState, useEffect } from "react";
import { ABOUT_STATISTIC } from "../../utils/constants";
import { getValueByKey } from "@/apis";

const InformativeNumber = () => {
  const [statistics, setStatistics] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey(ABOUT_STATISTIC);
        // debugger
        setStatistics(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {statistics?.length && (
        <section className={` ${styles.infrm_sec} bg-[#292929]`}>
          <div className="text-center">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/2 md:w-1/3">
                <div className={styles.numBx}>
                  <p>{statistics[0].key}</p>
                  <span>{statistics[0].value}</span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3">
                <div className={styles.numBx}>
                  <p>{statistics[1].key}</p>
                  <span>{statistics[1].value}</span>
                </div>
              </div>
              <div className="w-full sm:w-1/2 md:w-1/3">
                <div className={styles.numBx}>
                  <p>{statistics[2].key}</p>
                  <span>{statistics[2].value}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InformativeNumber;
