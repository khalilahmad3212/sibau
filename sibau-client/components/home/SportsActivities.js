import React from "react";
import style from "../../styles/home/sportsActivities.module.css";
import SportsColumn from "./SportsColumn";
import SportsContent from "./SportsContent";

const SportsActivities = () => {
  const data = {
    SportTitle: "Sports and Activities",
    SportDescription:
      "This new plan is designed to reduce the average cost of a Make School Education while preserving the core protections of ISAs – if you don’t have a job after Make School, you should not have to pay until you are employed.",
    SportImageLink: "/sports.webp",
    SportColumnOne: [
      {
        Title: "Cricket",
        Link: "/campus",
      },
      {
        Title: "Football",
        Link: "/campus",
      },
      {
        Title: "Badminton",
        Link: "/campus",
      },
    ],
    SportColumnTwo: [
      {
        Title: "TechFest",
        Link: "/campus",
      },
      {
        Title: "Sports Gala",
        Link: "/campus",
      },
      {
        Title: "Competition",
        Link: "/campus",
      },
    ],
  };

  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="row">
          <div className="col-md-6">
            <SportsColumn {...data} />
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
