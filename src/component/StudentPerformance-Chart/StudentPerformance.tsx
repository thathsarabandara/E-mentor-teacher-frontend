'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface PerformanceData {
  gradeRange: string;
  studentCount: number;
}

interface StudentPerformanceDistributionProps {
  performancesData: PerformanceData[];
}

const StudentPerformanceDistribution: React.FC<StudentPerformanceDistributionProps> = ({ performancesData }) => {
  const data = {
    labels: performancesData.map(item => item.gradeRange),
    datasets: [
      {
        label: 'Number of Students',
        data: performancesData.map(item => item.studentCount),
        backgroundColor: '#4B8B3B',
        borderColor: '#2F7A29',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Student Performance Distribution',
      },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.raw} Students`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Grade Range',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Students',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Bar data={data} options={options} />
    </div>
  );
};

export default StudentPerformanceDistribution;
