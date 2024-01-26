import React from "react";
import ApplicationFormBtn from './ApplicationFormBtn'
import styles from '../../styles/home/application.module.css'

const Application = ({data})=>{
    return (
        <div className= {styles.application_section}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className= {styles.content_container}>
                            <h2> {data.AplicationTitle} </h2>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className= {styles.app_img_container}>
                            <img src={`${data.WomenInfoImageLink}`} alt="women"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <ApplicationFormBtn  {...data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application