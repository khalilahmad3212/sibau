import PageBanner from "@/components/PageBanner";

import Staff from "@/components/about/leadership/Staff";
import {
  getCampusData,
  getDepartmentById,
  getEmployeesByCampus,
  getEmployeesByDepartment,
  getPhds,
  getValueByKey,
} from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import { useEffect } from "react";
import Aos from "aos";
import Admission from "@/components/home/Admission";
import { SERVER } from "@/utils/constants";
import Vission from "@/components/about/missionVission/Vission";

const Leadership = ({
  bannerData,
  facultyList,
  departmentData,
}) => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <PageBanner {...bannerData} />

      <div className="h-10">
      </div>
      {/* History */}
      <section className="st-1">
        <div className="container sm:px-0   md:px-48 lg:px-52 py-10 lg:py-0 md:py-0">
          <div className="flex flex-wrap">
            <div
              className="w-full md:w-4/12"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              <div className="heading-container">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black">
                  History
                </h2>
              </div>
            </div>
            <div
              className="w-full md:w-8/12"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="1500"
            >
              <div className="about-content pr-8">
                <p className="text-lg text-black">
                  {departmentData?.History}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Admission data={{
        imageUrl: `${SERVER}/campus-images/${departmentData?.MissionImage}`,
        heading: "Mission",
        para: departmentData?.Mission,
        link: "/mission",
        linkText: "Read More"
      }} />

      <Vission
        data={{
          imageUrl: `${SERVER}/campus-images/${departmentData?.VisionImage}`,
          title: "Vission",
          description: departmentData?.Vision,
        }} />

      <div className="px-4 md:px-24">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* show only max 8 pics */}
          {
            departmentData?.Gallery.split("###").slice(0, 8).map((image, index) => (
              <div key={index} className="w-full h-96">
                <img
                  src={`${SERVER}/campus-images/${image}`}
                  alt="gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))
          }
        </div>
      </div>

      <Staff
        title="Campus Staff"
        employees={facultyList}
      />

    </>
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
      let bannerResult = await getValueByKey("LEADERSHIP_BANNER");
      bannerData = JSON.parse(bannerResult.value);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    try {
      let facultyResult;
      let departmentResult;

      facultyResult = await getEmployeesByCampus(departmentId);
      departmentResult = await getCampusData(departmentId);

      // TODO: Does we need this section?
      /*
      - image is need to change
      - other stuff is changing on the basis of query
      */
      departmentData = departmentResult;
      console.log('campusData: ', departmentData);
      facultyList = facultyResult;
      bannerData.title = faculty;
      // bannerData.description = departmentData?.Mission || bannerData.description;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return {
    props: {
      bannerData,
      facultyData,
      facultyList,
      departmentData,
    },
  };
}
