import { useParams, useNavigate } from 'react-router-dom';
import './MoodDetails.css'; // optional if you want to extract styling

const moodDestinations = {
  'Beach Mood': [
    { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/goa.jpg' },
    { name: 'Andaman', image: 'https://d3k6380jbp6od4.cloudfront.net/andaman.jpg' },
    { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali1.jpg' },
  ],
  'Anniversary Trip': [
    { name: 'Kerala', image: 'https://d3k6380jbp6od4.cloudfront.net/paris.jpg' },
    { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/santorini.jpg' },
    { name: 'Maldives', image: 'https://d3k6380jbp6od4.cloudfront.net/maldives.jpg' },
  ],
  'Desert Mood': [
    { name: 'Rajasthan', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
    { name: 'Jaisalmer', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Honeymoon Trip': [
    { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/santorini.jpg' },
    { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/switzerland.jpg' },
    { name: 'Maldives', image: 'https://d3k6380jbp6od4.cloudfront.net/maldives.jpg' },
  ],
  'Mountain Trip': [
    { name: 'Manali', image: 'https://d3k6380jbp6od4.cloudfront.net/manali.jpg' },
    { name: 'Himachal', image: 'https://d3k6380jbp6od4.cloudfront.net/shimla.jpg' },
    { name: 'Uttrakhand', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Surprise Trip': [
    { name: 'Vietnam', image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam1.jpg' },
    { name: 'Thailand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'NortEast', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Birthday Celebration': [ 
    { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam1.jpg' },
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
    { name: 'Singapore', image: 'https://d3k6380jbp6od4.cloudfront.net/Singapore1.jpg' },
  ],
  'Work Anniversary': [ 
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
    { name: 'Kerala', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Mauritius', image: 'https://d3k6380jbp6od4.cloudfront.net/mr5.jpg' },
  ],
  'Candlelight Gateways': [ 
    { name: 'Maldives', image: 'https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg' },
    { name: 'Udaipur', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Kerela', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Proposal Perfect': [ 
     { name: 'Paris', image: 'https://d3k6380jbp6od4.cloudfront.net/Europe.jpg' },
    { name: 'Santorini', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Just Married Moments': [ 
     { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali.jpg' },
    { name: 'Maldives', image: 'https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg' },
    { name: 'Kerela', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Mountain Calling': [
      { name: 'Himachal', image: 'https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg' },
    { name: 'Uttarakhand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Bhutan', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
  ],
  'Beach and Breeze': [ 
     { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg' },
    { name: 'Andaman', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali.jpg' },
  ],
  'Desert Dream': [ 
    { name: 'Rajasthan', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/dubai.jpg' },
    { name: 'Jaisalmer', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Snowy Escape': [
    { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Spiti', image: 'https://d3k6380jbp6od4.cloudfront.net/dubai.jpg' },
    { name: 'Himachal', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Birthday Bash Trip': [
    { name: 'Sinagpore', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/dubai.jpg' },
    { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Bacherlorette Trip': [
    { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Thailand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali2.jpg' },
  ],
  'Workiverary Weekend': [ 
    { name: 'Kerala', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
    { name: 'Singapore', image: 'https://d3k6380jbp6od4.cloudfront.net/Singapore.jpg' },
  ],
  'Luxary on a Budget': [ 
    { name: 'Vietnam', image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam.jpg' },
    { name: 'Thailand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'Himachal', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Insta-worthy spots': [ 
    { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali.jpg' },
    { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/dubai.jpg' },
    { name: 'Ladakh', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
  ],
  'Foody-Trail': [ 
    { name: 'Thailand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
    { name: 'SouthIndia', image: 'https://d3k6380jbp6od4.cloudfront.net/SouthIndia.jpg' },
    { name: 'Vietnam', image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam1.jpg' },
  ],
};


const MoodDetails = () => {
  const { moodName } = useParams();
  const navigate = useNavigate();
  const destinations = moodDestinations[moodName] || [];

  return (
    <div >
    <div className="image-container">
    <img className="w-100" src={destinations[0]?.image}  />
    <div className="details-text-overlap">
      <h1>Destination</h1>
     <div className='quote-badge'>Get a Quote</div>
    </div>
  </div>
      <div className="row container mx-auto g-4 mt-4">
        {destinations.map((place, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <img
                src={place.image}
                alt={place.name}
                className="card-img-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title mb-3">{place.name}</h5>
                <button
                  className="btn btn-primary mt-auto px-4 py-2 rounded-pill"
                  onClick={() => navigate(`/packages/${place.name}`)}
                >
                  Explore Destination
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodDetails;
