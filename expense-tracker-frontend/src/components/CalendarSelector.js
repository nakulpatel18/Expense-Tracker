import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSelector = ({ selectedDate, setSelectedDate }) => (
    <div className="calendar-wrapper">
        <h2>Select Date</h2>
        <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="react-calendar"
        />
    </div>
);

export default CalendarSelector;
