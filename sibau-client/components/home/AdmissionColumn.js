import React from "react";

const AdmissionColumn = ({ imageUrl }) => {
    return (
        <div className="adm-image-container">
            <img src={imageUrl} className="card-img-top" alt="Admission" />
        </div>
    )
}

export default AdmissionColumn