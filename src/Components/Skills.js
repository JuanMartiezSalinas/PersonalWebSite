/** @format */

import React from "react";
const skills = {
  frontEnd: [
    {
      lang: "Javascript",
      desc: 60,
    },
    {
      lang: "HTML/CSS",

      desc: 50,
    },
    {
      lang: "React",

      desc: 70,
    },
  ],
  backEnd: [
    {
      lang: "Python",

      desc: 40,
    },
    {
      lang: "Node",

      desc: 50,
    },
  ],
};
const Skills = () => {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="underline"></div>
      <div className="languages">
        <div className="frontEnd">
          <h2>Front End</h2>
          {skills.frontEnd.map((language, index) => {
            return (
              <div key={index} className="language">
                {/* <language.img className="language-logo" /> */}
                <h3>{language.lang}</h3>
                <p>{language.desc}%</p>
                <div className="level-container">
                  <div
                    className="level"
                    style={{ width: `${language.desc}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="backend">
          <h2>Back End</h2>
          {skills.backEnd.map((language, index) => {
            return (
              <div className="language" key={index}>
                <h3>{language.lang}</h3>
                <p>{language.desc}%</p>
                <div className="level-container">
                  <div
                    className="level"
                    style={{ width: `${language.desc}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
