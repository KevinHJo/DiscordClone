import React from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className='landing-page'>
        <div className='landing-page-banner'>
          <div className='landing-page-nav'>
            <img src="https://github.com/KevinHJo/DiscordClone/blob/main/app/assets/images/discord-logo.png?raw=true" />
            <Link to="/login">Login</Link>
          </div>

          <div className='banner-message'>
            <h1 className='banner-imagine'>IMAGINE A PLACE...</h1>
            <div className='banner-text'>
              ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
            </div>
          </div>

          <div className='banner-images'>
            <img src="https://raw.githubusercontent.com/KevinHJo/DiscordClone/9055fef03f57d3065c7c7246f5baa3495e71c75b/app/assets/images/banner-background.svg" className='banner-clouds'/>
            <img src="https://raw.githubusercontent.com/KevinHJo/DiscordClone/9055fef03f57d3065c7c7246f5baa3495e71c75b/app/assets/images/banner-element-2.svg" className='banner-element-2' />
            <img src="https://raw.githubusercontent.com/KevinHJo/DiscordClone/9055fef03f57d3065c7c7246f5baa3495e71c75b/app/assets/images/banner-element-1.svg" className='banner-element-1' />
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;