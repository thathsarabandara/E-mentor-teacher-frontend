'use client'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-6 py-4">
        <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs">
                © 2021 - <span className='text-black'>Strom Projects</span> . All rights reserved
            </p>
        </div>
        <div className="flex justify-between items-center mr-8">
            <p className="text-gray-400 text-xs mr-5">FAQs</p>
            <p className="text-gray-400 text-xs mr-5">Privacy Policy</p>
            <p className="text-gray-400 text-xs mr-5">Terms & Condition</p>
        </div>
    </div>
  )
}

export default Footer