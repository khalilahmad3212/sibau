import PageBanner from "@/components/PageBanner";
import NavigationBar from "@/components/home/NavigationBar";
import NewsItem from "@/components/news/NewsItem";
import NewsItemV from "@/components/news/NewsItemV";

import { ApplicationFormCTA, AboutContent } from "../components/about/layout";
import HeaderFooter from "@/components/global/HeaderFooter";
import { getNews } from "@/apis";

const faculty = ({ news }) => {
  return (
    <main style={{ overflowX: "hidden" }}>
      <HeaderFooter>
        <PageBanner title="News" />
        <AboutContent />
        <NewsItem news={news} />
        {/* <NewsItemV /> */}
        {/* <ApplicationFormCTA /> */}
      </HeaderFooter>
    </main>
  );
};
export async function getServerSideProps() {
  let bannerData = {};
  const news = await getNews();
  return {
    props: {
      news,
    },
  };
}

export default faculty;
