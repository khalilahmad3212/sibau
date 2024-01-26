import { useState } from "react";
import styles from "../../styles/admission/deadlines/table.module.css";
import { NoData } from "../animated/noData";
import { BiCopy } from "react-icons/bi";
//
const FacultyDetails = ({
  facultyData,
  basicInfo = {
    Id: 14,
    FirstName: "Sher",
    LastName: "khan",
    Designation: "Professor",
    Email: "sher@iba-suk.edu.pk",
    CMS_id: "ins-00990",
    EmployeeId: "ins-00990",
    OfficeExtension: "981",
    OfficeAddress: "AB-3, room 101",
    Type: "PERMANENT",
    Skills: "Java,C++,Data Science",
    Biography: "Lorem ipsum Lorem ipsumLorem ipsum",
    Image: "https://api.dicebear.com/6.x/initials/svg?seed=Sher",
    CurrentStatus: "Employeed",
    Message: "This is message",
    Phd: true,
    BPS: 18,
  },
}) => {
  const handleCopyClick = (textToCopy) => {
    // Create a textarea element to hold the text
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Append the textarea to the DOM
    document.body.appendChild(textArea);

    // Select the text in the textarea
    textArea.select();

    try {
      // Execute the copy command
      document.execCommand("copy");
      setIsCopied(true);
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }

    // Remove the textarea from the DOM
    document.body.removeChild(textArea);
  };

  const [isCopied, setIsCopied] = useState(false);

  return (
    <section className="st-1 section-pb">
      <div className=" sm:px-0 md:px-20 lg:px-32">
        {facultyData === null ? (
          <div className="lg:-mt-32  -mt-10 ">
            <NoData />
          </div>
        ) : (
          <div
            className="row py-6 "
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              marginLeft: "0px",
              marginRight: "0px",
            }}
          >
            <div className="profile flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full">
                <div className="flex justify-center items-center">
                  <img
                    className={`${styles.staff_flip_img} h-40 w-40 rounded-full`}
                    src={basicInfo.Image}
                    alt="Profile Image"
                  />
                </div>
                <h2 className="text-center text-3xl my-5">Biography</h2>
                <div className="flex justify-center items-center px-16">
                  <p>{facultyData?.biography}</p>
                </div>
              </div>
              <div className="lg:w-1/2 lg:pt-28 w-full">
                <h2 className="lg:pt-10 text-xl my-5">Contacts</h2>
                <div
                  className="flex"
                  onClick={() => {
                    handleCopyClick();
                  }}
                >
                  <h3>E-mail : {basicInfo.Email}</h3>
                  <span className="flex cursor-pointer px-2">
                    <BiCopy />
                    {isCopied && (
                      <span className="text-gray-400 px-2 text-sm">
                        Copied ..
                      </span>
                    )}
                  </span>
                </div>
                <h3>Office Extension : {basicInfo.OfficeExtension}</h3>
                <h3>Office Address : {basicInfo.OfficeAddress}</h3>
              </div>
            </div>

            <div
              className="row py-10  "
              style={{
                paddingLeft: "0px",
                paddingRight: "0px",
                marginLeft: "0px",
                marginRight: "0px",
              }}
            >
              <div className="lg:w-1/2 w-full">
                <h2 className="text-center text-3xl my-5">Overview</h2>
                <div className="lg:px-20 px-10">
                  <ul className="bg-slate-50  p-2 list-disc">
                    {facultyData?.overView &&
                      JSON.parse(facultyData.overView).map((item, index) => (
                        <li className="p-1" key={index}>
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <h2 className="text-center text-3xl my-5">Courses Taught</h2>
                <div className="lg:px-20 px-10">
                  <ul className="bg-slate-50  p-2 list-disc">
                    {facultyData?.coursesTaught &&
                      JSON.parse(facultyData.coursesTaught).map(
                        (item, index) => (
                          <li className="p-1" key={index}>
                            {item}
                          </li>
                        )
                      )}
                  </ul>
                </div>
              </div>

              <h2 className="text-center text-3xl my-5">Qualifications</h2>

              <div className="lg:hidden md:hidden block">
                <div className="overflow-auto text-center w-full">
                  <table className={styles.tbl}>
                    <thead>
                      <tr>
                        <th>Degree</th>
                        <th>From</th>
                        <th>Major</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultyData?.qualifications &&
                        JSON.parse(facultyData.qualifications).map(
                          (qualification, index) => (
                            <tr key={index}>
                              <td>{qualification.Degree}</td>
                              <td>{qualification.From}</td>
                              <td>{qualification.Major}</td>
                              <td>{qualification.Year}</td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="lg:block md:block hidden">
                <div
                  className="row"
                  style={{
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    marginLeft: "0px",
                    marginRight: "0px",
                  }}
                >
                  <table className={styles.tbl}>
                    <thead>
                      <tr>
                        <th>Degree</th>
                        <th>From</th>
                        <th>Major</th>
                        <th>Year</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultyData?.qualifications &&
                        JSON.parse(facultyData.qualifications).map(
                          (qualification, index) => (
                            <tr key={index}>
                              <td>{qualification.Degree}</td>
                              <td>{qualification.From}</td>
                              <td>{qualification.Major}</td>
                              <td>{qualification.Year}</td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="text-center text-3xl my-5">Publications</h2>

              <div className="lg:hidden md:hidden block">
                <div className="overflow-auto text-center w-full">
                  <table className={styles.tbl}>
                    <thead>
                      <tr>
                        <th>#</th>

                        <th>Title</th>
                        <th>Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultyData?.publications &&
                        JSON.parse(facultyData.publications).map(
                          (publication, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{publication.Title}</td>
                              <td>{publication.Authors}</td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="lg:block md:block hidden">
                <div
                  className="row"
                  style={{
                    paddingLeft: "0px",
                    paddingRight: "0px",
                    marginLeft: "0px",
                    marginRight: "0px",
                  }}
                >
                  <table className={styles.tbl}>
                    <thead>
                      <tr>
                        <th>#</th>

                        <th>Title</th>
                        <th>Authors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facultyData?.publications &&
                        JSON.parse(facultyData.publications).map(
                          (publication, index) => (
                            <tr key={index}>
                              <td>{index + 1}</td>
                              <td>{publication.Title}</td>
                              <td>{publication.Authors}</td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FacultyDetails;
