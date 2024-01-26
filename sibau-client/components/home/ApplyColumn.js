import React from "react";
import {
  FaCopy,
  FaHandshake,
  FaPage4,
  FaPager,
  FaPercentage,
  FaReadme,
} from "react-icons/fa";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { HiOutlineClipboardDocument } from "react-icons/hi2";

import style from "../../styles/home/applycolumn.module.css";
import style_news from "../../styles/home/newsItem.module.css";

const ApplyColumn = (props) => {
  return (
    <div className="my-2">
      <div className="bg-white  rounded-lg p-6 px-8 min-h-[230px] ">
        <div className="flex items-center">
          <span className="px-2">
            {props.icon === "home" && (
              <HiOutlineClipboardDocument className="text-[50px] text-gray-800" />
            )}
            {props.icon === "info" && (
              <AiOutlineMessage className="text-[50px] text-gray-800" />
            )}
            {props.icon === "book" && (
              <BsCalendarCheck className="text-[50px] text-gray-800" />
            )}
          </span>
          <h3 className="text-2xl font-extrabold ">{props.name}</h3>
        </div>
        <div className="mt-4">
          <p
            className="font-[600]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApplyColumn;
