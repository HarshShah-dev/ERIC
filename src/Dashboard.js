import React from 'react';
import ComfortScore from './ComfortScore';
import Thermostat from './Thermostat';
import Overview from './Overview';
import TemperatureChart from './TemperatureChart';
import EntryChart from './EntryChart';
import StatusBars from './StatusBars.jsx';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-item half-width single-row">
        <ComfortScore />
      </div>
      <div className="dashboard-item quarter-width single-row">
        <StatusBars />
      </div>
      <div className="dashboard-item quarter-width triple-row">
        <div>Door Camera (Live Feed)</div>
      </div>
      <div className="dashboard-item quarter-width double-row">
        <Thermostat />
      </div>
      <div className="dashboard-item quarter-width single-row">
        <div>Room Lights</div>
      </div>
      <div className="dashboard-item quarter-width">
        <div>Security Alarm</div>
      </div>
      
      <div className="dashboard-item half-width single-row">
        <div>Weather Info</div>
      </div>
      <div className="dashboard-item half-width">
        <Overview />
      </div>
      <div className="dashboard-item quarter-width">
        <TemperatureChart />
      </div>
      <div className="dashboard-item quarter-width">
        <EntryChart />
      </div>
      
    </div>
  );
}

export default Dashboard;
