import { getJobData, getTenderData } from "@/apis";
import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";

const JobData = () => {
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
      const data = await getJobData();
      setData(data);
    }
    Aos.init();
    fetchData();
  }, []);
  return (
    <>
      <table className={styles.tbl}>
        <thead>
          <tr>
            <th> Download</th>

            <th> Name</th>
            <th>Description</th>
            <th>Uploaded At</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              data-aos={`${index % 2 == 0 ? "fade-right" : "fade-up"}`}
              data-aos-duration="1000"
            >
              <td>
                <span
                  className="btn btn-primary"
                  onClick={async () => {
                    await downloadFile(item.filename);
                  }}
                >
                  download
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

export default JobData;
