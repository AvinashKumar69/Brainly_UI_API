import React from 'react';
import '../styles/NavBar.css';
import desktopLOGO from '../assets/brainly-desktop-logo.svg';
import mobileLOGO from '../assets/brainly-mobile-logo.svg';

const NavBar = () => {

    return (
        <>
            <header className="text-gray-600 barlow-b"
                style={{ backgroundColor: '#d9f0ff' }}
            >
                <div className="mx-auto flex flex-wrap p-5 flex-row lg:mr-20 md:mr-20 sm:mr-10 xs:mx-auto flex flex-wrap flex-row">
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={desktopLOGO} className='lg:w-72 h-16 ml-20 md:w-40 h-16 ml-20 sm:w-22 h-16 ml-0 pl-5 xs:hidden' />
                    </div>
                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={mobileLOGO} className='xs:w-10 h-10 ml-5 lg:hidden sm:hidden md:hidden' />
                    </div>
                    <nav className="ml-auto mr-36 flex flex-wrap items-center text-base justify-center xs:ml-auto mr-0 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 font-bold text-black hover:text-gray-900 xs:hidden">LOG IN</a>
                        <a className="mr-5 font-bold text-black hover:text-gray-900">JOIN NOW</a>
                        <button className='inline-flex items-center bg-white font-bold text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-0 md:mt-0 xs:hidden' type='button'>
                            ASK QUESTION
                        </button>
                    </nav>
                </div>
            </header>







            {/* <nav classNameNameNameName="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
                <div classNameNameNameName="container-fluid custom-header-1">
                    <div classNameNameNameName="navbar-brand desktop-logo" href="#">
                        <img src="https://styleguide.brainly.com/images/logos/brainly-0eeb28be95.svg" alt="" width="150" height="150" />
                    </div>
                    <div classNameNameNameName="navbar-brand mobile-logo" href="#">
                        <img src="https://styleguide.brainly.com/images/logos/brainly-mobile-6879551770.svg" alt="" width="50" height="50" />
                    </div>
                    <button classNameNameNameName="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <h3 style={{ color: 'black', fontWeight: '900' }}>JOIN NOW</h3>
                    </button>
                    <div classNameNameNameName="collapse navbar-collapse"
                        style={{ flexDirection: 'row-reverse' }}
                    >
                        <ul classNameNameNameName="navbar-nav">
                            <li classNameNameNameName="nav-item">
                                <a classNameNameNameName="nav-link" aria-current="page" href="#">LOG IN</a>
                            </li>
                            <li classNameNameNameName="nav-item">
                                <a classNameNameNameName="nav-link" href="#">JOIN NOW</a>
                            </li>
                            <li classNameNameNameName="nav-item">
                                <a classNameNameNameName="nav-link" href="#">ASK QUESTION</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </>





        // <header>
        //     <div classNameNameNameNameName="section--lnnYy header--1kAS3">
        //         <div classNameNameNameNameName="section__content--23YM2">
        //             <div classNameNameNameNameName="sg-flex w-100 sg-flex--full-height sg-flex--justify-content-space-between sg-flex--align-items-center container--_U6aY">
        //                 <a href="/" classNameNameNameNameName="button--1vZmz" title="Brainly.in">
        //                     {/* <div classNameNameNameNameName="sg-logo sg-logo--brainly-mobile logo-mobile--2QELe"><img classNameNameNameNameName="sg-logo__image" src="https://styleguide.brainly.com/images/logos/brainly-mobile-6879551770.svg" alt="brainly" /></div> */}
        //                     <div classNameNameNameNameName="sg-logo logo--3gxKR"><img classNameNameNameNameName="sg-logo__image" src="https://styleguide.brainly.com/images/logos/brainly-0eeb28be95.svg" alt="brainly" /></div>
        //                 </a>
        //                 <div classNameNameNameNameName="sg-flex sg-flex--no-shrink">
        //                     <div classNameNameNameNameName="links--3mb5k">
        //                         <nav classNameNameNameNameName="sg-flex sg-flex--justify-content-flex-end sg-flex--align-items-center sg-flex--wrap">
        //                             <div classNameNameNameNameName="sg-flex sg-flex--justify-content-center button-container--2X-uE"><a classNameNameNameNameName="sg-button sg-button--s sg-button--transparent linkButton--3f_y6" href="/signup?entry=1" role="button"><span classNameNameNameNameName="sg-button__text">Log In</span></a></div>
        //                             <div classNameNameNameNameName="sg-flex sg-flex--justify-content-center button-container--2X-uE"><a classNameNameNameNameName="sg-button sg-button--s sg-button--transparent linkButton--3f_y6" href="/signup?entry=1" role="button"><span classNameNameNameNameName="sg-button__text">Join now</span></a></div>
        //                             <div classNameNameNameNameName="sg-flex sg-flex--justify-content-center button-container--2X-uE"><button data-testid="ask_question_button_header" classNameNameNameNameName="sg-button sg-button--m sg-button--solid-inverted button-ask--B7KUS"><span classNameNameNameNameName="sg-button__text">Ask question</span></button></div>
        //                         </nav>
        //                     </div>
        //                     <button classNameNameNameNameName="menu-button" aria-label="open menu button" data-testid="open_menu_button">
        //                         <div classNameNameNameNameName="sg-icon sg-icon--icon-black sg-icon--x40">
        //                             <svg classNameNameNameNameName="sg-icon__svg" role="img" aria-labelledby="title-menu-cbphh9" focusable="false">
        //                                 <text id="title-menu-cbphh9" hidden="">menu</text>
        //                                 <use xlinkHref="#icon-menu" aria-hidden="true"></use>
        //                             </svg>
        //                         </div>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </header>
    )
}

export default NavBar;