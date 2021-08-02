/** @format */

import { React, useEffect, useState } from "react";
import { switches } from "../data";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import Video from "../Components/Video";
import Social from "../Components/Social";
import Question from "../Components/Question";

const Switches2 = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.pageYOffset));
    // this return triggers when the component unmounts avoiding us the warning of performing updates on an unmounted component, it works as lifecicle method componentDidMount or kinda
    return () => {
      window.removeEventListener("scroll", setY(0));
    };
  }, []);

  return (
    <div className="switches2">
      <div className={y > 250 ? "header displaced" : "header"}>
        <div
          className="logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <h1>Keybord company</h1>
        </div>
        <Link to="/">
          <button className="return-btn">
            <FaHome />
            <span>return home</span>
          </button>
        </Link>
      </div>
      <div className="articlesVideo">
        <div className="articles-container">
          <Question />
          <Question />
        </div>
        <Video />
      </div>
      <section className="types">
        <h1>Switches we work with</h1>
        {switches.map((item, index) => {
          return (
            <article className="switch-type" key={index}>
              <h2>{item.type}</h2>
              <h5>{item.description}</h5>
              <div className="switchs-container">
                {item.switches.map((item, index) => {
                  return (
                    <div className="individual-switch" key={index}>
                      <img
                        src={process.env.PUBLIC_URL + `${item.image}`}
                        alt={index}
                      />
                      <div className="switch-info">
                        <h4>{item.name}</h4>
                        <p>
                          <strong>Manufacturer</strong>: {item.manufacturer}
                        </p>
                        <ul>
                          {item.facts.map((item, index) => {
                            return <li key={index}>{item}</li>;
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
      <Social />
    </div>
  );
};

export default Switches2;
