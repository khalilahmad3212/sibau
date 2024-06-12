import React, { useEffect, useState } from "react";
import styles from "../../styles/newsTemp/newsCard.module.css";
import { getNewsById } from "@/apis";
import { useRouter } from "next/router";
import PageHeading from "@/components/newsTemp/PageHeading";
import NavigationBar from "@/components/home/NavigationBar";
import HeaderFooter from "@/components/global/HeaderFooter";
import { SERVER } from "@/utils/constants";

const NewsCardOne = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log('news id: ', id);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsById(id);
        setItem(result);
        // console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <main style={{ overflowX: "hidden" }}>
      <HeaderFooter>
        <PageHeading title="News" />
        <section className="st-2 section-pb">
          <div className="container">
            <div>
              {item && (
                <div className={styles.news__card}>
                  {/* <a href={`#`} className={styles.news__thumbnail}> */}
                  <img src={`${SERVER}/news-images/${item.Image}`} />
                  <div className={styles.news__caption}>
                    <h4>{item.Heading}</h4>
                    <span className={styles.post__date}>
                      December 29, 2020
                    </span>
                    <p>
                      {item.Descripiton}
                    </p>
                  </div>
                  {/* </a> */}
                </div>
              )}
            </div>
          </div>
        </section>
      </HeaderFooter>
    </main>
  );
};
export default NewsCardOne;
