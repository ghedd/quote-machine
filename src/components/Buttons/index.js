import React from "react";
import "./style.scss";
const Buttons = () => {
  return (
    <div className="Btns">
      <div className="Btns__BtnGenerate">
        <button className="btn btn--pr">new quote</button>
      </div>
      <div className="Btns__BtnTweet">
        <button className="btn btn--sc ">tweet</button>
      </div>
    </div>
  );
};

export default Buttons;
