import React from 'react'
import { Weather } from '../cards/Weather'
import { Todo } from '../cards/Todo';
import { Assignments } from '../cards/Assignments';
import { Clock } from '../cards/Clock';
import { Grades } from '../cards/Grades';
import { Calendar } from '../cards/Calendar';
import { Meals } from '../cards/Meals';

export const Content = () => {
  return (
    <div className="content">
      <Weather />
      <Todo />
      <Assignments />
      <Grades />
      <Clock />
      <Calendar />
      <Meals />
    </div>
  );
}