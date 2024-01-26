import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";

import Apply from "@/components/home/Apply";
import InfoPrograms from "@/components/academic/undergraduate/InfoAndPrograms";
import HistoryContent from "@/components/about/history/HistoryContent";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const UnderGraduate = ({ bannerData }) => {
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <HistoryContent
          heading="28"
          tagline="nationally ranked graduate programs"
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

  try {
    const [bannerResult] = await Promise.all([
      getValueByKey("UNDER_GRADUATE_BANNER"),
    ]);
    bannerData = JSON.parse(bannerResult.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
    },
  };
}
