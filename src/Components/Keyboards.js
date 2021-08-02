/** @format */

import React from "react";
import { preBuildKB } from "../data";
const Keyboards = () => {
  return (
    <div className="keyboards" id="keyboards">
      <h1 className="pbkb">Or buy one of our prebuilded keyboards</h1>
      <div className="kb-container">
        {preBuildKB.map((kb, index) => {
          return (
            <article className="singleKB" key={index}>
              <img src={kb.img} alt={kb.img} />
              <span className="spanInfo">
                <h1>{kb.name}</h1>
                <p>$ {kb.price}</p>
                <p>{kb.description}</p>
              </span>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboards;
