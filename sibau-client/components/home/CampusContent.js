import React from "react";
import style from "../../styles/home/campusContent.module.css";
import { FaAcquisitionsIncorporated } from "react-icons/fa";
import Link from "next/link";
const DescriptionContainer = ({ description, heading, linkText, link }) => {
  return (
    <div className={style.content_container}>
      <div className={style.campus_icon}>
        <div className=" w-20 overflow-hidden">
          {/* <FaAcquisitionsIncorporated /> */}
          <img src="/iba-logo-2-new.png" className=" h-full w-full" alt="iba-logo" />
        </div>
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
