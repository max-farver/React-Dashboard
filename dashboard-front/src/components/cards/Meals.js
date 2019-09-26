import React from 'react';
import { useEffect, useState } from 'react';

const useMeal = day => {
  const [meal, setMeal] = useState('');

  useEffect(() => {
    setMeal('temp meal');
  }, []);

  return meal;
};

export const Meals = () => {
  return (
    <div className='card__meals'>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Sun -&nbsp;</h2>
        <h2 className='card__meals__day meal'>{useMeal('sun')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Mon -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('mon')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Tues -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('tues')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Wed -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('wed')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Thurs -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('thurs')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Fri -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('fri')}</h2>
      </div>
      <div className='card__meals__day'>
        <h2 className='card__meals__day day'>Sat -&nbsp;</h2>
        <h2 className='card__meals__day meal'> {useMeal('sat')}</h2>
      </div>
    </div>
  );
};
