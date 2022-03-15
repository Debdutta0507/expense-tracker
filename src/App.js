import { useState } from "react";
import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
import NewExpense from "./NewExpense.js/NewExpense";
let dummyexpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expense, setExpense] = useState(dummyexpenses);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpense((prev) => {
      return [expense, ...prev]

    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
