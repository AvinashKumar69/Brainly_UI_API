import React from 'react';
import { NavLink } from 'react-router-dom';
import desktopLOGO from '../assets/brainly-desktop-logo.svg';
import mobileLOGO from '../assets/brainly-mobile-logo.svg';
import '../styles/NavBar.css';

const NavBar = () => {

    return (
        <>
            <header className="text-gray-600 barlow-b"
                style={{ backgroundColor: '#d9f0ff' }}
            >
                <div className="mx-auto flex flex-wrap p-5 flex-row lg:mr-20 md:mr-20 sm:mr-10 xs:mx-auto flex flex-wrap flex-row">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <NavLink to='/'>
                            <img src={desktopLOGO} className='lg:w-72 h-16 ml-20 md:w-40 h-16 ml-20 sm:w-22 h-16 ml-0 pl-5 xs:hidden' />
                        </NavLink>
                    </div>
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <NavLink to='/'>
                            <img src={mobileLOGO} className='xs:w-10 h-10 ml-5 lg:hidden sm:hidden md:hidden' />
                        </NavLink>
                    </div>
                    <nav className="ml-auto mr-36 flex flex-wrap items-center text-base justify-center xs:ml-auto mr-0 flex flex-wrap items-center text-base justify-center">
                        <NavLink to='/loginpage' className="mr-5 font-bold text-black hover:text-gray-900 xs:hidden">LOG IN</NavLink>
                        <NavLink to='/joinnowpage' className="mr-5 font-bold text-black hover:text-gray-900">JOIN NOW</NavLink>
                        <NavLink to='/askquestion'>
                            <button className='inline-flex items-center bg-white font-bold text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-0 md:mt-0 xs:hidden' type='button'>
                                ASK QUESTION
                            </button>
                        </NavLink>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default NavBar;