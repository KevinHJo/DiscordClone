import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <div className='banner-container'>
          <span className='landing-page-banner'>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    )
  }
}

export default LandingPage;