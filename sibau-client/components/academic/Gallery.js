import React from "react";
import styles from "../../styles/academic/gallery.module.css";

const Gallery = (props) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row ">
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={` ${styles.academic_gal_1}  ${styles.mbNone} `}>
              <div className={` ${styles.gbx_1} ${styles.image_bx}`}>
                <img src={props.img1} className={styles.academic_gallery_img} />
              </div>
              <div className={` ${styles.gbx_2} ${styles.image_bx}`}>
                <img src={props.img2} className={styles.academic_gallery_img} />
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={` ${styles.gbx_3} ${styles.image_bx}`}>
              <img src={props.img3} className={styles.academic_gallery_img} />
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={styles.mbNone}>
              <div className={` ${styles.gbx_4} ${styles.image_bx}`}>
                <img src={props.img4} className={styles.academic_gallery_img} />
              </div>
              <div className={` ${styles.gbx_5} ${styles.image_bx}`}>
                <img src={props.img5} className={styles.academic_gallery_img} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
