import React from "react";
import styles from '../../styles/eventsTemp/eventsCard.module.css'

const EventCard = ()=> {
    return (
        <section className="st-2 section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-45">
                        <div className={ styles.event__card }>
                            <div className={ styles.event__thumb }>
                                <a href="event-template-detail" className={styles.event__link}>
                                    <img  src="./news-card-1.webp" />
                                </a>
                            </div>
                            <div className={styles.event__caption}>
                                <h5>March 12, 2021 / San Francisco </h5>
                                <a href="event-template-detail">
                                    <h4>ONLINE | Creative Writing Events</h4>
                                </a>
                                <p>
                                    For years, the archivists who run Special Collections have answered the same typess as our collections…
                                </p>
                            </div>       
                        </div>
                    </div>

                    <div className="col-md-12 mb-45">
                        <div className={ styles.event__card }>
                            <div className={ styles.event__thumb }>
                                <a href="event-template-detail" className={styles.event__link}>
                                    <img  src="./news-card-1.webp" />
                                </a>
                            </div>
                            <div className={styles.event__caption}>
                                <h5>March 12, 2021 / San Francisco </h5>
                                <a href="event-template-detail">
                                    <h4>ONLINE | Creative Writing Events</h4>
                                </a>
                                <p>
                                    For years, the archivists who run Special Collections have answered the same typess as our collections…
                                </p>
                            </div>       
                        </div>
                    </div>

                    <div className="col-md-12 mb-45">
                        <div className={ styles.event__card }>
                            <div className={ styles.event__thumb }>
                                <a href="event-template-detail" className={styles.event__link}>
                                    <img  src="./news-card-1.webp" />
                                </a>
                            </div>
                            <div className={styles.event__caption}>
                                <h5>March 12, 2021 / San Francisco </h5>
                                <a href="event-template-detail">
                                    <h4>ONLINE | Creative Writing Events</h4>
                                </a>
                                <p>
                                    For years, the archivists who run Special Collections have answered the same typess as our collections…
                                </p>
                            </div>       
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default EventCard