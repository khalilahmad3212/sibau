import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";

import Apply from "@/components/home/Apply";
import InfoPrograms from "@/components/academic/undergraduate/InfoAndPrograms";
import HistoryContent from "@/components/about/history/HistoryContent";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import DegreeReqsData from "@/components/degreeReq/DegreeRequirements";

const DegreeRequirements = ({ bannerData }) => {
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />

        <div className="pb-20">
          <DegreeReqsData />
          <Apply />
        </div>
      </HeaderFooter>
    </main>
  );
};

export default DegreeRequirements;

export async function getServerSideProps(context) {
  let bannerData = {};

  try {
    // const [bannerResult] = await Promise.all([
    //   getValueByKey("UNDER_GRUDUATE_BANNER"),
    // ]);
    bannerData.title = "Degree Requirements";
    bannerData.image = "./about-banner.webp";

    // bannerData = JSON.parse(bannerResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      // programName,
    },
  };
}
