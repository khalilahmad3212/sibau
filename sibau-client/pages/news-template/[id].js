import React, { useEffect, useState } from "react";
import styles from "../../styles/newsTemp/newsCard.module.css";
import { getNewsById } from "@/apis";
import { useRouter } from "next/router";
import PageHeading from "@/components/newsTemp/PageHeading";
import NavigationBar from "@/components/home/NavigationBar";

const NewsCardOne = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
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
    <main>
      <NavigationBar />
      <PageHeading title="News" />

      <section className="st-2 section-pb">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12 lg:mb-10">
              {item && (
                <div className={styles.news__card}>
                  <a href={`#`} className={styles.news__thumbnail}>
                    <img src={item.Image} />
                    <div className={styles.news__caption}>
                      <h4>{item.Heading}</h4>
                      <span className={styles.post__date}>
                        December 29, 2020
                      </span>
                      <p>
                        Effective Time Management Traditionally, most people
                        find the norm in education to involve lectures in
                        physical classrooms. Tutor-student interaction is
                        perceived as being only physical.
                      </p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default NewsCardOne;
