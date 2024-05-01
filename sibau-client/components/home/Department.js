import React, { useEffect, useState } from "react";
import DepartmentItem from "./DepartmentItem";
import { getValueByKey } from "@/apis";
const Department = ({ data }) => {
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getValueByKey("home-programs");
        setPrograms(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-28 lg:px-32">
        <div className="grid cursor-pointer grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-10">
          {programs.map((item, index) => (
            <div key={index}>
              <DepartmentItem
                url={item.url}
                title={item.Name}
                sr={`http://localhost:5001/file-data-images/${item.Image}`}
                description={item.Description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Department;
