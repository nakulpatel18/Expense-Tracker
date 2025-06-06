import React, { useState } from 'react';

const ExpenseForm = ({ onAdd, selectedDate, categories }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');
    const [type, setType] = useState('expense');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount || !selectedDate || (!category && !customCategory)) {
            alert('Please fill in all fields');
            return;
        }

        const selectedCategory = category === 'Other' ? customCategory : category;

        onAdd({ title, amount, category: selectedCategory, type, date: selectedDate });

        setTitle('');
        setAmount('');
        setCategory('');
        setCustomCategory('');
    };

    return (
        <div className="form-section">
            <h1>Add {type === 'income' ? 'Income' : 'Expense'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                    <option value="Other">Other</option>
                </select>
                {category === 'Other' && (
                    <input type="text" placeholder="Custom Category" value={customCategory} onChange={(e) => setCustomCategory(e.target.value)} />
                )}
                <button type="submit">Add {type === 'income' ? 'Income' : 'Expense'}</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
