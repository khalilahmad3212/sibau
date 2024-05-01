import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/process.module.css";
import Steps from "@/components/about/missionVission/Steps";
import { getValueByKey } from "@/apis";

const Process = ({ data }) => {
  // financial-process
  const [processData, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("financial-process");
        setData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="st-1 bg-yellow pb-100">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <h2
            className={`${styles.process_heading} lg:mt-[-90px] lg:font-bold font-medium  lg:pb-[150px] md:pb-[150px]  lg:text-[200px] mt-10   text-[100px] `}
          >
            Process
          </h2>
        </div>
        <Steps data={data} />
      </div>
    </section>
  );
};

export default Process;
