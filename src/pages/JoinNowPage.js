import React from 'react';
import { NavLink } from 'react-router-dom';

const JoinNowPage = () => {
    return (
        <section className="text-black barlow-b">
            <div className="px-5 py-5 mx-auto flex flex-wrap">

                <div className="lg:w-2/5 md:w-1/2 md:pr-0 md:text-center lg:pr-0 pr-0 mx-auto lg:flex lg:items-start">
                    <h1 className="title-font font-black text-5xl sm:text-4xl xs:text-2xl xs:text-center sm:text-center"
                        style={{ color: 'rgb(143 211 255)' }}
                    >
                        JOIN US AND LET'S <br className="hidden lg:inline-block" /> START SHARING KNOWLEDGE
                    </h1>
                </div>

                <div className="lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 pt-0 flex flex-col md:ml-auto mx-auto w-full items-start md:mt-0 xs:mt-5 sm:items-center sm:mt-5">
                    <div className='flex flex-col'>
                        <h2 className="text-black text-xl font-bold title-font mb-5 mx-auto xs:text-center">Sign Up</h2>
                        <p className="text-xl font-medium text-center mb-5">
                            Already have an account? <NavLink to='/LoginPage' className='text-sky-500 underline decoration-solid'>Log in here</NavLink>
                        </p>
                        <div className="relative mb-4 mt-5">
                            <input type="text" id="username" name="username" placeholder='Enter username' className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <input type="email" id="email" name="email" placeholder='Enter email' className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <input type="autocomplete" id="password" name="password" placeholder='Enter password' className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="birthday" className="leading-8 text-base text-black font-medium ml-3">Birthday</label>
                            <input type="date" id="birthday" name="birthday" className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='relative mb-4'>
                            <label htmlFor="level" className="leading-8 text-base text-black font-medium ml-3">Level</label>
                            <div className='relative flex flex-col ml-3'>
                                <div>
                                    <input type="checkbox" id="juniorHigh" name="level1" value="JuniorHigh" className='w-4 h-4 rounded-full' />
                                    <label htmlFor="vehicle1"> Junior High</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="seniorHigh" name="level2" value="SeniorHigh" className='w-4 h-4 rounded-full' />
                                    <label htmlFor="vehicle2"> Senior High</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="college" name="level3" value="College" className='w-4 h-4 rounded-full' />
                                    <label htmlFor="vehicle3"> College</label>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="profilePicture" className="leading-8 text-base text-black font-medium ml-3">Profile Picture</label>
                            <input type="file" id="image" name="profilePicture" placeholder="Photo" className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-row items-start xs:items-center xs:justify-center'>
                            <NavLink to='/loggedinhomepage'>
                                <button className="xs:text-xs w-28 text-white bg-sky-400 border-0 py-2 px-2 focus:outline-none hover:bg-sky-600 rounded-full text-lg font-medium">
                                    SIGN UP
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default JoinNowPage;