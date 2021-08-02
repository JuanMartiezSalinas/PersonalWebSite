/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Switches = () => {
  return (
    // <div id="switches" className="switches">
    //   {switches.map((item, index) => {
    //     return <Type data={item} key={index} />;
    //   })}
    // </div>
    <div className="switches" id="switches">
      <div className="img-container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/71Xs8YgS-cL._AC_SL1500_.jpg"
          alt="switches available"
        />
      </div>
      <div className="learn-more">
        <h1>Switches</h1>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti et
          non laborum odio unde. Atque itaque aspernatur quis repellendus vitae
          tenetur consectetur libero facere perferendis quaerat. Explicabo
          adipisci nesciunt reprehenderit?
        </h4>

        <Link to="/switches">
          <button className="lm-btn">Learn More</button>
        </Link>
      </div>
    </div>
  );
};
export default Switches;
