import React, { useState } from "react";

const Question = ({ question, handleAnswerClick }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleClick = (option) => {
    setSelectedAnswer(option);
    setTimeout(() => {
      handleAnswerClick(option);
      setSelectedAnswer(null);
    }, 500);
  };

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleClick(option)}
          className={
            selectedAnswer
              ? option === question.answer
                ? "correct"
                : "wrong"
              : ""
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
