'use client'
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A020F0'];

interface StudentByCountryProps {
    data:{name:string, value:number}[],
}

const StudentsByCountryChart: React.FC<StudentByCountryProps> = ({data}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg min-w-sm">
      <h2 className="text-lg font-bold mb-4">Most Students by Country</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentsByCountryChart;
