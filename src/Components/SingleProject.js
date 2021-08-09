/** @format */

import React from "react";
const SingleProject = ({ project, position }) => {
  const { image, name } = project;
  return (
    <article className={position}>
      <div className="crop">
        <span>
          <h2>{name}</h2>
        </span>
      </div>
      <div
        className="sliderImg"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
    </article>
  );
};

export default SingleProject;
