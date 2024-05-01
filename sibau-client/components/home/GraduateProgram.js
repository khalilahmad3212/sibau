import React from "react";
import SideHeading from "./SideHeading";
import GraduateProgramColumn from "./GraduateProgramColumn";

const GraduateProgram = ({ data }) => {
  return (
    <section className="st-1 bg-gray-100">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="flex flex-wrap justify-around items-center">
          <div className="md:w-1/4 sm:w-1/2 w-full text-center">
            <SideHeading title="Available Programs" />
          </div>

          <div className="md:w-1/3 sm:w-1/2 w-full p-4">
            <div className="p-6 bg-gray-100">
              <GraduateProgramColumn content={data?.History} />
            </div>
          </div>

          <div className="md:w-1/3 sm:w-1/2 w-full p-4">
            <div className="p-6 bg-gray-100">
              <GraduateProgramColumn content={data?.Mission} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduateProgram;
