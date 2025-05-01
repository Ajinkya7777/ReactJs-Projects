import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./styles/App.css";

function App() {
  const [transactions, setTransactions] = useState([
    // { id: 1, text: "Salary", amount: 5000 },
    // { id: 2, text: "Grocery", amount: -100 },
    // { id: 3, text: "Rent", amount: -1500 },
  ]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="container">
      <Header />
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
