import React from "react";
import TutionHead from "./TutionHead";
import TutionTable from "./TutionTable";
const Tution = ({}) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-28 lg:px-40">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <TutionHead />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <TutionTable mapKey="Tuition-Costs-2021-2023" />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <TutionTable mapKey={"Tuition-Costs-2021-2023"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tution;
