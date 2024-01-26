import React from "react";
import EventsItem from "./EventsItem";

const Events = ({}) => {
  const data = [
    {
      Title: "Life as a Distance Learning Student",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
    {
      Title: "How to Organise Your Studies for Success",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
    {
      Title: "4th Workshop “Advanced Materials”",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
  ];
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="heading-container">
          <h2 className="section-heading">News </h2>
        </div>
        <div className="row p-1">
          {data.map((item, index) => {
            return (
              <div key={index} className="my-1 col-md-4 col-sm-6 col-xs-12">
                <EventsItem {...item} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
