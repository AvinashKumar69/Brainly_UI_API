import React from 'react';
import googlePlayBadge from '../assets/googlePlayBadge.png';
import appStoreBadge from '../assets/appStoreBadge.svg';



const Footer = () => {
    return (
        <footer className="text-black barlow-b overflow-x-hidden">
            <div className="px-5 py-5 mx-auto flex md:items-center lg:items-start lg:flex-row md:flex-row flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 lg:mx-5 md:mx-auto md:mb-10 sm:mb-10 mx-auto text-left md:text-left xs:mb-10">
                    <a className="flex flex-col title-font font-medium items-left md:justify-start justify-center">
                        <span className="ml-3 text-2xl font-black xs:mx-auto sm:mx-auto">WE'RE IN THE KNOW</span>
                        <button className='w-10 h-10 ml-3 my-5 rounded-full border-2 border-black bg-black'>
                            <i style={{ color: 'white' }} className="bi bi-youtube"></i>
                        </button>
                    </a>
                    <p className="mt-2 ml-3 text-xs">
                        This site is using cookies under <span className='underline decoration-solid'>cookie policy</span>. You can specify conditions of storing and accessing cookies in your browser
                    </p>
                </div>
                <div className="flex-grow flex md:pl-20 -mb-10 md:flex-row sm:flex-row xs:flex-col md:text-left lg:text-left text-center xs:text-left">
                    <div className="lg:w-1/5 md:w-1/5 w-full px-4">
                        <h2 className="title-font font-bold tracking-normal text-lg mb-3">
                            Company
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">About Us</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Blog</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Careers</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Advertise with us</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Terms of Use</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Copyright Policy</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Privacy Policy</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Cookie Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/5 w-full px-4">
                        <h2 className="title-font font-bold tracking-normal text-lg mb-3">
                            Community
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Brainly Community</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Brainly for Schools & Teachers</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Brainly for Parents</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Honor Code</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Community Guidelines</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Insights: The Brainly Blog</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Become a Volunteer</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/5 md:w-1/5 w-full px-4">
                        <h2 className="title-font font-bold tracking-normal text-lg mb-3">
                            Help
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Signup</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Help Center</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Safety Center</a>
                            </li>
                            <li>
                                <a className="text-black text-xs hover:underline decoration-solid cursor-pointer">Responsible Disclosure Agreement</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-2/5 md:w-2/5 w-full px-4">
                        <h2 className="title-font font-bold tracking-normal text-lg mb-3">
                            Get the Brainly App
                        </h2>
                        <nav className="list-none mb-10 flex flex-col">
                            <div className='flex flex-row items-left mb-5'>
                                <img className='h-14 w-32 object-cover' src={googlePlayBadge} />
                                <img className='h-14 w-32' src={appStoreBadge} />
                            </div>
                            <div className=''>

                                <button id="dropdownDefault" data-dropdown-toggle="dropdownID" className="text-black bg-gray-100 border-2 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center w-64" type="button">
                                    Brainly.in
                                    <svg className="ml-32 w-4 h-4 items-end" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </button>

                                <div id="dropdownID" className="hidden z-10 w-64 bg-white rounded-lg divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-placement="bottom" style={{ position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate3d(391.2px, 681.6px, 0px)' }} >
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brainly.in</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brainly.in</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brainly.in</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Brainly.in</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;