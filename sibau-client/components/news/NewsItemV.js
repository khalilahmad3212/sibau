import React from "react";
import styles from "../../styles/news/news_item.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const NewsItemV = () => {
  return (
    <section className="st-1 section-pb">
      <div className="container">
        <div className="row">
          <h2 className="sec_h2_heading pb-50">Latest News Design 2</h2>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <figure className={styles.news__item}>
              <div className={styles.image}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
                  alt="sample69"
                />
              </div>
              <figcaption>
                <div className={styles.date}>
                  <span className={styles.day}>28</span>
                  <span className={styles.month}>Oct</span>
                </div>
                <h3>The World Ended Yesterday</h3>
                <p>
                  I don't need to compromise my principles, because they don't
                  have the slightest bearing on what happens to me anyway.
                </p>
              </figcaption>
              <footer>
                <div className={styles.views}>
                  <i className={styles.ion__eye}></i>2,907
                </div>
                <div className={styles.love}>
                  <i className={styles.ion__heart}></i>623
                </div>
                <div className={styles.comments}>
                  <i className={styles.ion__chatboxes}></i>23
                </div>
              </footer>
              <a href="/news-detail"></a>
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <figure className={styles.news__item}>
              <div className={styles.image}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
                  alt="sample69"
                />
              </div>
              <figcaption>
                <div className={styles.date}>
                  <span className={styles.day}>28</span>
                  <span className={styles.month}>Oct</span>
                </div>
                <h3>The World Ended Yesterday</h3>
                <p>
                  I don't need to compromise my principles, because they don't
                  have the slightest bearing on what happens to me anyway.
                </p>
              </figcaption>
              <footer>
                <div className={styles.views}>
                  <i className={styles.ion__eye}></i>2,907
                </div>
                <div className={styles.love}>
                  <i className={styles.ion__heart}></i>623
                </div>
                <div className={styles.comments}>
                  <i className={styles.ion__chatboxes}></i>23
                </div>
              </footer>
              <a href="#"></a>
            </figure>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <figure className={styles.news__item}>
              <div className={styles.image}>
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg"
                  alt="sample69"
                />
              </div>
              <figcaption>
                <div className={styles.date}>
                  <span className={styles.day}>28</span>
                  <span className={styles.month}>Oct</span>
                </div>
                <h3>The World Ended Yesterday</h3>
                <p>
                  I don't need to compromise my principles, because they don't
                  have the slightest bearing on what happens to me anyway.
                </p>
              </figcaption>
              <footer>
                <div className={styles.views}>
                  <i className={styles.ion__eye}></i>2,907
                </div>
                <div className={styles.love}>
                  <i className={styles.ion__heart}></i>623
                </div>
                <div className={styles.comments}>
                  <i className={styles.ion__chatboxes}></i>23
                </div>
              </footer>
              <a href="#"></a>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsItemV;
