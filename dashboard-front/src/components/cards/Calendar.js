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

const useCalendarBody = month => {
  const [calendarBody, setCalendarBody] = useState([]);

  useEffect(() => {
    const firstDate = new Date(2019, 9, 1);
    const firstDateWeekday = firstDate.getDay();
    const lastDate = new Date(2019, month + 1, 0);
    const lastDateWeekday = lastDate.getDay();
    let tempBody = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      if (dayCounter < 32) {
        tempBody[i] = [];

        for (let j = 0; j < 7; j++) {
          if (i > 0 || j >= firstDateWeekday) {
            if (
              j <= lastDateWeekday ||
              tempBody[i][0] < 24 ||
              !tempBody[i][0]
            ) {
              tempBody[i][j] = dayCounter;
              dayCounter++;
            } else {
              tempBody[i][j] = null;
            }
          } else {
            tempBody[i][j] = null;
          }
        }
      }
    }

    console.log(tempBody);

    let tableBody = tempBody.map((row, index) => {
      return (
        <tr key={index}>
          {row.map((day, dayIndex) => {
            return <td key={dayIndex}>{day}</td>;
          })}
        </tr>
      );
    });

    setCalendarBody(tableBody);
  }, [month]);

  return { calendarBody, setCalendarBody };
};

const renderDays = () => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  return days.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

export const Calendar = () => {
  return (
    <div className='card__calendar'>
      <table>
        <thead>{renderDays()}</thead>
        <tbody>{useCalendarBody(9).calendarBody}</tbody>
      </table>
    </div>
  );
};
