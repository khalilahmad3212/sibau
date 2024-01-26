import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";

import { ApplicationFormCTA } from "../../components/about/layout";
import {
  getEmployeeByEmployeeId,
  getValueByKey,
  infoByEmployeeId,
} from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import FacultyDetails from "@/components/faculty/FacultyInfo";

const FacultyInfo = ({ bannerData, facultyData, basicInfo }) => {
  const missionData = {
    Description: "Desc of mission",
  };
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <FacultyDetails facultyData={facultyData} basicInfo={basicInfo} />
        <ApplicationFormCTA />
      </HeaderFooter>
    </main>
  );
};

export default FacultyInfo;
export async function getServerSideProps(context) {
  let { faculty } = context.query;
  let bannerData = {};
  let basicInfo = null;
  let facultyData = null;

  try {
    const [bannerResult, employeeInfo, facultyBasicInfo] = await Promise.all([
      getValueByKey("LEADERSHIP_BANNER"),
      infoByEmployeeId(faculty),
      getEmployeeByEmployeeId(faculty),
    ]);
    basicInfo = facultyBasicInfo;
    facultyData = employeeInfo;
    // bannerData = JSON.parse(bannerResult.value);

    bannerData.title = faculty;
    bannerData.title = "Faculty Profile";
    bannerData.image = "./about-banner.webp";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      facultyData,
      bannerData,
      basicInfo,
    },
  };
}
