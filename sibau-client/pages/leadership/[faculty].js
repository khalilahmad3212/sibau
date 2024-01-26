import PageBanner from "@/components/PageBanner";

import Staff from "@/components/about/leadership/Staff";
import {
  getDepartmentById,
  getEmployeesByDepartment,
  getPhds,
  getValueByKey,
} from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";

const Leadership = ({ bannerData, facultyList }) => {
  return (
    <main>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <Staff title="Senior Staff" employees={facultyList} />
      </HeaderFooter>
    </main>
  );
};

export default Leadership;
export async function getServerSideProps(context) {
  let { faculty } = context.query;
  let bannerData = {};
  let facultyList = [];
  let departmentData = {};
  const facultyData = [];
  // call the api
  const departmentId = faculty.split("-")[0];
  if (departmentId) {
    faculty = faculty
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .splice(1, 3)
      .join(" ")
      .toUpperCase();

    try {
      let facultyResult;
      let departmentResult;

      if (departmentId == 20) {
        facultyResult = await getPhds();
      } else {
        facultyResult = await getEmployeesByDepartment(departmentId);
        departmentResult = await getDepartmentById(departmentId);
      }

      const [bannerResult] = await Promise.all([
        getValueByKey("LEADERSHIP_BANNER"),
      ]);
      bannerData = JSON.parse(bannerResult.value);
      departmentData = departmentResult;
      facultyList = facultyResult;
      bannerData.title = faculty;
      bannerData.description = departmentData?.Mission || "";
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return {
    props: {
      bannerData,
      facultyData,
      facultyList,
    },
  };
}
