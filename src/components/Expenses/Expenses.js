import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'

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
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
