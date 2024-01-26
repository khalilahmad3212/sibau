import { getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import TenderData from "@/components/Tender/TenderData";
import TendersTable from "@/components/Tender/TendersTable";
import ApplicationFormCTA from "@/components/about/ApplicationFormCTA";
import HistoryContent from "@/components/about/history/HistoryContent";
import Staff from "@/components/about/leadership/Staff";
import HeaderFooter from "@/components/global/HeaderFooter";
import NavigationBar from "@/components/home/NavigationBar";
import Link from "next/link";
import { useEffect, useState } from "react";

const Tenders = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("TENDER_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  // Assume you have an array of faculty data
  const faculties = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more faculties
  ];
  return (
    <>
      <HeaderFooter>
        <PageBanner {...banner} />

        <div className="container min-h-[450px] sm:px-0 md:px-48 lg:px-52">
          <section className="st-1 ">
            <TendersTable />
            {/* <TenderData /> */}
          </section>
        </div>
      </HeaderFooter>
    </>
  );
};

export default Tenders;
