import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import NewsDetailSection from "@/components/news/NewsDetailSection";

import Fee from "@/components/admission/tution/Fee";

import { ApplicationFormCTA } from "../components/about/layout";

const NewsDetail = ({ footerData }) => {
    const missionData = {
      Description: "Desc of mission",
    };
  
    const globalObject = {
      // Scholarship
      ScholarshipHeading: "Scholarship Programs",
      ScholarshipDescription:
        "At Estuidar University, we prepare you to launch your career by providing a supportive, creative, and professional environment from which to learn practical skills and build a network of industry contacts.",
      FinancialAidTitle: "Financial Aid",
      FinancialAidLink: "/",
      ScholarSpacing: "scholar_space1"
    }
    return (
      <main>
        <NavigationBar />
        <PageBanner title="Tuition Fees" />
        <NewsDetailSection/>
        <ApplicationFormCTA />
        <Footer data={footerData} />
      </main>
    );
  };

export default NewsDetail


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