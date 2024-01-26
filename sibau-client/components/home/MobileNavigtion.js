import Link from "next/link";
import React, { useState } from "react";

export function capitalizeWords(inputString) {
  // Split the input string into words
  const words = inputString.split(" ");

  // Capitalize the first letter of each word and make the rest lowercase
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the words back together with spaces
  const capitalizedString = capitalizedWords.join(" ");

  return capitalizedString;
}
const CustomDropDown = ({
  menuName = "Menu",
  subItems = [],
  isLinkActive,
  isSubLinkActive,
}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        id="dropdownNavbarLink"
        data-dropdown-toggle="dropdownNavbar"
        className={`flex items-center font-[500] w-full    text-lg pl-10  h-14 text-[#292929]   focus:ring-transparent focus:outline-none ${
          isLinkActive(`/${menuName}`)
            ? "text-black bg-[#ffc53a]"
            : isSubLinkActive(menuName)
            ? "text-black bg-[#ffc53a]"
            : "text-[#292929] bg-white"
        }`}
        onClick={toggleDropdown}
      >
        {capitalizeWords(menuName)}

        <svg
          className={`w-2.5 h-2.5 ml-2.5 transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {open && (
        <div
          id="dropdownNavbar"
          className={` z-30 font-normal w-full bg-slate-200    shadow  `}
        >
          <ul className=" w-full  " aria-labelledby="dropdownLargeButton">
            {subItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item?.id ? `${item?.name}` : `/${item}`}
                  className={`flex items-center  text-lg pl-10  h-14 text-[#292929]   md:bg-transparent focus:outline-none
                  ${isLinkActive(`/${item}`) && "text-white bg-[#292929]"}
                  `}
                >
                  {item?.id
                    ? capitalizeWords(item?.name)
                    : capitalizeWords(item === menuName ? "Overview" : item)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

function MobileNavigation({ subRoutes, isSubLinkActive, isLinkActive }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className=" border-gray-200 ">
      <div className="flex justify-between">
        <div className="w-2/3 h-20 bg-[#36348e]">
          <div className="mx-auto p-2">
            <Link href="/" className="flex items-center">
              <img
                src="../../logo_only.webp"
                className="logo h-[60px] sm:h-[80px] md:h-[50px] lg:h-[50px] xl:h-[140px]"
                alt="logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SIBA
              </span>
            </Link>
          </div>
        </div>
        <div className="w-1/6 h-20 bg-white">
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center h-full w-10 bg-white justify-center text-sm text-black -lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-transparent "
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <div
          className={`${
            isDropdownOpen
              ? "block absolute top-0 left-0 z-20"
              : "hidden invisible"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-0  bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className={`flex items-center   text-lg pl-10  h-14  focus:outline-none ${
                  isLinkActive("/")
                    ? "text-black bg-[#ffc53a]"
                    : "text-[#292929] bg-white"
                }`}
                aria-current="page"
              >
                Home
              </Link>
            </li>

            <li>
              {
                <CustomDropDown
                  isLinkActive={isLinkActive}
                  isSubLinkActive={isSubLinkActive}
                  key={subRoutes.about.name}
                  menuName={subRoutes.about.name}
                  subItems={subRoutes.about.routes}
                />
              }
            </li>
            <li>
              {
                <CustomDropDown
                  isLinkActive={isLinkActive}
                  isSubLinkActive={isSubLinkActive}
                  key={subRoutes.academics.name}
                  menuName={subRoutes.academics.name}
                  subItems={subRoutes.academics.routes}
                />
              }
            </li>
            <li>
              {
                <CustomDropDown
                  isLinkActive={isLinkActive}
                  isSubLinkActive={isSubLinkActive}
                  key={subRoutes.admission.name}
                  menuName={subRoutes.admission.name}
                  subItems={subRoutes.admission.routes}
                />
              }
            </li>
            <li>
              {
                <CustomDropDown
                  isLinkActive={isLinkActive}
                  isSubLinkActive={isSubLinkActive}
                  key={subRoutes.leadership.name}
                  menuName={subRoutes.leadership.name}
                  subItems={subRoutes.leadership.routes}
                />
              }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MobileNavigation;
