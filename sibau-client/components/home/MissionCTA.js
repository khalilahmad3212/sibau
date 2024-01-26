import React from "react";
import style from "../../styles/home/missionCTA.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const MissionCTA = (props) => {
  return (
    <div
      data-aos-delay="600"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      className={style.mission_links_box}
    >
      <div className={style.mission_links}>
        <Link href={props.redirect} passHref>
          <span className="flex items-center">
            {props.title} <FaArrowRight className="ml-1" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MissionCTA;
