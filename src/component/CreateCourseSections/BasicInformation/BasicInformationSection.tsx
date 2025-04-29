import React from 'react'

interface BasicInformationSectionProps {
    setCurrentStep: (step: number) => void
}

const BasicInformationSection: React.FC<BasicInformationSectionProps> = ({setCurrentStep}) => {
  return (
    <div className="mx-auto mb-12">
          <h2 className="text-2xl font-semibold mb-6">Basic Information</h2>

          <div className="mb-6">
            <label htmlFor="title" className="text-sm">Title</label>
            <input
              id='title'
              type="text"
              placeholder="Your course title"
              className="border border-gray-300 rounded w-full p-3 text-sm"
              maxLength={60}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subtitle" className="text-sm">Subtitle</label>
            <input
              id='subtitle'
              type="text"
              placeholder="Your course subtitle"
              className="border border-gray-300 rounded w-full p-3 text-sm"
              maxLength={120}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className='flex flex-col'>
              <label htmlFor="category" className="text-sm">Course Category</label>
              <select className="border border-gray-300 rounded p-3 text-sm" id='category'>
                <option>Select Course Category</option>
                <option>Development</option>
                <option>Business</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="subcategory" className="text-sm">Course SubCategory</label>
                <select className="border border-gray-300 rounded p-3 text-sm" id='subcategory'>
                  <option>Select Course Sub-category</option>
                  <option>Frontend</option>
                  <option>Backend</option>
                </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="topic" className="text-sm">Course Topic</label>
            <input
              id='topic'
              type="text"
              placeholder="What is primarily taught in your course?"
              className="border border-gray-300 rounded w-full p-3 text-sm"
            />
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className='flex flex-col'>
              <label htmlFor="language" className="text-sm">Course Language</label>
              <select className="border border-gray-300 rounded p-3 text-sm" id='language'>
                <option>Course Language</option>
                <option>English</option>
                <option>Sinhala</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="subtitlelanguage" className="text-sm">Course Subtitle</label>
              <select className="border border-gray-300 rounded p-3 text-sm" id='subtitlelanguage'>
                <option>Subtitle Language (Optional)</option>
                <option>English</option>
                <option>Sinhala</option>
            </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="level" className="text-sm">Course Level</label>
              <select className="border border-gray-300 rounded p-3 text-sm" id='level'>
                <option>Course Level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Expert</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="duration" className="text-sm">Course Duration</label>
              <select className="border border-gray-300 rounded p-3 text-sm" id='duration'>
                <option>Course Duration</option>
                <option>1 Months</option>
                <option>2 Months</option>
              </select>
            </div>

          </div>

          <div className="flex justify-between mt-10">
            <button className="border border-gray-300 px-4 py-2 rounded text-gray-600">
              Cancel
            </button>
            <div className="flex space-x-2">
              <button className="text-orange-500 font-medium">Save</button>
              <button
                className="bg-orange-500 text-white px-5 py-2 rounded"
                onClick={() => setCurrentStep(1)}
              >
                Save & Next
              </button>
            </div>
          </div>
        </div>
  )
}

export default BasicInformationSection