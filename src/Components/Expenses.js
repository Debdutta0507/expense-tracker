import React, { useState } from 'react';
import ExpensesChart from './ExpenseChart';
import ExpensesFilter from './ExpenseFliter';
import ExpenseItem from './ExpenseItem';
import ExpensesList from './ExpenseList';
import './Expenses.css'

function Expenses({ expenses }) {
    const [val, changeVal] = useState('')
    const listenToYear = (year) => {
        changeVal(year)
        console.log(year);
    }
    let arr = expenses.filter((p) => {
        if (p.date.getFullYear() === parseInt(val))
            return p

    })
    console.log(arr);
    let expensesContent = <p>No expenses found.</p>;


    return (<div className='expenses'>

        <ExpensesFilter listenToYear={listenToYear} />
        <ExpensesChart expenses={arr} />
        <ExpensesList items={arr} />

    </div>);
}

export default Expenses;
