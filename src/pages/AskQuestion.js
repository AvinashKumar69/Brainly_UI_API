import React from 'react';


const AskQuestion = () => {
    return (
        <section className="text-black barlow-b">
            <div className="lg:container px-5 py-5 mx-auto flex flex-wrap items-center">

                <div className="lg:w-4/6 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 border-2 border-gray-100">
                    <div className="relative mb-4">
                        <h3 htmlFor="message" className="leading-7 text-lg text-black font-bold mb-5">Ask a question about your assignment</h3>
                        <textarea type="message" rows="5" id="textarea1" placeholder='Write your question here (Keep it simple and clear to get the best answer)' name="textarea1" className="w-full rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            style={{ backgroundColor: '#ebf2f7' }}
                        />
                    </div>
                    <div className="relative mb-4">
                        <div className=''>
                            <button id="dropdownDefault" data-dropdown-toggle="dropdownID" className="text-black border-2 font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center w-68" type="button"
                                style={{ backgroundColor: '#ebf2f7' }}
                            >
                                Pick a subject
                                <svg className="ml-20 w-4 h-4 items-end" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
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
                    </div>
                    <button className="w-fit text-white border-0 py-2 px-4 mt-2 focus:outline-none rounded-full font-bold text-sm"
                        style={{ backgroundColor: '#4fb3f6' }}
                    >
                        ASK YOUR QUESTION
                    </button>
                </div>

                <div className="lg:w-1/5 md:w-1/2 md:pl-5 lg:pl-5 pr-0 sm:mt-5 sm:text-center xs:text-center xs:mt-5">
                    <h1 className="title-font text-5xl text-green-500 font-black sm:text-3xl xs:text-xl">
                        MILLIONS OF QUESTIONS ALREADY ANSWERED.
                    </h1>
                </div>

            </div>
        </section>
    )
}

export default AskQuestion;