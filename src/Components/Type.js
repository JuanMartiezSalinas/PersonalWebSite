/** @format */

import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const Type = ({ data }) => {
  const [shown, setShown] = useState(false);

  const { type, description, switches } = data;
  return (
    <section className={`${shown ? "container container-open" : "container"}`}>
      <div className="initial-info" onClick={() => setShown(!shown)}>
        {shown ? (
          <div className="icono-container">
            <FiChevronUp className="icono" />
          </div>
        ) : (
          <div className="icono-container">
            <FiChevronDown className="icono" />
          </div>
        )}
        <h1>{type}</h1>
        <p>{description}</p>
      </div>

      {shown &&
        switches.map((item, index) => {
          return (
            <div className="individualSwitchContainer">
              <div className="switchImage">
                <img
                  src={process.env.PUBLIC_URL + `${item.image}`}
                  className="image"
                  alt={item.name}
                />
              </div>
              <div className="specifications">
                <p>
                  <strong>Name:</strong> {item.name}
                </p>
                <p>
                  <strong>Manufacturer:</strong> {item.manufacturer}
                </p>
                <p>
                  <strong>Auction Distance:</strong> {item.actuationDistance}
                </p>
                <p>
                  <strong>Auction Force:</strong> {item.actuationForce}
                </p>
              </div>
            </div>
          );
        })}
    </section>
  );
};
export default Type;
