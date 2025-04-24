import CourseCompletionChart from '@/component/CourseCompletion-Chart/CourseCompletionChart';
import DashboardCard from '@/component/DashboardCard/DashboardCard'
import EarningsChart from '@/component/Earning-Chart/EarningChart';
import Navbar from '@/component/Navbar/Navbar'
import StudentsByCountryChart from '@/component/StudentByCountry-Chart/StudentByCountry';
import StudentEnrollTrends from '@/component/StudentEnrollTrend-Chart/StudentEnrollTrend';
import StudentPerformanceDistribution from '@/component/StudentPerformance-Chart/StudentPerformance';
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

  const performanceData = [
    { gradeRange: '90-100%', studentCount: 25 },
    { gradeRange: '80-89%', studentCount: 40 },
    { gradeRange: '70-79%', studentCount: 60 },
    { gradeRange: '60-69%', studentCount: 35 },
    { gradeRange: '50-59%', studentCount: 20 },
    { gradeRange: 'Below 50%', studentCount: 10 },
  ];

  const courseData = {
    completedCourses: 15,
    ongoingCourses: 8,
  };

  return (
    <div className='flex min-h-screen flex-col justify-start items-start'>
      <div className='bg-white w-full'>
        <Navbar />
      </div>
      <div className='bg-gray-50 w-full px-5 py-4'>
        <div className="flex justify-center items-center">
          <div className='grid grid-cols-4 gap-4 w-10/12'>
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
        </div>
        <div className='flex justify-center items-start w-full mt-6 ml-8'>
          <div className='flex flex-col justify-start items-center w-2/3'>
            <div className='flex w-full mx-5'>
              <div className='w-1/2 mr-4'>
                <EarningsChart data={EarningData} />
              </div>
              <div className='w-1/2 mr-4'>
                <StudentEnrollTrends data={EnrollData} />
              </div>
            </div>
            <div className='flex w-full mx-5'>
              <StudentPerformanceDistribution performancesData={performanceData} />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-1/3'>
            <div className="w-full mb-4">
              <StudentsByCountryChart data={CountryData} />
            </div>
            <div className="w-full">
              <CourseCompletionChart data={courseData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard