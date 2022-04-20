import React from 'react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import '../styles/SubjectCarousel.css';


const SubjectCarousel = () => {


    return (
        <div className='flex items-center my-10 mx-10'
            style={{ backgroundColor: '#f5f8fa' }}
        >
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                navigation={true}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 0,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide>All</SwiperSlide>
                <SwiperSlide>Hindi</SwiperSlide>
                <SwiperSlide>Math</SwiperSlide>
                <SwiperSlide>History</SwiperSlide>
                <SwiperSlide>English</SwiperSlide>
                <SwiperSlide>Geography</SwiperSlide>
                <SwiperSlide>Biology</SwiperSlide>
                <SwiperSlide>Physics</SwiperSlide>
                <SwiperSlide>Social Science</SwiperSlide>
                <SwiperSlide>Computer Science</SwiperSlide>
                <SwiperSlide>Indian Languages</SwiperSlide>
                <SwiperSlide>Chinese</SwiperSlide>
                <SwiperSlide>Frence</SwiperSlide>
                <SwiperSlide>World Languages</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SubjectCarousel;