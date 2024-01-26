import React from "react";

const SideHeading = (props) => {
  return (
    <div className="side-heading-box py-1 lg:py-6 mg:py-6">
      <h2>{props.title}</h2>
    </div>
  );
};

export default SideHeading;
