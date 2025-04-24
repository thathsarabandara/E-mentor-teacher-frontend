'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiStar } from 'react-icons/fi';
import { PiStudent } from 'react-icons/pi';

type Course = {
    id: number;
    image: string | StaticImageData;
    color: string;
    category: string;
    price: string;
    title: string;
    rating: number;
    students: string;
    link: string;
};

type CourseCardProps = {
  course: Course;
};

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {

    type CourseImageProps = {
        src: string | StaticImageData;
        alt: string;
      };
      
    const CourseImage: React.FC<CourseImageProps> = ({ src, alt }) => (
        <div className='overflow-hidden w-72 h-48 relative'>
          <Image
            className='transform transition duration-300 ease-in-out hover:scale-110'
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      );

  const CourseInfo = ({
    category,
    price,
    title,
    color,
  }: {
    category: string;
    price: string;
    title: string;
    color: string;
  }) => (
    <div className="flex flex-col justify-between w-72 h-32 border-t-0 border-2 border-gray-50 hover:bg-orange-50">
      <div className="flex justify-between items-center">
        <p
          className={`bg-${color}-200 font-inter text-${color}-700 text-xs pt-1 px-2.5 mx-4 my-2`}
        >
          {category}
        </p>
        <p className="mx-6 my-4 font-inter text-orange-600">{price}</p>
      </div>
      <p className="font-inter mx-4 pb-6 text-sm">{title}</p>
    </div>
  );

  const CourseStats = ({
    rating,
    students,
  }: {
    rating: number;
    students: string;
  }) => (
    <div className="flex justify-between w-72 h-12 items-center border-2 border-gray-200">
      <div className="flex items-center m-2">
        <FiStar className="text-orange-700 mr-2" />
        <p className="font-inter">{rating}</p>
      </div>
      <div className="flex items-center mx-4">
        <PiStudent className="text-orange-600 mr-2" />
        <p className="text-gray-800 font-inter text-sm mr-2">{students}</p>
        <p className="font-inter text-gray-500 text-sm">students</p>
      </div>
    </div>
  );

  return (
    <Link href={course.link} className="hover:cursor-pointer">
      <div className="flex flex-col justify-center items-center bg-white hover:bg-orange-50 w-72">
        <CourseImage src={course.image} alt="course" />
        <CourseInfo
          category={course.category}
          price={course.price}
          title={course.title}
          color={course.color}
        />
        <CourseStats rating={course.rating} students={course.students} />
      </div>
    </Link>
  );
};

export default CourseCard;
