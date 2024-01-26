import React, { useEffect, useState } from "react";
import styles from "../../../styles/about/mission_vission/steps.module.css";
import Steps from "./Steps";
import { getValueByKey } from "@/apis";
const StepsContainer = () => {
  const [visionDetail, setMission] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getValueByKey("about-vision-detail");
      setMission(JSON.parse(result.value));
    }
    fetchData();
  }, []);

  const StepObject = {
    // Card1 Data
    StepCardOneTitle: "01.",
    StepCardOneDescription:
      "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself..",

    // Card2 Data
    StepCardTwoTitle: "02.",
    StepCardTwoDescription:
      "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",

    // Card3 Data
    StepCardThreeTitle: "03.",
    StepCardThreeDescription:
      "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
  };

  return (
    <section className="bg-gray section-pb">
      <div className="container sm:px-0 md:px-32 lg:px-40">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.step_cont}>
              <p>{visionDetail?.mainHeading}</p>
            </div>
          </div>
        </div>
        <Steps data={visionDetail?.steps} />
      </div>
    </section>
  );
};

export default StepsContainer;
