'use client'
import AdvancedInformation from '@/component/CreateCourseSections/AdvanceInformation/AdvancedInformation';
import BasicInformationSection from '@/component/CreateCourseSections/BasicInformation/BasicInformationSection';
import Curriculum from '@/component/CreateCourseSections/Curriculum/Curriculum';
import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import React, { useState } from 'react'
import { FaInfoCircle, FaListOl, FaSlidersH, FaUpload } from 'react-icons/fa';

const steps = [
  { name: "Basic Information", icon: <FaInfoCircle /> },
  { name: "Advance Information", icon: <FaSlidersH /> },
  { name: "Curriculum", icon: <FaListOl /> },
];


const CreateCourse: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNavigation = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="flex min-h-screen rounded-lg flex-col justify-start items-center bg-gray-100">
      <div className="w-full">
        <Navbar name='Create Course' />
      </div>
      <div className="w-10/12 bg-white rounded-xl p-6">
      {/* Top Navigation */}
      <div className="flex items-center justify-center border-b border-gray-200 pb-4 mb-6">
        {steps.map((step, index) => (
          <div
            key={step.name}
            onClick={() => handleNavigation(index)}
            className={`flex items-center cursor-pointer overflow-hidden w-1/4 mr-8 ${
              currentStep === index
                ? "text-orange-500 font-semibold border-b-2 border-orange-500"
                : "text-gray-600"
            }`}
          >
            <div className='text-gray-500 m-2'>{step.icon}</div>
            <p className="text-gray-500 hidden sm:block">{step.name}</p>
          </div>
        ))}
      </div>

      {/* Basic Info Form */}
      {currentStep === 0 && (
        <BasicInformationSection setCurrentStep={setCurrentStep} />
      )}

      {/* Placeholder for other pages */}
      {currentStep === 1 && (
        <AdvancedInformation setCurrentStep={setCurrentStep} />
      )}
      {currentStep === 2 && (
        <Curriculum setCurrentStep={setCurrentStep} />
      )}
    </div>

      <div className="w-11/12 fixed bottom-0 left-[200px]">
        <Footer />
      </div>
    </div>
  )
}

export default CreateCourse