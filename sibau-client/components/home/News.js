import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { getNews } from "@/apis";
import Link from "next/link";

const News = () => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const result = await getNews();
      console.log(result);
      setNews(result.slice(0, 3));
    }
    fetchData();
  }, []);

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
          {news?.map((item, index) => {
            return (
              <div key={index} className="my-1 col-md-4 col-sm-6 col-xs-12">
                <NewsItem
                  date={item.Date}
                  description={item.Descripiton.substring(0, 100)}
                  title={item.Title}
                  image={item.Image}
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
