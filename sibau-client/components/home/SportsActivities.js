import React from "react";
import style from "../../styles/home/sportsActivities.module.css";
import SportsColumn from "./SportsColumn";
import SportsContent from "./SportsContent";

const SportsActivities = ({ data }) => {

  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="row">
          <div className="col-md-6">
            <SportsColumn image={data.Image} />
          </div>
          <div className="col-md-6">
            <SportsContent {...data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsActivities;
