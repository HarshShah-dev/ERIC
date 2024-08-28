import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', motion: 30 },
  { name: 'Tue', motion: 40 },
  { name: 'Wed', motion: 20 },
  { name: 'Thu', motion: 50 },
  { name: 'Fri', motion: 60 },
  { name: 'Sat', motion: 80 },
  { name: 'Sun', motion: 100 },
];

function EntryChart() {
  return (
    <div className="entry-chart">
      <h3>Entry</h3>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="motion" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default EntryChart;
