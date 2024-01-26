import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getNews } from "@/apis";
import Link from "next/link";

const News = () => {
  const [news, setNews] = useState([
    {
      Id: 2,
      Title: "this is title",
      Date: "2023-06-01",
      Heading: "this is heading",
      Descripiton: "soon, news will be added ",
      Image: "https://api.dicebear.com/6.x/initials/svg?seed=Employee",
      Sort: 2,
    },
    {
      Id: 3,
      Title: "This is news Title",
      Date: "2023-06-02",
      Heading: "this is heading",
      Descripiton: "this is simple Description",
      Image: "https://api.dicebear.com/6.x/initials/svg?seed=Title",
      Sort: 1,
    },
    {
      Id: 4,
      Title: "this is news three title 3",
      Date: "2023-06-02",
      Heading: "this is heading of new news",
      Descripiton: "soon, news will be added ",
      Image: "https://api.dicebear.com/6.x/initials/svg?seed=News",
      Sort: 1,
    },
    {
      Id: 5,
      Title: "this is another new",
      Date: "2023-09-22",
      Heading: "This is simple heading",
      Descripiton:
        "soon, news will be added   soon, news will be added   soon, news will be added  ",
      Image: "https://api.dicebear.com/6.x/initials/svg?seed=NewsProMax",
      Sort: 2,
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      const result = await getNews();
      console.log(result);
      setNews(result.slice(0, 3));
    }
    fetchData();
  }, []);

  const data = [
    {
      Title: "Life as a Distance Learning Student",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
    {
      Title: "How to Organise Your Studies for Success",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
    {
      Title: "4th Workshop “Advanced Materials”",
      Date: "December 29, 2020",
      Description:
        "Effective Time Management Traditionally, most people find the norm in education to involve lectures in physical classrooms.  Tutor-student interaction is perceived as",
      Image: "/",
    },
  ];
  return (
    <section className="st-1">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="heading-container flex justify-between  items-center">
          <h2 className="section-heading">News </h2>
          <Link
            className="text-blue-400 underline font-semibold text-lg"
            style={{ fontFamily: "'Inter', sans-serif" }}
            href={"/news"}
          >
            View more
          </Link>
        </div>
        <div className="row p-1">
          {news.map((item, index) => {
            return (
              <div key={index} className="my-1 col-md-4 col-sm-6 col-xs-12">
                <NewsItem
                  date={item.Date}
                  description={item.Descripiton}
                  title={item.Title}
                  key={index}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;
