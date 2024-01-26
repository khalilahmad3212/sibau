import FounderData from "@/components/Founder/FounderData";
import PageBanner from "@/components/PageBanner";
import HeaderFooter from "@/components/global/HeaderFooter";
import PersonData from "@/components/vc/PersonData";

const Registar = ({ bannerData, description }) => {
  return (
    <>
      <HeaderFooter>
        <PageBanner {...bannerData} />
        <PersonData description={description} />
      </HeaderFooter>
    </>
  );
};
export async function getStaticProps() {
  const description = `<p>
  Late Nisar Ahmed Siddiqui, the visionary founder of Sukkur IBA
  (Institute of Business Administration), was a remarkable individual
  whose unwavering determination and passion for education brought about
  a transformative impact on the educational landscape of Sukkur,
  Pakistan.
</p>
<p>
  As a true visionary, Nisar Ahmed Siddiqui recognized the immense
  potential within the youth of Sukkur and envisioned a world-class
  institution that would nurture their talents, shape their character,
  and equip them with the skills needed to thrive in a rapidly evolving
  global economy. His relentless pursuit of excellence led to the
  establishment of Sukkur IBA, a pioneering educational institution that
  continues to empower generations of students to this day.
</p>
<p>
Nisar Ahmed Siddiqui's commitment to providing quality education to the underprivileged segments of society was truly exemplary. He firmly believed that education has the power to break barriers, uplift communities, and create a more inclusive society. With this belief at the core, he worked tirelessly to ensure that Sukkur IBA provided equal opportunities for students from all backgrounds, enabling them to realize their full potential and achieve their dreams.
</p>
  <p>
  Under his visionary leadership, Sukkur IBA flourished into a renowned center of excellence, known for its rigorous academic programs, state-of-the-art facilities, and industry-relevant curriculum. Nisar Ahmed Siddiqui's emphasis on innovation and entrepreneurial mindset fostered an environment that encouraged students to think critically, take risks, and become agents of change in their respective fields.
  </p>
  <p>
  Beyond his contributions to education, Nisar Ahmed Siddiqui was a philanthropist at heart. He actively supported various community development initiatives, empowering individuals and communities through social welfare programs, scholarships, and initiatives aimed at uplifting the marginalized sections of society. His commitment to social responsibility continues to inspire the Sukkur IBA community to serve as catalysts for positive change.
  </p>
  <p>
  Late Nisar Ahmed Siddiqui's indelible legacy is etched not only in the foundations of Sukkur IBA but also in the hearts and minds of the countless students, faculty members, and alumni whose lives have been transformed by his vision and leadership. His profound impact on the educational landscape serves as a testament to his unwavering dedication to nurturing talent, fostering innovation, and shaping the leaders of tomorrow.

  </p>
<p>
Today, as Sukkur IBA continues to build upon his legacy, the spirit and vision of Late Nisar Ahmed Siddiqui continue to guide and inspire the institution to reach greater heights of excellence, creating a lasting impact on the educational landscape of Pakistan.
</p>
`;

  let bannerData = {
    title: "Registrar",
    image: "./about-banner.webp",
    description: "  Sukkur IBA University ",
  };

  return {
    props: {
      description,
      bannerData,
    },
  };
}

export default Registar;
