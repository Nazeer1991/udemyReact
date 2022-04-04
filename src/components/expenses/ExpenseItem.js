import React, { useState } from "react";
import ExpenseDate from "../expenses/ExpenseDate";
import "../expenses/ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = ({ title, date, amount }) => {
  const [titleValue, setTitleValue] = useState(title);
  const clickHandler = () => {
    setTitleValue("you clicked the button");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{titleValue}</h2>
        <div className="expense-item__price">{`$${amount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
