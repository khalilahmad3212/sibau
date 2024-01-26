import PageBanner from "@/components/PageBanner";
import { SSRProvider } from "@react-aria/ssr";

import Apply from "@/components/home/Apply";
import { getSchemaByDepartment } from "@/apis";
import HeaderFooter from "@/components/global/HeaderFooter";
import ProgramInfoData from "@/components/ProgramInfo/ProgramInfoData";

const ProgramInfo = ({ bannerData, pageData, schema }) => {
  return (
    <SSRProvider>
      <main>
        <HeaderFooter>
          <PageBanner {...bannerData} />

          <div className="pb-20">
            {/* <ProgramInfoData pageData={pageData} schema={schema} /> */}
            <Apply />
          </div>
        </HeaderFooter>
      </main>
    </SSRProvider>
  );
};

export default ProgramInfo;

export async function getServerSideProps(context) {
  const { program } = context.query;
  let bannerData = {};

  try {
    // const schemaResult = await getSchemaByDepartment(programName);

    // console.log(schemaResult);

    bannerData.title = program.toUpperCase() || "Program-Name";
    bannerData.image = "./about-banner.webp";

    return {
      props: {
        bannerData,
        // pageData: pageData[program] || pageData["mba"],
        // schema: schemaResult?.length > 0 ? schemaResult : schema,
        // programName,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        bannerData,
        pageData: pageData[program] || pageData["mba"],
        schema: schema,
        // programName,
      },
    };
  }
}
