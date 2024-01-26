import React from "react";
import styles from "../../../styles/academic/undergraduate/subLinks.module.css";
import Link from "next/link";

const SubLinks = (props) => {
  return (
    <section className="st-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={`bg-blue ${styles.subjLinkBx}`}>
              <h4 className={styles.subTitle}>{props.title}</h4>
            </div>
            <ul className={styles.sub_links}>
              <li>
                <div>
                  <Link href="/">
                    <span>Accounting</span>
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link href="/">
                    <span>Engineering</span>
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link href="/">
                    <span>Advertising</span>
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link href="/">
                    <span>English</span>
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link href="/">
                    <span>Art History</span>
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link href="/">
                    <span>Environmental Science</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubLinks;
