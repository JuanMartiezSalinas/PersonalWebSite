/** @format */

import React from "react";
const SingleProject = ({ project, position }) => {
  const { image, name } = project;
  return (
    <article
      // style={{ display: "block" }}
      className={position}
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}>
      <div className="crop">
        <span>{name}</span>
      </div>
    </article>
  );
};

export default SingleProject;
