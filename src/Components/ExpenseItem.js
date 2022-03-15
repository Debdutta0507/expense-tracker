import React, { useState } from 'react';
import Cards from './Cards';
import ExpenseDate from './ExpenseDate';
import ExpensesFilter from './ExpenseFliter';
import './ExpenseItem.css';

function ExpenseItem({ title, amount, date }) {
    const [val, changeVal] = useState('')
    const listenToYear = (year) => {
        changeVal(year)
        console.log(year);
    }


    return (
        <div>

            <Cards className='expense-item'>
                <ExpenseDate date={date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>

                    <div className='expense-item__price'>{amount}</div>
                </div>

            </Cards>
        </div>);
}

export default ExpenseItem;
