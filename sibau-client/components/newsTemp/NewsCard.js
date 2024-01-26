import React, { useEffect, useState } from "react";
import styles from "../../styles/newsTemp/newsCard.module.css";
import { getNews } from "@/apis";

const NewsCard = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await getNews();
      setNews(result);
    }
    fetchData();
  }, []);
  return (
    <section className="st-2 section-pb">
      <div className="container">
        <div className="row">
          {news.map((item, index) => (
            <div key={index} className="col-md-4 mb-45">
              <div className={styles.news__card}>
                <a
                  href={`news-template/${item.Id}`}
                  className={styles.news__thumbnail}
                >
                  <img src={`${item.Image}`} />
                  <div className={styles.news__caption}>
                    <h4>{item.Heading} </h4>
                    <span className={styles.post__date}>December 29, 2020</span>
                    <p>
                      Effective Time Management Traditionally, most people find
                      the norm in education to involve lectures in physical
                      classrooms. Tutor-student interaction is perceived as
                      being only physical.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
