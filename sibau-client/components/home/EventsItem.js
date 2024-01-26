import React from "react";
import style from "../../styles/home/newsItem.module.css";
import Link from "next/link";
const EventsItem = (props) => {
  return (
    <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-md min-h-[300px] hover:bg-[#ffc53a] transition ease-in-out duration-300">
      <Link href={"/events"}>
        <h3 className="text-lg font-bold">{props.Title}</h3>
        <div className="text-gray-500">{props.Date}</div>
        <div className="mt-2">
          <p>{props.Description}</p>
        </div>
      </Link>
    </div>
  );
};

export default EventsItem;
