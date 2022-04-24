import React from 'react';
import { NavLink } from 'react-router-dom';
import brainPic from '../assets/brainPic.png';
import QuestionListCard from './QuestionListCard';



const QuestionListSection = () => {
    return (
        <section className="text-black barlow-b border-2 rounded-lg mt-2 xs:border-none">
            <div className=" px-5 py-24 mx-auto xs:mx-0">

                <div className='flex flex-col ml-5'>
                    <div className='flex flex-row mb-5'>
                        <img className='w-8 h-8 rounded-full' src={brainPic} />
                        <p className='text-xl font-bold'>
                            The Brain Answerer
                        </p>
                    </div>
                    <div className="text-start w-full mb-12">
                        <h1 className="text-5xl font-black title-font mb-4">
                            What do you need to know?
                        </h1>
                    </div>
                    <div className="relative flex-grow w-full mb-5">
                        <NavLink to='/askquestion'>
                            <button class="h-10 px-5 text-white font-bold rounded-full focus:shadow-outline"
                                style={{ backgroundColor: '#4fb3f6' }}
                            >
                                ASK YOUR QUESTION
                            </button>
                        </NavLink>
                    </div>
                </div>

                <div className="flex items-start lg:w-2/3 w-full sm:flex-row flex-col mx-0 px-4 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-start xs:pl-0 xs:ml-5">
                    <div className='flex flex-row xs:flex-col xs:my-2'>
                        <div className='xs:my-2'>
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-xl bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                                All Levels
                                <svg className="ml-20 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Levels</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Primary Level</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Secondary Level</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='xs:my-2'>
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-xl bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                                Unanswered
                                <svg className="ml-20 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Unanswered</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Being Answered</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Answered</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='lg:hidden md:hidden sm:hidden xs:my-2'>
                            <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-xl bg-gray-100 hover:bg-gray-200 focus:outline-none rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">
                                All Subjects
                                <svg className="ml-20 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Hindi</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Math</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">History</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Geography</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Computer Science</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Environmental Science</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <QuestionListCard />
                </div>

            </div>
        </section>
    )
}

export default QuestionListSection;