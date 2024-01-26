import React from "react";

const PageHeading = (props)=> {
    return (
        <section className="section-mtb">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-container">
                            <h1 className="h1-heading">{props.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageHeading