import { getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import RFQsTable from "@/components/RFQs/RFQsTable";
import ApplicationFormCTA from "@/components/about/ApplicationFormCTA";
import HistoryContent from "@/components/about/history/HistoryContent";
import Staff from "@/components/about/leadership/Staff";
import NavigationBar from "@/components/home/NavigationBar";
import JobData from "@/components/jobs/JobData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
const Jobs = () => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("RFQS_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <main>
        <NavigationBar />
        <PageBanner {...banner} />
      </main>
      <section className="st-1">
        <h1>RFQs</h1>
        <RFQsTable />
      </section>
    </>
  );
};

export default Jobs;
