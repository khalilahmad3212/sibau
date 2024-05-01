import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import Vission from "@/components/about/missionVission/Vission";
import NumberInfo from "@/components/about/missionVission/NumberInfo";
import Instruction from "@/components/admission/apply/Instruction";
import Requirements from "@/components/admission/apply/Requirements";
import { ApplicationFormCTA, AboutContent } from "../components/about/layout";

const HowToApply = ({
  bannerData,
  overviewParas,
  admissionProcess,
  requirements,
}) => {

  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <AboutContent about={overviewParas} />
      <Instruction admissionProcess={admissionProcess} />
      <Requirements requirements={requirements} />
      <ApplicationFormCTA />
      <Footer />
    </main>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let overviewParas = {};
  let admissionProcess = {};
  let requirements = {};
  try {
    const overviewParasResult = await getValueByKey("admission-apply-paras");
    const bannerResult = await getValueByKey("HOW_TO_BANNER");
    const admissionProcessResult = await getValueByKey("APPLY_PROCESS");
    const requirementsResult = await getValueByKey("APPLY_REQUIREMENTS");

    overviewParas = JSON.parse(overviewParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
    admissionProcess = JSON.parse(admissionProcessResult.value);
    requirements = JSON.parse(requirementsResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      admissionProcess,
      overviewParas,
      bannerData,
      requirements,
    },
  };
}

export default HowToApply;
