import { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Madrid", "Rome"],
    answer: "Paris",
  },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container">
      {showResult ? (
        <Result score={score} totalQuestions={questions.length} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
