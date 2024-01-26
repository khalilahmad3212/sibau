import React from "react";
import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import style from "../../styles/home/sportsContent.module.css";
import Link from "next/link";

const SportsContent = ({
  SportTitle,
  SportDescription,
  SportColumnOne,
  SportColumnTwo,
}) => {
  return (
    <div className={style.sports_content}>
      <div className={style.sports_section_heading}>
        <h2 className="section-heading"> {SportTitle} </h2>
      </div>
      <div className="content p-1 px-3">
        <p>{SportDescription}</p>
      </div>
      <div className={style.sport_links}>
        <div className={style.sport_action}>
          <ul>
            {SportColumnOne.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`${item.Link}`}>
                    <span className="flex items-center">
                      {item.Title}
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
        <div className={style.sport_action}>
          <ul>
            {SportColumnTwo.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={`${item.Link}`}>
                    <span className="flex items-center">
                      {item.Title}
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
