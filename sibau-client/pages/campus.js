import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import CampusInfo from "@/components/about/campus/CampusInfo";
import Direction from "@/components/about/campus/Direction";
import UnInfo from "@/components/about/campus/UnInfo";
import VideoSection from "@/components/about/VideoSection";

import { AboutContent, Gallery } from "../components/about/layout";
import { getValueByKey } from "@/apis";

const Campus = ({ admissionParas, bannerData }) => {
  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <AboutContent about={admissionParas} key={"about-campus"} />
      <Gallery
        img1="./ab-campus-1.webp"
        img2="./ab-campus-2.webp"
        img3="./ab-campus-3.webp"
      />
      <CampusInfo />
      <VideoSection />
      <UnInfo />
      <Direction />
      {/* <ApplicationFormCTA /> */}
      <Footer />
    </main>
  );
};
export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};

  try {
    const [bannerResult, admissionParasResult] = await Promise.all([
      getValueByKey("CAMPUS_BANNER"),
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

export default Campus;
