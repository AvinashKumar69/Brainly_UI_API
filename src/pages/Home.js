import React from 'react';
import BottomSection from '../components/BottomSection';
import BottomStrip from '../components/BottomStrip';
import HeroSection from '../components/HeroSection';
import RatingReviewSection from '../components/RatingReviewSection';
import SubjectCarousel from '../components/SubjectCarousel';
import TextBookSection from '../components/TextBookSection';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <SubjectCarousel />
            <TextBookSection />
            <RatingReviewSection />
            <BottomSection />
            <BottomStrip />
        </div>
    )
}

export default Home;