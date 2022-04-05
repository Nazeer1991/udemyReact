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

  let expensesContent = <p>No Expenses Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filter} onFilter={filterChangeHandler} />
        {expensesContent}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found</p>
        ) : (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
              />
            );
          })
        )} */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                key={expense.id}
              />
            );
          })} */}
      </Card>
    </div>
  );
}

export default Expenses;
