import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import style from "../../styles/home/tutionHead.module.css";

const TutionHead = (props) => {

  return (
    <div className="tution-info">
      <div className={`${style.tution_icon} mb-10`}>
        <span>
          <FaGraduationCap />
        </span>
      </div>
      <div className="heading-container">
        <h2 className={style.tution_heading}>{props?.heading}</h2>
      </div>
      <div className="content">
        <p>{props?.para}</p>
      </div>
      <div className="tour-link underline text-blue-500 py-3">
        <Link href={`${props?.link}`}> {props?.linkText}</Link>
      </div>
    </div>
  );
};

export default TutionHead;
