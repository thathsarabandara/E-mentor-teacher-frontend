'use client'
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ReviewData {
  star: string;
  count: number;
}

interface ProfileReviewDonutProps {
  reviews: ReviewData[];
}

const ProfileReviewDonut: React.FC<ProfileReviewDonutProps> = ({ reviews }) => {
  const data = {
    labels: reviews.map((item) => item.star),
    datasets: [
      {
        label: 'Reviews',
        data: reviews.map((item) => item.count),
        backgroundColor: [
          '#fb923c',
          '#fdba74',
          '#fdba74',
          '#fde68a',
          '#fef3c7',
        ],
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 14,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#374151',
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => ` ${context.raw} Reviews`,
        },
        backgroundColor: '#111827',
        titleColor: '#f3f4f6',
        bodyColor: '#f3f4f6',
        cornerRadius: 8,
        padding: 12,
      },
    },
  };

  return (
    <div className="w-full max-w-xs mx-auto shadow-lg p-6 rounded-2xl bg-white mt-4">
        <h2 className="text-lg font-bold mb-4">Profile Review</h2>
        <Doughnut data={data} options={options} />
    </div>
  );
};

export default ProfileReviewDonut;

