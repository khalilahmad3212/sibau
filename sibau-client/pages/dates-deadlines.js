import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";

import DateTable from "@/components/admission/deadlines/Table";

import { ApplicationFormCTA } from "../components/about/layout";
import DateTables from "@/components/deadline/DateTables";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

// DATE_DEADLINES_BANNER
const DateDeadlines = ({
  bannerData,
  deadlineDates
}) => {
  const missionData = {
    Description: "Desc of mission",
  };
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <DateTables data={deadlineDates} />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default DateDeadlines;

export async function getStaticProps(context) {
  let bannerData = {};
  let deadlineDates = {};
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
  try {
    const bannerResult = await getValueByKey("DATES_DEADLINES_BANNER");
    const deadlineDatesResult = await getValueByKey("DEADLINE_DATES");

    bannerData = JSON.parse(bannerResult.value);
    deadlineDates = JSON.parse(deadlineDatesResult.value);
  } catch (error) {

  }
  return {
    props: {
      bannerData,
      deadlineDates,
      footerData
    }, // will be passed to the page component as props
  };
}
