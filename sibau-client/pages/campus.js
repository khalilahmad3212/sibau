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

import { AboutContent, ApplicationFormCTA, Gallery } from "../components/about/layout";
import { getGallery, getValueByKey } from "@/apis";

const Campus = ({ admissionParas, bannerData, gallaryData, campusVideoData, campusInfoData, campusHoursData,
  mapData }) => {
  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <AboutContent about={admissionParas} key={"about-campus"} />
      <Gallery gallery={gallaryData} />
      <CampusInfo data={campusInfoData} />
      <VideoSection data={campusVideoData} />
      <UnInfo data={campusHoursData} />
      <Direction data={mapData} />
      <ApplicationFormCTA />
      <Footer />
    </main>
  );
};
export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};
  let gallaryData = {};
  let campusVideoData = {};
  let campusInfoData = {};
  let campusHoursData = {};
  let mapData = {};
  try {
    const [
      bannerResult,
      admissionParasResult,
      gallaryResult,
      campusVideoResult,
      campusInfoResult,
      campusHoursResult,
      mapResult
    ] = await Promise.all([
      getValueByKey("CAMPUS_BANNER"),
      getValueByKey("about-campus-paras"),
      getGallery("campus"),
      getValueByKey("CAMPUS_VIDEO"),
      getValueByKey("CAMPUS_INFO"),
      getValueByKey("CAMPUS_HOURS"),
      getValueByKey("CAMPUS_MAP_CONTENT")
    ]);
    admissionParas = JSON.parse(admissionParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
    gallaryData = gallaryResult.data;
    campusVideoData = JSON.parse(campusVideoResult.value);
    campusInfoData = JSON.parse(campusInfoResult.value);
    campusHoursData = JSON.parse(campusHoursResult.value);
    mapData = JSON.parse(mapResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      admissionParas,
      gallaryData,
      campusVideoData,
      campusInfoData,
      campusHoursData,
      mapData
    },
  };
}

export default Campus;
