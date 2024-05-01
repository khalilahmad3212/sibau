import { ST } from "next/dist/shared/lib/utils";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/about/leadership/staff.module.css";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import LinkBtn from "@/components/home/LinkBtn";
import { getEmployees } from "@/apis";
import Link from "next/link";
import AsideFaculty from "./AsideFaculty";
import QuickLinks from "@/components/Founder/QuickLinks";
import { NoData } from "@/components/animated/noData";
import { SERVER } from "@/utils/constants";
const Staff = (props) => {
  useEffect(() => {
    console.log('PHDS: ', props.employees);
    async function fetchData() {
      // const result = await getEmployees(props?.limit);
      // setAbout(result);
    }
    fetchData();
  }, []);
  return (
    <section className="st-1 section-pb">
      <div className=" sm:px-0 md:px-20 lg:px-32">
        <div className="row py-6">
          <div className="row py-20">
            <div className="col-lg-10 col-md-10 col-xs-12">
              <div className="">
                {props.employees === undefined ||
                  props.employees.length === 0 ? (
                  <div className="flex justify-center items-center ">
                    <div className="text-center">
                      <NoData />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-wrap">
                    {props?.employees?.map((item, index) => (
                      <div
                        key={index}
                        className=" w-1/4 mx-2"
                        onClick={() => { }}
                      >
                        <div className={styles.flip_box_container}>
                          <div className={styles.staf_flip_box}>
                            <div className={styles.staf_flip_layer}>
                              <img
                                className={`${styles.staff_flip_img} rounded-md`}
                                src={`${SERVER}/employee-images/${item.Image}`}
                              />
                            </div>

                            <div className={styles.staf_flip_overlay_layer}>
                              <div className={styles.staf_flip_overlay}>
                                <div className={styles.flip_bx_content}>
                                  <p>
                                    {item?.Biography ||
                                      "Aenean turpis consectetur at. Donec tincidunt sem non eros dignissim, a facilisis arcu interdum. Quisque nec mauris non elit tincidunt pharetra. Nunc posuere elit at commodo facilisis."}
                                  </p>
                                </div>
                                <div className="mt-4">
                                  <p className="font-bold">Contacts:</p>
                                  <ul className="mt-2">
                                    <li className="flex items-center">
                                      <Link
                                        href="#"
                                        className="flex items-center  hover:text-blue-200"
                                      >
                                        <span className="mr-2">
                                          <FaPhone />
                                        </span>
                                        {item.OfficeExtension}
                                      </Link>
                                    </li>
                                    <li className="flex items-center mt-1">
                                      <Link
                                        href="#"
                                        className="flex items-center  hover:text-blue-200"
                                      >
                                        <span className="mr-2">
                                          <FaEnvelope />
                                        </span>
                                        {item.Email}
                                      </Link>
                                    </li>
                                    <Link
                                      href={`/faculty/${item.EmployeeId}`}
                                      className="flex items-center justify-center rounded-md mt-3  bg-white py-3 text-blue-900 text-center  hover:text-blue-700"
                                    >
                                      <span className="mr-2"></span>
                                      {"More"}
                                    </Link>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h3 className="text-lg font-bold">
                              {item.FirstName} {item.LastName}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.Designation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-xs-12">
              <AsideFaculty />
              <QuickLinks />
            </div>
          </div>
        </div>
      </div>
      {props.limit && (
        <div className="px-5">
          <LinkBtn title={"Show More"} to={"/faculty"} />
        </div>
      )}
    </section>
  );
};

export default Staff;
