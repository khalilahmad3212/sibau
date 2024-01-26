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

const Mission = ({ bannerData, admissionParas }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("MISSION_BANNER");
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
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <About about={admissionParas} />
      <NumberInfo />
      <Vission />
      <StepsContainer />

      <ApplicationFormCTA />
      <Footer />
    </main>
  );
};

export default Mission;

export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};

  try {
    const [bannerResult, admissionParasResult] = await Promise.all([
      getValueByKey("MISSION_BANNER"),
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
      admissionParas,
    },
  };
}
