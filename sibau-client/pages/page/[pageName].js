import PageBanner from "@/components/PageBanner";
import HeaderFooter from "@/components/global/HeaderFooter";
import axios from "axios";
import { useRouter } from "next/router";
import { use, useEffect } from "react";

const CustomPage = ({ pageData }) => {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    console.log("Page data:", pageData);
  }, []);

  return (
    <HeaderFooter>
      <PageBanner
        title={pageData?.name}
        description={pageData?.description}
        link={`http://localhost:5001/dynamic-page-images/${pageData.image}`}
      />
      <div className=" mt-20 min-w-full prose">
        <div>
          <div dangerouslySetInnerHTML={{ __html: pageData.content }} />
        </div>
      </div>
    </HeaderFooter>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;

  const fetchPageData = async (pageName) => {
    try {
      const res = await axios.get(`http://localhost:5001/dynamic-page/get-page-data/${pageName}`);
      console.log("Data fetched successfully:", res.data);
      return res.data;
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const pageData = await fetchPageData(query.pageName);

  const serverProps = { pageData };

  return {
    props: {
      pageData
    },
  };
}

export default CustomPage;
