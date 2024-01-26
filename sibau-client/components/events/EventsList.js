import React from "react";
import styles from '../../styles/events/eventList.module.css'

const EventsList = ()=> {
    return (
        <section className="st-1">
            <div className="container">
                <div className="row">
                <h2 className="sec_h2_heading pb-50">Latest Event Design 1</h2>
                    <div className="col-md-4">
                        <a href="/" className={styles.card}>
                            <img src="./aid-1.webp" className={styles.card__image} alt="" />
                            <div className={styles.card__overlay}>
                                <div className={styles.card__header}>
                                    <img className={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className={styles.card__header_text}>
                                        <h3 className={styles.card__title}>Jessica Parker</h3>            
                                        <span className={styles.card__status}>1 hour ago</span>
                                    </div>
                                </div>
                                <p className={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a> 
                    </div>
                    <div className="col-md-4">
                        <a href="/" className={styles.card}>
                            <img src="./aid-2.webp" className={styles.card__image} alt="" />
                            <div className={styles.card__overlay}>
                                <div className={styles.card__header}>
                                    <img className={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className={styles.card__header_text}>
                                        <h3 className={styles.card__title}>Jessica Parker</h3>            
                                        <span className={styles.card__status}>1 hour ago</span>
                                    </div>
                                </div>
                                <p className={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a> 
                    </div>
                    <div className="col-md-4">
                        <a href="/" className={styles.card}>
                            <img src="./event1.jpeg" className={styles.card__image} alt="" />
                            <div className={styles.card__overlay}>
                                <div className={styles.card__header}>
                                    <img className={styles.card__thumb} src="https://i.imgur.com/7D7I6dI.png" alt="" />
                                    <div className={styles.card__header_text}>
                                        <h3 className={styles.card__title}>Jessica Parker</h3>            
                                        <span className={styles.card__status}>1 hour ago</span>
                                    </div>
                                </div>
                                <p className={styles.card__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
                            </div>
                        </a> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventsList