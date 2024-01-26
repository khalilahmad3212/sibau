import React, { useEffect, useState } from "react";
import style from "../../styles/home/tutionTable.module.css";
import { getValueByKey } from "@/apis";
const TutionTable = ({ title, cardData, mapKey }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey(mapKey || "Tuition-Costs-2021-2023");
        setData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className={style.tution_table}>
      <div className={style.heading_container}>
        <h4 className={`${style.tbl_heading} pb-3`}>
          {title || "Tuition Costs, 2021-2023"}
        </h4>
      </div>
      <div className={`${style.tbl_detail}`}>
        <ul>
          {data.map((item, index) => {
            return (
              <li className={style.tbl_list_item} key={index}>
                <div className={style.item_content}>
                  <span> {item.Title} </span>
                  <span>{item.Fee} </span>
                </div>
              </li>
            );
          })}

          {/* <li className= { style.tbl_list_item }>
                        <div className= { style.item_content }>
                            <span>Spring 2021 </span>
                            <span>$15,000</span>
                        </div>
                    </li>
                    <li className= { style.tbl_list_item } >
                        <div className= { style.item_content }>
                            <span>Summer 2021 </span>
                            <span>$10,000</span>
                        </div>
                    </li>
                    <li className= { style.tbl_list_item } >
                        <div className= { style.item_content } >
                            <span>Fall 2021 </span>
                            <span>$15,000</span>
                        </div>
                    </li>
                    <li className= { style.tbl_list_item } >
                        <div className= { style.item_content } >
                            <span>Spring 2022</span>
                            <span>$15,000</span>
                        </div>
                    </li>

                    <li className= { style.tbl_list_item } >
                        <div className= { style.item_content } >
                            <span>Total</span>
                            <span>$75,000</span>
                        </div>
                    </li> */}
        </ul>
      </div>
    </div>
  );
};

export default TutionTable;
