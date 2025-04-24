import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import React from 'react'

const Messages: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Messages' />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Messages