import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";

import Apply from "@/components/home/Apply";
import InfoPrograms from "@/components/academic/undergraduate/InfoAndPrograms";
import HistoryContent from "@/components/about/history/HistoryContent";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const UnderGraduate = ({
  bannerData,
  historyData
}) => {
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <HistoryContent
          heading={historyData?.heading}
          tagline={historyData?.tagLine}
          content={historyData?.content}
        />
        <InfoPrograms key={"academics-p-graduate"} />
        <div className="pb-20">
          <Apply />
        </div>
      </HeaderFooter>
    </main>
  );
};

export default UnderGraduate;

export async function getServerSideProps() {
  let bannerData = {};
  let historyData = {};
  try {
    const [
      bannerResult,
      historyResult
    ] = await Promise.all([
      getValueByKey("UNDER_GRADUATE_BANNER"),
      getValueByKey("UNDER_GRADUATE_HISTORY")
    ]);
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
