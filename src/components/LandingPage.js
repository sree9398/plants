import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="landing-page" style={{ backgroundImage: 'url(/path-to-background.jpg)' }}>
    <h1 className='landing-h1'>Sree Plants</h1>
    <p className='landing-p'>Welcome to our houseplant store! We offer a wide range of plants for your home.</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;
