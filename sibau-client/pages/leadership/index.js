import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Footer from "@/components/home/Footer";
import About from "@/components/home/About";
import Vission from "@/components/about/missionVission/Vission";
import NumberInfo from "@/components/about/missionVission/NumberInfo";
import Steps from "@/components/about/missionVission/Steps";

import { ApplicationFormCTA } from "../../components/about/layout";
import President from "@/components/about/leadership/President";
import Staff from "@/components/about/leadership/Staff";
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";

const Leadership = ({ footerData }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("LEADERSHIP_BANNER");
        setBanner(JSON.parse(bannerResult.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const missionData = {
    Description: "Desc of mission",
  };

  const employees = [
    {
      EmployeeId: 1,
      FirstName: "John",
      Image: "staff-1.jpg",
      LastName: "Doe",
      Designation: "Professor",
      Biography: "Aenean turpis consectetur at. Donec tincidunt sem non eros dignissim, a facilisis arcu interdum. Quisque nec mauris non elit tincidunt pharetra. Nunc posuere elit at commodo facilisis.",
      OfficeExtension: "071-5644159",
      Email: "john@gmail.com"
    },
    {
      EmployeeId: 2,
      FirstName: "John",
      LastName: "Doe",
      Image: "staff-2.webp",
      Designation: "Professor",
      Biography: "Aenean turpis consectetur at. Donec tincidunt sem non eros dignissim, a facilisis arcu interdum. Quisque nec mauris non elit tincidunt pharetra. Nunc posuere elit at commodo facilisis.",
      OfficeExtension: "071-5644159",
      Email: "john2@gmail.com"
    },
    {
      EmployeeId: 3,
      FirstName: "John",
      LastName: "Doe",
      Image: "staff-3.jpg",
      Designation: "Professor",
      Biography: "Aenean turpis consectetur at. Donec tincidunt sem non eros dignissim, a facilisis arcu interdum. Quisque nec mauris non elit tincidunt pharetra. Nunc posuere elit at commodo facilisis.",
      OfficeExtension: "071-5644159",
      Email: "john3@gmail.com"
    }
  ];
  return (
    <main>
      <NavigationBar />
      <PageBanner {...banner} />
      <President />
      <Staff
        title="Senior Staff"
        employees={employees}
      />
      <ApplicationFormCTA />
    </main>
  );
};

export default Leadership;
