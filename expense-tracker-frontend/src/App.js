import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import CalendarSelector from './components/CalendarSelector';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import IncomeList from './components/IncomeList';
import ExpenseChart from './components/ExpenseChart';

const App = () => {
    const [expenses, setExpenses] = useState([]);
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

    const addExpense = async (data) => {
        try {
            const res = await axios.post('http://localhost:5000/api/expenses', data);
            setExpenses([...expenses, res.data]);
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
            return exp.type === type && expDate.toDateString() === selectedDate.toDateString();
        });
    };

    const chartData = () => {
        const month = new Date().getMonth();
        const year = new Date().getFullYear();

        const monthlyExpenses = expenses.filter((exp) => {
            const expDate = new Date(exp.date);
            return expDate.getMonth() === month && expDate.getFullYear() === year && exp.type === 'expense';
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
            <CalendarSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            {selectedDate && (
                <>
                    <ExpenseForm onAdd={addExpense} selectedDate={selectedDate} categories={categories} />
                    <div className="lists">
                        <ExpenseList expenses={filterByTypeAndDate('expense')} onDelete={deleteExpense} />
                        <IncomeList incomes={filterByTypeAndDate('income')} onDelete={deleteExpense} />
                    </div>
                </>
            )}

            <ExpenseChart chartData={chartData()} />
        </div>
    );
};

export default App;
