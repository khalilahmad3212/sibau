import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import { Inter } from "next/font/google";

import OverviewContent from "@/components/academic/OverviewContent";
import Gallery from "@/components/academic/Gallery";
import GraduateSection from "@/components/academic/GraduateSection";
import MissionValue from "@/components/academic/MissionValue";
import DegreeLink from "@/components/academic/DegreeLink";

import HistoryContent from "@/components/about/history/HistoryContent";
import { ApplicationFormCTA } from "../components/about/layout";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const Academics = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("ACADEMICS_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...banner} />
        <HistoryContent
          heading="36+"
          tagline="Majors, minors & graduate programs"
        />
        <Gallery
          img1="./academic-g-1.webp"
          img2="./academic-g-2.webp"
          img3="./academic-g-3.webp"
          img4="./academic-g-4.webp"
          img5="./academic-g-5.webp"
        />
        <OverviewContent />
        <DegreeLink />
        <GraduateSection />
        <MissionValue />

        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default Academics;
