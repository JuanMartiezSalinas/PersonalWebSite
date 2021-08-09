/** @format */

import React from "react";

const certifications = [
  {
    certification: "Responsive Web Design",
    url: "https://www.freecodecamp.org/certification/predatorj9/responsive-web-design",
    img: "https://i.ytimg.com/vi/ni3LEc3kvas/maxresdefault.jpg",
  },
  {
    certification: "Javascript Algorithms and Data Structures",
    url: "https://www.freecodecamp.org/certification/predatorj9/javascript-algorithms-and-data-structures",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    certification: "Front End Libraries",
    url: "https://www.freecodecamp.org/certification/predatorj9/front-end-libraries",
    img: "https://www.digital55.com/wp-content/uploads/2019/07/%C2%BFQue%CC%81-cualidades-debe-tener-un-desarrollador-especialista-en-React.png",
  },
];

const Certfications = () => {
  return (
    <div className="certifications">
      <h1>Certifications</h1>
      <div className="underline"></div>
      <p>
        This certifications were acquired in freeCodeCamp, to obtain them i have
        had to realize certain projects proposed by the platform, these projects
        can be found in my CodePen account or in the links down below the
        certification
      </p>
      <div className="grid">
        {certifications.map((item, index) => {
          return (
            <div
              key={index}
              className={`element${index}`}
              style={{ backgroundImage: `url(${item.img})` }}>
              <a href={item.url} className="dropElement">
                <h2>{item.certification}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certfications;
