import React from "react";
import styles from "../../styles/academic/graduateSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const GraduateSection = () => {
  return (
    <section className={`st-1 `}>
      <img src="./graduate-area.webp" className="video-cover" />
      <div className={styles.graduate_container}>
        <div className="row">
          <div className={` pb-100 ${styles.graduateBx} `}>
            <h2 className="sec_h2_heading">Graduate Areas of Study</h2>
          </div>

          <div className="col-md-6">
            <ul className={`${styles.graduate_links} space-y-4`}>
              <li className="flex items-center">
                <Link href="/">
                  <span className="flex items-center">
                    Business & Administration
                    <span className="ml-2">
                      <FaArrowRight />
                    </span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <span className="flex items-center">
                    Management
                    <span className="ml-2">
                      <FaArrowRight />
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <ul className={`${styles.graduate_links} space-y-4`}>
              <li className="flex items-center">
                <Link href="/">
                  <span className="flex items-center">
                    Sciences
                    <span className="ml-2">
                      <FaArrowRight />
                    </span>
                  </span>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/">
                  <span className="flex items-center">
                    Art & Design
                    <span className="ml-2">
                      <FaArrowRight />
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduateSection;
