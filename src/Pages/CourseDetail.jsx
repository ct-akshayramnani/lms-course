import React from 'react'
import {Link} from 'react-router-dom'
import CourseOutline from '../Components/CourseOutline'

const CourseDetail = () => {
  return (
    <div>
            <Link to="/">
              <div class="flex items-center">
                <div
                  class="mr-3 w-6 h-6 rounded-full text-gray-500 border border-gray-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-left" width="18"
                    height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                </div>
                <h4 class="text-xl text-gray-900">Course Details</h4>
              </div>
            </Link>

            <h1 class="font-bold text-gray-800 text-5xl mt-6 mb-8 sm:text-left text-center">
              Introduction to Design Thinking
            </h1>
            <div class="sm:flex items-center">
              <button
                class="focus:outline-none ml-0 md:mr-5 bg-red-700 transition duration-150 ease-in-out hover:bg-red-800 rounded text-white sm:px-3 px-6 py-2 text-xl sm:ml-0 ml-8">
                UX Design
              </button>
              <ul class="sm:flex sm:mt-0 mt-8 items-center">
                <li class="text-gray-600 flex items-center text-base px-6 sm:border-l border-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 icon icon-tabler icon-tabler-clock"
                    width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 15" />
                  </svg>
                  <p class="ml-3">3 hours, 30 minutes</p>
                </li>
                <li
                  class="text-gray-600 flex items-center text-base px-6 sm:border-r sm:border-l border-gray-300 sm:py-0 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 icon icon-tabler icon-tabler-file-horizontal" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M16 5v4a1 1 0 0 0 1 1h4" />
                    <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-7l-5 -5h-11a2 2 0 0 0 -2 2z" />
                  </svg>
                  <p class="ml-3">3 modules</p>
                </li>
                <li class="text-gray-600 flex items-center text-base px-6">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="flex-shrink-0 icon icon-tabler icon-tabler-calendar-event" width="24" height="24"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x="4" y="5" width="16" height="16" rx="2" />
                    <line x1="16" y1="3" x2="16" y2="7" />
                    <line x1="8" y1="3" x2="8" y2="7" />
                    <line x1="4" y1="11" x2="20" y2="11" />
                    <rect x="8" y="15" width="2" height="2" />
                  </svg>
                  <p class="ml-3">17 Aug - 19 Sept</p>
                </li>
              </ul>
            </div>

            <hr class="mt-8 mb-6 border-t border-gray-300" />
            <h4 class="text-gray-900 text-xl font-medium mb-6">
              Course Details
            </h4>
            <p class="text-gray-600 mb-2">
              Et quidem faciunt, ut de voluptate ponit, quod summum bonum sit
              aut rerum. Et quidem rerum facilis est cur verear, ne ferae
              quidem se texit, ne. Ut placet, inquam tum dicere exorsus est et
              voluptates…
            </p>
            <p class="color-blue mb-2">Read more</p>
            <hr class="my-8 border-t border-gray-300" />
            <h4 class="text-gray-900 text-xl font-medium mb-3">
              Introduction
            </h4>
            <div class="flex items-center">
              <p class="text-gray-600 text-sm">3 Lectures</p>
              <span class="mx-2 rounded-full w-1 h-1 bg-gray-300"></span>
              <p class="text-gray-600 text-sm">2 Videos</p>
              <span class="mx-2 rounded-full w-1 h-1 bg-gray-300"></span>
              <p class="text-gray-600 text-sm">2 Assignments</p>
            </div>

            <CourseOutline />
            <CourseOutline />
    </div>
  )
}

export default CourseDetail