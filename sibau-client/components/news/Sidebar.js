import React from "react";
import styles from '../../styles/news/sidebar.module.css'

const Sidebar = ()=> {
    return (
        <div className={ styles.section__sidebar}>
            <div className={ styles.sidebar}>
                <h3 className={styles.sidebar__heading}>Heading Goes here</h3>
                <ul>
                    <li><a href="/">Link A</a></li>
                    <li><a href="/">Link B</a></li>
                    <li><a href="/">Link C</a></li>
                    <li><a href="/">Link D</a></li>
                    <li><a href="/">Link E</a></li>
                </ul>
            </div>

            <div className={`mb-20 ${styles.sidebar__simple}`}>
                <h3 className={styles.sidebar__heading}>Heading Goes here</h3>
                <ul>
                    <li><a href="/">Link A</a></li>
                    <li><a href="/">Link B</a></li>
                    <li><a href="/">Link C</a></li>
                    <li><a href="/">Link D</a></li>
                    <li><a href="/">Link E</a></li>
                </ul>
            </div>

            <div className={`mb-20 ${styles.sidebar__simple__v2}` }>
                <h3 className={styles.sidebar__heading}>Heading Goes here</h3>
                <ul>
                    <li><a href="/">The Boat Races The Boat Races</a></li>
                    <li><a href="/">The Boat Races The Boat Races</a></li>
                    <li><a href="/">Link C</a></li>
                    <li><a href="/">Link D</a></li>
                    <li><a href="/">Link E</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar