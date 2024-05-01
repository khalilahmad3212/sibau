import React from "react";
import styles from "../../styles/about/informativeNumber.module.css";

const InformativeNumber = ({ statistics }) => {
  return (
    <>
      {statistics?.length && (
        <section className={` ${styles.infrm_sec} bg-[#292929]`}>
          <div className="text-center">
            <div className="flex flex-wrap">
              {statistics.map((stat, index) => (
                <div className="w-full sm:w-1/2 md:w-1/3">
                  <div className={styles.numBx}>
                    <p>{stat.title}</p>
                    <span>{stat.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default InformativeNumber;
