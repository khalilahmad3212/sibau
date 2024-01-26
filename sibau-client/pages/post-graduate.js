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

const Graduate = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("POST_GRADUATE_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <HeaderFooter>
        <PageBanner {...banner} />

        <HistoryContent
          heading="28"
          tagline="nationally ranked graduate programs"
        />
        <InfoPrograms key={"academics-u-graduate"} />

        <div className="pb-20">
          <Apply />
        </div>
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default Graduate;
