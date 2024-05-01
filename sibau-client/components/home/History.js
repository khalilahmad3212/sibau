import React, { useEffect } from "react";
import HistoryNumbers from "./HistoryNumbers";
import Aos from "aos";
const History = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="bg-gray section-space-tb">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div
          className="row"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-easing="ease-in-back"
          data-aos-duration="1500"
        >
          {data?.map((item, index) => (
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
              <HistoryNumbers
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
