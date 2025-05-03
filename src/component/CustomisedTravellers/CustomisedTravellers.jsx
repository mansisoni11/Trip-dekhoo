import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CustomisedTravellers.css';
import couple from '../../assets/Couple.webp';
import parents from '../../assets/parent.webp';
import kid from '../../assets/Kid.webp';
import office from '../../assets/office.webp';
import childhood from '../../assets/childhood.webp';
import bff from '../../assets/bff.webp';
import { useNavigate } from 'react-router-dom';

const coTravellers = [
  { title: 'Couples',  slug: 'Couples', image: couple },
  { title: 'Family wid Parents',  slug: 'family-with-parents', image: parents },
  { title: 'Family wid Kids', slug: 'family-with-kids', image: kid },
  { title: 'Colleagues',  slug: 'Colleagues', image: office },
  { title: 'Childhood Friends',slug:'Childhood-Friends',  image: childhood },
  { title: 'Best Friends',slug:'Best-Friends', image: bff },
];

const CustomisedTravellers = () => {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/cotravellers/${slug}`);
  };
  
  return (
    <Container className="text-center my-5 co-traveller-section">
      <h2 className="section-title">
        <span style={{ color: '#9254f1' }}>Customised Packages For Your Co-Travellers</span>
      </h2>
      <p className="subtitle my-2">People Originated Options</p>
      <p className="description">
        While you’re free to customize your trip on your own, we go a step further — by curating packages that prioritize your travel partner’s comfort and expectations.
        Whether you’re traveling solo, as a couple, with family and kids, parents, office colleagues, college buddies, or childhood friends, we’ve got something special for you.
        Our dedicated team listens to your ideas and tailors the entire experience to match your vision. Because every trip deserves personal attention, and every traveler deserves the perfect plan.
      </p>

      <Row className="mt-4">
        {coTravellers.map((person, index) => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={index}  onClick={() => handleClick(person.slug)}>
         
          <div className="image-wrap">
            <img src={person.image} alt={person.title} className="styled-image" />
            <h5 className="image-title">{person.title}</h5>
          </div>
      
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CustomisedTravellers;
