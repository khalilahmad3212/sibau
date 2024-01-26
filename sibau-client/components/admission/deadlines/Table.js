import React from "react";
import styles from "../../../styles/admission/deadlines/table.module.css";

const DateTable = (props) => {
  return (
    <section className="st-1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="sec_sub_heading pb-30">{props.title}</h2>
            <div className={styles.tbl}>
              <table>
                <tbody>
                  <tr>
                    <th>JULY 2021</th>
                    <th>DATE</th>
                  </tr>
                  <tr>
                    <td>Accommodation Check In</td>
                    <td>Wednesday, 30 June</td>
                  </tr>
                  <tr>
                    <td>New Student Orientation</td>
                    <td>Thursday, 1 – Thursday 2 July</td>
                  </tr>
                  <tr>
                    <td>Term Start</td>
                    <td>Monday, 5 July</td>
                  </tr>
                  <tr>
                    <td>Term End</td>
                    <td>Friday 17 September</td>
                  </tr>
                  <tr>
                    <td>Recess</td>
                    <td>Monday 20 September – Friday 1 October</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DateTable;
