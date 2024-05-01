import React, { use, useEffect, useState } from "react";
import style from "../../styles/home/navigationBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { FaSearch, FaGripLines } from "react-icons/fa";
import TrippleMenu from "./TrippleMenu";
import { BsSearch } from "react-icons/bs";
import MobileNavigation, { capitalizeWords } from "./MobileNavigtion";
import { getValueByKey } from "@/apis";

const CustomFacultyDropDown = ({
  isLinkActive,
  isSubLinkActive,
  leadership,
  items,
  name,
}) => (
  <NavDropdown
    style={{ borderRadius: "0px" }}
    className={`${style.nav__item} ${isLinkActive(`/${name}`, "faculty")
      ? style.active
      : isSubLinkActive(name, "faculty")
        ? style.active
        : ""
      }`}
    title="Faculty"
    id="collasible-nav-dropdown"
  >
    {items?.map((menuItem) => (
      <NavDropdown.Item
        className={`${isLinkActive(`${menuItem?.name}`, "faculty") ? style.subActive : ""
          }`}
        href={`/leadership/${menuItem.id}-${menuItem?.name}`}
        key={menuItem.id}
      >
        {menuItem?.name
          ?.split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);
const CustomNavDropDown = ({ isLinkActive, isSubLinkActive, items, name }) => (
  <NavDropdown
    style={{ borderRadius: "0px" }}
    className={`${style.dropdown_menu} ${style.nav__item} ${isLinkActive(`/${name}`)
      ? style.active
      : isSubLinkActive(name)
        ? style.active
        : ""
      }`}
    title={capitalizeWords(name)}
    id="collasible-nav-dropdown"
  >
    {items.map((menuItem, index) => (
      <NavDropdown.Item
        key={index}
        className={` ${index === 0 && isLinkActive(`${menuItem.link}`)
          ? style.subActive
          : isLinkActive(`${menuItem.link}`)
            ? style.subActive
            : ""
          }`}
        href={`${menuItem.link}`}
      >
        {capitalizeWords(menuItem.text)}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

const NavigationBar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [subRoutes, setSubRoutes] = useState(null);

  const fetchHeaderData = async () => {
    const routesResult = await getValueByKey("PAGE_HEADER");
    setSubRoutes(JSON.parse(routesResult.value));
  };

  useEffect(() => {
    fetchHeaderData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0.3) {
        setIsScrollingUp(scrollPosition < window.previousScrollPosition);
      } else setIsScrollingUp(false);
      window.previousScrollPosition = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const subRoutes = {
  //   about: {
  //     name: "about",
  //     routes: ["about", "campus", "mission", "founder", "history"],
  //   },
  //   academics: {
  //     name: "academics",
  //     routes: [
  //       "academics",
  //       "under-graduate",
  //       "graduate",
  //       "post-graduate",
  //       "summer-program",
  //     ],
  //   },
  //   admission: {
  //     name: "admission",
  //     routes: [
  //       "admission",
  //       "how-to-apply",
  //       "tuition-fees",
  //       "financial-aid",
  //       "dates-deadlines",
  //     ],
  //   },
  //   leadership: {
  //     name: "leadership",
  //     routes: [
  //       {
  //         id: 20,
  //         name: "phd",
  //       },
  //       {
  //         id: 1,
  //         name: "computer-science ",
  //       },
  //       {
  //         id: 2,
  //         name: "electrical-engineering",
  //       },
  //       {
  //         id: 3,
  //         name: "computer-system Engineering",
  //       },
  //       {
  //         id: 4,
  //         name: "management-science",
  //       },
  //       {
  //         id: 5,
  //         name: "education",
  //       },
  //       {
  //         id: 6,
  //         name: "mathematics",
  //       },
  //       {
  //         id: 7,
  //         name: "supporting-faculty",
  //       },

  //       {
  //         id: 9,
  //         name: "physical-education",
  //       },
  //       {
  //         id: 10,
  //         name: "media-communication",
  //       },
  //     ],
  //   },
  // };

  const router = useRouter();
  const isLinkActive = (href, faculty) => {
    if (!faculty) return router.pathname === href;
    else {
      const path = router.asPath.split("/")[2];

      subRoutes["leadership"].routes.findIndex(
        (item) => `${item.id}-${item.name}` === path
      );
    }
  };
  const isSubLinkActive = (main, faculty) => {
    if (!faculty) {
      const path = router.pathname.split("/")[1];
      const section = subRoutes.sections.find((x) => x.title === main);
      const found = section.links.find((x) => x.link === path);
      return found == undefined ? false : true;
    } else {
      const path = router.asPath.split("/")[2];
      return subRoutes["leadership"].routes.find(
        (item) => `${item.id}-${item.name}` === path
      );
    }
  };

  return (
    <>
      <div className="lg:hidden md:hidden block ">
        {/* <MobileNavigation
          subRoutes={subRoutes}
          isSubLinkActive={isSubLinkActive}
          router={router}
          isLinkActive={isLinkActive}
        /> */}
      </div>
      <div className="lg:block md:block hidden ">
        <Navbar
          id="mainNav"
          className={`${style.navbar}
      ${isScrollingUp == true ? style.scrollingUp : style.scrollingDown
            } transition-all`}
          collapseOnSelect
          expand="sm"
          bg=""
          variant="dark"
        >
          <Navbar.Brand id="brandLogo" href="/" className={style.navbar__brand}>
            <img
              src="../../logo-white.png"
              className="logo h-[60px] sm:h-[80px] md:h-[50px] lg:h-[50px] xl:h-[140px]"
              alt="logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="custom-space"
            style={{ padding: "0px 135px" }}
          ></Navbar.Collapse>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${style.nav__bar} `}>
              {/* <Nav.Item>
                <Nav.Link
                  className={`${style.nav__link} ${isLinkActive("/") ? style.active : ""
                    }`}
                  href="/"
                >
                  Home
                </Nav.Link>
              </Nav.Item> */}
              {
                subRoutes && subRoutes?.sections.map((section, index) => (
                  section.links.length >= 1 ?
                    <CustomNavDropDown
                      name={section.title}
                      key={section.title}
                      items={section.links}
                      isLinkActive={isLinkActive}
                      isSubLinkActive={isSubLinkActive}
                    ></CustomNavDropDown>
                    :
                    <Nav.Item>
                      <Nav.Link
                        className={`${style.nav__link} ${isLinkActive(`${section.link}`) ? style.active : ""
                          }`}
                        href={section.link}
                      >
                        {capitalizeWords(section.title)}
                      </Nav.Link>
                    </Nav.Item>
                ))
              }
              {/* <CustomFacultyDropDown
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
                name={subRoutes.leadership.name}
                leadership={subRoutes.leadership.routes}
                items={subRoutes.leadership.routes}
              ></CustomFacultyDropDown> */}
              {/* <CustomNavDropDown
                name={subRoutes.admission.name}
                key={subRoutes.admission.name}
                items={subRoutes.admission.routes}
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
              ></CustomNavDropDown> */}
              {/* <CustomNavDropDown
                name={subRoutes.academics.name}
                key={subRoutes.academics.name}
                items={subRoutes.academics.routes}
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
              ></CustomNavDropDown> */}

              <Nav.Item>
                <Nav.Link className={style.nav__link} href="#">
                  <TrippleMenu />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className={style.nav__link} href="/">
                  <BsSearch size={"25px"} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
