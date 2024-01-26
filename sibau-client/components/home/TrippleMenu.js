import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/home/tripple_menu.module.css";
import { FaGripLines } from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { getValueByKey } from "@/apis";

const TrippleMenu = () => {
  const [data, setData] = useState({
    giving: {
      description:
        "All donations to the Student Emergency Fund will directly support our students as they adapt to changing circumstances.",
      link: "Visit Page",
    },
    blog: [
      {
        title: "Life as a Distance Learning Student",
        date: "August 29, 2022",
        link: "Visit Page",
      },
      {
        title: "Life as a Distance Learning Student",
        date: "August 29, 2022",
        link: "Visit Page",
      },
    ],
    directory: [
      { name: "News Directory", link: "Visit Page" },
      { name: "Events Directory", link: "Visit Page" },
      { name: "Faculty Directory", link: "Visit Page" },
    ],
    alumni: {
      testimonial:
        "Everything that I learned at Kempbelle University really helped put me above the competition in the field of business management.",
      name: "Alyssa Watson",
      program: "BA Business Management",
    },
  });
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("tripple-menu");
        // debugger
        setData(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <i
        onClick={() => {
          show === true ? handleClose() : handleShow();
        }}
      >
        <BiMenuAltLeft size={"25px"} />
      </i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body
          onMouseLeave={() => {
            handleClose();
          }}
        >
          <div className={` ${styles.menu__row}`}>
            <div className={styles.col__3}>
              <div className={styles.menu__container}>
                <div className={styles.heading__bx}>
                  <h4 className={styles.menu___heading}>Giving</h4>
                </div>
                <div className={styles.menu__content}>
                  <div className={styles.short__parag}>
                    <p>{data.giving.description}</p>
                  </div>
                  <div className={styles.visit__link}>
                    <Link href={`/${data.giving.link}`}>Visit Page</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.col__3}>
              <div className={styles.menu__container}>
                <div className={styles.heading__bx}>
                  <h4 className={styles.menu___heading}>Blog</h4>
                </div>
                <div className={styles.menu__content}>
                  {data.blog.map((item, index) => (
                    <div key={index} className={styles.menu__blog_post}>
                      <h4>
                        <Link href={`/${item.link}`}>{item.title}</Link>
                      </h4>
                      <span>{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.col__3}>
              <div className={styles.menu__container}>
                <div className={styles.heading__bx}>
                  <h4 className={styles.menu___heading}>Directory</h4>
                </div>

                <div className={styles.menu__content}>
                  <ul>
                    {data.directory.map((item, index) => (
                      <li key={index}>
                        <Link href={`${item.link}`}>{item.name}</Link>
                      </li>
                    ))}{" "}
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.col__4}>
              <div className={`bg-sky-blue ${styles.menu__container_right} `}>
                <div className={styles.bg_image}></div>
                <div className={styles.heading__bx}>
                  <h4 className={styles.menu___heading}>Alumni</h4>
                </div>

                <div className={styles.menu__row}>
                  <div className={` ${styles.menu__content} ${styles.col__5} `}>
                    <blockquote>
                      <p>{data?.alumni?.testimonial}</p>
                    </blockquote>
                    <div className={styles.quote__tag__line}>
                      <p>
                        {data?.alumni?.name} <br /> {data?.alumni?.program}
                      </p>
                    </div>

                    <div className={styles.visit__link}>
                      <Link href="/">Our Alumni</Link>
                    </div>
                  </div>
                  <div className={styles.col__5}></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={styles.menu__footer_links}>
              <ul>
                <li>
                  <Link href="/">Request Info</Link>
                </li>
                <li>
                  <Link href="/">Visit</Link>
                </li>
                <li>
                  <Link href="/">Apply</Link>
                </li>
              </ul>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrippleMenu;
