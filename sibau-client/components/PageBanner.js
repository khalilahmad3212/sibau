import { SERVER } from "@/utils/constants";
import React, { useEffect } from "react";

import img from '../public/about-banner.webp';

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
                `${SERVER}/file-data-images/${props?.Image}`
                : img.src}
          className="image-resonsive"
        />
        <div className="banner-content my-3">
          <h1>{props?.title || "Title"}</h1>
          {props?.description && (props?.description !== 'No') && (
            <p style={{}}>{props?.description ? props.description : "Description"}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
