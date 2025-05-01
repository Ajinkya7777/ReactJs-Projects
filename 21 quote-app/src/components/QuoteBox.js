import React from "react";

const QuoteBox = ({ quote, author, fetchQuote }) => {
  return (
    <div className="quote-container">
      <p className="quote">"{quote}"</p>
      <p className="author">- {author}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
