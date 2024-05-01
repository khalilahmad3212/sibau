import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FeeTable from "./FeeTable";

const Fee = ({ fee }) => {

  // fee = {
  //   "graduate": {
  //     "departments": [
  //       {
  //         "name": "Engineering",
  //         "programs": [
  //           {
  //             "name": "Masters in Engineering",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "PhD in Engineering",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Business",
  //         "programs": [
  //           {
  //             "name": "Masters in Business",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "PhD in Business",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   "uGrad": {
  //     "departments": [
  //       {
  //         "name": "Engineering",
  //         "programs": [
  //           {
  //             "name": "Bachelors in Engineering",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "Diploma in Engineering",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Business",
  //         "programs": [
  //           {
  //             "name": "Bachelors in Business",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "Diploma in Business",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   "pGrad": {
  //     "departments": [
  //       {
  //         "name": "Engineering",
  //         "programs": [
  //           {
  //             "name": "Masters in Engineering",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "PhD in Engineering",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         "name": "Business",
  //         "programs": [
  //           {
  //             "name": "Masters in Business",
  //             "fees": {
  //               "tuition": 1000,
  //               "lab": 500,
  //               "total": 1500
  //             }
  //           },
  //           {
  //             "name": "PhD in Business",
  //             "fees": {
  //               "tuition": 2000,
  //               "lab": 1000,
  //               "total": 3000
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // };

  return (
    <section className="st-1 fee-page">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>{fee?.uGrad?.heading}</Accordion.Header>
                <Accordion.Body>
                  {fee.uGrad?.sections?.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.links}
                      title={department.title}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>{fee.graduate.heading}</Accordion.Header>
                <Accordion.Body>
                  {fee.graduate.sections.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.links}
                      title={department.title}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>{fee?.pGrad?.heading}</Accordion.Header>
                <Accordion.Body>
                  {fee?.pGrad?.sections?.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.links}
                      title={department.title}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fee;
