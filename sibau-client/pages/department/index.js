import NavigationBar from "@/components/NavigationBar";
import PageBanner from "@/components/PageBanner";
import ApplicationFormCTA from "@/components/about/ApplicationFormCTA";
import HistoryContent from "@/components/about/history/HistoryContent";
import Staff from "@/components/about/leadership/Staff";
import Link from "next/link";

const Departments = () => {
  // Assume you have an array of faculty data
  const faculties = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // Add more faculties
  ];

  return (
    <>
      <main>
        <NavigationBar />
        <PageBanner title="Graduate" />
        <HistoryContent
          heading="28"
          tagline="nationally ranked graduate programs"
        />
        <Staff title="Faculty Directory" />
        <ApplicationFormCTA />
      </main>
      <div>
        <h1>Departments</h1>
        <ul>
          {faculties.map((faculty, index) => (
            <li key={faculty.id}>
              <Link href={`/department/${faculty.id}`}>{faculty.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Departments;
