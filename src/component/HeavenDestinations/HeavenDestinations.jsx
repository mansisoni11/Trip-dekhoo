import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './HeavenDestinations.css';

import sampleimg from '../../assets/Sampleimg.webp';
import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Thailand',
    image: "https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg",
    description: 'Explore beautiful beaches and rich culture'
  },
  {
    name: 'Bali',
    image: "https://d3k6380jbp6od4.cloudfront.net/Bali1.jpg",
    description: 'Discover spiritual temples and serene landscapes'
  },
  {
    name: 'Dubai',
    image: "https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg",
    description: 'Experience luxury and modern architecture'
  },
  {
    name: 'Vietnam',
    image: "https://d3k6380jbp6od4.cloudfront.net/Vietnam1.jpg",
    description: 'Enjoy breathtaking scenery and vibrant culture'
  },
  {
    name: 'Maldives',
    image: "https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg",
    description: 'Paradise on earth with crystal clear waters'
  },
  {
    name: 'Europe',
    image: "https://d3k6380jbp6od4.cloudfront.net/Switerland.jpg",
    description: 'Breathtaking alpine landscapes'
  },
  {
    name: 'Kashmir',
    image: "https://d3k6380jbp6od4.cloudfront.net/Kashmir.jpg", // You need to upload or update this image
    description: 'Heaven on Earth with stunning valleys'
  },
  {
    name: 'Ladakh',
    image: "https://d3k6380jbp6od4.cloudfront.net/ladakh.jpg", // You need to upload or update this image
    description: 'High-altitude desert with spiritual vibes'
  },
  {
    name: 'Kerala',
    image: "https://d3k6380jbp6od4.cloudfront.net/kerala.jpg", // Update with actual image URL
    description: 'Backwaters, beaches, and green landscapes'
  },
  {
    name: 'Himachal',
    image: "https://d3k6380jbp6od4.cloudfront.net/himachal.jpg", // Update with actual image URL
    description: 'Hills, rivers, and adventure experiences'
  }
];


function HeavenDestinations() {
  const [activeIndex, setActiveIndex] = useState(2); // Dubai initially centered
  
  // Handler for slide change
  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  const handleCardClick = (destinationName) => {
    const slug = destinationName.toLowerCase().replace(/\s+/g, '-'); // e.g., "Maldives Beach" -> "maldives-beach"
    navigate(`/packages/${slug}`);
  };
  
  const navigate = useNavigate();

  return (
    <div className="heaven-destinations">
      <header className="text-center py-5">
        <Container>
          <h1 className="main-title">
            <span className="escape-text">Escape to Our</span>
            <br />
            <span className="heaven-text">Heaven Destinations</span>
          </h1>
          
          <p className="main-description mt-4">
            Discover the most popular travel destinations with us! We serve travel experiences in over 195 countries
            and specialize in both India and international tours. With 10+ years of expertise, we craft personalized
            itineraries and tour packages to fit every budget.
          </p>
        </Container>
      </header>

      <section className="destinations-showcase py-4">
        <Container fluid className="px-4">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            initialSlide={2} // Start with Dubai centered
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay="false"
            // autoplay={{ 
            //   delay: 3000, 
            //   disableOnInteraction: false,
            //   pauseOnMouseEnter: true
            // }}
            onSlideChange={handleSlideChange}
            className="destinations-slider py-5"
          >
            {destinations.map((destination, index) => (
              <SwiperSlide key={index} className="destination-slide">
                <div className={`destination-cardss ${index === activeIndex ? 'active' : ''}`}  onClick={() => handleCardClick(destination.name)}>
                  <div className="destination-image">
                    <img src={destination.image} alt={destination.name} />
                  </div>
                  <div className="destination-overlay">
                    <h3 className="namedestination">{destination.name}</h3>
                    {index === activeIndex && (
                      <p className="destination-description">{destination.description}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="discover-more text-center mt-4">
            <button className="btn btn-lg btn-explore">Explore Destinations</button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default HeavenDestinations;