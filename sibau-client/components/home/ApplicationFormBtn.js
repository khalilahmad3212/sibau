import React from "react";
import style from '../../styles/home/application.module.css'
import Link from "next/link";
const ApplicationFormBtn = (props)=>{
    return(
        <div className= {style.from_links}>
            <div className= {style.links_container}>
                <div className= {style.btn_1}>
                    <Link href= {`${props.AplicationFormLink}`} >{ props.AplicationForm }</Link>
                </div>
                <div className={style.btn_2}>
                    <ul>
                        <li><Link href= {`${props.RequestInfoLink}`} > { props.RequestInfo } </Link></li>
                        <li><Link href= {`${props.VisitLink}`} > { props.VisitTitle }</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ApplicationFormBtn