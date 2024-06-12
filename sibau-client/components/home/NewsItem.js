import React from "react";
import style from "../../styles/home/newsItem.module.css";
import Link from "next/link";
import { SERVER } from "@/utils/constants";
const NewsItem = ({ title, image, description, date }) => {
  return (
    <div className="flex justify-between items-center p-4  shadow-lg border-transparent rounded-lg  min-h-[400px] max-h-[400px] hover:bg-[rgb(255,208,97)] transition ease-in-out duration-300">
      <Link className="text-transparent" href={"/news"}>
        <div className="flex items-center justify-center">
          <img
            src={`${SERVER}/news-images/${image}`}
            className="w-[200px] rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold mt-1 text-black uppercase">
          {title}
        </h3>
        <div className="text-gray-500">{date}</div>
        <div className="mt-2 text-gray-700">
          <p>
            {description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default NewsItem;
