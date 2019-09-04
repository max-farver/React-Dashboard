import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Sidebar } from './components/layout/Sidebar'
import { Content } from './components/layout/Content'

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Content/>
    </div>
  );
}

export default App;
