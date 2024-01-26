import React, { useEffect, useState } from "react";
import styles from "../../styles/about/aboutPageContent.module.css";
import { getValueByKey } from "@/apis";
const AboutContent = ({ about }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-40 lg:px-48">
        <div>
          {about &&
            about?.map((item, index) => (
              <p
                className="mt-6 text-[18px] lg:text-[24px]
              font-semibold"
                key={index}
              >
                {item}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
