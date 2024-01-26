import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/home/admissionContent.module.css";
import { getValueByKey } from "@/apis";

const AdmissionContent = () => {
  const [data, setData] = useState();
  useEffect(() => {
    async function fetchData() {
      const result = await getValueByKey("home-admission-aid");
      setData(JSON.parse(result.value));
    }
    fetchData();
  }, []);

  return (
    <div className={styles.admission_container}>
      <div className="heading-container">
        <h2 className={styles.adm_heading}> {data?.heading}</h2>
      </div>
      <div className={styles.adm_content}>
        <p>{data?.para}</p>
      </div>
      <div className="tour-link">
        <Link className="simple-link underline" href={`${data?.link}`}>
          {data?.linktext}
        </Link>
      </div>
    </div>
  );
};

export default AdmissionContent;
