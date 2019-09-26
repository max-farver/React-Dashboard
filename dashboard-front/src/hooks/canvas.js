import React from 'react';
import { useState, useEffect } from 'react';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://canvas.iastate.edu/api/graphql'
});

export const useCanvasPlanner = () => {
  const [planner, setPlanner] = useState([]);

  useEffect(() => {
    // TODO
  }, []);
  return planner;
};

export const useCanvasGrades = () => {
  const [grades, setGrades] = useState({});

  useEffect(() => {
    // TODO
  }, []);
  return grades;
};
