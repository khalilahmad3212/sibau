import React from "react";
import styles from "../../styles/academic/graduateSection.module.css";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { SERVER } from "@/utils/constants";

const GraduateSection = ({ data }) => {
  return (
    <section className={`st-1 `}>
      <img src={`${SERVER}/file-data-images/${data.Image}`} className="video-cover" />
      <div className={styles.graduate_container}>
        <div className="row">
          <div className={` pb-100 ${styles.graduateBx} `}>
            <h2 className="sec_h2_heading">{data?.title}</h2>
          </div>

          <div className="col-md-6">
            <ul className={`${styles.graduate_links} space-y-4`}>
              {data?.links?.map((link, index) => (
                <li className="flex items-center" key={index}>
                  <Link href={link.link}>
                    <span className="flex items-center">
                      {link.text}
                      <span className="ml-2">
                        <FaArrowRight />
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduateSection;
