import { getPublications, getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import HeaderFooter from "@/components/global/HeaderFooter";
import Publications from "@/components/publication/Publications";
import { ABOUT_BANNER, HISTORY_DETAILS } from "@/utils/constants";

const Publication = ({ bannerData, publicationData }) => {
  return (
    <>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <Publications publicationData={publicationData} />
      </HeaderFooter>
    </>
  );
};
export async function getServerSideProps() {
  // let bannerData = {};
  let bannerData = {
    title: "Publication",
    image: "./about-banner.webp",
    description: " of Sukkur IBA University ",
  };

  let publicationData = {};

  try {
    const [bannerResult, publicationResult] = await Promise.all([
      getValueByKey(ABOUT_BANNER),
      getPublications(),
    ]);
    // bannerData = JSON.parse(bannerResult.value);
    publicationResult.forEach((item) => {
      if (publicationData[item.Type]) {
        publicationData[item.Type].push(item);
      } else publicationData[item.Type] = [{ ...item }];
    });
    // console.log(publicationData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return {
    props: {
      bannerData,
      publicationData,
    },
  };
}

export default Publication;
