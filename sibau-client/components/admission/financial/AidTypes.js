import React, { useEffect, useState } from "react";
import styles from "../../../styles/admission/financial/aid_type.module.css";
import { getValueByKey } from "@/apis";

const AidTypes = () => {
  const [aidTypes, setData] = useState({
    typesOfAid: [
      {
        cardTitle: "Scholarships",
        cardContent:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardImage: "image1.jpg",
      },
      {
        cardTitle: "Grants",
        cardContent:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardImage: "image2.jpg",
      },
      {
        cardTitle: "Loans",
        cardContent:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
        cardImage: "image3.jpg",
      },
    ],
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("type-of-aid");
        setData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <secion className="st-1 section-pb block">
      <div className="container sm:px-0 md:px-24 lg:px-32">
        <div className="row">
          <h2 className="sec_h2_heading pb-50">Types of Aid</h2>
          {aidTypes?.typesOfAid?.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-xs-12">
              <div className={`card ${styles.card}`}>
                <img
                  className={`card-img-top ${styles.card_image}`}
                  src={`./aid-${index + 1}.webp`}
                  alt="Card image cap"
                />
                <div className={`card-body ${styles.card_body}`}>
                  <h3>{item?.cardTitle}</h3>
                  <p className="card-text">{item?.cardContent}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </secion>
  );
};

export default AidTypes;
