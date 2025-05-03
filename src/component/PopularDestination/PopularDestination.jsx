import React from 'react';
import './PopularDestinations.css';
import { Container, Row, Col } from 'react-bootstrap';
import sampleimg from '../../assets/Sampleimg.webp'
const destinations = [
    { name: 'Manali', image: sampleimg },
    { name: 'Rajasthan', image: sampleimg },
    { name: 'Ladakh', image: sampleimg },
    { name: 'Kerala', image: sampleimg },
    { name: 'Kashmir', image: sampleimg },
    { name: 'Paris', image: sampleimg },
    { name: 'Abu Dhabi', image: sampleimg },
    { name: 'Baku', image: sampleimg },
    { name: 'Japan', image: sampleimg },
    { name: 'Maldives', image: sampleimg },
  ];

const PopularDestination = () => {
  return (
    <Container className="text-center my-5">
      <h2 className="destination-heading">Popular Destination</h2>
      <p className="sub-heading mb-5">Customise your dream</p>
      <Row className="justify-content-center gap-3">
        {destinations.map((dest, idx) => (
          <Col key={idx} xs={6} sm={4} md={3} lg={2}>
            <div className="destination-card">
              <img src={dest.image} alt={dest.name} className="img-fluid" />
              <div className="destination-name">{dest.name}</div>
            </div>
          </Col>
        ))}
      </Row>
      <a href="#" className="see-more">Click For More</a>
    </Container>
  );
};

export default PopularDestination;
