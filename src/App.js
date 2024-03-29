import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New Laptop",
    amount: 800,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const [test, setTest] = useState(true);

  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <>
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />

        <Expenses items={expense} />
      </div>
    </>
  );
};

export default App;
