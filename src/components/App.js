import React from "react";
// import logo from "./logo.svg";
import "../style/main.scss";
import QuoteBox from "./QuoteBox";
import Footer from "./Footer";

const author = {
  name: "Danielle MacInnes",
  credit:
    "https://unsplash.com/@dsmacinnes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  unspLink:
    "/s/photos/quotes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  photoLib: "Unsplash",
};

const App = () => {
  return (
    <main className="App">
      <QuoteBox />
      <Footer
        photoAuthor={author.name}
        authorCredLink={author.credit}
        authorUnsplash={author.unspLink}
        unsplash={author.photoLib}
      />
    </main>
  );
};

export default App;
