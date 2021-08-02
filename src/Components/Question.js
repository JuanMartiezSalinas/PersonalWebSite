/** @format */

import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const Question = () => {
  const [opened, setOpened] = useState(false);
  const cutParagraph = (str) => {
    const splitedStr = str.split(" ");
    if (opened) {
      return str;
    }
    return splitedStr.splice(0, 30).join(" ") + " ...";
  };
  return (
    <article className="question">
      <h2>How to choose the correct switch?</h2>
      <p>
        {cutParagraph(
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum rem, eos modi culpa id dolores vitae reprehenderit. Dolores, quidem! Vero fuga, unde adipisci veritatis accusantium nisi, cumque pariatur animi excepturi cum aspernatur a, minima ex non tenetur quam in! Consectetur quis animi sint commodi, magni voluptate quaerat natus enim nesciunt voluptas eum in veritatis accusantium libero expedita quam. Beatae nihil neque, consectetur explicabo excepturi voluptatum, reiciendis deserunt sequi ex placeat, praesentium voluptatem rem ullam. Facilis nam consectetur natus aliquam quos, eius exercitationem vitae nemo perspiciatis vel? Mollitia totam quidem accusamus inventore dignissimos incidunt sit voluptate laborum ab! Odit, modi voluptatibus!"
        )}
      </p>
      <button className="drop" onClick={() => setOpened(!opened)}>
        {opened ? <MdArrowDropUp /> : <MdArrowDropDown />}
      </button>
    </article>
  );
};

export default Question;
