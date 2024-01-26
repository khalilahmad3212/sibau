import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/process.module.css";
import Steps from "@/components/about/missionVission/Steps";
import { getValueByKey } from "@/apis";

const Process = () => {
  // financial-process
  const [processData, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getValueByKey("financial-process");
      setData(JSON.parse(result.value));
    }
    fetchData();
  }, []);

  const StepObject = {
    // Heading
    StepHeading: "The Financial Aid Process",
    // Card1 Data
    StepCardOneTitle: "01. Apply for Aid",
    StepCardOneDescription:
      "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself..",

    // Card2 Data
    StepCardTwoTitle: "02. Review",
    StepCardTwoDescription:
      "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",

    // Card3 Data
    StepCardThreeTitle: "03. Make Your Deposit",
    StepCardThreeDescription:
      "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
  };

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
        <Steps data={processData?.steps} />
      </div>
    </section>
  );
};

export default Process;
