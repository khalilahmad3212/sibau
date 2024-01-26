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

import { ApplicationFormCTA } from "../../components/about/layout";
import President from "@/components/about/leadership/President";
import Staff from "@/components/about/leadership/Staff";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";

const Leadership = ({ footerData }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("LEADERSHIP_BANNER");
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
      <PageBanner {...banner} />
      <President />
      <Staff title="Senior Staff" />
      <ApplicationFormCTA />
    </main>
  );
};

export default Leadership;
