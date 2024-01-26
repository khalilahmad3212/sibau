import { Accordion } from "react-bootstrap";
import styles from "../../styles/admission/fees/feetable.module.css";
import React, { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
// summer-courses-offered
const SummerCourses = () => {
  const [about, setAbout] = useState([
    {
      department: "Computer Science",
      coursesOffered: [
        "Web Development",
        "Artificial Intelligence",
        "Database Management",
        "Mobile App Development",
        "Data Structures",
        "Software Engineering",
      ],
    },
    {
      department: "Business Administration",
      coursesOffered: [
        "Financial Accounting",
        "Business Communication",
        "Marketing Management",
        "Human Resource Management",
        "Entrepreneurship",
      ],
    },
    {
      department: "B.Ed. (Bachelor of Education)",
      coursesOffered: [
        "Teaching Methods",
        "Educational Psychology",
        "Curriculum Development",
        "Classroom Management",
        "Assessment and Evaluation",
      ],
    },
    {
      department: "Mathematics",
      coursesOffered: [
        "Calculus",
        "Linear Algebra",
        "Probability Theory",
        "Differential Equations",
        "Mathematical Modeling",
      ],
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("summer-courses-offered");
        setAbout(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <section className="st-1 fee-page py-10 mb-10">
        <div className="container sm:px-0 md:px-48 lg:px-52">
          <div className="row">
            <Accordion>
              {about.map((item, index) => (
                <Accordion.Item key={index} eventKey={index}>
                  <Accordion.Header>{item.department}</Accordion.Header>
                  <Accordion.Body>
                    <div className={styles.table_container}>
                      <div className={styles.feetbl}>
                        <table>
                          <tbody>
                            {item.coursesOffered.map((subItem, index) => (
                              <tr
                                style={{
                                  wordSpacing: "5px",
                                  borderSpacing: "10px",
                                  fontSize: "25px",
                                  margin: "20px",
                                  marginTop: "20px",
                                }}
                                key={index}
                              >
                                <td style={{ width: "100vh", padding: "20px" }}>
                                  {subItem}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
};
export default SummerCourses;
