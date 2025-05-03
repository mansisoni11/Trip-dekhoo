import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TourPackages.css';

const tourData = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 2,
    name: 'Tirupati Balaji',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 3,
    name: 'Kedarnath Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 4,
    name: 'Vaishno Devi Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 5,
    name: 'Golden Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 6,
    name: 'Ram Mandir Ayodhya',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 7,
    name: 'Mahakaleshwar Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
  {
    id: 8,
    name: 'Rameswaram Temple',
    image: 'https://image-collection-tripdhekhoo.s3.ap-south-1.amazonaws.com/pexels-kin-pastor-251088-777059.jpg',
  },
];

const ReligiousTourPackages = () => {
  return (
    <Container className="my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 main-title">Religious Place -Tour Packages</h1>
        <p className="subtitle">Top india's most visited places</p>
      </div>
      
      <Row>
        {tourData.map((tour) => (
          <Col key={tour.id} xs={12} sm={6} md={3} className="mb-5">
            <div className="tour-card">
              <div className="torn-image-container">
                <div 
                  className="torn-image" 
                  style={{ backgroundImage: `url(${tour.image})` }}
                >
                </div>
              </div>
              <h5 className="tour-name text-center mt-2">{tour.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ReligiousTourPackages;