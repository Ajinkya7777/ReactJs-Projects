import { useState } from "react";
import "./style.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="count">{count}</h1>
        <div className="signs">
          <button onClick={increment} className="increment">
            +
          </button>
          <button onClick={decrement} className="decrement">
            -
          </button>
        </div>
      </div>
    </>
  );
}
