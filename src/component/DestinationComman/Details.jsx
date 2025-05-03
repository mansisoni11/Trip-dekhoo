// DubaiPackages.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import './Details.css';
import allPackagesData from '../../../packages.json';
import Itinerary from './Itinerary';
import { useNavigate } from 'react-router-dom';

const Details = () => {
  const { destination } = useParams();
    const [matchedDestination, setMatchedDestination] = useState(null);
    const[packageObj,setPackage]=useState([])
    useEffect(() => {
      // Find the destination object from allPackagesData
      const destinationObj = allPackagesData.destinations.find(
        (dest) => dest.destination.toLowerCase() === destination.toLowerCase()
      );
      if (destinationObj) {
        // Use the first package in the found destination's packages
        setMatchedDestination(destinationObj);
        setPackage(destinationObj.packages)
        
      } 
    }, [destination,allPackagesData]);
    const handleWhatsAppClick = () => {
      const phoneNumber = '+917742386069';
      const currentUrl = window.location.href;
      const message = encodeURIComponent(
        `Hi! I am interested in your tour packages. Here's the link: ${currentUrl}`
      );
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    };
 
    const navigate = useNavigate();


  return (
    <div className="text-center">
    {matchedDestination && (
      <div className="image-container">
        <img className="w-100" src={matchedDestination.image} alt={destination} />
        <div className="details-text-overlap">
   <h3>{matchedDestination?.title}</h3>
          <h1>{destination}</h1>
         <div className='quote-badge'>Get a Quote</div>
        </div>
      </div>
    )}
    
  <Container>
  <h1 className="heading mt-5">Your Dream Vacation, Wrapped & Ready</h1>
  <h4 className="subheading">Best price with all inclusions</h4>
  <p className="description">
    We’ve proudly served over 1 lakh happy customers with our {destination} tour packages – and their satisfaction speaks for itself. At Tripdekhoo, we prioritize exceptional customer service and seamless experiences. From hotels, visas, and flights to sightseeing and end-to-end transfers, we take care of everything so you can travel stress-free.
  </p>
  <Row className="justify-content-center">
  {packageObj.map((pkg, index) => (
    <Col key={index} md={6} lg={3} className="mb-4">
      <div className="package-card">
        <div className="image-wrapper">
   
          <img src={pkg.image} alt="package" className="package-image" />
        </div>
        <h5 className="package-title mt-3">{pkg.title}</h5>
        <p className="package-subtitle">{pkg.subtitle}</p>
        <Button 
        className="details-button mt-2" 
        onClick={() => navigate(`/packages/${destination}/${pkg.id}`)}
      >
        Details Itinerary &gt;&gt;</Button>
        <h5 className="package-price mt-2">{pkg.price}</h5>
      </div>
    </Col>
  ))}
</Row>

{packageObj.length > 0 && <Itinerary packageObj={packageObj} />}
<div className="text-center mt-5">
<button
 onClick={handleWhatsAppClick}
 className="whatsapp-button"
>
 💬 Chat on WhatsApp
</button>

</div>
</Container>

    </div>
  );
};

export default Details;
