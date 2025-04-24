'use client'
import React from 'react';

interface Review {
  student: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">Latest 5 Student Reviews</h2>
      </div>
      <table className="w-full text-left table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-3 text-sm font-semibold text-gray-600">Student</th>
            <th className="px-5 py-3 text-sm font-semibold text-gray-600">Rating</th>
            <th className="px-5 py-3 text-sm font-semibold text-gray-600">Comment</th>
            <th className="px-5 py-3 text-sm font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review, index) => (
            <tr key={index} className="border-t-3 border-white hover:bg-gray-100 bg-gray-50 transition">
              <td className="px-5 py-3 text-gray-800 font-medium">{review.student}</td>
              <td className="px-5 py-3">
                <span className="text-orange-500 font-semibold">{review.rating}★</span>
              </td>
              <td className="px-5 py-3 text-gray-600 truncate max-w-xs">{review.comment}</td>
              <td className="px-5 py-3 text-gray-500 text-sm">{review.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReviewTable;
