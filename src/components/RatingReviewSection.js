import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/RatingReviewSection.css';


const RatingReviewSection = () => {
    return (
        <>
            <div className="flex flex-col text-center w-full mb-20 mt-20 barlow-b">
                <h1 className="title-font mb-4 text-black font-black lg:text-5xl md:text-5xl sm:text-4xl xs:text-2xl">
                    Ruled by students, supported by parents
                </h1>
                <h1 className="title-font mb-4 text-black font-bold lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl">
                    4.5
                </h1>
                <p className="lg:w-full mx-auto leading-relaxed text-xl">
                <i style={{color:'orange'}} className="bi bi-star-fill"></i>
                <i style={{color:'orange'}} className="bi bi-star-fill"></i>
                <i style={{color:'orange'}} className="bi bi-star-fill"></i>
                <i style={{color:'orange'}} className="bi bi-star-fill"></i>
                <i style={{color:'orange'}} className="bi bi-star-half"></i>
                </p>
            </div>
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={true}
                showStatus={false}
                showIndicators={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDQ5bWlju2ELTUs6xeN4GqICqyk_G0-TpXU0eMC=w96-h96-n" />
                    <div className="myCarousel">
                        <h3>Katie B</h3>
                        {/* <h4>Designer</h4> */}
                        <p>
                            "This app is so much more than I expected. I was just needing help to figure out a math problem, but I was surprised with what I found."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDQ5bWlju2ELTUs6xeN4GqICqyk_G0-TpXU0eMC=w96-h96-n" />
                    <div className="myCarousel">
                        <h3>Katie B</h3>
                        {/* <h4>Designer</h4> */}
                        <p>
                            "This app is so much more than I expected. I was just needing help to figure out a math problem, but I was surprised with what I found."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDQ5bWlju2ELTUs6xeN4GqICqyk_G0-TpXU0eMC=w96-h96-n" />
                    <div className="myCarousel">
                        <h3>Katie B</h3>
                        {/* <h4>Designer</h4> */}
                        <p>
                            "This app is so much more than I expected. I was just needing help to figure out a math problem, but I was surprised with what I found."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDQ5bWlju2ELTUs6xeN4GqICqyk_G0-TpXU0eMC=w96-h96-n" />
                    <div className="myCarousel">
                        <h3>Katie B</h3>
                        {/* <h4>Designer</h4> */}
                        <p>
                            "This app is so much more than I expected. I was just needing help to figure out a math problem, but I was surprised with what I found."
                        </p>
                    </div>
                </div>

                <div>
                    <img src="https://lh3.googleusercontent.com/a-/AAuE7mDQ5bWlju2ELTUs6xeN4GqICqyk_G0-TpXU0eMC=w96-h96-n" />
                    <div className="myCarousel">
                        <h3>Katie B</h3>
                        {/* <h4>Designer</h4> */}
                        <p>
                            "This app is so much more than I expected. I was just needing help to figure out a math problem, but I was surprised with what I found."
                        </p>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default RatingReviewSection;