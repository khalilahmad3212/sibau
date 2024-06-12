import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import About from "@/components/home/About";
import Vission from "@/components/about/missionVission/Vission";
import NumberInfo from "@/components/about/missionVission/NumberInfo";
import StepsContainer from "@/components/about/missionVission/StepsContainer";

import { ApplicationFormCTA } from "../components/about/layout";
import { useState, useEffect } from "react";

import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const Mission = ({ bannerData, admissionParas, missionFactData,
  missionVissionData }) => {

  return (
    <>
      <PageBanner {...bannerData} />
      {/* <About about={admissionParas} /> */}
      <div className=" pt-24"></div>
      <NumberInfo data={missionFactData[0]} />
      <Vission data={missionVissionData} />
      {/* <StepsContainer /> */}
    </>
  );
};

export default Mission;

export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};
  let missionFactData = {};
  let missionVissionData = {};
  try {
    const [
      bannerResult,
      admissionParasResult,
      missionFactResult,
      missionVissionResult,
    ] = await Promise.all([
      getValueByKey("MISSION_BANNER"),
      getValueByKey("admission-overview-paras"),
      getValueByKey("MISSION_FACT"),
      getValueByKey("MISSION_VISION"),
    ]);
    admissionParas = JSON.parse(admissionParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
    missionFactData = JSON.parse(missionFactResult.value);
    missionVissionData = JSON.parse(missionVissionResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  bannerData.title = "Vision";
  return {
    props: {
      bannerData,
      admissionParas,
      missionFactData,
      missionVissionData
    },
  };
}
