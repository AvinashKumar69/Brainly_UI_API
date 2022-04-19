import React from 'react';
import homeScreenPicSVG from '../assets/homeScreenPic.svg';
import { SearchIcon } from '@heroicons/react/outline';



const HeroSection = () => {
    return (
        <section className="text-gray-600 body-font"
            style={{ backgroundColor: '#d9f0ff' }}
        >
            <div className="mx-auto flex px-5 py-auto lg:flex-row flex-col items-center md:flex-row flex-col items-center sm:flex-row flex-col items-center xs:flex-row flex-col items-center mx-auto px-auto">
                <div className="lg:w-4/6 md:w-5/6 sm:w-4/5 xs:w-full lg:px-16 md:pr-16 flex flex-col items-start text-left mb-16 sm:pr-10 ml-5 flex flex-col items-start text-left mb-16 xs:flex flex-col items-start text-left mb-16 pl-0">
                    <h1 className="title-font mb-8 font-black text-black lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl">Go from questioning
                        <br className="hidden lg:inline-block" /> to understanding
                    </h1>
                    <p className="mb-8 leading-normal sm:text-lg text-black">Brainly is the knowledge-sharing community where 350 million students and experts put their heads together to crack their toughest homework questions.</p>
                    <div className="relative mr-4 lg:w-full md:w-full sm:w-full xs:w-full">
                        <input type="text" id="hero-field" name="hero-field" placeholder='What is your question?'
                            className="bg-white rounded-full border-0 focus:ring-0 focus:white focus:bg-white focus:border-white text-base outline-none text-gray-700 py-1 pl-10 leading-8 lg:w-full h-16 md:w-full h-16 sm:w-full h-16 xs:w-full h-16"
                        />
                        {/* <i className="bi bi-search"></i> */}
                    </div>
                </div>
                <div className="lg:w-2/6 md:w-1/6 w-5/6 sm:w-1/5 xs:hidden">
                    <img className="object-cover object-center rounded-lg" alt="hero" src={homeScreenPicSVG} />
                </div>
            </div>
        </section>
    )
}

export default HeroSection;