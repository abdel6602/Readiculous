import React from 'react';
import './styles.css';
import DonutChart from './DonutChart';

const ReadingProgressCard = () => {
  const percentage = 55; 

  return (
    <div className="progress-container">
      <div className="reading-progress">READING PROGRESS</div>
         <DonutChart percentage={percentage} />
    </div>
  );
};

export default ReadingProgressCard;
