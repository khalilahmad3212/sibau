import React, { useEffect, useState } from "react";
import { getValueByKey } from "@/apis";
import styles from "../../styles/admission/deadlines/table.module.css";

const DateTables = ({ data }) => {
  // const [about, setAbout] = useState({
  //   programs: [
  //     {
  //       name: "Business & Administration",
  //       date: "JULY 2021",
  //       accommodationCheckIn: "Wednesday, 30 June",
  //       newStudentOrientation: "Thursday, 1 – Thursday 2 July",
  //       termStart: "Monday, 5 July",
  //       termEnd: "Friday 17 September",
  //       recess: "Monday 20 September – Friday 1 October",
  //     },
  //     {
  //       name: "Computer Science & A.I.",
  //       date: "OCTOBER 2020",
  //       accommodationCheckIn: "Wednesday, 30 June",
  //       newStudentOrientation: "Thursday, 1 – Thursday 2 July",
  //       termStart: "Monday, 5 July",
  //       termEnd: "Friday 17 September",
  //       recess: "Monday 20 September – Friday 1 October",
  //     },
  //     {
  //       name: "Art & Design",
  //       date: "APRIL 2021",
  //       accommodationCheckIn: "Wednesday, 30 June",
  //       newStudentOrientation: "Thursday, 1 – Thursday 2 July",
  //       termStart: "Monday, 5 July",
  //       termEnd: "Friday 17 September",
  //       recess: "Monday 20 September – Friday 1 October",
  //     },
  //     {
  //       name: "Media Management",
  //       date: "OCTOBER 2020",
  //       accommodationCheckIn: "Wednesday, 30 June",
  //       newStudentOrientation: "Thursday, 1 – Thursday 2 July",
  //       termStart: "Monday, 5 July",
  //       termEnd: "Friday 17 September",
  //       recess: "Monday 20 September – Friday 1 October",
  //     },
  //   ],
  // });
  return (
    <div className="st-1 pb-10">
      {data?.sections?.map((item, index) => (
        <section key={index} className="st-1">
          <div className="container sm:px-0 md:px-24 lg:px-32 py-2 pb-10">
            <div className="row">
              <div className="col-md-12">
                <h2 className="sec_sub_heading pb-30">{item.title}</h2>
                <div className={styles.tbl}>
                  <table>
                    <tbody>
                      <tr>
                        <th>{item.subTitle}</th>
                        <th>DATE</th>
                      </tr>
                      {item?.links.map((link, index) => (
                        <tr key={index}>
                          <td>{link.text}</td>
                          <td>{link.link}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default DateTables;
