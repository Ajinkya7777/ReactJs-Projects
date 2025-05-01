import React from "react";
import "../App.css";

const Button = ({ getNewQuote }) => {
  return (
    <button className="btn" onClick={getNewQuote}>
      New Quote
    </button>
  );
};

export default Button;
