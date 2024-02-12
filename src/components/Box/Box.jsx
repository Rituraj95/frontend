import React, { useState } from 'react';

const FilterBox = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="filter-box">
      <label htmlFor="filterSelect">Filter:</label>
      <select id="filterSelect" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        {/* Add more dummy options as needed */}
      </select>

      {/* Additional content can be added here */}
      <div className="additional-content">
        <p>This is additional content in the box.</p>
        <p>You can add more components, text, or anything else you need.</p>
      </div>
    </div>
  );
};

export default FilterBox;
