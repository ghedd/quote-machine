import React from "react";
import "./style.scss";
const fetchNewQuote = (getNewQuote) => {
  getNewQuote();
};
const Buttons = ({ getNewQuote, quoteContent }) => {
  return (
    <div className="Btns">
      <div className="Btns__BtnGenerate">
        <button
          id="new-quote"
          className="btn btn--pr"
          onClick={() => fetchNewQuote(getNewQuote)}
        >
          new quote
        </button>
      </div>
      <div className="Btns__BtnTweet">
        {/* <button className="btn btn--sc"> */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="btn btn--sc"
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${quoteContent.quote} -- ${quoteContent.author}`}
        >
          tweet
        </a>
        {/* </button> */}
      </div>
    </div>
  );
};

export default Buttons;
