import React from 'react';

const BottomStrip = () => {
    return (
        <section className="text-black body-font overflow-hidden"
            style={{ backgroundColor: '#d9f0ff' }}
        >
            <div className="px-5 py-5 mx-20 xs:px-5 mx-5">
                <div className="flex lg:w-full lg:flex-row md:w-full md:flex-row sm:flex-row sm:items-start xs:flex flex-col">
                    <div className='flex flex-col'>
                        <h1 className="flex-grow font-bold title-font mb-4 lg:text-3xl md:text-3xl md:text-left sm:text-2xl sm:text-left xs:text-2xl xs:text-center">
                            What do you need to know?
                        </h1>
                        <p className="leading-relaxed text-medium md:text-left xs:text-center">
                            Whether you're stuck on a history question or a blocked by a geometry puzzle, there's no question too tricky for Brainly.
                        </p>
                    </div>
                    <button className="flex-shrink-0 text-black border-2 border-black py-2 px-8 focus:outline-none rounded-full text-xl font-medium mt-0 lg:my-auto md:my-auto sm:my-auto xs:mt-5 mx-auto">
                        ASK QUESTION
                    </button>
                </div>
            </div>
        </section>
    )
}

export default BottomStrip;