import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";
import style from "../../styles/home/tutionHead.module.css";

const TutionHead = (props) => {
  const data = {
    para: "This new plan is designed to reduce the average cost of a Make School Education while preserving the core protections of ISAs – if you don’t have a job after Make School, you should not have to pay until you are employed.",
    heading: "Tuition & Fees",
    link: "/admission",
    linkText: "Detailed Plans",
  };
  return (
    <div className="tution-info">
      <div className={`${style.tution_icon} mb-10`}>
        <span>
          <FaGraduationCap />
        </span>
      </div>
      <div className="heading-container">
        <h2 className={style.tution_heading}>{data.heading}</h2>
      </div>
      <div className="content">
        <p>{data.para}</p>
      </div>
      <div className="tour-link underline text-blue-500 py-3">
        <Link href={`${data.link}`}> {data.linkText}</Link>
      </div>
    </div>
  );
};

export default TutionHead;
