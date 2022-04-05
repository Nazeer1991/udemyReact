import Card from "../UI/Card";
import ExpenseItem from "../expenses/ExpenseItem";
import "../expenses/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import React, { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilter(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filter} onFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
              key={expense.id}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
