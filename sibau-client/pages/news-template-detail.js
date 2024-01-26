import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import NewsDetail from "@/components/newsTemp/NewsDetail";
import { ApplicationFormCTA } from "../components/about/layout";
import { getValueByKey } from "@/apis";
import { useState, useEffect } from "react";
import PageBanner from "@/components/PageBanner";

const NewsTemplateDetail = ({ footerData }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("NEWS_BANNER");
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

      <NewsDetail />
      <ApplicationFormCTA />
      <Footer />
    </main>
  );
};

export default NewsTemplateDetail;
