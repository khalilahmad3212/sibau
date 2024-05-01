import React from "react";
import style from "../../styles/home/departmentItem.module.css";
import Link from "next/link";
const DepartmentItem = (props) => {
  return (
    <Link href={`/${props.url}`} className="text-transparent">
      <div className="card hover:bg-gray-100">
        <div className={style.cardImage}>
          <img className="card-img-top" src={`  ${props.sr}`} alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title text-gray-600 hover:peer-hover:text-red-500">
            {props.title}
          </h5>
          <div className="w-32 ml-0 border-t-2 border-[5px] border-[#ee785b]"></div>
          <p className={`${style.card_text} text-gray-700 hover:bg-gray-200`}>
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DepartmentItem;
