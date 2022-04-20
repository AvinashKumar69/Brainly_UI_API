import React from 'react';
import { NavLink } from 'react-router-dom';


const LoginPage = () => {
    return (
        <section className="text-black barlow-b">
            <div className="px-5 py-5 mx-auto flex flex-wrap">

                <div className="lg:w-2/5 md:w-1/2 md:pr-0 md:text-center lg:pr-0 pr-0 mx-auto lg:flex lg:items-start">
                    <h1 className="title-font font-black text-5xl sm:text-4xl xs:text-2xl xs:text-center"
                        style={{ color: 'rgb(143 211 255)' }}
                    >
                        LET'S START SHARING <br className="hidden lg:inline-block" /> KNOWLEDGE
                    </h1>
                </div>

                <div className="divide-y-2 divide-solid lg:w-2/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto mx-auto w-full pt-0 md:mt-0">
                    <div className='flex flex-col'>
                        <h2 className="text-black text-xl font-bold title-font mb-5 mx-auto xs:text-center">Welcome back, Log In to your Account!</h2>
                        <button className="w-full text-black bg-white border-2 py-2 px-2 mb-5 mt-5 focus:outline-none hover:bg-gray-100 rounded-full text-lg font-medium">
                            <i style={{ color: 'red' }} className="bi bi-google pr-5"></i>
                            LOG IN WITH GOOGLE
                        </button>
                        <button className="w-full text-white bg-black border-2 py-2 px-2 mb-5 focus:outline-none hover:bg-gray-800 rounded-full text-lg font-medium">
                            <i style={{ color: 'white' }} className="bi bi-apple pr-5"></i>
                            LOG IN WITH APPLE
                        </button>
                        <button className="w-full text-black bg-sky-600 border-2 py-2 px-2 mb-5 focus:outline-none hover:bg-sky-700 rounded-full text-lg font-medium">
                            <i style={{ color: 'white' }} className="bi bi-facebook pr-5"></i>
                            LOG IN WITH FACEBOOK
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <div className="relative mb-4 mt-5">
                            <input type="text" id="username" name="username" placeholder='Enter username or email' className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <input type="autocomplete" id="password" name="password" placeholder='Enter password' className="w-full bg-gray-100 rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-row items-center justify-between'>
                            <NavLink to='/'>
                                <button className="xs:text-xs w-28 text-white bg-sky-400 border-0 py-2 px-2 focus:outline-none hover:bg-sky-600 rounded-full text-lg font-medium">
                                    LOG IN
                                </button>
                            </NavLink>
                            <button className="xs:text-xs w-56 text-white bg-sky-400 border-0 py-2 px-2 focus:outline-none hover:bg-sky-600 rounded-full text-lg font-medium">
                                FORGET PASSWORD
                            </button>
                        </div>
                        <p className="text-xl font-medium text-center mt-5 mb-5">
                            I don't have an account, <NavLink to='/joinnowpage' className='text-sky-500 underline decoration-solid'>Join Now</NavLink>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default LoginPage;