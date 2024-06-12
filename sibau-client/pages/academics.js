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
import { getGallery, getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import { SERVER } from "@/utils/constants";

const Academics = ({
  bannerData,
  historyData,
  galleryData,
  overviewData,
  studyAreasData,
  missionData
}) => {
  return (
    <>
      <PageBanner {...bannerData} />
      <HistoryContent
        heading={historyData?.heading}
        tagline={historyData?.tagLine}
        content={historyData?.content}
      />
      <Gallery
        img1={`${SERVER}/gallery-images/${galleryData[0]?.Name}`}
        img2={`${SERVER}/gallery-images/${galleryData[1]?.Name}`}
        img3={`${SERVER}/gallery-images/${galleryData[2]?.Name}`}
        img4={`${SERVER}/gallery-images/${galleryData[3]?.Name}`}
        img5={`${SERVER}/gallery-images/${galleryData[4]?.Name}`}
      />
      <OverviewContent data={overviewData} />
      <DegreeLink />
      <GraduateSection data={studyAreasData} />
      <MissionValue data={missionData} />
    </>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let historyData = {};
  let galleryData = {};
  let overviewData = {};
  let studyAreasData = {};
  let missionData = {};
  try {
    const bannerResult = await getValueByKey("ACADEMICS_BANNER");
    const historyResult = await getValueByKey("ACADEMIC_HISTORY");
    const overviewResult = await getValueByKey("ACADEMIC_OVERVIEW");
    const studyAreasResult = await getValueByKey("ACADEMIC_STUDY_AREAS");
    const missionResult = await getValueByKey("ACADEMIC_MISSION");
    const galleryResult = await getGallery("academics");

    bannerData = JSON.parse(bannerResult.value);
    historyData = JSON.parse(historyResult.value);
    overviewData = JSON.parse(overviewResult.value);
    studyAreasData = JSON.parse(studyAreasResult.value);
    missionData = JSON.parse(missionResult.value);
    galleryData = galleryResult.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      historyData,
      galleryData,
      overviewData,
      studyAreasData,
      missionData
    },
  };
}

export default Academics;
