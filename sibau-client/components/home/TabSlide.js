import React, { useEffect, useState } from "react";
import style from "../../styles/home/TabSlide.module.css";
import { getSliderData } from "@/apis";

const TabSlide = () => {
  const [sliderData, setSlider] = useState([]);
  const [activeSlider, setActiveSlider] = useState(0); // State variable for active slider index

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getSliderData();
        setSlider(result);
        // console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style.slider__section}>
      <div className="tab-content">
        {sliderData.map((item, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className={`tab-pane fade ${style.slide__imgContainer} ${
              index === activeSlider ? "in show active " : ""
            }`}
          >
            <img
              src={
                index == 0
                  ? "./student-1.jpg"
                  : index === 1
                  ? "./book-1.jpg"
                  : item.Image
              }
              className={style.slide__img}
              alt={`slide ${index + 1}`}
            />
            <div className="row">
              <div
                className={`${style.slide__content} absolute bottom-30 left-5 lg:w-2/5 xl:w-40 2xl:w-1/3 px-8 text-black`}
              >
                <div className="text-white text-3xl font-bold	 lg:font-extrabold">
                  {item.Headings}
                </div>
                <a href={item.Link}>{item.LinkTitle}</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ul className={style.slide__index}>
        {sliderData.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveSlider(index)} // Update activeSlider state on click
            className={
              index === activeSlider ? style.active_color : "not_active"
            }
          >
            <a
              className="active-color"
              onClick={() => setActiveSlider(index)} // Update activeSlider state on click
              data-toggle="tab"
              href={`#slide${index + 1}`}
            >
              <span>{item.Title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabSlide;
