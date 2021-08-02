/** @format */

import React from "react";
import { FaTools } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";

const info = [
  {
    title: "Fully customizable",
    text: "Select between various cases and switches to make it your own style and comfort.",
    icon: <FaTools className="icon" size={50} />,
  },
  {
    title: "Fast and Safe Shipping",
    text: "As soon as your keyboard is finished, it is shipped and taken to the door of your home. You can be sure that it will arrive intact and without any damage.",
    icon: <FiPackage className="icon" size={50} />,
  },
  {
    title: "Warranty",
    text: "Your keyboard has a 1 year warranty against any defect in the assembly or components. In case of damage, we will give you a new keyboard with the same specifications!!!.",
    icon: <GiCheckMark className="icon" size={50} />,
  },
];
const Info = () => {
  return (
    <div className="main">
      <section id="info" className="background"></section>
      <div className="info">
        <div className="intro">
          <h1>Welcome to KC</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            quaerat asperiores nemo perferendis veritatis, incidunt obcaecati ad
            qui laborum odit quae quibusdam earum nesciunt cumque minus!
            Nesciunt doloremque dignissimos numquam corrupti a id accusamus,
            ratione, vitae, assumenda molestias distinctio quisquam fugit soluta
            labore. Iure dolor recusandae sint expedita minus! Quia!
          </p>
        </div>
        <div className="grid-container">
          {info.map((item, index) => {
            return (
              <article className="info-grid" key={index}>
                <div className="first-column">{item.icon}</div>
                <article className="second-column">
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </article>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
