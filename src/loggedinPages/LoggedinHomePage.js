import React from 'react';
import LoggedinHomePageFooter from '../components/LoggedinHomePageFooter';
import LoggedinSideBar from '../components/LoggedinSideBar';
import QuestionListSection from '../components/QuestionListSection';
import UserProgressBar from '../components/UserProgressBar';

const LoggedinHomePage = () => {
    return (
        <div className='flex flex-row mx-16 sm:flex sm:flex-col xs:flex xs:flex-col xs:mx-0'>
            <LoggedinSideBar />
            <QuestionListSection />
            <UserProgressBar />
            <LoggedinHomePageFooter />
        </div>
    )
}

export default LoggedinHomePage;