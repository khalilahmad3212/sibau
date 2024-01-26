import React from "react";
import styles from "../../styles/events/eventListV.module.css";
import Link from "next/link";

const EventListV = () => {
  return (
    <section className="st-1 section-space-tb bg-gray">
      <div className="container">
        <div className="row">
          <h2 className="sec_h2_heading pb-50">Latest Event Design 2</h2>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={`card ${styles.card}`}>
              <img
                className={`card-img-top ${styles.card_image}`}
                src="./aid-1.webp"
                alt="Card image cap"
              />
              <div className={`card-body ${styles.card_body}`}>
                <h3>Life as a Distance Learning Student</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card`&apos;`s content.
                </p>
                <Link href="/" className={styles.linkBtn}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={`card ${styles.card}`}>
              <img
                className={`card-img-top ${styles.card_image}`}
                src="./aid-2.webp"
                alt="Card image cap"
              />
              <div className={`card-body ${styles.card_body}`}>
                <h3>How to Organise Your Studies for Success</h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className={styles.linkBtn}>
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className={`card ${styles.card}`}>
              <img
                className={`card-img-top ${styles.card_image}`}
                src="./aid-3.webp"
                alt="Card image cap"
              />
              <div className={`card-body ${styles.card_body}`}>
                <h3>4th Workshop On Advance AI </h3>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>

                <Link href="/" className={styles.linkBtn}>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventListV;
