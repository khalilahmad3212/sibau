import React, { useEffect, useState } from "react";
import styles from "../../styles/home/aboutHome.module.css";
import { getValueByKey } from "@/apis";
import Aos from "aos";

const About = ({ }) => {
  const [about, setAbout] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("About-the-University");
        setAbout(result.value);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
    Aos.init();
  }, []);
  return (
    <section className="st-1">
      <div className="container sm:px-0   md:px-48 lg:px-52 py-10 lg:py-0 md:py-0">
        <div className="flex flex-wrap">
          <div
            className="w-full md:w-4/12"
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <div className="heading-container">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                About the University
              </h2>
            </div>
          </div>
          <div
            className="w-full md:w-8/12"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="1500"
          >
            <div className="about-content pr-8">
              <p className="text-lg text-black">{about}

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
