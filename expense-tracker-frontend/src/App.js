import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [customCategory, setCustomCategory] = useState('');
    const [type, setType] = useState('expense');
    const [selectedDate, setSelectedDate] = useState(new Date());

    const categories = ['Food', 'Travel', 'Shopping', 'Bills', 'Salary', 'Investment'];

    useEffect(() => {
        fetchExpenses();
    }, []);

    const fetchExpenses = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/expenses');
            setExpenses(res.data);
        } catch (err) {
            console.error('Error fetching expenses:', err);
        }
    };

    const addExpense = async (e) => {
        e.preventDefault();
        if (!title || !amount || !selectedDate || (!category && !customCategory)) {
            alert('Please fill in all fields');
            return;
        }

        const selectedCategory = category === 'Other' ? customCategory : category;

        try {
            const res = await axios.post('http://localhost:5000/api/expenses', {
                title,
                amount,
                category: selectedCategory,
                type,
                date: selectedDate,
            });

            setExpenses([...expenses, res.data]);
            setTitle('');
            setAmount('');
            setCategory('');
            setCustomCategory('');
        } catch (err) {
            console.error('Error adding expense:', err);
        }
    };

    const deleteExpense = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            setExpenses(expenses.filter((exp) => exp._id !== id));
        } catch (err) {
            console.error('Error deleting expense:', err);
        }
    };

    const filterByTypeAndDate = (type) => {
        if (!selectedDate) return [];
        return expenses.filter((exp) => {
            const expDate = new Date(exp.date);
            return (
                exp.type === type &&
                expDate.toDateString() === new Date(selectedDate).toDateString()
            );
        });
    };

    const chartData = () => {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();

        const monthlyExpenses = expenses.filter((exp) => {
            const expDate = new Date(exp.date);
            return (
                expDate.getMonth() === month &&
                expDate.getFullYear() === year &&
                exp.type === 'expense'
            );
        });

        const data = {};
        monthlyExpenses.forEach((exp) => {
            data[exp.category] = (data[exp.category] || 0) + parseFloat(exp.amount);
        });

        return Object.entries(data).map(([key, value]) => ({
            category: key,
            amount: value,
        }));
    };

    return (
        <div>
            <div className="calendar-wrapper">
                <h2>Select Date</h2>
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    className="react-calendar"
                />
            </div>

            {selectedDate && (
                <div className="form-section">
                    <h1>Add {type === 'income' ? 'Income' : 'Expense'}</h1>
                    <form onSubmit={addExpense}>
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
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
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
                        <button type="submit">Add {type === 'income' ? 'Income' : 'Expense'}</button>
                    </form>

                    <div className="lists">
                        <div className="list-section">
                            <h2>Expenses</h2>
                            <ul>
                                {filterByTypeAndDate('expense').map((expense) => (
                                    <li key={expense._id}>
                                        {expense.title} - ₹{expense.amount} - {expense.category}
                                        <button onClick={() => deleteExpense(expense._id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="list-section">
                            <h2>Incomes</h2>
                            <ul>
                                {filterByTypeAndDate('income').map((income) => (
                                    <li key={income._id}>
                                        {income.title} - ₹{income.amount} - {income.category}
                                        <button onClick={() => deleteExpense(income._id)}>Delete</button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <div className="chart-section">
                <h2>Monthly Expense Chart</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData()}>
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="amount" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default App;
