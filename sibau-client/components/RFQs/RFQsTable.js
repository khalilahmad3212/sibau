import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "../../../styles/admission/deadlines/table.module.css";
import styles from "../../styles/admission/deadlines/table.module.css";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { getRFQs } from "@/apis";
const RFQsTable = () => {
  const downloadFile = async (filename) => {
    // console.log(`http://localhost:5000/file-data/${filename}`);
    const result = await fetch(`http://localhost:5000/rfqs/${filename}`);
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

  const [rfqs, setRFQS] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getRFQs();
      setRFQS(result);
    }
    fetchData();
  }, []);
  const data = [
    {
      id: 1,
      title: "Sample Title 1",
      document: "sample_document_1.pdf",
      published: "2023-05-17",
      lastDate: "2023-06-30",
      category: "Category 1",
      contact: "John Doe",
    },

    {
      id: 2,
      title: "Sample Title 2",
      document: "sample_document_2.pdf",
      published: "2023-05-18",
      lastDate: "2023-07-15",
      category: "Category 2",
      contact: "Jane Smith",
    },
    {
      id: 3,
      title: "Sample Title 3",
      document: "sample_document_3.pdf",
      published: "2023-05-19",
      lastDate: "2023-07-31",
      category: "Category 3",
      contact: "Robert Johnson",
    },
  ];
  return (
    <div className="row">
      <table
        className={styles.tbl}
        style={{
          overflowX: "auto",
        }}
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th style={{ maxWidth: "10px", textAlign: "center" }}>Doc</th>
            <th>Published</th>
            <th>Last Date</th>
            <th>Category</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {rfqs.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td style={{ maxWidth: "10px", textAlign: "center" }}>
                <FaDownload
                  onClick={() => {
                    downloadFile(item.updatedFileName);
                  }}
                />
              </td>
              <td>{item.published}</td>
              <td>{item.lastDate}</td>
              <td>{item.category}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default RFQsTable;
