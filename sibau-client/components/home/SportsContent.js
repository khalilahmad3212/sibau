import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import style from "../../styles/home/sportsContent.module.css";
import Link from "next/link";

const SportsContent = (props) => {
  return (
    <div className={style.sports_content}>
      <div className={style.sports_section_heading}>
        <h2 className="section-heading"> {props.title} </h2>
      </div>
      <div className="content p-1 px-3">
        <p>{props.description}</p>
      </div>
      <div className={style.sport_links}>
        <div className={style.sport_action}>
          <ul>
            {props?.links?.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`${item.link}`}>
                    <span className="flex items-center">
                      {item.text}
                      <span className="ml-2">
                        <FaArrowRight />
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SportsContent;
