import React from 'react';

function Thermostat() {
  return (
    <div>
      <h3>Home Thermostat</h3>
      <div className="thermostat-value">19°C</div>
      <div className="thermostat-controls">
        <button>⬆</button>
        <button>⬇</button>
      </div>
    </div>
  );
}

export default Thermostat;
