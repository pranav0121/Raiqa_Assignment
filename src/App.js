import React, { useState, useEffect } from 'react';
import './App.css';
import Counter from './components/Counter';
import ListView from './components/ListView';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem('numberList');
    if (savedList) {
      setList(JSON.parse(savedList));
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem('numberList', JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <h1>Number List Manager</h1>
      <div className="app-container">
        <Counter list={list} setList={setList} />
        
        <ListView list={list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
