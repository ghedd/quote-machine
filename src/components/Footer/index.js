import React from "react";
import "./style.scss";

const Footer = ({ photoAuthor, authorCredLink, authorUnsplash, unsplash }) => {
  return (
    <footer>
      <div className="FooterWrapper">
        <span className="PhotoCredit">
          Photo by{" "}
          <strong>
            <a className="PhotoCredit__Link" href={authorCredLink}>
              {photoAuthor}
            </a>
          </strong>{" "}
          on{" "}
          <strong>
            <a className="PhotoCredit__Link" href={authorUnsplash}>
              {unsplash}
            </a>
          </strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
