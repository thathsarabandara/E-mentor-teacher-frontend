import Image from 'next/image'
import React, { useState } from 'react'
import emptyImage from '../../../../public/assets/images/emptyImage.png'
import emptyVideo from '../../../../public/assets/images/emptyVideo.png'
import { FaUpload } from 'react-icons/fa'
import { Button } from '@/component/ui/Button'

interface AdvancedInformationProps {
    setCurrentStep: (step: number) => void
}

const AdvancedInformation: React.FC<AdvancedInformationProps> = ({setCurrentStep}) => {
    const [teachingPoints, setTeachingPoints] = useState(["", "", "", ""]);
    const [targetAudience, setTargetAudience] = useState(["", "", "", ""]);
    const [requirements, setRequirements] = useState(["", "", "", ""]);

    const handleTeachingPoint = (index: number , value:string) =>{
        const updatedPoints = [...teachingPoints];
        updatedPoints[index] = value;
        setTeachingPoints(updatedPoints);
    }

    const handleTargetAudience = (index: number , value:string) =>{
        const updatedTargets = [...targetAudience];
        updatedTargets[index] = value;
        setTeachingPoints(updatedTargets);
    }

    const handleRequirements = (index: number , value:string) =>{
        const updatedRequirements = [...requirements];
        updatedRequirements[index] = value;
        setTeachingPoints(updatedRequirements);
    }

    const handleSubmit =() => {
        try {
            setCurrentStep(2);
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className="flex flex-col justify-center items-start w-full mt-4">
        <p className="text-xl font-bold text-left border-b border-gray-200 w-full pb-5">Advanced Informations</p>
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center w-full my-4 mt-8 border-b border-gray-200 pb-6">
                <div className="flex flex-col justify-center items-start w-1/2">
                    <p className="text-black mb-3 font-semibold">Course Thumbnail</p>
                    <div className="flex justify-center items-start">
                        <Image src={emptyImage}  alt='image' className="bg-gray-200 p-5 rounded-lg w-1/3" />
                        <div className="flex flex-col justify-center items-start w-2/3 mx-6">
                            <p className="text-gray-500 text-sm">Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png</p>
                            <label htmlFor="imageUpload" className="text-orange-500 bg-orange-100 flex justify-between items-center p-3 mt-12">
                                Upload Image
                                <FaUpload className='ml-4'/>
                            </label>
                            <input
                                id='imageUpload'
                                type='file'
                                accept='image/*'
                                className='hidden'
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start w-1/2">
                    <p className="text-black mb-3 font-semibold">Course Trailer</p>
                    <div className="flex justify-center items-start">
                        <Image src={emptyVideo} alt='video' className="bg-gray-200 p-5 rounded-lg w-1/3" />
                        <div className="flex flex-col justify-center items-start w-2/3 mx-6">
                            <p className="text-gray-500 text-sm">Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos.</p>
                            <label htmlFor="imageUpload" className="text-orange-500 bg-orange-100 flex justify-between items-center p-3 mt-12">
                                Upload Video
                                <FaUpload className='ml-4'/>
                            </label>
                            <input
                                id='imageUpload'
                                type='file'
                                accept='video/*'
                                className='hidden'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full border-b border-gray-200 pb-5">
                <label htmlFor="description" className="w-full font-semibold">Course Description</label>
                <textarea
                id='description'
                rows={6}
                placeholder='Enter Your Course Description'
                className='border border-gray-200 w-full p-4 foucs:border-orange-500'
                />
            </div>
            <div className="flex flex-col justify-center items-start mt-5 w-full border-b border-gray-200">
                <p className='text-left font-semibold text-left mb-5'>What you will teach in this course</p>
                {teachingPoints.map((point,index) => (
                    <div className='flex flex-col justify-center items-start w-full mb-2'>
                        <label htmlFor="teachingPoints" className="w-full font-semibold mb-1">0{index+1} Point</label>
                        <input 
                            id='teachingPoints'
                            key={index}
                            type='text'
                            placeholder={`What you will learn from this Point ${index + 1}`}
                            value={point}
                            onChange={(e) => handleTeachingPoint(index, e.target.value)}
                            className='border border-gray-200 w-full p-2'
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-start mt-5 w-full border-b border-gray-200">
                <p className='text-left font-semibold text-left mb-5'>What will be the target audience in this course</p>
                {teachingPoints.map((point,index) => (
                    <div className='flex flex-col justify-center items-start w-full mb-2'>
                        <label htmlFor="teachingPoints" className="w-full font-semibold mb-1">0{index+1} Audience</label>
                        <input 
                            id='teachingPoints'
                            key={index}
                            type='text'
                            placeholder={`What will be the target audience ${index + 1}`}
                            value={point}
                            onChange={(e) => handleTargetAudience(index, e.target.value)}
                            className='border border-gray-200 w-full p-2'
                        />
                    </div>
                ))}
            </div>
            <div className="flex flex-col justify-center items-start my-5 w-full border-b border-gray-200">
                <p className='text-left font-semibold text-left mb-5'>What will be the requirements in this course</p>
                {teachingPoints.map((point,index) => (
                    <div className='flex flex-col justify-center items-start w-full mb-2'>
                        <label htmlFor="teachingPoints" className="w-full font-semibold mb-1">0{index+1} Point</label>
                        <input 
                            id='teachingPoints'
                            key={index}
                            type='text'
                            placeholder={`What will be the requirements from this Point ${index + 1}`}
                            value={point}
                            onChange={(e) => handleRequirements(index, e.target.value)}
                            className='border border-gray-200 w-full p-2'
                        />
                    </div>
                ))}
                <div className="flex justify-between items-center w-full mt-5">
                    <Button onClick={() => setCurrentStep(0)} className='bg-gray-200'>
                        Previous
                    </Button>
                    <Button type='submit'>
                        Save & Next
                    </Button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AdvancedInformation