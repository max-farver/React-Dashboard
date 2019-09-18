import React from 'react';
import { useEffect, useState } from 'react';

/**
|--------------------------------------------------
| calendar object stored in 2d array, 7 cols and 6 rows
|
| to get month, create a Date object and use getDay() to
| find when the first day is, then populate until the last day
|
| use html table for styling
|--------------------------------------------------
*/

const useCalendarBody = (year, month) => {
  const [calendarBody, setCalendarBody] = useState([]);

  useEffect(() => {
    const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const firstDate = new Date(year, month, 1);
    const firstDateWeekday = firstDate.getDay();
    const tempBody = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      if (dayCounter < daysInMonths[month]) {
        tempBody[i] = [];

        for (let j = 0; j < 7; j++) {
          if (i === 0) {
            if (j >= firstDateWeekday) {
              tempBody[i][j] = dayCounter;
              dayCounter++;
            } else {
              tempBody[i][j] = '';
            }
          } else if (dayCounter <= daysInMonths[month]) {
            tempBody[i][j] = dayCounter;
            dayCounter++;
          } else {
            tempBody[i][j] = '';
          }
        }
      }
    }

    setCalendarBody(tempBody);
  }, [month, year]);

  return { calendarBody, setCalendarBody };
};

const useAgenda = (year, month, day) => {
  const [agenda, setAgenda] = useState();

  useEffect(() => {
    // const eventList = useEvents(year, month, day);
    setAgenda(
      <div className='card__calendar__agenda__events'>
        <div className='card__calendar__agenda__events-time'>
          <ul className='dashed'>
            <li>10:00am</li>
          </ul>
        </div>
        <div className='card__calendar__agenda__events-event'>
          <ul>
            <li>lkajf</li>
          </ul>
        </div>
      </div>
    );
  }, [year, month, day]);

  return agenda;
};

const renderDays = () => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  return days.map((key, index) => <th key={index}>{key.toUpperCase()}</th>);
};

export const Calendar = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDay, setSelectedDay] = useState();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return (
    <div className='card__calendar'>
      <div className='card__calendar__header'>
        <button
          className='left'
          onClick={() => {
            if (selectedMonth === 0) {
              setSelectedMonth(11);
              setSelectedYear(selectedYear - 1);
            } else {
              setSelectedMonth(selectedMonth - 1);
            }
          }}
        >
          &lt;
        </button>
        <h2>
          {selectedYear} - {monthNames[selectedMonth]}
        </h2>
        <button
          className='right'
          onClick={() => {
            if (selectedMonth === 11) {
              setSelectedMonth((selectedMonth + 1) % 12);
              setSelectedYear(selectedYear + 1);
            } else {
              setSelectedMonth(selectedMonth + 1);
            }
          }}
        >
          &gt;
        </button>
      </div>
      <div className='card__calendar__weeks'>
        <table>
          <thead>
            <tr>{renderDays()}</tr>
          </thead>
          <tbody>
            {useCalendarBody(selectedYear, selectedMonth).calendarBody.map(
              (row, index) => (
                <tr key={index}>
                  {row.map((day, dayIndex) => {
                    if (day !== '') {
                      return (
                        <td key={dayIndex}>
                          <div
                            onClick={() => setSelectedDay(day)}
                            // onDoubleClick={() => useModal()}
                            className={
                              selectedDay === day ? 'active' : 'inactive'
                            }
                          >
                            {day}
                          </div>
                        </td>
                      );
                    } else {
                      return <td key={dayIndex}>{day}</td>;
                    }
                  })}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div hidden={!selectedDay}>
        <div className='card__calendar__agenda--name'>
          <h3>
            {monthNames[selectedMonth]}, {selectedDay}'s Events:
          </h3>
        </div>
        {useAgenda(selectedYear, selectedMonth, selectedDay)}
      </div>
    </div>
  );
};
