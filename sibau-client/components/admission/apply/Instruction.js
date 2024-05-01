import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/apply/instruction.module.css";
import LinkBtn from "../../home/LinkBtn";
import { getValueByKey } from "@/apis";
import Link from "next/link";

const Instruction = ({ admissionProcess }) => {
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row px-5">
          <div className="col-md-12">
            <div className="pb-100">
              <h2 className={styles.instHeading}>APPLY</h2>
            </div>
            {admissionProcess.map((item, index) => (
              <div key={index} className={styles.inst_container}>
                <div className={` Flx ${styles.inst_Bx} `}>
                  <div className={styles.instNum}>
                    <h5>{index + 1}</h5>
                  </div>
                  <div className={styles.instCont}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    {/* <Link href={item?.link || "#"} className="">
                      <span className="bg-[#36348a] hover:bg-[#36348e] mt-3 text-white font-bold py-1 px-4 rounded inline-block">
                        {item?.linkText || "View"}
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}

            <div>
              <LinkBtn title="Apply Form" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruction;
