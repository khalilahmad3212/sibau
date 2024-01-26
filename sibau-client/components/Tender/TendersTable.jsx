import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "../../../styles/admission/deadlines/table.module.css";
import styles from "../../styles/admission/deadlines/table.module.css";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { getTenders } from "@/apis";
const TendersTable = () => {
  const downloadFile = async (filename) => {
    // console.log(`http://localhost:5000/file-data/${filename}`);
    const result = await fetch(`http://localhost:5000/tender/${filename}`);
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

  const [tenders, setTender] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getTenders();
      setTender(result);
    }
    fetchData();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              className="py-3 px-6 bg-blue-200
               border-b border-gray-300 font-medium text-left"
            >
              Proc No.
            </th>

            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium   ">
              Title
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium ">
              Docs
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
              Last Date of Submission
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
              Opening Date
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
              Fee
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
              Category
            </th>
            <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
              Contacts
            </th>
          </tr>
        </thead>
        <tbody>
          {tenders.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : ""
              } hover:bg-blue-300 transition-colors`}
            >
              <td className="py-3 px-6 border-b border-gray-300">
                {index + 1}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">
                {item.title}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">
                <FaDownload
                  onClick={() => {
                    downloadFile(item.updatedFileName);
                  }}
                />

                {/* Render documents here */}
                {/* {item.docs.map((doc, docIndex) => (
                  <div key={docIndex}>
                    <a href={doc.file}>{doc.name}</a>
                  </div>
                ))} */}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">
                {item.lastDate}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">
                {item.openingDate}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">{item.fee}</td>
              <td className="py-3 px-6 border-b border-gray-300">
                {item.category}
              </td>
              <td className="py-3 px-6 border-b border-gray-300">
                {/* Render contacts here */}
                {/* {item.contacts.map((contact, contactIndex) => (
                  <div key={contactIndex}>
                    <div>{contact.name}</div>
                    <div>{contact.email}</div>
                    <div>{contact.phone}</div>
                  </div>
                ))} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TendersTable;
