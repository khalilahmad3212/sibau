import React, { useEffect } from "react";

const PageBanner = (props) => {
  useEffect(() => {
    console.log('Begin: ', props);

    return () => {
      console.log('close: ', props);
    }
  }, []);

  return (
    <section className="">
      <div className="page-banner">
        <img
          src={
            props?.link ? props.link :
              props?.Image ?
                `http://localhost:5001/file-data-images/${props?.Image}`
                : './about-banner.webp'}
          className="image-resonsive"
        />
        <div className="banner-content my-3">
          <h1>{props?.title || "Title"}</h1>
          <p style={{}}>{props?.description ? props.description : "Description"}</p>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
