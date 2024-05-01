import React from "react";
import style from "../../styles/home/footerColumn.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FOOTER_CONTACT_INFO } from "../../utils/constants";
import { getValueByKey } from "@/apis";
const ContactInfo = ({ address, phone }) => {
  const [contactInfo, setContactInfo] = useState({
    footerLogo: "./logo_only.webp",
    footerLogoAlt: "Footer Logo",
    address: address ?? "Sukkur IBA University Airport Road, Sukkur",
    contact: {
      telephone: phone ?? "071-5644159",
      telephoneText: phone ?? "071-5644159",
    },
  });
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const result = await getValueByKey(FOOTER_CONTACT_INFO);
  //       // debugger
  //       setContactInfo(JSON.parse(result.value));
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      {contactInfo && (
        <div className={style.footer_column_detail}>
          <div className={style.ftr_image_container}>
            <img
              src={`../${contactInfo.footerLogo}`}
              className="img-fluid text-white bg-white"
              alt={contactInfo.footerLogoAlt}
            />
          </div>
          <div className={style.ftr_address}>
            <p>{contactInfo.address}</p>
            <p>
              <Link href={`callto: ${contactInfo.contact?.telephone}`}>
                {contactInfo.contact?.telephoneText}
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
