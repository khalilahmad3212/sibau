import React, { useEffect, useState } from "react";
import styles from "../../../styles/about/mission_vission/steps.module.css";
import Steps from "./Steps";
import { getValueByKey } from "@/apis";
const StepsContainer = () => {
  const [visionDetail, setMission] = useState(
    {
      mainHeading: "Our Vision",
      steps: [
        {
          title: "01.",
          description: "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself.",
        },
        {
          title: "02.",
          description: "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",
        },
        {
          title: "03.",
          description: "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
        },
      ]
    }
  );

  return (
    <section className="bg-gray section-pb">
      <div className="container sm:px-0 md:px-32 lg:px-40">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-[35px] font-bold  lg:mt-[-20px] lg:mb-5  ">
              The Financial Aid Process
            </h2>
          </div>
        </div>
        <Steps data={visionDetail?.steps} />
      </div>
    </section>
  );
};

export default StepsContainer;
