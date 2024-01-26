import Aos from "aos";
import axios from "axios";
import { useEffect, useState } from "react";
// import styles from "../../../styles/admission/deadlines/table.module.css";
import styles from "../../styles/admission/deadlines/table.module.css";
import { FaDownload, FaFileDownload } from "react-icons/fa";
import { getCareers, getJobData } from "@/apis";
const JobTable = ({ jobData }) => {
  const downloadFile = async (filename) => {
    // console.log(`http://localhost:5000/file-data/${filename}`);
    const result = await fetch(`http://localhost:5000/careers/${filename}`);
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

  const [, setJobs] = useState([]);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th
                className="py-3 px-6 bg-blue-200
               border-b border-gray-300 font-medium text-left"
              >
                No.
              </th>
              <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium   ">
                Title
              </th>
              <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium ">
                Docs
              </th>
              <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
                Published
              </th>
              <th className="py-3 px-6 bg-blue-200 border-b border-gray-300 font-medium text-left">
                Last Date
              </th>
            </tr>
          </thead>
          <tbody>
            {jobData.map((item, index) => (
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
                <td className="py-3 px-6 border-b border-gray-300 text-center">
                  <FaDownload
                    onClick={() => {
                      downloadFile(item.updatedFileName);
                    }}
                    className="cursor-pointer  text-gray-500 hover:text-gray-700 transition-colors"
                  />
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  {item.published}
                </td>
                <td className="py-3 px-6 border-b border-gray-300">
                  {item.lastDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default JobTable;
