import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import style from "../../styles/home/social.module.css";
import Link from "next/link";
import { getValueByKey } from "@/apis";
import { motion } from "framer-motion";
const Social = () => {
  const socialButtonsVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },

    tap: {
      scale: 0.9,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  const [socials, setSocial] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("socials");
        setSocial(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="social my-6">
      <ul className="flex flex-wrap justify-center ">
        {socials.map((item, index) => (
          <li key={index} className="inline-block">
            <motion.a
              className="flex items-center justify-center w-24 h-24  rounded-full hover:bg-[#36348e] hover:text-white transition-colors"
              whileHover={socialButtonsVariants.hover}
              whileTap={socialButtonsVariants.tap}
              href={`${item?.link}`}
            >
              <span className="text-2xl">
                {item.name === "facebook" && <FaFacebook fontSize={40} />}
                {item.name === "instagram" && <FaInstagram fontSize={40} />}
                {item.name === "linkedIn" && <FaLinkedin fontSize={40} />}
                {item.name === "youtube" && <FaYoutube fontSize={40} />}
                {item.name === "twitter" && <FaTwitter fontSize={40} />}
              </span>
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
