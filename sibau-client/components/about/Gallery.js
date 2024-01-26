import React from "react";
import styles from "../../styles/about/gallery.module.css";
import { useState, useEffect } from "react";

import { GALLERY } from "../../utils/constants";
import { getValueByKey } from "@/apis";

const Gallery = () => {
  const [gallery, setGallery] = useState({});
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
      {gallery && (
        <section className="st-1">
          <div className="container">
            <div className="row ">
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={` ${styles.bx_1} ${styles.image_bx}`}>
                  <img
                    src={gallery?.image1}
                    className="img-card"
                    alt={gallery?.alt1}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={` ${styles.bx_2} ${styles.image_bx}`}>
                  <img
                    src={gallery?.image2}
                    className="img-card"
                    alt={gallery?.alt2}
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <div className={` ${styles.bx_3} ${styles.image_bx}`}>
                  <img
                    src={gallery?.image3}
                    className="img-card"
                    alt={gallery?.alt3}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Gallery;
