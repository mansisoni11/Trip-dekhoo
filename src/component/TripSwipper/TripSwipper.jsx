import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./TripSwipper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import sampleimg from "../../assets/Sampleimg.webp";
import { useNavigate } from "react-router-dom";

const tripMoods = [
  { name: "Beach Mood", image: "https://d3k6380jbp6od4.cloudfront.net/Bali1.jpg"},
  { name: "Anniversary Trip", image: 'https://d3k6380jbp6od4.cloudfront.net/md3.jpg' },
  { name: "Desert Mood", image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
  { name: "Honeymoon Trip", image: 'https://d3k6380jbp6od4.cloudfront.net/Bali3.jpg' },
  { name: "Mountain Trip", image: 'https://d3k6380jbp6od4.cloudfront.net/Switerland.jpg' },
  { name: "Surprise Trip", image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam1.jpg' },
  { name: "Birthday Celebration", image: 'https://d3k6380jbp6od4.cloudfront.net/Singapore1.jpg' },
  { name: "Work Anniversary", image: 'https://d3k6380jbp6od4.cloudfront.net/mr5.jpg' },
  { name: "Candlelight Gateways", image: 'https://d3k6380jbp6od4.cloudfront.net/md1.jpg' },
  { name: "Proposal Perfect", image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand2.jpg' },
  { name: "Just Married Moments", image: 'https://d3k6380jbp6od4.cloudfront.net/Bali2.jpg' },
  { name: "Mountain Calling", image: sampleimg },
  { name: "Beach and Breeze", image: 'https://d3k6380jbp6od4.cloudfront.net/md2.jpg' },
  { name: "Desert Dream", image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai2.jpg' },
  { name: "Snowy Escape", image: sampleimg },
  { name: "Birthday Bash Trip", image: 'https://d3k6380jbp6od4.cloudfront.net/Singapore2.jpg' },
  { name: "Bacherlorette Trip", image: sampleimg },
  { name: "Workiverary Weekend", image: sampleimg },
  { name: "Luxary on a Budget", image:'https://d3k6380jbp6od4.cloudfront.net/Vietnam2.jpg' },
  { name: "Insta-worthy spots", image: 'https://d3k6380jbp6od4.cloudfront.net/Bali2.jpg' },
  { name: "Foody-Trail", image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand2.jpg' },
];

const TripSwipper = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    setIsEnd(swiper.isEnd);
  };

  return (
    <Container className="trip-mood-container text-center my-5">
    <Container>
    <h2 className="trip-heading mb-3">Trip mood</h2>
    <p className="trip-desc mb-5">
      Based on your mood and preferences, we’ll offer personalized options.
      With over 5 years of experience in planning honeymoons and
      anniversaries, we’ve had the pleasure of making countless couples happy.
    </p>
    </Container>
   

      <div className="swiper-wrapper-custom position-relative d-flex align-items-center mt-4 mb-4">
        <div
          ref={prevRef}
          className={`swiper-custom-nav swiper-custom-prev ${
            activeIndex === 0 ? "invisible" : ""
          }`}
        >
          &#xab;
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          onSwiper={setSwiperInstance}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 4 },
          }}
        >
          {tripMoods.map((mood, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="trip-card"
                onClick={() =>
                  navigate(`/mood/${encodeURIComponent(mood.name)}`)
                }
              >
                <img src={mood.image} alt={mood.name} />
                <h5 className="trip-title">{mood.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={nextRef}
          className={`swiper-custom-nav swiper-custom-next ${
            isEnd ? "invisible" : ""
          }`}
        >
          &#xbb;
        </div>
      </div>
    </Container>
  );
};

export default TripSwipper;
