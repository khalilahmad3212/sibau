import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { getGallery, getValueByKey } from "@/apis";
import { ABOUT_BANNER, ABOUT_HISTORY, ABOUT_MISSION, ABOUT_STATISTIC, ABOUT_VIDEO, HISTORY_DETAILS } from ".././utils/constants";
import {
  AboutContent,
  History,
  MissionValue,
  AboutTestimonial,
  ApplicationFormCTA,
  Gallery,
  InformativeNumber,
} from "../components/about/layout";
import MouseDot from "@/components/MouseDot";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import PageBanner from "@/components/PageBanner";
import DesignedPictureTextContainer from "@/components/academic/DesignedPictureTextConatiner";
import VideoSection from "@/components/about/VideoSection";

const About = ({
  bannerData,
  admissionParas,
  aboutGallery,
  factsData,
  historyData,
  missionData,
  aboutVideoData
}) => {
  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <AboutContent about={admissionParas} />
      <Gallery gallery={aboutGallery} />
      <InformativeNumber statistics={factsData} />
      <History
        title={historyData.heading}
        description={historyData.para}
        image={historyData.Image}
        link={historyData.link}
        linkText={historyData.linkText}
        alt={"History Picture"}
      />
      {/* <MissionValue /> */}
      <DesignedPictureTextContainer
        heading={missionData.heading}
        content={missionData.para}
        image={missionData.Image}
        linkText={missionData.linkText}
        link={missionData.link}
      />
      <VideoSection data={aboutVideoData} />
      <AboutTestimonial index="1" />
      <ApplicationFormCTA />
      <Footer />
    </main>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let historyData = {};
  let admissionParas = {};
  let aboutGallery = [];
  let factsData = [];
  let missionData = {};
  let aboutVideoData = {};

  try {
    const [
      bannerResult,
      historyResult,
      admissionParasResult,
      factsResult,
      missionResult,
      aboutVideoResult
    ] =
      await Promise.all([
        getValueByKey(ABOUT_BANNER),
        getValueByKey(ABOUT_HISTORY),
        getValueByKey("about-overview-paras"),
        getValueByKey(ABOUT_STATISTIC),
        getValueByKey(ABOUT_MISSION),
        getValueByKey(ABOUT_VIDEO)
      ]);

    admissionParas = JSON.parse(admissionParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
    factsData = JSON.parse(factsResult.value);
    historyData = JSON.parse(historyResult.value);
    missionData = JSON.parse(missionResult.value);
    aboutVideoData = JSON.parse(aboutVideoResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  try {
    let res = await getGallery("about");
    aboutGallery = res.data;
    console.log('khalil: ', res.data);
  } catch (error) {
    console.error("Error fetching gallery: ", error);
  }
  return {
    props: {
      bannerData,
      historyData,
      aboutGallery,
      admissionParas,
      factsData,
      missionData,
      aboutVideoData
    },
  };
}

export default About;
