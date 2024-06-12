import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import Tuition from "@/components/home/Tution";
import Facts from "@/components/admission/Facts";
import AdmissionApply from "@/components/admission/AdmissionApply";
import FinancialAid from "@/components/admission/FinancialAid";
import { ApplicationFormCTA, AboutContent } from "../components/about/layout";
import HeaderFooter from "@/components/global/HeaderFooter";
import axios from "axios";
import { SERVER } from "@/utils/constants";

const Admission = ({
  bannerData,
  admissionParas,
  resourcesData,
}) => {


  const getLink = (resource) => {
    if (resource.Link === 'FILE') {
      return `${SERVER}/resource-images/${resource.LinkLocation}`
    } else {
      return resource.LinkLocation;
    }
  }
  return (
    <main style={{ overflowX: "hidden" }}>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <AboutContent about={admissionParas} />
        <div className="container sm:px-0 md:px-24 my-10 lg:py-0 md:py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {resourcesData.map((resource) => (
              <div
                className=" bg-gray-400 shadow-md cursor-pointer rounded-lg overflow-hidden"
                onClick={() => window.open(getLink(resource), "_blank")}
              >
                <div className="p-4 text-center text-white font-bold text-xl tracking-widest">
                  {resource.Name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </HeaderFooter>
    </main>
  );
};

export async function getServerSideProps() {
  let bannerData = {};
  let admissionParas = {};
  let resourcesData = {};

  try {
    const bannerResult = await getValueByKey("ADMISSION_BANNER");
    const overviewParas = await getValueByKey("admission-overview-paras");

    bannerData = JSON.parse(bannerResult.value);
    bannerData.title = "Resources";
    admissionParas = JSON.parse(overviewParas.value);

    const getResources = async () => {
      const resourcesResult = await axios.get(`${SERVER}/resource`);
      return resourcesResult.data;
    }
    resourcesData = await getResources();
    console.log(resourcesData);


  } catch (error) {
    console.error("Error fetching banner data:", error);
  }

  return {
    props: {
      admissionParas,
      bannerData,
      resourcesData
    },
  };
}

export default Admission;
