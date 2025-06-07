import React, { useEffect, useState } from 'react';

const ExpenseForm = ({ onSubmit, selectedDate, categories, editingItem, clearEdit }) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');
    const [type, setType] = useState('expense');
    const [date, setDate] = useState(selectedDate);

    useEffect(() => {
        if (editingItem) {
            setTitle(editingItem.title);
            setAmount(editingItem.amount);
            setCategory(categories.includes(editingItem.category) ? editingItem.category : 'Other');
            setCustomCategory(categories.includes(editingItem.category) ? '' : editingItem.category);
            setType(editingItem.type);
            setDate(new Date(editingItem.date));
        } else {
            setTitle('');
            setAmount('');
            setCategory('');
            setCustomCategory('');
            setType('expense');
            setDate(selectedDate);
        }
    }, [editingItem, selectedDate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount || !date || (!category && !customCategory)) {
            alert('Please fill in all fields');
            return;
        }
        const selectedCategory = category === 'Other' ? customCategory : category;
        onSubmit({ title, amount, category: selectedCategory, type, date });
    };

    return (
        <div className="form-section">
            <h1>{editingItem ? 'Edit Entry' : `Add ${type === 'income' ? 'Income' : 'Expense'}`}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    type="date"
                    value={new Date(date).toISOString().split('T')[0]}
                    onChange={(e) => setDate(new Date(e.target.value))}
                />
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
                    <input
                        type="text"
                        placeholder="Custom Category"
                        value={customCategory}
                        onChange={(e) => setCustomCategory(e.target.value)}
                    />
                )}
                <button type="submit">{editingItem ? 'Update' : `Add ${type === 'income' ? 'Income' : 'Expense'}`}</button>
                {editingItem && <button type="button" onClick={clearEdit}>Cancel</button>}
            </form>
        </div>
    );
};

export default ExpenseForm;
