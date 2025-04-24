"use client"
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from 'recharts';

interface EarningDataProp {
    data: { date:string, earnings:number }[];
    height: number
}

const EarningsChart: React.FC<EarningDataProp> = ({data,height}) => {
  return (
    <div className="bg-white rounded-xl p-4 pb-4 shadow-sm w-full">
      <h2 className="text-lg font-semibold mb-4">Earnings Over Time</h2>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
          <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6B7280' }} />
          <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
          <Tooltip contentStyle={{ borderRadius: '8px', backgroundColor: '#ffffff', borderColor: '#E5E7EB' }} />
          <Area
            type="monotone"
            dataKey="earnings"
            stroke="#10B981"
            fillOpacity={1}
            fill="url(#colorEarnings)"
            strokeWidth={2.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
