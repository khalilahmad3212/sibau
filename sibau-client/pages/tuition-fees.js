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
  // Footer Section
  let fee = {};
  const graduate = await getValueByKey("fees-graduate");
  const pGrad = await getValueByKey("fees-p-graduate");
  const uGrad = await getValueByKey("fees-u-graduate");
  fee.graduate = JSON.parse(graduate.value);
  fee.uGrad = JSON.parse(uGrad.value);
  fee.pGrad = JSON.parse(pGrad.value);

  return {
    props: { fee }, // will be passed to the page component as props
  };
}
