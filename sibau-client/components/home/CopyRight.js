import React from "react";
import style from "../../styles/home/copyright.module.css";
import Link from "next/link";
const CopyRight = () => {
  return (
    <div className={style.copyright}>
      <div className="container">
        <div className="flex justify-center items-center">
          <div className=" text-black">
            <p>
              Copyright © 2023 <Link href="/"> IBA </Link>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
