import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calendar = ({ selectedDate, onDateSelect }) => {
  return (
    <div className="calendar-container p-4 bg-white dark:bg-gray-900 rounded-lg shadow w-fit">
      <DayPicker 
        mode="single"
        selected={selectedDate}
        onSelect={onDateSelect}
        footer={selectedDate ? (
          <p className="mt-2 text-gray-500">
            You selected {format(selectedDate, 'PP')}
          </p>
        ) : null}
      />
    </div>
  );
};

export default Calendar; 