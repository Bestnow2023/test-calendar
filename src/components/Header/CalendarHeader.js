import React from 'react';
import './Header.css';

const CalendarHeader = ({ currentMonth, currentYear, onPreviousMonthClick, onNextMonthClick }) => {
  return (
    <div className="calendar-header">
      {/* Button to navigate to the previous month */}
      <button onClick={onPreviousMonthClick} className="navigation-button navigation-button-prev" />

      {/* Display the current month and year */}
      <h2>{`${currentMonth} ${currentYear}`}</h2>

      {/* Button to navigate to the next month */}
      <button onClick={onNextMonthClick} className="navigation-button navigation-button-next" />
    </div>
  );
};

export default CalendarHeader;
