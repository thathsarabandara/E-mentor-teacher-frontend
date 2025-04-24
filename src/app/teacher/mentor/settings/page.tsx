import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import React from 'react'

const Settings: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Settings' />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Settings