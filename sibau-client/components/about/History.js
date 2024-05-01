import React from "react";
import Link from "next/link";
import styles from "../../styles/about/history.module.css";
const History = ({
  title,
  description,
  image,
  alt,
  link,
  linkText
}) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-36 lg:px-40">
        <div className="row">
          <div className="col-md-6">
            <img className="card-img-top" src={`http://localhost:5001/file-data-images/${image}`} alt={alt} />
          </div>
          <div className="col-md-6">
            <div className={` ${styles.history_box_container} pl-40`}>
              <div className="heading-container">
                <h2 className="sec_h2_heading">{title}</h2>
              </div>
              <div className="sec_content">
                <p>{description.substring(0, 300)}</p>
              </div>
              <Link
                className="anchor-link text-[17px] underline hover:text-blue-800 hover:text-[20px] transition-all"
                href={link}
              >
                {linkText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
