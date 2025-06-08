import React from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList
} from 'recharts';

const ExpenseChart = ({ chartData }) => (
    <div className="chart-section">
        <h2>Monthly Expense Chart</h2>

        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8">
                    <LabelList dataKey="amount" position="top" />
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default ExpenseChart;

