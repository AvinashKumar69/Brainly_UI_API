import React from 'react';

const UserProgressBar = () => {
    return (
        <section className="text-black barlow-b border-2 rounded-lg ml-5 mt-2">
            <div className="container px-5 py-24 mx-auto flex flex-col divide-y-2 divide-gray-100">
                <div className=''>
                    
                </div>
                <div className="flex relative pt-5 pb-5 sm:items-center w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font mb-1 text-xs">Brainly Space</h2>
                            <p className="leading-relaxed text-xs">You created a Brainly account.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-5 sm:items-center w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font mb-1 text-xs">First Contact</h2>
                            <p className="leading-relaxed text-xs">Click See answer under a question.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-5 sm:items-center w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font mb-1 text-xs">Gratitude Attitude</h2>
                            <p className="leading-relaxed text-xs">Click Thanks on an answer.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-5 sm:items-center w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font mb-1 text-xs">Ad Astra</h2>
                            <p className="leading-relaxed text-xs">Rate an answer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserProgressBar;