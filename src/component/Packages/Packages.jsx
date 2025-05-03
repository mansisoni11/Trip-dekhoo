import React from 'react';
import './packages.css'; // Make sure to import the CSS
import price from '../../assets/price.svg'
const Packages = () => {
  const budgets = [
    '10,000 Rs', '15,000 Rs', '30,000 Rs',
    '50,000 Rs', '75,000 Rs', '1,00,000 Rs', '5,00,000 Rs'
  ];

  const indiaPackages = [
    'Andaman', 'Gangtok', 'Goa', 'Himachal Pradesh', 'Jaipur', 'Jaisalmer', 'Jodhpur',
    'Kashmir', 'Kerala', 'Ladakh', 'Manali', 'Meghalaya', 'Rajasthan', 'Sikkim',
    'Srinagar', 'Udaipur', 'Gulmarg'
  ];

  const internationalPackages = [
    'Amsterdam', 'Austria', 'Bali', 'Bangkok', 'Czech Republic', 'Dubai', 'Europe',
    'France', 'Germany', 'Hungary', 'Iceland', 'Italy', 'Krabi', 'London', 'Maldives',
    'Netherlands', 'Norway', 'Paris', 'Pattaya', 'Phuket', 'Singapore', 'Thailand',
    'Turkey', 'United Kingdom', 'Vietnam', 'Japan'
  ];

  return (
    <div className="text-center py-5 px-3">
      <h1 className="packages_left_Section_1 fw-bold">Your Holiday Budget</h1>
      <p className="packages_Subheading">Pick your budget and create your own plan</p>
   
    
    <div className="d-flex flex-wrap justify-content-center gap-3 my-5">
    {budgets.map((budget, index) => (
      <div
        key={index}
        className="position-relative"
        style={{ width: '150px', height: '150px' }}
      >
        {/* SVG background */}
        <img
          src={price}
          alt="Price Starburst"
          className="img-fluid w-100 h-100"
          style={{ objectFit: 'contain' }}
        />
  
        {/* Text overlay */}
        <div
          className="position-absolute top-50 start-50 translate-middle text-white text-center fw-bold"
          style={{ fontSize: '0.9rem', lineHeight: '1.2' }}
        >
          <div>UPTO</div>
          <div>{budget} Rs</div>
        </div>
      </div>
    ))}
  </div>
  
      <div className=" mx-auto" style={{ maxWidth: '1200px',textAlign:"start" }}>
        <h5 className="fw-bold">India Tour Packages</h5>
        <p>
          {indiaPackages.map((place, i) => (
            <span key={i}>
              {place} Tour Packages{ i !== indiaPackages.length - 1 ? ' | ' : '' }
            </span>
          ))}
        </p>

        <h5 className="fw-bold mt-4">International Tour Packages</h5>
        <p>
          {internationalPackages.map((place, i) => (
            <span key={i}>
              {place} Tour Packages{ i !== internationalPackages.length - 1 ? ' | ' : '' }
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Packages;
