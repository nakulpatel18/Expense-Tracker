import React from 'react';

const ExpenseList = ({ expenses, onDelete }) => (
    <div className="list-section">
        <h2>Expenses</h2>
        <ul>
            {expenses.map((expense) => (
                <li key={expense._id}>
                    {expense.title} - ₹{expense.amount} - {expense.category}
                    <button onClick={() => onDelete(expense._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

export default ExpenseList;
