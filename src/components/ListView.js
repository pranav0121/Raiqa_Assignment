import React, { useState } from 'react';

function ListView({ list, setList }) {

  const [ascending, setAscending] = useState(true);

  function toggleSort() {
    setAscending(!ascending);
  }

  function resetList() {
    setList([]);
  }

  function getSortedList() {

    const sortedList = [...list];
    

    if (ascending) {
      // Sort from smallest to largest
      sortedList.sort((a, b) => a - b);
    } else {
      // Sort from largest to smallest
      sortedList.sort((a, b) => b - a);
    }
    
    return sortedList;
  }

  const displayList = getSortedList();

  return (
    <div className="list-section">
      <h2>Number List</h2>
      
      {/* Control buttons */}
      <div className="button-group">
        <button onClick={toggleSort}>
          Sort: {ascending ? 'Ascending' : 'Descending'}
        </button>
        <button onClick={resetList}>Reset List</button>
      </div>
      
      {/* Display the list or a message if empty */}
      {displayList.length === 0 ? (
        <p className="empty-message">No numbers yet</p>
      ) : (
        <ul className="number-list">
          {/* Loop through each number and create a list item */}
          {displayList.map((number, index) => (
            <li key={index} className="number-item">
              {number}
            </li>
          ))}
        </ul>
      )}
      
      {/* Show how many numbers we have */}
      <p className="count-info">
        Total numbers: {list.length}
      </p>
    </div>
  );
}

export default ListView;
