import React from "react";
import Link from "next/link";
import styles from "../../styles/academic/degreeLink.module.css";

const DegreeLink = () => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className={styles.degreeLinkBox}>
              <Link href="/under-graduate">Undergraduate </Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className={` ${styles.degreeLinkBox} `}>
              <Link href="/graduate">Graduate</Link>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 col-xs-12">
            <div className={styles.degreeLinkBox}>
              <Link href="/">Post Graduate</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DegreeLink;
