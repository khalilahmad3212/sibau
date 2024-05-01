import React from "react";
import TutionHead from "./TutionHead";
import TutionTable from "./TutionTable";
const Tution = ({ data }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-28 lg:px-40">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <TutionHead
              heading={data?.heading}
              para={data?.description}
              link={data?.link}
              linkText={data?.linkText}
            />
          </div>
          {data.sections.length > 0 && data.sections[0] &&
            <div className="col-md-4 col-sm-6 col-xs-12">
              <TutionTable
                title={data.sections[0].title}
                cardData={data.sections[0].links}
              />
            </div>
          }
          {data.sections.length > 1 && data.sections[1] &&
            <div className="col-md-4 col-sm-6 col-xs-12">
              <TutionTable
                title={data.sections[1].title}
                cardData={data.sections[1].links}
              />
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default Tution;
