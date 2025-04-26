"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
};

const CardDisplay: React.FC<CardProps> = ({
  cardHolder,
  cardNumber,
  expiry,
  cvv,
}) => {
  return (
    <div className="w-full mx-auto bg-gradient-to-r from-blue-600 to-indigo-800 text-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div className="text-lg font-semibold">VISA</div>
        <Image
          src="/assets/images/card/card.png"
          alt="Visa Logo"
          width={50}
          height={30}
        />
      </div>

      <div className="text-sm tracking-widest mb-6">
        {cardNumber.replace(/\d{4}(?=.)/g, "$& ")}
      </div>

      <div className="flex justify-between items-center text-xs">
        <div>
          <div className="uppercase opacity-70">Card Holder</div>
          <div className="font-medium">{cardHolder}</div>
        </div>

        <div>
          <div className="uppercase opacity-70">Expires</div>
          <div className="font-medium">{expiry}</div>
        </div>

        <div>
          <div className="uppercase opacity-70">CVV</div>
          <div className="font-medium">{cvv}</div>
        </div>
      </div>

      <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gray-400 bg-opacity-20 rounded-full blur-2xl"></div>
    </div>
  );
};

export default CardDisplay;
