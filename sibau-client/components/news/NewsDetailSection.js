import React from "react";
import styles from '../../styles/news/newsDetail.module.css'
import Sidebar from './Sidebar'

const NewsDetailSection = ()=> {
    return (
        <section className="st-1 section-pb">
            <div className="container">
                <div className="row">
                   <div className="col-md-9 content">
                        <img className={styles.new__detail__image}  src="./banner-1.webp" />
                        <p>
                            Our university takes full advantage of its location in one of the most vibrant and diverse cities in the world. The Estudiar mission drives our focus on quality education for all and service to our neighbors in need.
                        </p>
                        <p>
                            Since our founding in 1919, The Estudiar University has redrawn and redefined the boundaries of intellectual and creative thought as a preeminent academic center. Our rigorous, multidimensional approach to education dissolves walls between disciplines and helps nurture progressive minds. At our university, students have the academic freedom to shape their unique, individual paths for a complex and rapidly changing world.
                        </p>
                        <p>
                            Our university takes full advantage of its location in one of the most vibrant and diverse cities in the world. The Estudiar mission drives our focus on quality education for all and service to our neighbors in need.
                        </p>
                        <p>
                            Since our founding in 1919, The Estudiar University has redrawn and redefined the boundaries of intellectual and creative thought as a preeminent academic center. Our rigorous, multidimensional approach to education dissolves walls between disciplines and helps nurture progressive minds. At our university, students have the academic freedom to shape their unique, individual paths for a complex and rapidly changing world.
                        </p>
                        <p>
                            Our university takes full advantage of its location in one of the most vibrant and diverse cities in the world. The Estudiar mission drives our focus on quality education for all and service to our neighbors in need.
                        </p>
                        <p>
                            Since our founding in 1919, The Estudiar University has redrawn and redefined the boundaries of intellectual and creative thought as a preeminent academic center. Our rigorous, multidimensional approach to education dissolves walls between disciplines and helps nurture progressive minds. At our university, students have the academic freedom to shape their unique, individual paths for a complex and rapidly changing world.
                        </p>
                   </div>
                   <div className="col-md-3">
                        <Sidebar />
                   </div>
                </div>
            </div>
        </section>
    )
}

export default NewsDetailSection