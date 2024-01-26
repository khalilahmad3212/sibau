import React from "react";
import style from "../../styles/home/campusContent.module.css";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import Link from "next/link";
const DescriptionContainer = ({ description, heading, linkText, link }) => {
  return (
    <div className={style.content_container}>
      <div className={style.campus_icon}>
        <span>
          <FaAcquisitionsIncorporated />
        </span>
      </div>
      <div className={style.heading_container}>
        <h2 className="section-heading">{heading}</h2>
      </div>
      <div className={style.content}>
        <p>{description}</p>
      </div>
      {link && (
        <div className={style.tour_link}>
          <Link href={link}>{linkText}</Link>
        </div>
      )}
    </div>
  );
};

export default DescriptionContainer;
