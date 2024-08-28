import React from 'react';

function StatusBars() {
  return (
    <div>
        <div className="status-bar-label">Temperature Score</div>
        <div className="status-bar-meter">
          <div className="status-bar-meter-fill" style={{ width: '40%', backgroundColor: '#0096c7' }}></div>
        </div>
        <div className="status-bar-label">Humidity Score</div>
        <div className="status-bar-meter">
          <div className="status-bar-meter-fill" style={{ width: '80%', backgroundColor: '#00b4d8' }}></div>
        </div>
        <div className="status-bar-label">Movement Score</div>
        <div className="status-bar-meter">
          <div className="status-bar-meter-fill" style={{ width: '50%', backgroundColor: '#00d3f9' }}></div>
        </div>
      </div>
  );
}

export default StatusBars;
