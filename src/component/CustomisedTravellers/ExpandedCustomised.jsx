import { useParams, useNavigate } from 'react-router-dom';


const customisedPackages = {
    'Couples': [
      { name: 'Maldives', image: 'https://d3k6380jbp6od4.cloudfront.net/Maldives.jpg' },
      { name: 'Kashmir', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
      { name: 'Bali', image: 'https://d3k6380jbp6od4.cloudfront.net/Bali1.jpg' },
    ],
    'family-with-parents': [
      { name: 'Kerala', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
      { name: 'Rajasthan', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
      { name: 'Bhutan', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
    ],
    'family-with-kids': [
      { name: 'Singapore', image: 'https://d3k6380jbp6od4.cloudfront.net/Singapore.jpg' },
      { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
      { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/goa.jpg' },
    ],
    'Colleagues': [
      { name: 'Dubai', image: 'https://d3k6380jbp6od4.cloudfront.net/Dubai.jpg' },
      { name: 'Thailand', image: 'https://d3k6380jbp6od4.cloudfront.net/Thailand.jpg' },
      { name: 'Himachal Tours', image: 'https://d3k6380jbp6od4.cloudfront.net/shimla.jpg' },
    ],
    'Childhood-Friends': [
      { name: 'Goa', image: 'https://d3k6380jbp6od4.cloudfront.net/goa.jpg' },
      { name: 'Vietnam', image: 'https://d3k6380jbp6od4.cloudfront.net/Vietnam.jpg' },
      { name: 'Europe Group Tours', image: 'https://d3k6380jbp6od4.cloudfront.net/Europe.jpg' },
    ],
    'Best-Friends': [
      { name: 'Ladakh', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
      { name: 'North East', image: 'https://d3k6380jbp6od4.cloudfront.net/darjeeling.jpg' },
      { name: 'Spiti', image: 'https://d3k6380jbp6od4.cloudfront.net/jaisalmer.jpg' },
    ],
  };
  


const ExpandedCustomised = () => {
  const { moodName } = useParams();
  const navigate = useNavigate();
  
  const destinations = customisedPackages[moodName] || [];

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

export default ExpandedCustomised;
