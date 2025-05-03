import React, { useEffect } from "react";
import "./hero.css";

const Hero = () => {
  const slides = [
    "https://d3k6380jbp6od4.cloudfront.net/KZ.jpg",
    "https://d3k6380jbp6od4.cloudfront.net/Bali4.jpg",
    "https://d3k6380jbp6od4.cloudfront.net/Malaysia4.jpg",
  ];


  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-wrap="true"
    >
    
      <div className="carousel-inner">
        {slides.map((img, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div
              className="hero-slide d-flex align-items-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="overlay-content text-center w-100 text-white">
                <h5>Search Your Dream Destination</h5>
                <div className="d-flex justify-content-center mb-4">
                  <div
                    className="input-group search-bar"
                    style={{
                      border: "2px solid white",
                      flexWrap: "nowrap",
                      backgroundColor: "transparent",
                      maxWidth: "400px",
                    }}
                  >
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Search..."
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                        color: "white",
                      }}
                    />
                    <span
                      className="input-group-text text-dark"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <h1 className="fw-bold">book your heaven’s trip</h1>
                <h3 className="fw-bold">with luxury and comfort</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
