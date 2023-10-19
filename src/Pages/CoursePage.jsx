import React,{useState} from 'react'
import CourseCard from '../Components/CourseCard'
import {Link} from 'react-router-dom'
import CourseDetail from './CourseDetail'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CoursePage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
    <h1 class="font-medium text-gray-900 text-3xl mb-6">Courses</h1>
    <div className="flex flex-row lg:flex-row w-full lg:items-center lg:w-2/3">
      <div className="w-full relative mb-4 lg:mb-0 lg:mr-4 lg:w-1/3">
        <div className="absolute text-gray-600 flex items-center pl-3 h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="10" cy="10" r="7" />
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
        </div>
        <label htmlFor="search" className="hidden"></label>
        <input
          id="search"
          className="bg-gray-100 text-gray-600 focus:outline-none focus:border focus:border-blue-700 font-normal w-full h-10 flex items-center pl-10 text-sm border-gray-300 rounded border"
          placeholder="Search"
        />
      </div>
      <div className="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
        <div className="absolute z-0 inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#a0aec0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent"
        >
          <option className="text-sm text-gray-600">Headers and Titles</option>
          <option className="text-sm text-gray-600">Authors and Tutors</option>
          <option selected className="text-sm text-gray-600">
            Topics & Skills
          </option>
        </select>
      </div>
      <div className="relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
        <div className="z-0 absolute inset-0 m-auto mr-2 xl:mr-4 z-0 w-5 h-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon cursor-pointer icon-tabler icon-tabler-chevron-down"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#a0aec0"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        <select
          aria-label="Selected tab"
          className="relative z-10 cursor-pointer focus:outline-none focus:border-gray-800 focus:shadow-outline-gray text-sm form-select block w-full py-2 px-2 xl:px-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent"
        >
          <option className="text-sm text-gray-600">Name</option>
          <option className="text-sm text-gray-600">Size</option>
          <option selected className="text-sm text-gray-600">Duration</option>
        </select>
      </div>
      <div className=" relative w-full lg:w-1/5 mb-4 lg:mb-0 lg:mr-3 z-10">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        isClearable
        placeholderText="Select a date"
        className="w-full text-center text-gray-600 border border-gray-300 rounded p-2"
      />
    </div>

    </div>
    <h3 class="font-medium text-gray-900 mt-8 mb-6">
          Investment Banking
    </h3>
    <div class="md:flex items-center  mt-6  flex-wrap">
        <Link to='CourseDetail'>
            <CourseCard />
        </Link>
        <Link to='CourseDetail'>
            <CourseCard />
        </Link>
        <Link to='CourseDetail'>
            <CourseCard />
        </Link>
    </div>

    </div>
  )
}

export default CoursePage