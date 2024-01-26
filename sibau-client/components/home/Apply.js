import React, { useEffect, useState } from "react";
import ApplyColumn from "./ApplyColumn";
import { getValueByKey } from "@/apis";
import Link from "next/link";

const Apply = ({}) => {
  const [paragraphs, setPara] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("home-how-to-apply");
        setPara(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-24">
        <div className="heading-container flex flex-col lg:flex-row p-1 align-middle lg:flex-nowrap md:flex-nowrap justify-between">
          <h2 className="section-heading">{"How to Apply?"}</h2>
          <Link
            className="text-blue-400 underline font-semibold text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
            href={"/how-to-apply"}
          >
            View All Requirements
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row p-1 lg:flex-nowrap md:flex-nowrap">
          {paragraphs.map((item, index) => (
            <React.Fragment key={index}>
              <ApplyColumn
                length={paragraphs.length}
                index={index}
                name={item.name}
                description={item.desc}
                icon={item.icon}
              />
              {paragraphs.length - 1 > index && (
                <div className="hidden lg:block md:block  border-l-2 h-30 border-[#D4D4D4] border-[0.1px] mx-10"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apply;
