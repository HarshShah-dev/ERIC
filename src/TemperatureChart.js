import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', temp: 18 },
  { name: 'Tue', temp: 19 },
  { name: 'Wed', temp: 17 },
  { name: 'Thu', temp: 20 },
  { name: 'Fri', temp: 21 },
  { name: 'Sat', temp: 22 },
  { name: 'Sun', temp: 19 },
];

function TemperatureChart() {
  return (
    <div className="temperature-chart">
      <h3>Temperature</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="temp" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;
