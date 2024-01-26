import { getTenderData } from "@/apis";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../styles/admission/deadlines/table.module.css";
import { FaDownload } from "react-icons/fa";
import Aos from "aos";

const TenderData = () => {
  const downloadFile = async (filename) => {
    // console.log(`http://localhost:5000/file-data/${filename}`);
    const result = await fetch(`http://localhost:5000/file-data/${filename}`);
    if (!result.ok) {
      throw new Error("File download failed");
    }
    // console.log(`http://localhost:5000/file-data/${filename}`);
    const blob = await result.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getTenderData();
      setData(data);
    }
    fetchData();
    Aos.init();
  }, []);
  return (
    <>
      <table className={styles.tbl}>
        <thead>
          <tr>
            <th colSpan={"2"}>Name</th>
            <th>Description</th>
            <th>Uploaded At</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              data-aos={`${index % 2 == 0 ? "fade-down" : "fade-up"}`}
              data-aos-duration="1000"
              key={index}
            >
              <td>
                <span
                  className=""
                  onClick={async () => {
                    await downloadFile(item.filename);
                  }}
                >
                  <FaDownload color="#36348e" />
                </span>
              </td>
              <td>{item.filename}</td>
              <td>{item.description}</td>
              <td>{item.uploadAt}</td>
              <td>{item.fileSize}</td>
              <td>{item.fileType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TenderData;
