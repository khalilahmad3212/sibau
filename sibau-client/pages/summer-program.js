import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import About from "@/components/home/About";
import Vission from "@/components/about/missionVission/Vission";
import NumberInfo from "@/components/about/missionVission/NumberInfo";
import Steps from "@/components/about/missionVission/Steps";

import { ApplicationFormCTA } from "../components/about/layout";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import SummerCourses from "@/components/summer-program/SummerCourses";
import HeaderFooter from "@/components/global/HeaderFooter";

const SummerProgram = ({ footerData }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("SUMMER_PROGRAMS_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const missionData = {
    Description: "Desc of mission",
  };
  return (
    <>
      <PageBanner {...banner} />
      <About data={missionData} />
      {/* <NumberInfo /> */}
      <SummerCourses />
      {/* <Steps /> */}
      {/* <ApplicationFormCTA /> */}
    </>
  );
};

export default SummerProgram;

export async function getStaticProps(context) {
  let bannerData = {
    title: "Summer",
    image: "./about-banner.webp",
    description: "Summer In Sukkur IBA University ",
  };

  let admissionParas = {};
  let historyData = {};

  try {
    const [bannerResult, admissionParasResult] = await Promise.all([
      getValueByKey("SUMMER_PROGRAMS_BANNER"),
      getValueByKey("admission-overview-paras"),
    ]);
    admissionParas = JSON.parse(admissionParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      historyData,
      admissionParas,
    },
  };
}
