"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

type WithdrawHistoryItem = {
  id: number;
  date: string;
  method: string;
  amount: string;
  status: "Pending" | "Completed" | "Rejected";
};

const initialHistory: WithdrawHistoryItem[] = [
  { id: 1, date: "2025-04-25", method: "Visa ****1111", amount: "$250.00", status: "Completed" },
  { id: 2, date: "2025-04-24", method: "Mastercard ****0004", amount: "$120.00", status: "Pending" },
  { id: 3, date: "2025-04-22", method: "Visa ****9876", amount: "$180.00", status: "Rejected" },
];

const WithdrawHistory: React.FC = () => {
  const [history, setHistory] = useState(initialHistory);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const cancelWithdraw = (id: number) => {
    const updatedHistory = history.map((item) =>
      item.id === id ? { ...item, status: "Rejected" } : item
    );
    setHistory(updatedHistory);
    setOpenMenuId(null);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-lg font-semibold mb-4">Withdrawal History</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b text-gray-600">
              <th className="p-3">Date</th>
              <th className="p-3">Method</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50 transition relative"
              >
                <td className="p-3">{item.date}</td>
                <td className="p-3">{item.method}</td>
                <td className="p-3">{item.amount}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "Completed"
                        ? "bg-green-100 text-green-600"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 relative">
                  {item.status === "Pending" && (
                    <div className="relative inline-block">
                      <button
                        onClick={() =>
                          setOpenMenuId(openMenuId === item.id ? null : item.id)
                        }
                        className="p-1 rounded hover:bg-gray-100"
                      >
                        <BsThreeDotsVertical />
                      </button>

                      {openMenuId === item.id && (
                        <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-10 border text-sm">
                          <button
                            onClick={() => cancelWithdraw(item.id)}
                            className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600"
                          >
                            Cancel Withdrawal
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WithdrawHistory;
