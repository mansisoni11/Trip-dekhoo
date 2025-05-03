import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import allPackagesData from '../../../packages.json'; // Ensure this file is properly imported
import { Container } from 'react-bootstrap';

const Allpackages = () => {
  const { destination, packages } = useParams();
  const [matchedPackage, setMatchedPackage] = useState(null);

  useEffect(() => {
    const destinationObj = allPackagesData.destinations.find(
      (dest) => dest.destination.toLowerCase() === destination.toLowerCase()
    );

    if (destinationObj) {
      const foundPackage = destinationObj.packages.find(
        (pkg) => pkg.id.toLowerCase() === packages.toLowerCase()
      );
      console.log("foundPackage", destinationObj);
      setMatchedPackage(foundPackage);
    } else {
      setMatchedPackage(null); // If destination not found, reset matchedPackage
    }
  }, [destination, packages]);

  // Render a loading state or a message when data is not yet available
  if (matchedPackage === null) {
    return <div>Loading...</div>; // Or show a friendly message like "Package not found"
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+917742386069';
    const currentUrl = window.location.href;
    const message = encodeURIComponent(
      `Hi! I am interested in your tour packages. Here's the link: ${currentUrl}`
    );
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <div className="w-100">
    {matchedPackage && (
        <div className="image-container">
          <img className="w-100" src={matchedPackage.image} alt={destination} />
          <div className="details-text-overlap">
            <h1>{destination}</h1>
           <div className='quote-badge'>Get a Quote</div>
          </div>
        </div>
      )}
   <Container>
   <div className="row w-100 g-4 mt-4">
<div className="col-12 col-md-4">
<h2 className="h2 fw-bold mb-3">Inclusion of this package.</h2>
<ul className=" ps-3">
  {matchedPackage.inclusions.map((item, index) => (
    <li key={`inclusion-${index}`} className="mb-2">{item}</li>
  ))}
</ul>
</div>
<div className="col-12 col-md-4">
<h2 className="h2 fw-bold mb-3">Exclusions of this package.</h2>
<ul className=" ps-3">
  {matchedPackage.exclusions.map((item, index) => (
    <li key={`exclusion-${index}`} className="mb-2">{item}</li>
  ))}
</ul>
</div>
<div className="col-12 col-md-4">

  <h2 className="h2 fw-bold">Get your quote now :-</h2>
  <div className="bg-dark p-4 mt-3" style={{borderRadius:"20px"}}>
    <div className="mb-3">
      <label className="form-label text-white">Name</label>
      <input 
        type="text" 
        className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
      />
    </div>
    <div className="mb-3">
      <label className="form-label text-white">Phone Number</label>
      <input 
        type="tel" 
        className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
      />
    </div>
    <div className="mb-3">
      <label className="form-label text-white">Email</label>
      <input 
        type="email" 
        className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
      />
    </div>
    <div className="text-center mt-4">
      <button className="btn btn-light text-dark fw-bold rounded-pill px-4">
        Connect with Expert
      </button>
    </div>
  </div>
</div>

</div>
 <div className="col-12 mt-5">
   <div className="border border-4 border-dark p-4 position-relative" style={{ borderStyle: 'double' }}>
     <div className="border border-dark p-5 position-relative">

       {/* Corner Decorations */}
       <div className="position-absolute top-0 start-0 translate-middle" style={{ width: '2rem', height: '2rem', borderTop: '4px solid black', borderLeft: '4px solid black' }}></div>
       <div className="position-absolute top-0 translate-middle" style={{ width: '2rem', height: '2rem',right:"-30px", borderTop: '4px solid black', borderRight: '4px solid black' }}></div>
       <div className="position-absolute  start-0 translate-middle" style={{ width: '2rem', height: '2rem',bottom:"-30px",  borderBottom: '4px solid black', borderLeft: '4px solid black' }}></div>
       <div className="position-absolute  translate-middle" style={{ width: '2rem', height: '2rem',right:"-30px", bottom:"-30px", borderBottom: '4px solid black', borderRight: '4px solid black' }}></div>

       <h2 className="h1 fw-bold text-center mb-5">Itinerary</h2>

       <div className="d-flex flex-column gap-4">
         {matchedPackage.itinerary.map((day, index) => (
           <div key={`day-${index}`} className="mb-4">
             <div className="d-flex align-items-center mb-2">
               <div className="bg-danger bg-opacity-25 p-1 me-2">📅</div>
               <h3 className="h5 fw-bold mb-0">{day.day}:</h3>
             </div>
             <ul className=" text-start mt-2">
               {day?.activities?.map((activity, actIndex) => (
                 <li key={`activity-${index}-${actIndex}`} className="">
                   {activity}
                 </li>
               ))}
             </ul>
           </div>
         ))}
       </div>

     </div>


   </div>
        <div className="text-center mt-5">
 <button
  onClick={handleWhatsAppClick}
  className="whatsapp-button"
>
  💬 Chat on WhatsApp
</button>

</div>
 </div>
   </Container>
    
    </div>
  );
};

export default Allpackages;
