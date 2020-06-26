import React from "react";
import "./style.scss";
import quoteIcon from "../../images/quote_icon.svg";
import Buttons from "../Buttons";
import Loading from "../Loading";
const QuoteBox = ({ quoteContent, getNewQuote, isLoading }) => {
  return (
    <div id="quote-box">
      <div className="InnerBox">
        <img src={quoteIcon} alt="quote icon" className="InnerBox__QuoteIcon" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="InnerBox__Text">
              <p id="text">{quoteContent.quote}</p>
            </div>
            <hr className="InnerBox__Hrzline" />
            <div className="InnerBox__Author">
              <span id="author">{quoteContent.author}</span>
            </div>
          </>
        )}

        {/* <div className="InnerBox__LongTextIndicator" /> */}
      </div>
      <Buttons getNewQuote={getNewQuote} />
    </div>
  );
};

export default QuoteBox;
