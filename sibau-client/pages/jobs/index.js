import { getCareers, getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import ApplicationFormCTA from "@/components/about/ApplicationFormCTA";
import HistoryContent from "@/components/about/history/HistoryContent";
import Staff from "@/components/about/leadership/Staff";
import HeaderFooter from "@/components/global/HeaderFooter";
import NavigationBar from "@/components/home/NavigationBar";
import JobData from "@/components/jobs/JobData";
import JobTable from "@/components/jobs/JobTable";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Jobs = ({ banner, jobData }) => {
  return (
    <>
      <HeaderFooter>
        <PageBanner {...banner} />

        <section className="st-1">
          <div className="container min-h-[450px] sm:px-0 md:px-48 lg:px-52">
            <JobTable jobData={jobData} />
          </div>
        </section>
      </HeaderFooter>
    </>
  );
};

export async function getServerSideProps() {
  try {
    const jobData = await getCareers();
    const bannerResult = await getValueByKey("CAREER_BANNER");
    const banner = JSON.parse(bannerResult.value);
    return {
      props: {
        banner,
        jobData,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        banner: {},
        jobData: [],
      },
    };
  }
}

export default Jobs;
