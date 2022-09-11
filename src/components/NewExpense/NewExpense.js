import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [form, setForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const addExpenseButtonHandler = () => {
    setForm(true);
  };
  const clearHandler = () => {
    setForm(false);
  };
  return (
    <div className="new-expense">
      {!form && (
        <button onClick={addExpenseButtonHandler} className="button">
          Add Expense
        </button>
      )}
      {form && (
        <ExpenseForm
          onClear={clearHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
