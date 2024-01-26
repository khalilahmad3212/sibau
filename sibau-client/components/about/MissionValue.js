import React, { useEffect, useState } from "react";
import Link from "next/link";
import { getValueByKey } from "@/apis";

const MissionValue = () => {
  const [mission, setMission] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("about-mission-value");
        setMission(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="st-1">
      <div className="container sm:p-0 lg:px-20 md:px-20">
        <div className="row bg-yellow">
          <div className="col-md-7">
            <div className="bg-yellow pg-sec-pd">
              <div className="heading-container">
                <h2 className="sec_h2_heading">{mission?.heading}</h2>
              </div>
              <div className="sec_content">
                <p>{mission?.para}</p>
              </div>
              <Link
                className="anchor-link underline"
                href={mission?.link || ""}
              >
                {mission?.linkText}
              </Link>
            </div>
          </div>
          <div className="col-md-5 pr-0">
            <img
              src={"./mission-value.webp"}
              className="card-img-top imgh"
              alt={mission?.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionValue;
