import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ComfortScore() {
  const value = 75;

  return (
    <div className="comfort-score-container">
      <div className="score-container">
        <h1>Comfort Score</h1>
        <div className="gauge-chart">
          <CircularProgressbar
            value={value}
            text={`${value}`}
            strokeWidth={15}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${value / 100})`,
              textColor: 'rgba(62, 152, 199)',
              trailColor: '#d6d6d6',
              strokeLinecap: 'round',
              textSize: '28'
            })}
          />
        </div>
      </div>
      <div className="comment-box">
        <h4>There is room for improvement:</h4>
        <ul>
          <li>It's a little colder than recommended. The temperature should be increased.</li>
          <li>More movement is recommended between 2 pm and 4 pm.</li>
        </ul>
      </div>
    </div>
  );
}

export default ComfortScore;
