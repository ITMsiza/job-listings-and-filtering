// src/App.js

import React from 'react';
import JobList from './components/JobList';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Jobs</h1>
      </header>
      <main>
        <JobList />
      </main>
    </div>
  );
}

export default App;
