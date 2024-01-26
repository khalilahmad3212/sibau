import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FeeTable from "./FeeTable";

const Fee = ({ fee }) => {
  return (
    <section className="st-1 fee-page">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <div className="col-md-12">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Under Graduate</Accordion.Header>
                <Accordion.Body>
                  {fee.uGrad.departments.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.programs}
                      title={department.name}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Graduate</Accordion.Header>
                <Accordion.Body>
                  {fee.graduate.departments.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.programs}
                      title={department.name}
                    />
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Post Graduate</Accordion.Header>
                <Accordion.Body>
                  {fee.pGrad.departments.map((department, index) => (
                    <FeeTable
                      key={index}
                      programs={department?.programs}
                      title={department.name}
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
