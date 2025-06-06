import React from 'react';

const IncomeList = ({ incomes, onDelete }) => (
    <div className="list-section">
        <h2>Incomes</h2>
        <ul>
            {incomes.map((income) => (
                <li key={income._id}>
                    {income.title} - ₹{income.amount} - {income.category}
                    <button onClick={() => onDelete(income._id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

export default IncomeList;
