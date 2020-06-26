import React, { useState, useEffect } from "react";
// import logo from "./logo.svg";
import "../style/main.scss";
import QuoteBox from "./QuoteBox";
import Footer from "./Footer";
import Loading from "./Loading";

const photoAuthor = {
  name: "Danielle MacInnes",
  credit:
    "https://unsplash.com/@dsmacinnes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  unspLink:
    "/s/photos/quotes?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText",
  photoLib: "Unsplash",
};

const QUOTE_URL = "http://quotes.stormconsultancy.co.uk/random.json";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const [quoteContent, setQuoteContent] = useState([]);
  const [error, setError] = useState("");

  const getQuoteContent = async () => {
    setIsLoading(true);
    try {
      let resp = await fetch(QUOTE_URL);
      if (resp.ok) {
        // setTimeout(() => {
          setIsLoading(false);
        // }, 500);
        let data = await resp.json();
        setQuoteContent(data);
      } else {
        throw Error("Uhh error fetching post");
      }
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoading(false);
    }, 500);
    getQuoteContent();
  }, []);

  if (error) {
    return (
      <main>
        <p>Error</p>
      </main>
    );
  } else if (isFirstLoading) {
    return <Loading />;
  } else {
    return (
      <main className="App">
        
        <QuoteBox
          isLoading={isLoading}
          quoteContent={quoteContent}
          getNewQuote={getQuoteContent}
        />

        <Footer
          photoAuthor={photoAuthor.name}
          authorCredLink={photoAuthor.credit}
          authorUnsplash={photoAuthor.unspLink}
          unsplash={photoAuthor.photoLib}
        />
      </main>
    );
  }
};

export default App;
