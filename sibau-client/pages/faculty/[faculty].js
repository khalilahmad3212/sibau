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
import axios from "axios";
import { SERVER } from "@/utils/constants";

const FacultyInfo = ({
  bannerData,
  facultyData
}) => {

  return (
    <>
      <PageBanner {...bannerData} />
      {facultyData && <FacultyDetails facultyData={facultyData} />}
      {!facultyData && <h1>Faculty not found</h1>}
    </>
  );
};

export default FacultyInfo;
export async function getServerSideProps(context) {
  let { faculty } = context.query;
  let bannerData = {};
  let basicInfo = null;
  let facultyData = null;

  let publications = null;
  let education = null;

  try {
    let bannerResult = await getValueByKey("LEADERSHIP_BANNER");
    let employeeResult = await getEmployeeByEmployeeId(faculty);

    bannerData = JSON.parse(bannerResult.value);
    facultyData = employeeResult;

    console.log('employeeReslt: ', employeeResult);

  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      facultyData,
      bannerData,
    },
  };
}
