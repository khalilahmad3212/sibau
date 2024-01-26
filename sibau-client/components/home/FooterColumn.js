import React from "react";
import style from "../../styles/home/footerColumn.module.css";
import Link from "next/link";

const FooterColumn = (props) => {
  return (
    <div className={style.footer_links}>
      <h5 className="pb-3">{props.title}</h5>
      <ul>
        {props.linkData.map((item, index) => {
          return (
            <li key={index}>
              <Link href={`${item.link}`}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterColumn;
