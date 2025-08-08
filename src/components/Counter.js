import React, { useState } from 'react';

function Counter({ list, setList }) {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function addNumber() {
    if (count > 0) {
      if (!list.includes(count)) {
        setList([...list, count]);
        setCount(0);
      }
    }
  }

  return (
    <div className="counter-section">
      <h2>Add Numbers</h2>
      
      <div className="count-display">
        Current Number: {count}
      </div>
      
      <div className="button-group">
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      
      <button className="add-button" onClick={addNumber}>
        Add to List
      </button>
    </div>
  );
}

export default Counter;
