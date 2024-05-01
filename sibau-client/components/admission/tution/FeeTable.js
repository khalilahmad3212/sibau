import React from "react";
import styles from "../../../styles/admission/fees/feetable.module.css";

const FeeTable = (props) => {
  return (
    <div className={styles.table_container}>
      <h2 className={styles.tbl_heading}>{props.title}</h2>
      <div className={styles.feetbl}>
        <table>
          <tbody>
            <tr>
              <th>Program</th>
              <th>Fees</th>
            </tr>
            {props?.programs?.map((program, index) => (
              <tr key={index}>
                <td>{program?.text} </td>
                <td>{program?.link}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeeTable;
