import React from 'react';

interface CardProps {
  label: string;
  icon: React.ReactNode;
  color: string;
  value: string | number;
}

const DashboardCard: React.FC<CardProps> = ({ label, icon, color, value }) => {
  return (
    <div className="flex justify-start items-center bg-white w-64 px-5 py-3 rounded-lg">
      <div className={`flex justify-center items-center ${color} w-12 h-12`}>
        {icon}
      </div>
      <div className="ml-3">
        <p className="text-lg font-bold">{value}</p>
        <p className="text-xs text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default DashboardCard;
