"use client";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export type WithdrawHistoryItem = {
  id: number;
  date: string;
  method: string;
  amount: string;
  status: string;
};

type WithdrawHistoryProps = {
  history: WithdrawHistoryItem[];
  onCancel?: (id: number) => void;
};

const WithdrawHistory: React.FC<WithdrawHistoryProps> = ({ history, onCancel }) => {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleCancel = (id: number) => {
    onCancel?.(id);
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
                            onClick={() => handleCancel(item.id)}
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
