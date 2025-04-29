'use client'
import React from 'react'

interface PaymentCardProps {
    number: string;
    date: string;
    name: string
}

const PaymentCardView: React.FC<PaymentCardProps> = ({
    number,
    date,
    name
}) => {
  return (
    <div className="flex justify-start items-center gap-6 w-full">
        <img className='w-10' src='/assets/images/card/card.png' alt='visa'/>
        <p className="text-sm text-gray-500">{number.replace(/\d{4}(?=.)/g, "$& ")}</p>
        <p className="text-sm text-gray-500">{date}</p>
        <p className="text-sm text-gray-500 font-bold">{name}</p>
    </div>
  )
}

export default PaymentCardView