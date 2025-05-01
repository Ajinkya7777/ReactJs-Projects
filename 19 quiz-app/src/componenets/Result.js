import React from "react";

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
      <p>{score === totalQuestions ? "🎉 Excellent!" : "👍 Good Job!"}</p>
    </div>
  );
};

export default Result;
