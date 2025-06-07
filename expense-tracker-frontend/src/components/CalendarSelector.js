import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarSelector = ({ selectedDate, setSelectedDate, setActiveMonthDate }) => {
    const handleMonthChange = ({ activeStartDate }) => {
        if (setActiveMonthDate) {
            setActiveMonthDate(activeStartDate); 
        }
    };

    return (
        <div className="calendar-wrapper">
            <h2>Select Date</h2>
            <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="react-calendar"
                onActiveStartDateChange={handleMonthChange}
            />
        </div>
    );
};

export default CalendarSelector;
