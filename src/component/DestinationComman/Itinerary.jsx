import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Itinerary = ({packageObj}) => {
  const { destination } = useParams(); // Get destination from URL params
//   const [matchedPackage, setMatchedPackage] = useState(null);
console.log(packageObj);

  return (
    <div>
    <div className='p-5'>
    <h1 className='fw-bold packages-heading'>Most Loved {destination} Itinerary</h1>
    {packageObj[0].title}
    </div>
     
      <div className="row w-100 g-4 mt-4">
      {/* Left Column */}
      <div className="col-12 col-md-4">
        <h2 className="h2 fw-bold">Inclusion of this package.</h2>
        <ul className="text-start ps-3">
          {packageObj[0].inclusions.map((item, index) => (
            <li key={`inclusion-${index}`} className="mb-2">{item}</li>
          ))}
        </ul>
</div><div className='col-12 col-md-4'>
<h2 className="h2 fw-bold">Exclusions of this package.</h2>
<ul className="text-start ps-3">
  {packageObj[0].exclusions.map((item, index) => (
    <li key={`exclusion-${index}`} className="mb-2">{item}</li>
  ))}
</ul>
</div>
      
<div className='col-12 col-md-4'>

<h2 className="h2 fw-bold">Get your quote now :-</h2>
<div className="bg-dark p-4 mt-3" style={{borderRadius:"20px"}}>
  <div className="mb-2">
    <label className="form-label text-white">Name</label>
    <input 
      type="text" 
      className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
    />
  </div>
  <div className="mb-2">
    <label className="form-label text-white">Phone Number :-</label>
    <input 
      type="tel" 
      className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
    />
  </div>
  <div className="mb-2">
    <label className="form-label text-white">Email</label>
    <input 
      type="email" 
      className="form-control bg-transparent text-white border-0 border-bottom border-secondary" 
    />
  </div>
  <div className="text-center">
    <button className="btn btn-light text-dark fw-bold rounded-pill mt-2 ">
      Connect with Expert
    </button>
  </div>
</div>
</div>
  
   

      {/* Right Column */}
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
              {packageObj[0].itinerary.map((day, index) => (
                <div key={`day-${index}`} className="mb-4">
                  <div className="d-flex align-items-center mb-2">
                    <div className="bg-danger bg-opacity-25 p-1 me-2">📅</div>
                    <h3 className="h5 fw-bold mb-0">{day.day}:</h3>
                  </div>
                  <ul className=" text-start mt-2">
                    {day.activities.map((activity, actIndex) => (
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
      </div>
    </div>
    </div>
  );
};

export default Itinerary;
