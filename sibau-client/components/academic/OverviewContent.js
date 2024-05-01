import React from "react";

const OverviewContent = ({ data }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row">
          <div className="col-md-12 content">
            <div className="heading-container">
              <div className="text-iba-heading-color font-iba-font-family text-[50px] font-bold leading-6 py-4">
                {data?.heading}
              </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewContent;
