import { getGallery, getValueByKey } from "@/apis";
import PageBanner from "@/components/PageBanner";
import GalleryServerComponent from "@/components/about/GalleryServerComponent";
import NavigationBar from "@/components/home/NavigationBar";

const GalleryPage = ({ bannerData, gallery }) => {
  return (
    <main>
      <NavigationBar />
      <PageBanner {...bannerData} />
      <GalleryServerComponent gallery={gallery} />
    </main>
  );
};
export default GalleryPage;
export async function getServerSideProps(context) {
  let bannerData = {};
  let gallery = {};
  const { query } = context;
  try {
    const [bannerResult, galleryResult] = await Promise.all([
      getValueByKey("GALLERY_BANNER"),
      getGallery(),
    ]);
    bannerData = JSON.parse(bannerResult.value);
    gallery = galleryResult;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  const serverProps = { message: 1 };
  return {
    props: {
      gallery,
      bannerData,
    },
  };
}
