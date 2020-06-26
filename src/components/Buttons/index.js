import React from "react";
import "./style.scss";
const fetchNewQuote = (getNewQuote) => {
  getNewQuote();
};
const Buttons = ({ getNewQuote }) => {
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
        <button className="btn btn--sc ">
          <a id="tweet-quote" href="#">
            tweet
          </a>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
