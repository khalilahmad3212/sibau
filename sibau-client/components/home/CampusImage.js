import React from "react";
import style from "../../styles/home/campusImage.module.css";

const ImageContainer = ({ imageUrl }) => {
  return (
    <div className={style.image_container}>
      <div className={style.image_column}>
        <img src={imageUrl || "/iba-logo-2-new.png"} className="card-img-top" />
      </div>
    </div>
  );
};

export default ImageContainer;
