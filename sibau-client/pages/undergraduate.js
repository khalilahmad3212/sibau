import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import HistoryContent from "@/components/about/history/HistoryContent";
import Apply from "@/components/academic/undergraduate/Apply";
import Footer from "@/components/home/Footer";
import SubLinks from "@/components/academic/undergraduate/SubLinks";
import Staff from "@/components/about/leadership/Staff";
import { ApplicationFormCTA } from "../components/about/layout";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";

const Undergraduate = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("UNDER_GRUDUATE_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <main>
      <NavigationBar />
      <PageBanner {...banner} />
      <HistoryContent
        heading="36+"
        tagline="undergraduate majors and programs"
      />
      <SubLinks title="Major" />
      <SubLinks title="Minors" />
      <Apply />

      {/* <ApplicationFormCTA /> */}
    </main>
  );
};

export default Undergraduate;
