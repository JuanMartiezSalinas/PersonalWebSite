/** @format */

import React from "react";
const providers = [
  "https://www.cherrymx.de/_Resources/Static/Packages/Cherry.CherryMxCom/Images/Frontend/General/ico-logo.svg",
  "https://logos-marcas.com/wp-content/uploads/2020/11/Razer-Logo.png",
  "https://logos-marcas.com/wp-content/uploads/2020/11/Logitech-Simbolo.png",
  "https://www.profesionalreview.com/wp-content/uploads/2019/05/Kailh-logotipo.jpeg",
];

const Providers = () => {
  return (
    <div className="logos-container">
      <h1>Our providers</h1>
      <div className="logo-container">
        {providers.map((prov, index) => {
          return <img src={prov} alt={prov} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Providers;
