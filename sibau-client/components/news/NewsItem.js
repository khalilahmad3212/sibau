import React from "react";
import styles from "../../styles/news/newsItem.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
const NewsItemCard = ({
  Id = 2,
  Title = "this is title",
  Date: date = "2023-06-01",
  Heading = "this is heading",
  Descripiton = "soon, news will be added ",
  Image = "https://api.dicebear.com/6.x/initials/svg?seed=Employee",
  Sort = 2,
}) => {
  return (
    <div className="col-md-4 col-sm-6 col-xs-12">
      <figure className={styles.newsItem}>
        <img src={Image} alt="news card" />
        <div className={styles.date}>
          <span className={styles.day}>{new Date(date).getDay()}</span>
          <span className={styles.month}>
            {new Date(date).toLocaleString("en-US", { month: "long" })}
          </span>
        </div>
        <figcaption>
          <h3>{Heading}</h3>
          <p>
            {Descripiton}
            {Descripiton}
          </p>
        </figcaption>
        <div className={styles.hover}>
          <FaExternalLinkAlt />
        </div>
        <Link href="#"></Link>
      </figure>
    </div>
  );
};

const NewsItem = ({ news }) => {
  return (
    <section className="st-1 sb-1 ">
      <div className="container pb-20">
        <div className="row">
          {/* <h2 className="sec_h2_heading pb-50"> News </h2> */}
          {news.map((newsItem, index) => (
            <NewsItemCard key={index} {...newsItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsItem;
