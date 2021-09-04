import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [setYear, setSelectedYear] = useState("2021");

  const saveExpenseFilterHadler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === setYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={setYear}
          onSaveExpenseFilterYear={saveExpenseFilterHadler}
        />
        {filterExpenses.length === 0 ? <p>There are no expenses for this year.</p> : 
        filterExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
