import React from "react";
import "./style.scss";
import quoteIcon from "../../images/quote_icon.svg";
import Buttons from "../Buttons";
const QuoteBox = ({ quoteContent }) => {
  console.log(quoteContent);

  return (
    <div id="quote-box">
      <div className="InnerBox">
        <img src={quoteIcon} alt="quote icon" className="InnerBox__QuoteIcon" />
        <div className="InnerBox__Text">
          <p id="text">{quoteContent.quote}</p>
        </div>
        {/* <div className="InnerBox__LongTextIndicator" /> */}

        <hr className="InnerBox__Hrzline" />
        <div className="InnerBox__Author">
          <span id="author">{quoteContent.author}</span>
        </div>
      </div>
      <Buttons />
    </div>
  );
};

export default QuoteBox;
