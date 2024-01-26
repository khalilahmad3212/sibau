import React from "react";
import style from "../../styles/home/sportsColumn.module.css";
import Image from "next/image";
const SportsColumn = (props) => {
  return (
    <div className={style.image_container}>
      <div className={style.sports_image_container}>
        <Image
          src={`${props.SportImageLink}`}
          alt=""
          className="scale-95 hover:scale-100"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default SportsColumn;
