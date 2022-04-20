import React from 'react';
import BottomSection from '../components/BottomSection';
import BottomStrip from '../components/BottomStrip';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import RatingReviewSection from '../components/RatingReviewSection';
import SubjectCarousel from '../components/SubjectCarousel';
import TextBookSection from '../components/TextBookSection';

const Home = () => {
    return (
        <div>

            <NavBar />

            <HeroSection />

            <SubjectCarousel />

            <TextBookSection />

            <RatingReviewSection />

            <BottomSection />

            <BottomStrip />

            <Footer />
        </div>
    )
}

export default Home;