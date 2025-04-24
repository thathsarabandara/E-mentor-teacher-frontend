'use client'
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CourseData {
  completedCourses: number;
  ongoingCourses: number;
}

interface PieChartProps {
  data: CourseData;
}

const CourseCompletionChart: React.FC<PieChartProps> = ({ data }) => {
  const pieData = {
    labels: ['Completed Courses', 'Ongoing Courses'],
    datasets: [
      {
        data: [data.completedCourses, data.ongoingCourses], 
        backgroundColor: ['#4B8B3B', '#FFCC00'],
        hoverBackgroundColor: ['#3E7033', '#D8A700'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Course Completion Status',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw} Courses`,
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center w-full mx-auto bg-white rounded-xl py-17">
      <Pie data={pieData} options={options} />
    </div>
  );
};

export default CourseCompletionChart;
