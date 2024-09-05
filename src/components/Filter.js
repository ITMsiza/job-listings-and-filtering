// src/components/Filter.js

import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
    onFilterChange({ location: e.target.value, type });
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onFilterChange({ location, type: e.target.value });
  };

  return (
    <>
      <div className='locationInput'>
        <label>
          <span>Location:</span>
          <select value={location} onChange={handleLocationChange}>
            <option value="">All</option>
            <option value="New York">New York</option>
            <option value="San Francisco">San Francisco</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
          </select>
        </label>
      </div>
      <div className='typeInput'>
        <label>
          <span>Type:</span>
          <select value={type} onChange={handleTypeChange}>
            <option value="">All</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Remote">Remote</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Filter;
