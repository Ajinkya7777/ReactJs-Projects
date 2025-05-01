import { useState } from "react";
import "../styles/Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input));
    } catch {
      setResult("error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "/",
          "4",
          "5",
          "6",
          "*",
          "1",
          "2",
          "3",
          "-",
          "0",
          ".",
          "=",
          "+",
        ].map((char) => {
          return (
            <button
              key={char}
              onClick={() =>
                char === "=" ? calculateResult() : handleClick(char)
              }
              className={
                ["/", "*", "-", "+"].includes(char)
                  ? "operator"
                  : char === "="
                  ? "equal"
                  : ""
              }
            >
              {char}
            </button>
          );
        })}
        <button onClick={clearInput} className="clear">
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
