import React from "react";
import MissionCard from "./MissionCard";
import MissionCTA from "./MissionCTA";
import style from "../../styles/home/missionCTA.module.css";

const Mission = ({ data }) => {
  return (
    <section className="st-1 py-12 bg-gray-100">
      <div className="container sm:px-4 md:px-16 lg:px-20 xl:px-48">
        <div className="flex justify-center items-center flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4">
            <div className={style.link_box}>
              <MissionCTA title="Overview" redirect="/about" />
              <MissionCTA title="Leadership" redirect="/leadership" />
              <MissionCTA title="Campus Info" redirect="/campus" />
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4">
            <MissionCard
              name="History"
              redirect="/history"
              description={data.History?.substr(0, 185)}
            />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4 mb-4">
            <MissionCard
              name="Mission"
              redirect="/mission"
              description={data.Mission?.substr(0, 180)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
