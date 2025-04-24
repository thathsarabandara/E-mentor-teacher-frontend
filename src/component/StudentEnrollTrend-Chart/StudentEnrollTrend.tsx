'use client'
import React from 'react';
import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
}
from 'recharts';

type StudentEnrollProp = {
    data:{date: string , enrollments: number}[];
}

const StudentEnrollTrends: React.FC<StudentEnrollProp> = ({data}) => {
    return(
        <div className="bg-white rounded-xl p-4 shadow-sm w-full h-64">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Student Enrollment Trends</h2>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Tooltip
                    contentStyle={{ borderRadius: '8px', backgroundColor: '#ffffff', borderColor: '#E5E7EB' }}
                    labelStyle={{ color: '#374151', fontWeight: 600 }}
                    cursor={{ stroke: '#10B981', strokeWidth: 1 }}
                />
                <Line
                    type="monotone"
                    dataKey="enrollments"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    dot={{ r: 5, stroke: '#3B82F6', fill: '#fff', strokeWidth: 2 }}
                    activeDot={{ r: 7 }}
                />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
} 

export default StudentEnrollTrends;
