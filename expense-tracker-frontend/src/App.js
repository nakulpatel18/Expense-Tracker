import React, { useEffect, useState, useRef } from 'react';
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
    const [activeMonthDate, setActiveMonthDate] = useState(new Date());
    const [editingItem, setEditingItem] = useState(null);
    const formRef = useRef(null);

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

    const addOrUpdateExpense = async (data) => {
        if (editingItem) {
            try {
                const res = await axios.put(`http://localhost:5000/api/expenses/${editingItem._id}`, data);
                setExpenses(expenses.map((item) => (item._id === editingItem._id ? res.data : item)));
                setEditingItem(null);
            } catch (err) {
                console.error('Error updating expense:', err);
            }
        } else {
            try {
                const res = await axios.post('http://localhost:5000/api/expenses', data);
                setExpenses([...expenses, res.data]);
            } catch (err) {
                console.error('Error adding expense:', err);
            }
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

    const startEditing = (item) => {
        setEditingItem(item);
        setSelectedDate(new Date(item.date));
        setActiveMonthDate(new Date(item.date));
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const filterByTypeAndDate = (type) => {
        if (!selectedDate) return [];
        return expenses.filter((exp) => {
            const expDate = new Date(exp.date);
            return (
                exp.type === type &&
                expDate.getMonth() === selectedDate.getMonth() &&
                expDate.getFullYear() === selectedDate.getFullYear() &&
                expDate.toDateString() === selectedDate.toDateString()
            );
        });
    };

    const monthlySummary = (type) => {
        const month = activeMonthDate.getMonth();
        const year = activeMonthDate.getFullYear();
        return expenses
            .filter((exp) => {
                const expDate = new Date(exp.date);
                return (
                    exp.type === type &&
                    expDate.getMonth() === month &&
                    expDate.getFullYear() === year
                );
            })
            .reduce((total, item) => total + parseFloat(item.amount), 0);
    };

    const chartData = () => {
        const month = activeMonthDate.getMonth();
        const year = activeMonthDate.getFullYear();
        const filtered = expenses.filter((exp) => {
            const expDate = new Date(exp.date);
            return (
                exp.type === 'expense' &&
                expDate.getMonth() === month &&
                expDate.getFullYear() === year
            );
        });
        const data = {};
        filtered.forEach((exp) => {
            data[exp.category] = (data[exp.category] || 0) + parseFloat(exp.amount);
        });
        return Object.entries(data).map(([category, amount]) => ({ category, amount }));
    };

    return (
        <div>
            <CalendarSelector
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setActiveMonthDate={setActiveMonthDate}
            />

            <div ref={formRef}>
                <ExpenseForm
                    onSubmit={addOrUpdateExpense}
                    selectedDate={selectedDate}
                    categories={categories}
                    editingItem={editingItem}
                    clearEdit={() => setEditingItem(null)}
                />
            </div>

            <div className="summary">
                <div>Total Income (Monthly): ₹{monthlySummary('income')}</div>
                <div>Total Expense (Monthly): ₹{monthlySummary('expense')}</div>
            </div>

            <div className="lists">
                <ExpenseList expenses={filterByTypeAndDate('expense')} onEdit={startEditing} onDelete={deleteExpense} />
                <IncomeList incomes={filterByTypeAndDate('income')} onEdit={startEditing} onDelete={deleteExpense} />
            </div>

            <ExpenseChart chartData={chartData()} />
        </div>
    );
};

export default App;
