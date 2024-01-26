import { motion } from "framer-motion";
import React from "react";
import style from "../../styles/home/missionCard.module.css";
import {
  FaAcquisitionsIncorporated,
  FaBrain,
  FaHistory,
  FaRoad,
} from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const MissionCard = (props) => {
  const animatations = {
    hover: {
      scale: 1.4,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className={style.mission_card}>
      <div className="">
        <div className={style.card_icon}>
          <span>
            {props?.name === "History" && <FaHistory />}
            {props?.name === "Mission" && <FaRoad />}
          </span>
          <h3 className={`${style.news_title} ${style.card_title}`}>
            {props.name}
          </h3>
        </div>

        <div className={style.news_description}>
          <p>{props.description}</p>
        </div>
        <div className={style.mission_card_cta}>
          <Link href={props.redirect}>
            <motion.span
              whileHover={animatations.hover}
              whileTap={animatations.tap}
            >
              <div className="flex flex-row-reverse">
                <FaLongArrowAltRight className="" fontSize={"20px"} />
              </div>
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
