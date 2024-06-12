import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import HistoryContent from "@/components/about/history/HistoryContent";
import Footer from "@/components/home/Footer";
import SubLinks from "@/components/academic/undergraduate/SubLinks";
import Staff from "@/components/about/leadership/Staff";
import { ApplicationFormCTA } from "../components/about/layout";
import InfoPrograms from "@/components/academic/undergraduate/InfoAndPrograms";
import Apply from "@/components/home/Apply";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const Graduate = ({
  bannerData,
  historyData
}) => {

  return (
    <>
      <PageBanner {...bannerData} />
      <HistoryContent
        heading={historyData?.heading}
        tagline={historyData?.tagLine}
        content={historyData?.content}
      />
      <InfoPrograms key={"academics-graduate"} />

      <div className="pb-20">
        <Apply />
      </div>
    </>
  );
};

export default Graduate;


export async function getServerSideProps() {
  let bannerData = {};
  let historyData = {};
  try {
    const bannerResult = await getValueByKey("GRADUATE_BANNER");
    const historyResult = await getValueByKey("GRADUATE_HISTORY");

    bannerData = JSON.parse(bannerResult.value);
    historyData = JSON.parse(historyResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      historyData,
    },
  };
}