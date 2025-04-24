import DashboardCard from '@/component/DashboardCard/DashboardCard'
import EarningsChart from '@/component/Earning-Chart/EarningChart';
import Navbar from '@/component/Navbar/Navbar'
import StudentsByCountryChart from '@/component/StudentByCountry-Chart/StudentByCountry';
import StudentEnrollTrends from '@/component/StudentEnrollTrend-Chart/StudentEnrollTrend';
import React from 'react'
import { MdAttachMoney, MdGroups, MdLaptopChromebook, MdOutlineCheckCircle, MdOutlineDoneAll, MdOutlinePlayCircleOutline, MdSchool, MdSell } from 'react-icons/md';

const Dashboard: React.FC = () => {
  const cardsData = [
    {
      label: 'Enrolled Courses',
      icon: <MdOutlinePlayCircleOutline className="text-red-700 text-xl" />,
      color: 'bg-red-100',
      value: 957
    },
    {
      label: 'Active Courses',
      icon: <MdOutlineCheckCircle className="text-green-700 text-xl" />,
      color: 'bg-green-100',
      value: 43
    },
    {
      label: 'Course Instructors',
      icon: <MdSchool className="text-blue-700 text-xl" />,
      color: 'bg-blue-100',
      value: 12
    },
    {
      label: 'Completed Courses',
      icon: <MdOutlineDoneAll className="text-purple-700 text-xl" />,
      color: 'bg-purple-100',
      value: 328
    },
    {
      label: 'Students',
      icon: <MdGroups className="text-pink-700 text-xl" />,
      color: 'bg-pink-100',
      value: 1290
    },
    {
      label: 'Online Courses',
      icon: <MdLaptopChromebook className="text-yellow-700 text-xl" />,
      color: 'bg-yellow-100',
      value: 67
    },
    {
      label: 'USD Total Earning',
      icon: <MdAttachMoney className="text-emerald-700 text-xl" />,
      color: 'bg-emerald-100',
      value: '$15,680'
    },
    {
      label: 'Course Sold',
      icon: <MdSell className="text-cyan-700 text-xl" />,
      color: 'bg-cyan-100',
      value: 492
    }
  ];

  const EarningData = [
    { date: 'Apr 1', earnings: 400 },
    { date: 'Apr 2', earnings: 650 },
    { date: 'Apr 3', earnings: 300 },
    { date: 'Apr 4', earnings: 900 },
    { date: 'Apr 5', earnings: 750 },
    { date: 'Apr 6', earnings: 620 },
    { date: 'Apr 7', earnings: 980 },
  ];

  const EnrollData = [
    { date: 'Apr 1', enrollments: 12 },
    { date: 'Apr 2', enrollments: 18 },
    { date: 'Apr 3', enrollments: 10 },
    { date: 'Apr 4', enrollments: 22 },
    { date: 'Apr 5', enrollments: 15 },
    { date: 'Apr 6', enrollments: 25 },
    { date: 'Apr 7', enrollments: 20 },
  ];

  const CountryData = [
    { name: 'Sri Lanka', value: 450 },
    { name: 'India', value: 300 },
    { name: 'USA', value: 150 },
    { name: 'Australia', value: 100 },
    { name: 'Canada', value: 80 }
  ];

  return (
    <div className='flex min-h-screen flex-col justify-start items-start'>
      <div className='bg-white w-full'>
        <Navbar />
      </div>
      <div className='bg-gray-50 w-full px-5 py-4'>
        <div className='grid grid-cols-4 gap-4'>
          {cardsData.map((card, index) => (
            <DashboardCard
              key={index}
              label={card.label}
              icon={card.icon}
              color={card.color}
              value={card.value}
            />
          ))}
        </div>
        <div className='grid grid-cols-3 gap-4 mt-6'>
          <EarningsChart data={EarningData} />
          <StudentEnrollTrends data={EnrollData} />
          <StudentsByCountryChart data={CountryData} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard