import React from "react";

const PageBanner = (props) => {
  return (
    <section className="">
      <div className="page-banner">
        <img
          src={props.image ? `../${props?.image}` : ".././about-banner.webp"}
          className="image-resonsive"
        />
        <div className="banner-content my-3">
          <h1>{props?.title}</h1>
          <p style={{}}>{props?.description ? props.description : ""}</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
