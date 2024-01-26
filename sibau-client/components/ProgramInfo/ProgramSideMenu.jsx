import { BsArrowRight } from "react-icons/bs";

const ProgramSideMenu = () => {
  const menu = [
    {
      name: "Degree Requirements",
      url: "/degreeReq",
    },
    // {
    //   name: "Faculty",
    //   url: "/faculty",
    // },
    {
      name: "How to Apply",
      url: "/how-to-apply",
    },
    {
      name: "Request Information",
      url: "/request-information",
    },
    {
      name: "Financing your Education",
      url: "/financial-aid",
    },
  ];

  return (
    <div className="">
      <ul className="space-y-4 bg-[#FAFAFA] p-4">
        {menu.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[#292929] text-lg font-semibold  hover:text-blue-800 transition-all my-5"
            >
              {item.name}
            </a>

            {menu.length - 1 > index && <hr className="my-3" />}
          </li>
        ))}
      </ul>
      <div className="flex">
        <div className="w-100 bg-[#292929] text-white font-medium  my-1 p-4 px-5 flex items-center  hover:bg-[#50502d] transition-all">
          <span className="pr-2">
            <BsArrowRight className="font-medium text-[18px]" />
          </span>
          <span className="text-base text-[18px]">January, August</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramSideMenu;
