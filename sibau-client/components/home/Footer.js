import React, { useState } from "react";
import FooterColumn from "./FooterColumn";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import CopyRight from "./CopyRight";
import { getValueByKey } from "@/apis";
const Footer = () => {
  const [dynamicData, setDynamicData] = useState(null);
  const [footerData, setFooter] = useState(
    {
      mainNavigation: [
        { text: "Home", link: "/" },
        { text: "About", link: "/about" },
        { text: "Mission", link: "/mission" },
        { text: "History", link: "/history" },
        { text: "Admission", link: "/admission" },
        { text: "Graduate Program", link: "/graduate-program" },
        { text: "Department", link: "/department" },
      ],
      informationFor: [
        { text: "Students", link: "/students" },
        { text: "Faculty", link: "/faculty" },
        { text: "Staff", link: "/staff" },
        { text: "Alumni", link: "/alumni" },
      ],
      quickLinks: [
        { text: "Apply", link: "/apply" },
        { text: "Tuition", link: "/tuition" },
        { text: "Scholarship", link: "/scholarship" },
        { text: "Sports Activities", link: "/sports-activities" },
        { text: "News", link: "/news" },
      ],
    }
  );

  useState(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("PAGE_FOOTER");
        setDynamicData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {footerData && (
        <footer className="footer bg-[#292929] text-white py-1">
          <span id="mouseDot" className="mouse-dot"></span>
          <div className="st-1">
            <div className="container sm:p-0 lg:px-20 md:px-20">
              <div className=" row">
                <div className="col-md-3">
                  <ContactInfo address={footerData.heading} phone={footerData.phone} />
                </div>
                <div className="col-md-9">
                  <div className="row justify-center">
                    <div className="col-md-3 col-lg-2 px-3 lg:p-0 md:p-0 mb-3">
                      <FooterColumn title="Main Navigations" linkData={footerData.mainNavigation} />
                    </div>
                    <div className="col-md-3 col-lg-2 px-3 lg:p-0 md:p-0 mb-3">
                      <FooterColumn title="Iformation" linkData={footerData.informationFor} />
                    </div>
                    <div className="col-md-3 col-lg-2 px-3 lg:p-0 md:p-0 mb-3">
                      <FooterColumn title="Iformation" linkData={footerData.informationFor} />
                    </div>
                    <div className="col-md-3 col-lg-2 px-3 lg:p-0 md:p-0 mb-3">
                      <FooterColumn title="Quick Links" linkData={footerData.quickLinks} />
                    </div>
                    {
                      dynamicData?.sections?.map((section, index) => (
                        <div key={index} className="col-md-3 col-lg-2 px-3 lg:p-0 md:p-0 mb-3">
                          <FooterColumn title={section.title} linkData={section.links.map((e) => ({ ...e, link: `/page/${e.link}` }))} />
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Social />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-section">
            <CopyRight />
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
