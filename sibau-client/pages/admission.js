import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import Tuition from "@/components/home/Tution";
import Facts from "@/components/admission/Facts";
import AdmissionApply from "@/components/admission/AdmissionApply";
import FinancialAid from "@/components/admission/FinancialAid";
import { ApplicationFormCTA, AboutContent } from "../components/about/layout";
import HeaderFooter from "@/components/global/HeaderFooter";

const Admission = ({
  bannerData,
  admissionParas,
  factsData,
  applyData,
  aidCard,
}) => {

  return (
    <>
      <PageBanner {...bannerData} />
      <AboutContent about={admissionParas} />
      <Facts factsData={factsData} />
      <AdmissionApply applyData={applyData} />
      <FinancialAid aidCard={aidCard} />
      {/* <Tuition /> */}
      {/* <ApplicationFormCTA /> */}
    </>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};
  let factsData = {};
  let applyData = {};
  let aidCard = {};

  try {
    const bannerResult = await getValueByKey("ADMISSION_BANNER");
    const factsDataResult = await getValueByKey("ADMISSION_FACTS");
    const applyDataResult = await getValueByKey("ADMISSION_FIRST");
    const aidCardResult = await getValueByKey("ADMISSION_SECOND");
    const overviewParas = await getValueByKey("admission-overview-paras");

    bannerData = JSON.parse(bannerResult.value);
    admissionParas = JSON.parse(overviewParas.value);
    factsData = JSON.parse(factsDataResult.value);
    applyData = JSON.parse(applyDataResult.value);
    aidCard = JSON.parse(aidCardResult.value);
  } catch (error) {
    console.error("Error fetching banner data:", error);
  }

  return {
    props: {
      applyData,
      factsData,
      admissionParas,
      bannerData,
      aidCard,
    },
  };
}

export default Admission;
