import React, { useEffect } from "react";
import AdmissionContent from "./AdmissionContent";
import AdmissionColumn from "./AdmissionColumn";
import Aos from "aos";
const Admission = ({ data }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <AdmissionColumn />
          </div>
          <div
            className="col-md-6"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1500"
          >
            <AdmissionContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admission;
