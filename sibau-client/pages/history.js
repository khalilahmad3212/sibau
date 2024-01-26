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

import { ApplicationFormCTA } from "../components/about/layout";
import HistoryContent from "@/components/about/history/HistoryContent";
import Leading from "@/components/about/history/Leading";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const History = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("HISTORY_BANNER");
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
        <HistoryContent />
        <Leading />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default History;

export async function getStaticProps(context) {
  // Footer Section
  const footerData = {
    // FooterColumn One Data
    // MAIN NAVIGATION
    MainNavigationTitle: "MAIN NAVIGATION",
    MainNavigationLinks: [
      {
        Title: "Home",
        Link: "/",
      },
      {
        Title: "About",
        Link: "/",
      },
      {
        Title: "Academics",
        Link: "/",
      },
      {
        Title: "Admission",
        Link: "/",
      },
      {
        Title: "Student Life",
        Link: "/",
      },
    ],

    // Information For
    InformationForTitle: "Information For",
    InformationForLinks: [
      {
        Title: "Home",
        Link: "/",
      },
      {
        Title: "About",
        Link: "/",
      },
      {
        Title: "Academics",
        Link: "/",
      },
      {
        Title: "Admission",
        Link: "/",
      },
      {
        Title: "Student Life",
        Link: "/",
      },
    ],

    // Quick Links
    QuickLinksTitle: "Quick Links",
    QuickLinkLinks: [
      {
        Title: "Home",
        Link: "/",
      },
      {
        Title: "About",
        Link: "/",
      },
      {
        Title: "Academics",
        Link: "/",
      },
      {
        Title: "Admission",
        Link: "/",
      },
      {
        Title: "Student Life",
        Link: "/",
      },
    ],

    // FooterColumn2 Data
    FooterLogo:
      "https://estudiar.vamtam.com/wp-content/uploads/2020/11/logo-footer-home1.svg",
    ParagraphOne: "201 S. Grand Ave., 1st Floor",
    ParagraphTwo: "New York City, NY 28020",
    CallToText: "+1 (772) 290-2999",
    CallToLink: "callto: +1 (772) 290-2999",
  };
  return {
    props: { footerData }, // will be passed to the page component as props
  };
}
