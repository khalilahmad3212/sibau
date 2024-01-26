import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import { ABOUT_BANNER, HISTORY_DETAILS } from ".././utils/constants";
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

const About = ({ bannerData, admissionParas }) => {
  const historyData = {
    banner: {
      title: "About",
      image: "./about-banner.webp",
      description: "Sukkur IBA University is....",
    },
    descHeadings: "",
    description: "",
    history: [
      {
        year: 2011,
        shortDesc:
          "Started offering undergraduate programs in business administration.",
        image: "",
        alt: "",
      },
      {
        year: 2012,
        shortDesc:
          "Introduced new courses in computer science and information technology.",
        image: "",
        alt: "",
      },
      {
        year: 2013,
        shortDesc:
          "Established research centers in collaboration with international universities.",
        image: "",
        alt: "",
      },
    ],
  };

  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <AboutContent about={admissionParas} />
      <Gallery />
      <InformativeNumber />
      <History
        title="History"
        description={
          "The history of IBA is rooted in excellence and innovation, dating back to its establishment in 1955. Over the years, IBA has evolved into a leading business school, providing quality education and producing visionary leaders. Its commitment to academic excellence, industry-focused curriculum, and strong alumni network have made it a symbol of educational brilliance in Pakistan."
        }
        image={"./about-history.webp"}
        alt={"History Picture"}
      />
      {/* <MissionValue /> */}
      <DesignedPictureTextContainer link="/mission" />
      <VideoSection />
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

  try {
    const [bannerResult, historyResult, admissionParasResult] =
      await Promise.all([
        getValueByKey(ABOUT_BANNER),
        getValueByKey(HISTORY_DETAILS),
        getValueByKey("admission-overview-paras"),
      ]);
    admissionParas = JSON.parse(admissionParasResult.value);
    bannerData = JSON.parse(bannerResult.value);
    historyData = JSON.parse(historyResult.value);
    // console.log(historyData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      historyData,
      admissionParas,
    },
  };
}

export default About;
