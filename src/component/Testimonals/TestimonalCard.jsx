import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './testimonal.css'
const testimonials = [
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    review: "Dubai ka trip TripDekhoo ke through book kiya tha – kya zabardast experience tha! Burj Khalifa se lekar desert safari tak sab kuch perfectly managed tha. Highly recommended!",
  },
  {
    name: "Sneha Iyer",
    location: "Bangalore",
    review: "First international trip tha mera aur TripDekhoo ne itna smooth bana diya sab kuch – Phuket aur Krabi ke islands dekhkar dil khush ho gaya. Bahut hi budget-friendly aur professional service thi.",
  },
  {
    name: "Amanpreet Kaur",
    location: "Chandigarh",
    review: "Vietnam ek hidden gem hai aur TripDekhoo ne is trip ko lifetime yaadgar bana diya. Hanoi, Halong Bay aur local food ka mazaa hi kuch aur tha!",
  },
  {
    name: "Rishi Patel",
    location: "Gujrat",
    review: "Bali honeymoon package TripDekhoo se liya tha – sab kuch dreamy tha! Private villa with pool, candle light dinner aur sightseeing – sab kuch timely aur smooth.",
  },
  {
    name: "Pooja Nair",
    location: "Pune",
    review: "Backwaters, tea gardens aur Ayurvedic massage – Kerala trip was so relaxing! TripDekhoo ne sab kuch arrange kiya, zero tension. Loved it!",
  },
  {
    name: "Vikram Sharma",
    location: "Delhi",
    review: "TripDekhoo ke saath Ladakh jaane ka plan best decision tha. Pangong Lake ka view dekhkar toh bas dil bhar gaya. Bike ride aur camp stay perfectly planned tha.",
  },
  {
    name: "Anjali Joshi",
    location: "Indore",
    review: "Manali mein snowfall dekhne ka sapna pura hua! TripDekhoo ne hotel se lekar cab tak sab arrange kiya tha. Affordable aur safe trip tha solo traveler ke liye.",
  },
  {
    name: "Deepak Sharma",
    location: "Jaipur",
    review: "Kerala ki beach aur backwater combo package liya tha. TripDekhoo ke itinerary mein local culture aur food bhi cover tha – ekdum paisa vasool trip!",
  }
];

const TestimonialCard = () => {
  return (
    <Container className="py-5">
    <div className='testimonal_heading mb-4'> <h1 className='testimonal-card-heading'>Testimonial’s</h1>
    <span className='testimonal_sub_heading'>From Our Satisfied Customers</span></div>
   
      <Row>
        {testimonials.map((t, idx) => (
          <Col key={idx} md={6} lg={3} className="my-5">
            <Card className="h-100 text-white bg-dark rounded-4 p-3 testimonial-card shadow">
              <div className="d-flex align-items-center mb-2">
                <div className="bg-white text-dark rounded-circle text-center fw-bold me-3" style={{ width: 60, height: 60, lineHeight: '60px' }}>
                  {t.location}
                </div>
                <div>
                  <h5 className="mb-1">{t.name}</h5>
                  <div className="testimonial-stars">
                    {'★'.repeat(5)}
                  </div>
                </div>
              </div>
              <Card.Text style={{ fontSize: '0.95rem' }}>
                {t.review}
              </Card.Text>
              <hr className="mt-auto" />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialCard;
