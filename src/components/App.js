import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "../style/main.scss";
import QuoteBox from "./QuoteBox";
import Footer from "./Footer";

const photoAuthor = {
  name: "Danielle MacInnes",
  credit:
    "https://unsplash.com/@dsmacinnes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  unspLink:
    "/s/photos/quotes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  photoLib: "Unsplash",
};

const QUOTE_URL = "http://quotes.stormconsultancy.co.uk/random.json";

const getQuoteContent = async (callback) => {
  try {
    let resp = await fetch(QUOTE_URL);
    if (resp.ok) {
      let data = await resp.json();
      callback(data);
    } else {
      throw Error;
    }
  } catch (err) {
    console.log(err);
  }
};

const App = () => {
  // const [loading, setLoading] = useState(true);
  const [quoteContent, setQuoteContent] = useState([]);
  // const [error, setError] = useState("");

  useEffect(() => {
    getQuoteContent((quoteContent) => setQuoteContent(quoteContent));
  }, []);

  return (
    <main className="App">
      <QuoteBox />
      <Footer
        photoAuthor={photoAuthor.name}
        authorCredLink={photoAuthor.credit}
        authorUnsplash={photoAuthor.unspLink}
        unsplash={photoAuthor.photoLib}
      />
    </main>
  );
};

export default App;
