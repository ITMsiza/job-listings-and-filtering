// src/components/JobList.js

import React, { useState } from 'react';
import { jobData } from '../jobs';
import Filter from './Filter';

const JobList = () => {
  const [filteredJobs, setFilteredJobs] = useState(jobData);
  const [filteredType, setFilteredType] = useState(null);
  const [all, setAll] = useState(true);

  const handleFilterChange = (filters) => {
    const { location, type } = filters;
    let filtered = jobData;

    if (location) {
      filtered = filtered.filter(job => job.location === location);
    }

    if (type) {
      filtered = filtered.filter(job => job.type === type);
    }

    setFilteredJobs(filtered);
    setFilteredType(type);
    setAll(!type); // If type is null, setAll to true, otherwise false
  };

  const counts = jobData.reduce((acc, job) => {
    if (acc[job.type]) {
      acc[job.type]++;
    } else {
      acc[job.type] = 1;
    }
    return acc;
  }, {});

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <div className='bodyContent'>
        <div className='sideBar'>
          <h1>Filters</h1>
          <div>
            <div className='type'>Type</div>
            {all ? (
              <div>
                <p>Full-time: {counts['Full-time'] || 0} <br /></p>
                <p>Part-time: {counts['Part-time'] || 0} <br /></p>
                <p>Remote: {counts['Remote'] || 0}</p>
              </div>
            ) : (
              <p>{filteredType}: {filteredJobs.length}</p>
            )}
          </div>
        </div>
        <ul>
          <div className='head'>
            <h4>Job Title</h4>
            <h4>Location</h4>
            <h4>Company</h4>
            <h4>Type</h4>
          </div>
          {filteredJobs.map(job => (
            <li key={job.id}>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <p>{job.company}</p>
              <p>{job.type}</p>      
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobList;
