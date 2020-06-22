import React from "react";
import "./style.scss";
import quoteIcon from "../../images/quote_icon.svg";
import Buttons from "../Buttons";
const QuoteBox = () => {
  return (
    <div id="quote-box">
      <div className="InnerBox">
        <img src={quoteIcon} alt="quote icon" className="InnerBox__QuoteIcon" />
        <div className="InnerBox__Text">
          <p id="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            porro impedit. Rerum, maiores? Assumenda sapiente eligendi cum
            pariatur laboriosam, eaque corrupti provident incidunt nostrum?
            Aliquid sit mollitia ipsa, ab consequatur quam magnam, voluptates,
            neque tempore ipsum quos rem officiis tenetur.
          </p>
        </div>
        <div className="InnerBox__LongTextIndicator" />

        <hr className="InnerBox__Hrzline" />
        <div className="InnerBox__Author">
          <span id="author">Anonymous</span>
        </div>
        
      </div>
      <Buttons />
    </div>
  );
};

export default QuoteBox;
