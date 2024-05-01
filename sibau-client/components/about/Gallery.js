import React from "react";
import styles from "../../styles/about/gallery.module.css";
import { useState, useEffect } from "react";

import { GALLERY } from "../../utils/constants";
import { getValueByKey } from "@/apis";

const Gallery = ({ gallery }) => {
  // const [gallery, setGallery] = useState({
  //   image1: "./about-2.webp",
  //   alt1: "About Image 1",
  //   image2: "./about-2.webp",
  //   alt2: "About Image 2",
  //   image3: "./about-3.webp",
  //   alt3: "About Image 3"
  // });
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey(GALLERY);
        // debugger
        // console.log(JSON.parse(result.value));
        setGallery(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {gallery ? (
        <section className="st-1">
          <div className="container">
            <div className="row ">
              {gallery?.map((item, index) => (
                <div className="col-md-4 col-sm-12 col-xs-12">
                  <div className={` ${styles[`bx_${index + 1}`]} ${styles.image_bx}`}>
                    <img
                      src={`http://localhost:5001/gallery-images/${item?.Name}`}
                      className="img-card"
                      alt={item?.AltText}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section >
      ) : (
        <h1>Gallery Is Here</h1>
      )}
    </>
  );
};

export default Gallery;
