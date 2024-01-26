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
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <AboutContent about={admissionParas} />
        <Facts factsData={factsData} />
        <AdmissionApply applyData={applyData} />
        <FinancialAid aidCard={aidCard} />
        <Tuition />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};
  let factsData = {};
  let applyData = {};
  let aidCard = {};
  try {
    const aidCardResult = await getValueByKey("admission-aid-card");
    const bannerResult = await getValueByKey("ADMISSION_BANNER");
    const overviewParas = await getValueByKey("admission-overview-paras");
    const factsDataResult = await getValueByKey("facts-admission");
    const applyDataResult = await getValueByKey("admission-apply-card");

    aidCard = JSON.parse(aidCardResult.value);
    applyData = JSON.parse(applyDataResult.value);
    factsData = JSON.parse(factsDataResult.value);
    admissionParas = JSON.parse(overviewParas.value);
    bannerData = JSON.parse(bannerResult.value);
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
