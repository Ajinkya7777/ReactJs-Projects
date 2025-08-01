import React from "react";
import "../styles/App.css";
function Balance({ transactions }) {
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 className="balance">${total}</h1>
    </div>
  );
}

export default Balance;
