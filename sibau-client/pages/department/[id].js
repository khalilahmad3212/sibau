import { useRouter } from "next/router";

import NavigationBar from "@/components/NavigationBar";
import PageBanner from "@/components/PageBanner";
import ApplicationFormCTA from "@/components/about/ApplicationFormCTA";
import HistoryContent from "@/components/about/history/HistoryContent";
import Staff from "@/components/about/leadership/Staff";
import Link from "next/link";

const Department = () => {
  const router = useRouter();
  const { facultyId } = router.query;
  const faculties = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more faculties
  ];

  return (
    <div>
      <main>
        <NavigationBar />
        <PageBanner title="Graduate" />
        <HistoryContent
          heading="28"
          tagline="nationally ranked graduate programs"
        />
        <Staff title="Faculty Directory" />
        {/* <ApplicationFormCTA /> */}
      </main>
      <div>
        <h1>Department Details</h1>
        <p>Department ID: {facultyId}</p>
      </div>
    </div>
  );
};

export default Department;
