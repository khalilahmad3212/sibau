import PageBanner from "@/components/PageBanner";
import { SSRProvider } from "@react-aria/ssr";

import Apply from "@/components/home/Apply";
import { getSchemaByDepartment, getValueByKey } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import ProgramInfoData from "@/components/ProgramInfo/ProgramInfoData";

const ProgramInfo = ({ bannerData, pageData, schema }) => {
  return (
    <SSRProvider>
      <main>
        <HeaderFooter>
          <PageBanner {...bannerData} />

          <div className="pb-20">
            <ProgramInfoData pageData={pageData} schema={schema} />
            <Apply />
          </div>
        </HeaderFooter>
      </main>
    </SSRProvider>
  );
};

export default ProgramInfo;

export async function getServerSideProps(context) {
  const { programName } = context.query;
  const programKey = `program_${programName}`;
  let bannerData = {};
  const schema = [
    {
      Semester: "Semester I",
      CreditHours: 14,
      Courses: [
        {
          Code: "CSC-101",
          CourseName:
            "Introduction to Information and Communication Technology (ICT)",
          CreditHours: "3(2 + 1)",
          PreRequisite: "-NONE",
        },
        {
          Code: "CSC-102",
          CourseName: "Programming Fundamentals",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "-NONE",
        },
        {
          Code: "ENG-101",
          CourseName: "English Composition and Comprehension",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "MTS-101",
          CourseName: "Pre - Calculus",
          CreditHours: "Non - Credit",
          PreRequisite: "-NONE",
        },
        {
          Code: "HUM-101",
          CourseName: "Islamic Studies/Ethics",
          CreditHours: "2 (2 + 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "HUM-102",
          CourseName: "Pakistan Studies",
          CreditHours: "2 (2 + 0)",
          PreRequisite: "NONE",
        },
      ],
    },
    {
      Semester: "Semester II",
      CreditHours: 16,
      Courses: [
        {
          Code: "CSC-150",
          CourseName: "Object-Oriented Programming",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "CSC-102",
        },
        {
          Code: "MTS-150",
          CourseName: "Calculus and Analytic Geometry",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "MTS-101",
        },
        {
          Code: "ENG-150",
          CourseName: "Communication and Presentation Skills",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "CSC-151",
          CourseName: "Discrete Structures",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "PHY-150",
          CourseName: "Applied Physics",
          CreditHours: "3 (2 + 1)",
          PreRequisite: "-NONE",
        },
      ],
    },
    {
      Semester: "Semester III",
      CreditHours: 17,
      Courses: [
        {
          Code: "CSC-201",
          CourseName: "Data Structures",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "CSC-102",
        },
        {
          Code: "ENG-201",
          CourseName: "Technical Writing",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "ESE-201",
          CourseName: "Digital Logic Design",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "-NONE",
        },
        {
          Code: "MTS-201",
          CourseName: "Multivariate Calculus",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "MTS-150",
        },
        {
          Code: "SWE-250",
          CourseName: "Software Engineering",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "-NONE",
        },
      ],
    },
    {
      Semester: "Semester IV",
      CreditHours: 18,
      Courses: [
        {
          Code: "CSC-252",
          CourseName: "Operating Systems",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "-NONE",
        },
        {
          Code: "CSC-250",
          CourseName: "Computer Architecture & Assembly Language",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "ESE-201",
        },
        {
          Code: "MTS-250",
          CourseName: "Linear Algebra",
          CreditHours: "3 (3+ 0)",
          PreRequisite: "-NONE",
        },
        {
          Code: "CSC-251",
          CourseName: "Database Systems",
          CreditHours: "4 (3 + 1)",
          PreRequisite: "-NONE",
        },
        {
          Code: "xxx-xxx",
          CourseName: "Uni – Elective - I",
          CreditHours: "3 (3 + 0)",
          PreRequisite: "--",
        },
      ],
    },
  ];

  const pageData = {
    duration: "2",
    batches_month: "August",
    careerOptions:
      "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
    plo: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
    overview:
      "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
  };

  let programInfoResult = {};
  try {
    const schemaResult = await getSchemaByDepartment(programName);
    const programInfo = await getValueByKey(programKey);
    if (programInfo) {
      programInfoResult = JSON.parse(programInfo.value);
    }
    console.log(programInfoResult);

    bannerData.title = programName.toUpperCase() || "Program-Name";
    bannerData.image = "./about-banner.webp";

    return {
      props: {
        bannerData,
        pageData: programInfoResult,
        schema: schemaResult?.length > 0 ? schemaResult : schema,
        // programName,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        bannerData,
        pageData: pageData,
        schema: schema,
        // programName,
      },
    };
  }
}
