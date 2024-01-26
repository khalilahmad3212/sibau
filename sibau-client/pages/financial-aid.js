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

const FinancialAid = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("FINANCIAL_AID");
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
      <HeaderFooter>
        <PageBanner {...banner} />
        <FinancialAidFacts />
        <Process />
        <AidTypes />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default FinancialAid;

export async function getStaticProps(context) {
  // Footer Section

  return {
    props: { footerData: "" }, // will be passed to the page component as props
  };
}
