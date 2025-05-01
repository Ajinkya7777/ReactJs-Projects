import React from "react";
import "../styles/App.css";
function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={
              transaction.amount < 0
                ? "negative transaction"
                : "positive transaction"
            }
          >
            {transaction.text} <span>${transaction.amount}</span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
