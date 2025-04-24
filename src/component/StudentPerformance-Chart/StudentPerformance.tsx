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
    <div className="flex flex-col justify-center items-start w-11/12 bg-white rounded-xl mt-6 mr-4 py-3 px-16">
        <h2 className="text-lg font-bold mb-4">Student Performance Distribution</h2>
        <Bar data={data} options={options} />
    </div>
  );
};

export default StudentPerformanceDistribution;
