import React from "react";
import styles from "../../../styles/about/mission_vission/steps.module.css";
const Steps = ({ data }) => {
  return (
    <div className="row">
      <h2 className="text-[35px] font-bold  lg:mt-[-20px] lg:mb-5  ">
        The Financial Aid Process
      </h2>
      {data?.map((item, index) => (
        <div key={index} className="col-md-4 col-sm-12 col-xs-12">
          <div className={styles.step_container}>
            <h5>{item?.title}</h5>
            <p>{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
