import React, { useState } from "react";
import FooterColumn from "./FooterColumn";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import CopyRight from "./CopyRight";
import { getValueByKey } from "@/apis";
const Footer = () => {
  const [footerData, setFooter] = useState(
    //   {
    //   mainNavigation: [
    //     { label: "Home", link: "/" },
    //     { label: "About", link: "/about" },
    //     { label: "Mission", link: "/mission" },
    //     { label: "History", link: "/history" },
    //     { label: "Admission", link: "/admission" },
    //     { label: "Graduate Program", link: "/graduate-program" },
    //     { label: "Department", link: "/department" },
    //   ],
    //   informationFor: [
    //     { label: "Students", link: "/students" },
    //     { label: "Faculty", link: "/faculty" },
    //     { label: "Staff", link: "/staff" },
    //     { label: "Alumni", link: "/alumni" },
    //   ],
    //   quickLinks: [
    //     { label: "Apply", link: "/apply" },
    //     { label: "Tuition", link: "/tuition" },
    //     { label: "Scholarship", link: "/scholarship" },
    //     { label: "Sports Activities", link: "/sports-activities" },
    //     { label: "News", link: "/news" },
    //   ],
    // }
  );

  useState(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("PAGE_FOOTER");
        setFooter(JSON.parse(result.value));
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
              <div className="row">
                {
                  footerData?.sections.map((section, index) => (
                    <div key={index} className="col-md-3 px-3 lg:p-0 md:p-0 mb-3">
                      <FooterColumn title={section.title} linkData={section.links} />
                    </div>
                  ))
                }
                <div className="col-md-3">
                  <ContactInfo address={footerData.heading} phone={footerData.phone} />
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
