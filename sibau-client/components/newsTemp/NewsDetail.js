import React from "react";
import styles from "../../styles/newsTemp/newsDetail.module.css";

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const NewsDetail = () => {
  return (
    <section className="st-1 section-pb">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.news__detail__content}>
              <h1>How to Organise Your Studies for Success</h1>

              <ul className={styles.news__detial_custom_link}>
                <li>
                  <a href="/">December 29, 2020</a>
                </li>
                <li>
                  <a href="/">December 29, 2020</a>
                </li>
              </ul>

              <ul className={styles.news__social}>
                <li>
                  <Link href="/">
                    <span>
                      <FaFacebook />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>
                      <FaTwitter />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span>
                      <FaLinkedin />
                    </span>
                  </Link>
                </li>
              </ul>

              <div>
                <img src="./news-detail.webp" />
              </div>

              <div className={styles.news__content_box}>
                <h3>Stay Focused on Your Studies</h3>
                <p>
                  There is a phrase called ‘Decision Fatigue’ which may be
                  weighing you down. I first heard about this procrastination
                  phenomenon in a talk by Kerwin Rae. It is based on the
                  principle that we spend so much time thinking about what to
                  do, instead of doing what we wanted in the first place, that
                  we waste time. How can we stop being unsure what to study and
                  just start studying? It is never too late to organise your
                  time! One approach is to divide your module across calendar
                  weeks available and then split those into days.{" "}
                </p>
              </div>
              <div className={styles.news__content_box}>
                <h3>Stay Focused on Your Studies</h3>
                <p>
                  There is a phrase called ‘Decision Fatigue’ which may be
                  weighing you down. I first heard about this procrastination
                  phenomenon in a talk by Kerwin Rae. It is based on the
                  principle that we spend so much time thinking about what to
                  do, instead of doing what we wanted in the first place, that
                  we waste time. How can we stop being unsure what to study and
                  just start studying? It is never too late to organise your
                  time! One approach is to divide your module across calendar
                  weeks available and then split those into days.{" "}
                </p>
              </div>
              <div className={styles.news__content_box}>
                <h3>Stay Focused on Your Studies</h3>
                <p>
                  There is a phrase called ‘Decision Fatigue’ which may be
                  weighing you down. I first heard about this procrastination
                  phenomenon in a talk by Kerwin Rae. It is based on the
                  principle that we spend so much time thinking about what to
                  do, instead of doing what we wanted in the first place, that
                  we waste time. How can we stop being unsure what to study and
                  just start studying? It is never too late to organise your
                  time! One approach is to divide your module across calendar
                  weeks available and then split those into days.{" "}
                </p>
              </div>

              <div className={styles.news__content_box}>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/CdRb8eX2Yns"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>

              <div className={styles.news__content_box}>
                <h3>Keep Focused and Track Progress</h3>
                <p>
                  There is a phrase called ‘Decision Fatigue’ which may be
                  weighing you down. I first heard about this procrastination
                  phenomenon in a talk by Kerwin Rae. It is based on the
                  principle that we spend so much time thinking about what to
                  do, instead of doing what we wanted in the first place, that
                  we waste time. How can we stop being unsure what to study and
                  just start studying? It is never too late to organise your
                  time! One approach is to divide your module across calendar
                  weeks available and then split those into days.{" "}
                </p>
                <p>
                  After all the hard work, it’s very rewarding to cross off the
                  topics on your calendar to show how far you have come. This
                  can help keep you on track and stay motivated and give you the
                  best chance of success.
                </p>
              </div>

              <div className={styles.news__content_box}>
                <blockquote className={styles.blockquote}>
                  <p>
                    After all the hard work, it's very rewarding to cross off
                    the topics on your calendar to show how far you have come.
                  </p>
                  <div className={styles.blockquote__ftr}>
                    <div className={styles.news__title}>John Doe</div>
                    <div className={styles.news__twitter_icon}>
                      <a href="/">
                        <FaTwitter />
                      </a>
                    </div>
                  </div>
                </blockquote>
                <p>
                  After all the hard work, it’s very rewarding to cross off the
                  topics on your calendar to show how far you have come. This
                  can help keep you on track and stay motivated and give you the
                  best chance of success.
                </p>
              </div>

              <ul className={` ${styles.news__detial_custom_link} left `}>
                <li>
                  <a href="/">December 29, 2020</a>,{" "}
                  <a href="/">December 29, 2020</a>
                </li>
              </ul>
            </div>

            <div className={styles.news__pagination}>
              <div className={styles.news__navigation__link}>
                <a href="/">
                  <span className={styles.prev__lable}>Previous</span>
                  <span className={styles.prev__title}>
                    4th Workshop “Advanced Materials”
                  </span>
                </a>
              </div>
              <div className={styles.seprator}>
                <div></div>
              </div>
              <div className={` right ${styles.news__navigation__link} `}>
                <a href="/" className={styles.flex__right}>
                  <span className={styles.prev__lable}>Next</span>
                  <span className={styles.prev__title}>
                    4th Workshop “Advanced Materials”
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
