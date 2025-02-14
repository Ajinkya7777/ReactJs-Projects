import { useState } from "react";
import "./style.css";

export default function Todo() {
  function generateId() {
    return Math.floor(Math.random() * 100);
  }

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="new Todo"
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul className="todos-list">
          {todos.map(({ text, id }) => {
            return (
              <li key={id} className="todo">
                <span>{text}</span>
                <button className="close" onClick={() => removeTodo(id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
