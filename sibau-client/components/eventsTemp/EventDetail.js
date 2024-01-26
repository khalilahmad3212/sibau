import React from "react";
import styles from '../../styles/eventsTemp/eventDetail.module.css'

const EventDetail = ()=> {
    return (
        <section className="st-1 section-pb">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-30">
                        <div className={styles.content__detail}>
                            <h1>2020 – 2021 Vera List Center Seminar Series: As for Protocols</h1>
                            <h5>Lectures are divided in three academic fields below. As part of this series, the most prestigious Life Science speakers have been invited to speak during Mendel Lectures, which are held in the Mendel Museum´s Augustinian Abbey Refectory at Mendel Square.</h5>
                            <p>
                                Life Sciences Seminar Series is a prestigious seminar series at Estudiar University in the interconnected and complementary fields, collectively called “Life Sciences”. The seminar series is mainly focused on currently growing fields which combine modern methods of biophysics, computational modeling, imaging, biochemistry and molecular biology with “more classical” disciplines such as microbiology, cell biology, physiology, genetics, toxicology, developmental and evolutionary biology and medicine. Life Sciences Seminar Series is a prestigious seminar series at Estudiar University in the interconnected and complementary fields, collectively called “Life Sciences”. The seminar series is mainly focused on currently growing fields which combine modern methods of biophysics, computational modeling, imaging, biochemistry and molecular biology with “more classical” disciplines such as microbiology, cell biology, physiology, genetics, toxicology, developmental and evolutionary biology and medicine.
                            </p>
                            <p>
                                The speakers program is arranged so that there is an opportunity to meet the researchers from MU and have sponsored lunch with Ph.D. students.Life Sciences Seminar Series is a prestigious seminar series at Estudiar University in the interconnected and complementary fields, collectively called “Life Sciences”. The seminar series is mainly focused on currently growing fields which combine modern methods of biophysics, computational modeling, imaging, biochemistry and molecular biology with “more classical” disciplines such as microbiology, cell biology, physiology, genetics, toxicology, developmental and evolutionary biology and medicine.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={styles.event__detail_info}>
                            <h5>Details:</h5>
                            <p><strong>Start:</strong><br />Feb 6, 2021 @ 8:00 am</p>
                            <p><strong>End:</strong><br />Feb 6, 2021 @ 6:00 am</p>
                            <p><strong>Cost:</strong><br />Free</p>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className={styles.event__detail_info}>
                            <h5>Details:</h5>
                            <p><strong>Phone:</strong><br /><a href="tel:+18006462864018">+1 (800) 646-286-4018</a></p>
                            <p><strong>Email:</strong><br /><a href="mailto:vamtam@estudiar.com">vamtam@estudiar.com</a></p>
                            <p><strong>Website:</strong><br /><a href="http://www.vamtam.com" target="_blank" rel="noopener">vamtam.com</a></p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={styles.event__detail_info}>
                            <h5>Venue:</h5>
                            <p>36 W 138th St. New York, 10037 United States</p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default EventDetail