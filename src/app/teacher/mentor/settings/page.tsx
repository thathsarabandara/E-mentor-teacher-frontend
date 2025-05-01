import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import PasswordChangeSection from '@/component/PasswordChange/PasswordChangeSection'
import ProfileSettings from '@/component/Profile-Settings/ProfileSetting'
import ProfileExperience from '@/component/ProfileExperience/ProfileExperience'
import {SocialProfileForm} from '@/component/SocailProfileForm/SocialProfileForm'
import React from 'react'

const Settings: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Settings' />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className='w-11/12'>
          <ProfileSettings />
          <SocialProfileForm />
          <ProfileExperience />
          <PasswordChangeSection />
        </div>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Settings