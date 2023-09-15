import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createClientMessage } from 'react-chatbot-kit';
import { addSelectedDate } from '../slices/StudentSlice';

function CalendarSlot(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [showTimes, setShowTimes] = useState(false);
  const dispatch = useDispatch();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowTimes(true);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);

    props.setState((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        createClientMessage(
          `Selected Date: ${selectedDate.toDateString()} ${time}`
        ),
      ],
    }));

    dispatch(addSelectedDate({ date: selectedDate, time }));
    props.actionProvider.handleEnterName();
  };

  const handleLeftArrowClick = () => {
    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(newStartDate.getDate() - 3);
      return newStartDate;
    });
  };

  const handleRightArrowClick = () => {
    setStartDate((prevStartDate) => {
      const newStartDate = new Date(prevStartDate);
      newStartDate.setDate(newStartDate.getDate() + 3);
      return newStartDate;
    });
  };

  const generateCalendarDates = () => {
    const dates = [];
    for (let i = 0; i < 3; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const times = {
    MORNING: ['9:00AM', '10:00AM', '11:00AM'],
    NOON: ['12:00PM', '1:00PM', '2:00PM', '3:00PM'],
    EVENING: ['4:00PM', '5:00PM', '6:00PM'],
  };

  return (
    <div className="calendar-strip">
      <h3>Select a Date:</h3>
      <div className="calendar-navigation">
        <button type="button" onClick={handleLeftArrowClick}>
          &lt;
        </button>
        <div className="calendar-dates">
          {generateCalendarDates().map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => handleDateClick(date)}
              type="button"
              className={
                date.toDateString() === selectedDate?.toDateString()
                  ? 'selected'
                  : ''
              }
            >
              {date.toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </button>
          ))}
        </div>
        <button type="button" onClick={handleRightArrowClick}>
          &gt;
        </button>
      </div>

      {showTimes && (
        <>
          <h3>Select a Time:</h3>
          <div className="calendar-datess">
            {Object.keys(times).map((timeGroup) => (
              <div key={timeGroup}>
                <p>{timeGroup}:</p>
                {times[timeGroup].map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeClick(time)}
                    type="button"
                    className={time === selectedTime ? 'selected' : ''}
                  >
                    {time}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CalendarSlot;
