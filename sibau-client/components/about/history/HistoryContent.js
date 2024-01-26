import React from "react";
import styles from "../../../styles/about/history/historyContent.module.css";
const HistoryContent = (props) => {
  return (
    <section className={`st-1 ${styles.historySection} `}>
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="row pb-8">
          <div className="col-md-5">
            <div className={styles.history_content}>
              <h2>{props.heading}</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className={styles.history_content}>
              <p>{props.tagline}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={`col-md-12 ${styles.uniHistory}`}>
            <p className="text-base">
              Sukkur IBA University is a renowned educational institution
              located in Sukkur, Sindh, Pakistan. It is one of the leading
              business schools in the country and has a rich history and legacy.
            </p>

            <p className="text-base">
              Sukkur IBA traces its roots back to 1994 when it was established
              as a public-private partnership between the Government of Sindh
              and the renowned Institute of Business Administration (IBA)
              Karachi. The aim was to provide quality education and produce
              skilled professionals in the field of business administration.
            </p>

            <p className="text-base">
              Since its inception, Sukkur IBA has strived to uphold the highest
              standards of academic excellence and has become a center of
              learning, research, and innovation. The university offers
              undergraduate and postgraduate programs in various disciplines,
              including Business Administration, Computer Science, Electrical
              Engineering, Mathematics, and Education.
            </p>

            <p className="text-base">
              One of the notable features of Sukkur IBA is its state-of-the-art
              campus, equipped with modern facilities and resources. The campus
              provides a conducive learning environment for students and
              promotes a culture of critical thinking, creativity, and
              leadership.
            </p>

            <p className="text-base">
              Sukkur IBA focuses not only on academic education but also on the
              holistic development of its students. The university emphasizes
              extracurricular activities, student clubs, and societies to
              nurture talents, enhance skills, and promote a well-rounded
              personality.
            </p>

            <p className="text-base">
              Over the years, Sukkur IBA has gained recognition for its quality
              education, research contributions, and industry collaborations. It
              has formed partnerships with national and international
              institutions, fostering exchange programs, research
              collaborations, and internship opportunities for its students.
            </p>

            <p className="text-base">
              Sukkur IBA has produced a large number of successful alumni who
              have excelled in various fields, including business, academia,
              government, and entrepreneurship. The university takes pride in
              its graduates and their contributions to society.
            </p>

            <p className="text-base">
              In conclusion, Sukkur IBA University stands as a prestigious
              institution dedicated to providing quality education, fostering
              innovation, and preparing students for successful careers. It
              continues to make significant contributions to the academic and
              socio-economic development of the region and the country as a
              whole.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryContent;
