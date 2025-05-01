'use client'
import CardDisplay from '@/component/CardDisplay/CardDisplay';
import DashboardCard from '@/component/DashboardCard/DashboardCard';
import EarningsChart from '@/component/Earning-Chart/EarningChart';
import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import PaymentCardView from '@/component/PaymentCardView/PaymentCardView';
import WithdrawHistory, { WithdrawHistoryItem } from '@/component/widthdraw-table/WithdrawHistory';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { IoMdAddCircleOutline } from 'react-icons/io';

import { MdAttachMoney, MdAccountBalanceWallet, MdMoneyOff, MdTrendingUp } from 'react-icons/md';

type CardData = {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

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

const initialCards: CardData[] = [
  {
    cardHolder: "Thathsara Bandara",
    cardNumber: "4111111111111111",
    expiry: "04/28",
    cvv: "123",
  },
  {
    cardHolder: "John Doe",
    cardNumber: "5500000000000004",
    expiry: "10/26",
    cvv: "456",
  },
];

const Earnings: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [amount, setAmount] = useState<number>(0);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<CardData>({
    cardHolder: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [history, setHistory] = useState<WithdrawHistoryItem[]>([
    { id: 1, date: "2025-04-25", method: "Visa ****1111", amount: "$250.00", status: "Completed" },
    { id: 2, date: "2025-04-24", method: "Mastercard ****0004", amount: "$120.00", status: "Pending" },
    { id: 3, date: "2025-04-22", method: "Visa ****9876", amount: "$180.00", status: "Rejected" },
  ]);

  const handleCancelWithdraw = (id: number) => {
    const updatedHistory = history.map((item) =>
      item.id === id ? { ...item, status: "Rejected" } : item
    );
    setHistory(updatedHistory);
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleAddCardClick = () => {
    setShowForm(true);
  };

  const submitWidthdraw = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setCards([...cards, formData]);
        setCurrentIndex(cards.length);
        setShowForm(false);
        setFormData({
          cardHolder: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
        });
      } else {
        console.error("Failed to add card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitNewCard = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await fetch("/api/cards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        setCards([...cards, formData]);
        setCurrentIndex(cards.length);
        setShowForm(false);
        setFormData({
          cardHolder: "",
          cardNumber: "",
          expiry: "",
          cvv: "",
        });
      } else {
        console.error("Failed to add card");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="flex min-h-screen flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Earnings' />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-10/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
        <div className="flex flex-col lg:flex-row justify-center items-center w-11/12 mt-5 gap-6">
          <div className="w-full lg:w-2/3">
            <EarningsChart data={EarningData} height={400} />
          </div>

          <div className="w-full lg:w-1/3 m-4">
            <div className="w-full flex flex-col items-center justify-center gap-6 bg-white rounded-xl p-6">
              <p className="font-bold pb-2 text-start">Card Details</p>
              <div className="w-80 pb-4">
                <CardDisplay {...cards[currentIndex]} />
              </div>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevCard}
                  className="p-2 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20"
                >
                  <FaArrowLeft className='text-black' />
                </button>
                <button
                  onClick={nextCard}
                  className="p-2 rounded-full bg-white bg-opacity-10 text-white hover:bg-opacity-20"
                >
                  <FaArrowRight className='text-black' />
                </button>
              </div>
              <button
                onClick={handleAddCardClick}
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-orange-200 hover:border-orange-500 text-black w-9/12 h-12 mb-3"
                >
                <IoMdAddCircleOutline className='text-orange-700' />
                Add New Card
              </button>
              {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-transparent bg-opacity-50 w-full">
                  <form
                    onSubmit={submitNewCard}
                    className="flex flex-col justify-center items-start bg-white p-6 rounded-lg shadow-lg w-96 text-gray-800 space-y-3"
                  >
                    <h2 className="text-lg font-bold text-center mb-4">New Payment Card</h2>
                    <label htmlFor="holderName" className="text-sm">Name</label>
                    <input
                      id='holderName'
                      type="text"
                      name="cardHolder"
                      placeholder="Name on card"
                      value={formData.cardHolder}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded -mt-3 text-sm"
                    />
                    <label htmlFor="cardnumber" className="text-sm">Card Number</label>
                    <input
                      id='cardnumber'
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded -mt-3 text-sm"
                    />
                    <div className='flex justify-center items-center'>
                      <div className="flex flex-col justify-center items-start">
                        <label htmlFor="expiredate" className="text-sm">MM /YY</label>
                        <input
                          id='expiredate'
                          type="text"
                          name="expiry"
                          placeholder="Expiry (MM/YY)"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                          className="w-11/12 p-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-start">
                        <label htmlFor="csv" className="text-sm">CSV</label>
                        <input
                          id='csv'
                          type="text"
                          name="cvv"
                          placeholder="CVV"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-11/12 p-2 border border-gray-300 rounded text-sm"
                        />
                      </div>
                    </div>
                    <div className="flex justify-between w-full">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 bg-orange-200 border border-orange-200 rounded hover:bg-transparent hover:border-orange-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-orange-600 border border-orange-200 text-white rounded hover:bg-transparent hover:border-orange-500 hover:text-orange-700"
                      >
                        Save Credentials
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start w-11/12 mt-5 gap-6">
        <div className="flex flex-col justify-center items-start w-1/3 bg-white rounded p-4 ">
          <p className="text-lg font-bold mb-4">
            Widthdraw your money
          </p>
          <div className="flex flex-col justify-center items-start mb-4">
              <p className="text-lg font-bold">$16,590.00</p>
              <p className="text-xs font-bold text-gray-500">Current Balance</p>
          </div>
          <form 
            onSubmit={submitWidthdraw}
            className='w-full'
            >
            <div className="flex flex-col justify-center items-start w-full">
              <label htmlFor="amount" className="text-xs font-bold">Amount</label>
              <input
                id='amount'
                name='amount'
                type="text" 
                placeholder='Amount'
                onChange={handleAmountChange}
                className="text-sm border border-gray-400 p-2 rounded border border-gray-300 w-full" 
                required
                />
                <div className="flex flex-col justify-center items-start gap-4 mt-4">
                  <p className="font-bold">Choose Card for Withdrawal</p>
                  <div className="grid grid-cols-1 w-full gap-4">
                    {cards.map((card, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedCardIndex(index)}
                        className={`relative w-full p-4 rounded-lg border-2 cursor-pointer ${
                          selectedCardIndex === index
                            ? "border-green-500 bg-green-50"
                            : "border-gray-300 bg-white"
                        } text-left flex flex-col gap-1`}
                      >
                        {selectedCardIndex === index && (
                          <FaCheckCircle className="text-green-600 absolute top-2 right-2 text-lg" />
                        )}
                        <PaymentCardView name={card.cardHolder} date={card.expiry} number={card.cardNumber} />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-orange-600 border border-orange-200 text-white rounded hover:bg-transparent hover:border-orange-500 hover:text-orange-700 mt-5"
                >
                Widthsdraw Money
                </button>
            </div>
          </form>
        </div>
        <div className="w-2/3">
            <WithdrawHistory onCancel={handleCancelWithdraw} history={history} />
        </div>
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Earnings;
