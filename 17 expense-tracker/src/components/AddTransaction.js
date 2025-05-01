import React, { useState } from "react";
import "../styles/App.css";
function AddTransaction({ addTransaction }) {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    addTransaction({ id: Math.random(), text, amount: parseFloat(amount) });
    setText("");
    setAmount("");
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit} className="add-transaction-form">
        <input
          type="text"
          placeholder="Enter description..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter amount..."
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
