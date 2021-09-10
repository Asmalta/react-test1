import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Multiple State
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Single State
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = (event) => {
    /****** Multiple State******/
    setEnteredTitle(event.target.value);

    /****** Single State******/
    // setUserInput({
    //   enteredTitle: event.target.value,
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })

    // // Best Practice
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    /****** Multiple State******/
    setEnteredAmount(event.target.value);

    /****** Single State******/
    // setUserInput({
    //   enteredAmount: event.target.value,
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };

  const dateChangeHandler = (event) => {
    /****** Multiple State******/
    setEnteredDate(event.target.value);

    /****** Single State******/
    // setUserInput({
    //   enteredDate: event.target.value,
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    //console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    //Store the user input values
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //Set the values back to blank on the form
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  
  };

  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={dateChangeHandler}
        />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
};

export default ExpenseForm;
