'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiFillSignal, AiOutlineMessage } from 'react-icons/ai'
import { BsWallet } from 'react-icons/bs'
import { CiSettings } from 'react-icons/ci'
import { GoStack } from 'react-icons/go'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { FiMenu } from 'react-icons/fi'
import { PiSignOut } from 'react-icons/pi'

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const pathname = usePathname()

    const navLinks = [
        { label: 'Dashboard', icon: <AiFillSignal />, path: 'dashboard' },
        { label: 'Create New Course', icon: <IoMdAddCircleOutline />, path: 'createcourse' },
        { label: 'My Courses', icon: <GoStack />, path: 'mycourses' },
        { label: 'Earnings', icon: <BsWallet />, path: 'earnings' },
        { label: 'Messages', icon: <AiOutlineMessage />, path: 'messages' },
        { label: 'Settings', icon: <CiSettings />, path: 'settings' },
    ]

  return (
    <div className={`flex flex-col bg-gray-800 text-gray-400 transition-all duration-300 ${open ? 'w-52' : 'w-12'} h-screen`}>
      <div className="flex items-center justify-start p-4">
        <button onClick={() => setOpen(!open)} className="text-white mr-2">
          <FiMenu className='12' />
        </button>
        {open && (
          <div className="flex items-center">
            <img src="/assets/images/logo.png" alt="logo" className="w-8 h-8 mr-2" />
            <p className="text-orange-500 text-lg font-bold">E-Mentor</p>
          </div>
        )}
      </div>
        <hr className='w-full h-0.5 bg-white'/>
      <div className="flex-1 flex flex-col">
        {navLinks.map((link) => (
          <Link key={link.path} href={link.path} passHref>
            <div
              className={`flex items-center p-3 hover:bg-orange-500 hover:text-white cursor-pointer text-sm ${
                pathname === link.path ? 'bg-orange-500 text-white' : ''
              }`}
            >
              {link.icon}
              {open && <span className="ml-3">{link.label}</span>}
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center py-2 hover:bg-orange-500 hover:text-white cursor-pointer">
        <PiSignOut />
        {open && <span className="ml-3">Sign Out</span>}
      </div>
    </div>
  )
}

export default Sidebar
