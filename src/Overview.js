import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', score: 70 },
  { name: 'Tue', score: 80 },
  { name: 'Wed', score: 65 },
  { name: 'Thu', score: 85 },
  { name: 'Fri', score: 75 },
  { name: 'Sat', score: 60 },
  { name: 'Sun', score: 90 },
];

function OverviewChart() {
  return (
    <div className="overview-chart">
      <h3>Overview</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="score" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OverviewChart;
