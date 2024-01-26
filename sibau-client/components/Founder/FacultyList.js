import {
  convertKebabCaseToSentenceCase,
  convertStringToLowerCase,
} from "@/services";
import Link from "next/link";

const FacultyList = () => {
  const data = [
    {
      Id: 20,
      Name: "Phd",
    },
    {
      Id: 1,
      Name: "Computer Science",
    },
    {
      Id: 2,
      Name: "Electrical Engineering",
    },
    {
      Id: 3,
      Name: "Business Administration",
    },
    {
      Id: 4,
      Name: "Education",
    },
    {
      Id: 5,
      Name: "Computer System Engineering",
    },
    {
      Id: 6,
      Name: "Mathematics",
    },
    {
      Id: 7,
      Name: "Physical Education",
    },
    {
      Id: 8,
      Name: "Media Communication",
    },
    {
      Id: 9,
      Name: "Supporting Faculty",
    },
  ];

  return (
    <>
      <div className="py-10">
        <div className="text-2xl pb-4">Faculty List</div>
        {data.map((link, index) => (
          <div key={index} className="block  p-2  text-blue-700">
            <Link
              href={`/leadership/${link.Id}-${convertStringToLowerCase(
                link.Name
              )}`}
            >
              <div className="hover:text-blue-500">{link.Name}</div>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
};
export default FacultyList;
