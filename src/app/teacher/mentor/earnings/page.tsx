import DashboardCard from '@/component/DashboardCard/DashboardCard';
import EarningsChart from '@/component/Earning-Chart/EarningChart';
import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import React from 'react'

import { MdAttachMoney, MdAccountBalanceWallet, MdMoneyOff, MdTrendingUp } from 'react-icons/md';

const cardsData = [
  {
    label: 'Total Revenue',
    icon: <MdAttachMoney className="text-green-700 text-xl" />,
    color: 'bg-green-100',
    value: '$128,450'
  },
  {
    label: 'Current Balance',
    icon: <MdAccountBalanceWallet className="text-blue-700 text-xl" />,
    color: 'bg-blue-100',
    value: '$8,275'
  },
  {
    label: 'Total Withdrawals',
    icon: <MdMoneyOff className="text-red-700 text-xl" />,
    color: 'bg-red-100',
    value: '$15,300'
  },
  {
    label: 'Today’s Revenue',
    icon: <MdTrendingUp className="text-orange-700 text-xl" />,
    color: 'bg-orange-100',
    value: '$1,250'
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
  { date: 'Apr 8', earnings: 700 },
  { date: 'Apr 9', earnings: 560 },
  { date: 'Apr 10', earnings: 850 },
  { date: 'Apr 11', earnings: 720 },
  { date: 'Apr 12', earnings: 640 },
  { date: 'Apr 13', earnings: 910 },
  { date: 'Apr 14', earnings: 500 },
  { date: 'Apr 15', earnings: 830 },
  { date: 'Apr 16', earnings: 670 },
  { date: 'Apr 17', earnings: 740 },
  { date: 'Apr 18', earnings: 880 },
  { date: 'Apr 19', earnings: 600 },
  { date: 'Apr 20', earnings: 950 },
  { date: 'Apr 21', earnings: 700 },
  { date: 'Apr 22', earnings: 770 },
  { date: 'Apr 23', earnings: 650 },
  { date: 'Apr 24', earnings: 910 },
  { date: 'Apr 25', earnings: 860 },
  { date: 'Apr 26', earnings: 780 },
  { date: 'Apr 27', earnings: 690 },
  { date: 'Apr 28', earnings: 720 },
  { date: 'Apr 29', earnings: 810 },
  { date: 'Apr 30', earnings: 970 },
];


const Earnings: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Earnings' />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-10/12">
         <div className="grid grid-cols-4 gap-4">
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
        <div className="flex justify-center items-center w-11/12  mt-5">
            <div className="w-1/2">
              <EarningsChart data={EarningData} height={400}/>
            </div>
            <div className="w-1/2">

            </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Earnings