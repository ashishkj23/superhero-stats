import React from 'react';
import './Stats.css';

const Stats = ({ stats }) => {
  return (
    <ul className="stats-list">
      {Object.entries(stats).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  );
};

export default Stats;
