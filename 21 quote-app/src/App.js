import React, { useState, useEffect } from "react";
import QuoteBox from "./components/QuoteBox";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("http://api.quotable.io/quotes/random");
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      setQuote(data[randomIndex].content);
      setAuthor(data[randomIndex].author || "Unknown");
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <QuoteBox quote={quote} author={author} fetchQuote={fetchQuote} />
    </div>
  );
};

export default App;
