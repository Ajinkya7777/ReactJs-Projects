import React from "react";
import "../styles/App.css";

function IncomeExpense({ transactions }) {
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);

  return (
    <div className="income-expense-container">
      <div className=" income">
        <h4>Income</h4>
        <p className="money plus positive">+${income}</p>
      </div>
      <div className=" money minus expense  negative">
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
