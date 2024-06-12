import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getValueByKey } from "@/apis";
import { SERVER } from "@/utils/constants";

const Leading = () => {


  const [cardData, setCardData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % cardData.length);

    // if (currentSlide + 1 === cardData.length) return;
    // else setCurrentSlide(currentSlide + 1);
  };

  const previousSlide = () => {
    if (currentSlide === 0) return;
    else setCurrentSlide(currentSlide - 1);
  };

  const getRange = () => {
    const imagesPerPage = 3;
    const totalSlides = cardData.length;
    let startIndex = currentSlide;
    let endIndex = currentSlide + imagesPerPage;

    // Adjust the indices if they exceed the total number of slides
    if (endIndex > totalSlides) {
      endIndex = totalSlides;
      startIndex = totalSlides - imagesPerPage;
    }

    return { startIndex, endIndex };
  };

  const { startIndex, endIndex } = getRange();
  const fewImages = cardData.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const res = await getValueByKey("HISTORY_EVENTS");
        const data = JSON.parse(res.value);
        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchCardData();
  }, []);
  return (
    <section className="st-1 section-pb">
      <div className="container sm:px-0 md:px-20 lg:px-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {fewImages.map((item, index) => (
            <div
              key={index}
              className={`col-span-1 transition-transform duration-300 ${currentSlide === index ? "scale-105" : ""
                }`}
            >
              <div className="border border-gray-200 rounded-lg shadow-md p-4">
                <div className="relative aspect-w-4 aspect-h-1 min-h-[300px]">
                  <Image
                    className="rounded-lg h-full w-full"
                    src={`${SERVER}/file-data-images/${item.Image}`}
                    alt={item.image}
                    // height={500}
                    // width={500}
                    layout="fill"
                  // objectFit="cover"
                  />
                </div>
                <div className="mt-2">
                  <h3 className="text-xl font-semibold">{item.Name}</h3>
                  <p className="mt-2">{item.Description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="text-2xl text-gray-600 hover:text-gray-800 mx-2 focus:outline-none"
            onClick={previousSlide}
          >
            <FaArrowLeft />
          </button>
          <button
            className="text-2xl text-gray-600 hover:text-gray-800 mx-2 focus:outline-none"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leading;
