import React from "react";
import style from "../../styles/home/historyNumbers.module.css";

const HistoryNumbers = (props) => {
  return (
    <div className={style.history_container}>
      <div className={style.history_heading}>
        <span>{props.title}</span>
      </div>
      <div className={style.history_text}>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default HistoryNumbers;
