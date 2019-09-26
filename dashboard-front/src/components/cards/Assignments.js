import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { useCanvasPlanner, useCanvasGrades } from '../../hooks/canvas';
import { CANVAS_API_KEY } from '../../settings';
/**
|--------------------------------------------------
| Uses canvas api to retrieve upcoming assignments for the user
|--------------------------------------------------
*/

const useAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  const planner = useCanvasPlanner();

  useCallback(() => {
    setAssignments(planner);
  }, [planner]);

  return assignments;
};

export const Assignments = () => {
  return (
    <div className='card__assignments'>
      <div className='card__assignments__title'>
        <h2>Assignments</h2>
      </div>
      {useAssignments()}
    </div>
  );
};
