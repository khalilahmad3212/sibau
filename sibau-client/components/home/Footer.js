import React, { useState } from "react";
import FooterColumn from "./FooterColumn";
import ContactInfo from "./ContactInfo";
import Social from "./Social";
import CopyRight from "./CopyRight";
import { getValueByKey } from "@/apis";
const Footer = ({}) => {
  const [footerData, setFooter] = useState();
  useState(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("footer");
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
                <div className="col-md-3 px-3 lg:p-0 md:p-0 mb-3">
                  <FooterColumn
                    title={"Main Navigation"}
                    linkData={footerData?.mainNavigation}
                  />
                </div>
                <div className="col-md-3 px-3 lg:p-0 md:p-0 mb-3">
                  <FooterColumn
                    title={"Information For"}
                    linkData={footerData?.informationFor}
                  />
                </div>
                <div className="col-md-3 px-3 lg:p-0 md:p-0 mb-3">
                  <FooterColumn
                    title={"Quick Links"}
                    linkData={footerData?.quickLinks}
                  />
                </div>
                <div className="col-md-3">
                  <ContactInfo />
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
