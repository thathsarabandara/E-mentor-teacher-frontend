'use client'
import Footer from '@/component/Footer/Footer'
import Navbar from '@/component/Navbar/Navbar'
import React, { useState } from 'react'
import course1 from '../../../../../public/assets/images/best_selling_courses/course1.png';
import course2 from '../../../../../public/assets/images/best_selling_courses/course2.png';
import course3 from '../../../../../public/assets/images/best_selling_courses/course3.png';
import course4 from '../../../../../public/assets/images/best_selling_courses/course4.png';
import course5 from '../../../../../public/assets/images/best_selling_courses/course5.png';
import course6 from '../../../../../public/assets/images/best_selling_courses/course6.png';
import course7 from '../../../../../public/assets/images/best_selling_courses/course7.png';
import course8 from '../../../../../public/assets/images/best_selling_courses/course8.png';
import course9 from '../../../../../public/assets/images/best_selling_courses/course9.png';
import course10 from '../../../../../public/assets/images/best_selling_courses/course10.png';
import CourseCard from '@/component/CourseCard/CourseCard';

const MyCourses: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRating, setSelectedRating] = useState('');

  const courses = [
    { id: 1, image: course1, color: 'blue', category: 'Design', price: '$57', title: 'Machine Learning A-Z™: Hands-On Python & R In Data...', rating: 5.0, students: '256.7K', link: '/course/1' },
    { id: 2, image: course2, color: 'blue', category: 'Development', price: '$45', title: 'The Complete JavaScript Course 2023: From Zero to Expert!', rating: 4.8, students: '198.5K', link: '/course/2' },
    { id: 3, image: course3, color: 'blue', category: 'Business', price: '$39', title: 'Business Analysis Fundamentals: Practical Guide', rating: 4.7, students: '134.2K', link: '/course/3' },
    { id: 4, image: course4, color: 'blue', category: 'Marketing', price: '$49', title: 'Digital Marketing Masterclass - 23 Courses in 1', rating: 4.9, students: '212.3K', link: '/course/4' },
    { id: 5, image: course5, color: 'blue', category: 'Photography', price: '$29', title: 'Photography Masterclass: A Complete Guide to Photography', rating: 4.6, students: '98.7K', link: '/course/5' },
    { id: 6, image: course6, color: 'blue', category: 'Finance', price: '$65', title: 'The Complete Financial Analyst Course 2023', rating: 4.9, students: '175.9K', link: '/course/6' },
    { id: 7, image: course7, color: 'blue', category: 'IT & Software', price: '$55', title: 'AWS Certified Solutions Architect - Associate 2023', rating: 5.0, students: '289.3K', link: '/course/7' },
    { id: 8, image: course8, color: 'blue', category: 'Health & Fitness', price: '$35', title: 'Yoga for Beginners: A Complete Guide', rating: 4.7, students: '125.4K', link: '/course/8' },
    { id: 9, image: course9, color: 'blue', category: 'Personal Development', price: '$42', title: 'Time Management & Productivity: Get More Done', rating: 4.8, students: '112.6K', link: '/course/9' },
    { id: 10, image: course10, color: 'blue', category: 'Music', price: '$48', title: 'Piano Lessons for Beginners - Learn to Play Piano', rating: 4.9, students: '153.8K', link: '/course/10' }
  ];

  const categories = [...new Set(courses.map(course => course.category))];
  const ratings = [...new Set(courses.map(course => course.rating))];

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedCategory === '' || course.category === selectedCategory) &&
    (selectedRating === '' || course.rating === parseFloat(selectedRating))
  );

  return (
    <div className="flex min-h-screen flex-col justify-start items-start">
      <div className="w-full">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center  w-11/12  space-y-6">
        <div className="flex flex-wrap gap-4 w-11/12 justify-between">
          <div className="flex flex-col items-start justify-center">
            <label htmlFor='courseSearch' className='mb-1 text-xs font-bold font-medium text-gray-400'>
              Search Name
            </label>
            <input
              id="courseSearch"
              type="text"
              placeholder="Search in your courses"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="border border-gray-300 p-2 rounded w-64"
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-start justify-center mr-5">
              <label htmlFor='selectCategory' className='mb-1 text-xs font-bold font-medium text-gray-400'>
                Category
              </label>
              <select
                id='selectCategory'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="">All Categories</option>
                {categories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col items-start justify-center">
              <label htmlFor='selectedRating' className='mb-1 text-xs font-bold font-medium text-gray-400'>
                Search Name
              </label>
              <select
                id='selectedRating'
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="border border-gray-300 p-2 rounded"
              >
                <option value="">All Ratings</option>
                {ratings.sort((a, b) => b - a).map((rate, idx) => (
                  <option key={idx} value={rate}>{rate} ⭐</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-10/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
            {filteredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button className="px-4 py-2 bg-orange-500 text-white rounded">Prev</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">1</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">2</button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded">Next</button>
        </div>
      </div>

      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default MyCourses;
