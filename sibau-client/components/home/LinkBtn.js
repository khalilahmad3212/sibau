import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import style from "../../styles/home/linkBtn.module.css";
import Link from "next/link";

const LinkBtn = (props) => {
  return (
    <Link className="w-full flex justify-center" href={"/financial-aid"}>
      <div className="w-52">
        <div className="bg-[#292929]  text-[#ffc53a] justify-center font-medium my-1 p-4 px-5 flex items-center hover:bg-[#292929] transition-colors mx-auto">
          <span className="text-base text-[18px]">Apply</span>
          <span className="pl-3">
            <FaLongArrowAltRight className="font-medium text-[18px]" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default LinkBtn;
