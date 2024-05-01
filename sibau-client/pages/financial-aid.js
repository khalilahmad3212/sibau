import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";

import FinancialAidFacts from "@/components/admission/financial/NumInfo";
import Process from "@/components/admission/financial/Process";
import AidTypes from "@/components/admission/financial/AidTypes";

import { ApplicationFormCTA } from "../components/about/layout";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const FinancialAid = ({
  bannerData,
  financialStepsData,
  financialFactsData,
  aidCardData
}) => {

  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <FinancialAidFacts data={financialFactsData} />
        <Process data={financialStepsData} />
        <AidTypes data={aidCardData} />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default FinancialAid;

export async function getStaticProps(context) {
  let bannerData = {};
  let financialStepsData = {};
  let financialFactsData = {};
  let aidCardData = {};

  try {
    const [
      bannerResult,
      financialStepsResult,
      financialFactsResult,
      aidCardResult
    ] = await Promise.all([
      getValueByKey("FINANCIAL_AID_BANNER"),
      getValueByKey("FINANCIAL_STEPS"),
      getValueByKey("FINANCIAL_FACTS"),
      getValueByKey("FINANCIAL_AID_TYPE")
    ]);

    bannerData = JSON.parse(bannerResult.value);
    financialStepsData = JSON.parse(financialStepsResult.value);
    financialFactsData = JSON.parse(financialFactsResult.value);
    aidCardData = JSON.parse(aidCardResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      bannerData,
      financialStepsData,
      financialFactsData,
      aidCardData
    }, // will be passed to the page component as props
  };
}
