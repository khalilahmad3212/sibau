import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import Scholarship from "@/components/home/Scholarship";

import Fee from "@/components/admission/tution/Fee";

//
import { useState, useEffect } from "react";
import { getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const TutionFees = ({ fee }) => {
  const [banner, setBanner] = useState({});
  useEffect(() => {
    async function fetchData() {
      try {
        const bannerResult = await getValueByKey("TUTION_FEES_BANNER");
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
        <Fee fee={fee} />
        <Scholarship />
      </HeaderFooter>
      <NavigationBar />
    </main>
  );
};

export default TutionFees;

export async function getStaticProps(context) {
  let bannerData = {};
  let fee = {};
  try {
    const bannerResult = await getValueByKey("TUTION_FEES_BANNER");
    const graduate = await getValueByKey("TUITION_GRADUATE_FEE");
    const pGrad = await getValueByKey("TUITION_POSTGRADUATE_FEE");
    const uGrad = await getValueByKey("TUITION_UNDERGRADUATE_FEE");

    bannerData = JSON.parse(bannerResult.value);
    fee.graduate = JSON.parse(graduate.value);
    fee.uGrad = JSON.parse(uGrad.value);
    fee.pGrad = JSON.parse(pGrad.value);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      bannerData,
      fee
    }, // will be passed to the page component as props
  };
}
