import React, { useEffect, useState } from "react";
import style from "../../styles/home/navigationBar.module.css";
import { Navbar, Nav, NavDropdown, ListGroup } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router"; // Import the useRouter hook from Next.js
import { FaSearch, FaGripLines } from "react-icons/fa";
import TrippleMenu from "./TrippleMenu";
import { BsSearch } from "react-icons/bs";
import MobileNavigation, { capitalizeWords } from "./MobileNavigtion";
import { getValueByKey } from "@/apis";
import axios from "axios";
import { SERVER } from "@/utils/constants";

const CustomFacultyDropDown = ({
  isLinkActive,
  isSubLinkActive,
  pre,
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
    title={name == "leadership" ? "Departments" : "SubCampus"}
    id="collasible-nav-dropdown"
  >
    {items?.map((menuItem) => (
      <NavDropdown.Item
        className={`${isLinkActive(`${menuItem?.name}`, "faculty") ? style.subActive : ""
          }`}
        href={`/${pre}/${menuItem.id}-${menuItem?.name}`}
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
        className={` ${index === 0 && isLinkActive(`/${menuItem}`)
          ? style.subActive
          : isLinkActive(`/${menuItem}`)
            ? style.subActive
            : ""
          }`}
        href={index === 0 ? `/${name}` : `/${menuItem}`}
      >
        {capitalizeWords(menuItem === name ? "overview" : menuItem)}
      </NavDropdown.Item>
    ))}
  </NavDropdown>
);

const MyCustomNavDropDown = ({ isLinkActive, isSubLinkActive, items, name, pre }) => (
  <NavDropdown
    style={{ borderRadius: "0px" }}
    className={`${style.dropdown_menu} ${style.nav__item}`}
    // ${
    //   isLinkActive(`/${name}`)
    //   ? style.active
    //   : isSubLinkActive(name)
    //     ? style.active
    //     : ""
    //   }
    title={capitalizeWords(name)}
    id="collasible-nav-dropdown"
  >
    {items.map((menuItem, index) => (
      <MyCustomNavItem key={index} menuItem={menuItem} />
    ))}
  </NavDropdown>
);
const MyCustomNavItem = ({ menuItem }) => {
  const [show, setShow] = useState(false);

  const [departments, setDepartments] = useState([]);
  const getDepartmentsByFaculty = async () => {
    try {
      const { data } = await axios.get(`${SERVER}/department/faculty/${menuItem.text.replace(/\s/g, '-').toLowerCase()}`);
      setDepartments(data);
      console.log('data: ', data);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    getDepartmentsByFaculty();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <NavDropdown.Item
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        href={menuItem.link}
      >
        {capitalizeWords(menuItem.text)}
      </NavDropdown.Item>
      {
        show && (
          <ul
            style={{
              position: 'absolute',
              top: '0', left: '100%',
              zIndex: '1000',
              backgroundColor: 'white',
              padding: '0px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            {departments?.map((item, index) => (
              <NavDropdown.Item
                key={index}
                href={`/leadership/${item.Id}-${item.Name}`}
              >
                {capitalizeWords(item.Name)}
              </NavDropdown.Item>
            ))}
          </ul>
        )
      }
    </div >
  );
}
const NavigationBar = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [dynamicRoutes, setDynamicRoutes] = useState([]);

  const [subRoutes, setSubRoutes] = useState({
    about: {
      name: "about",
      routes: ["about", "campus", "mission", "vision", "founder", "history", "vc"],
    },
    academics: {
      name: "academics",
      routes: [
        "academics",
        "under-graduate",
        "graduate",
        "post-graduate",
        "summer-program",
      ],
    },
    admission: {
      name: "admission",
      routes: [
        "admission",
        "how-to-apply",
        "tuition-fees",
        "financial-aid",
        "dates-deadlines",
      ],
    },
    leadership: {
      name: "leadership",
      routes: [],
    },
    subcampus: {
      name: "subcampus",
      routes: []
    }
  });

  const fetchDepartmentsNames = async () => {
    try {
      const departments = await axios.get(`${SERVER}/department/list`);
      // console.log("Departments fetched successfully:", departments.data);
      setSubRoutes((prev) => ({ ...prev, leadership: { ...prev.leadership, routes: departments.data.map(e => ({ id: e.Id, name: e.Name })) } }));
    } catch (error) {
      console.log("Error fetching departments:", error);
    }
  };

  const fetchSubCampusData = async () => {
    try {
      const campuses = await axios.get(`${SERVER}/campus/list`);
      // console.log("Campuses fetched successfully:", campuses.data);
      setSubRoutes((prev) => ({ ...prev, subcampus: { ...prev.subcampus, routes: campuses.data.map(e => ({ id: e.Id, name: e.Name })) } }));
    } catch (error) {
      console.log("Error fetching campuses:", error);
    }
  };


  const fetchHeaderData = async () => {
    try {
      const routesResult = await getValueByKey("PAGE_HEADER");
      // console.log("Data fetched successfully:", routesResult);
      setDynamicRoutes(JSON.parse(routesResult.value));
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchHeaderData();
    fetchDepartmentsNames();
    fetchSubCampusData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // console.log(scrollPosition);
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
      const found = subRoutes[main].routes.find((x) => x === path);
      return found == undefined ? false : true;
    } else {
      const path = router.asPath.split("/")[2];
      return subRoutes["leadership"].routes.find(
        (item) => `${item.id}-${item.name}` === path
      );
    }
  };

  const isMyLinkActive = (href, faculty) => {
    // console.log("href", href);
    // console.log("pathname", router.asPath);
    // console.log("href & pathname", router.asPath.includes(href));
    // alert("href & pathname", router.pathname === href);
    if (!faculty) return router.asPath.includes(href);
    else {
      const path = router.asPath.split("/")[2];

      dynamicRoutes["leadership"].routes.findIndex(
        (item) => `${item.id}-${item.name}` === path
      );
    }
  };
  const isMySubLinkActive = (main, faculty) => {
    if (!faculty) {
      const path = router.asPath;
      console.log('path: ', path);
      console.log('main: ', main);

      const section = dynamicRoutes.sections.find((x) => x.title === main);
      console.log('section: ', section);
      const found = section.links.find((x) => path.includes(x.link));
      return found == undefined ? false : true;
    } else {
      const path = router.asPath.split("/")[2];
      return dynamicRoutes["leadership"].routes.find(
        (item) => `${item.id}-${item.name}` === path
      );
    }
  };

  return (
    <>
      <div className="lg:hidden md:hidden block ">
        <MobileNavigation
          subRoutes={subRoutes}
          isSubLinkActive={isSubLinkActive}
          router={router}
          isLinkActive={isLinkActive}
        />
      </div>
      <div className="lg:block md:block hidden sticky top-0 z-40">
        <Navbar
          id="mainNav"
          className={`${style.navbar}
      ${style.scrollingUp} transition-all`}
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
              <Nav.Item>
                <Nav.Link
                  className={`${style.nav__link} ${isLinkActive("/") ? style.active : ""
                    }`}
                  href="/"
                >
                  <span style={{ fontWeight: 700 }}>
                    Home
                  </span>
                </Nav.Link>
              </Nav.Item>
              <CustomNavDropDown
                name={subRoutes.about.name}
                key={subRoutes.about.name}
                items={subRoutes.about.routes}
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
              ></CustomNavDropDown>

<MyCustomNavDropDown
                name="Faculty"
                items={[
                  {
                    text: 'Management Science',
                    link: '/feculty/management-science',
                  },
                  {
                    text: 'Science and Information Technology',
                    link: '/feculty/science-and-information-technology',
                  },
                  {
                    text: 'Engineering and Technology',
                    link: '/feculty/engineering-and-technology',
                  },
                  {
                    text: 'Education',
                    link: '/feculty/education',
                  }
                ]}
              />

              {/* {
                subRoutes.leadership.routes.length >= 1 && (
                  <CustomFacultyDropDown
                    pre="leadership"
                    isLinkActive={isLinkActive}
                    isSubLinkActive={isSubLinkActive}
                    name={subRoutes.leadership.name}
                    leadership={subRoutes.leadership.routes}
                    items={subRoutes.leadership.routes}
                  ></CustomFacultyDropDown>
                )
              } */}
              <CustomFacultyDropDown
                pre="campus"
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
                name={subRoutes.subcampus.name}
                leadership={subRoutes.subcampus.routes}
                items={subRoutes.subcampus.routes}
              />
              {/* <Nav.Item>
                <Nav.Link
                  className={`${style.nav__link} ${isLinkActive("/resources") ? style.active : ""}`}
                  href="/resources"
                >
                  <span style={{ fontWeight: 700 }}>
                    Resources
                  </span>
                </Nav.Link>
              </Nav.Item> */}
              <CustomNavDropDown
                name={subRoutes.admission.name}
                key={subRoutes.admission.name}
                items={subRoutes.admission.routes}
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
              ></CustomNavDropDown>
              <CustomNavDropDown
                name={subRoutes.academics.name}
                key={subRoutes.academics.name}
                items={subRoutes.academics.routes}
                isLinkActive={isLinkActive}
                isSubLinkActive={isSubLinkActive}
              ></CustomNavDropDown>

              {/* {
                dynamicRoutes && dynamicRoutes?.sections?.map((section, index) => (
                  section.links.length >= 1 ?
                    <MyCustomNavDropDown
                      name={section.title}
                      key={section.title}
                      items={section.links}
                      isLinkActive={isMyLinkActive}
                      isSubLinkActive={isMySubLinkActive}
                    ></MyCustomNavDropDown>
                    :
                    <Nav.Item>
                      <Nav.Link
                        className={` ${style.nav__link} ${isMyLinkActive(`${section.link}`) ? style.active : ""
                          }`}
                        style={{ fontWeight: "bold" }}
                        href={`/page${section.link}`}
                      >
                        {capitalizeWords(section.title)}
                      </Nav.Link>
                    </Nav.Item>
                ))
              } */}
              <Nav.Item>
                <Nav.Link className={style.nav__link} href="#">
                  <TrippleMenu dynamicRoutes={dynamicRoutes} />
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link className={style.nav__link} href="/">
                  <BsSearch size={"25px"} />
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
