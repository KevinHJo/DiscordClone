import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log('hello');
  }

  render() {
    return (
      <div className='landing-page'>
        <div className='landing-page-banner'>
          <div className='landing-page-nav'>
            <Link to='/' className='landing-home-link'>
              <img src="https://github.com/KevinHJo/DiscordClone/blob/main/app/assets/images/discord-logo.png?raw=true" onClick={this.onClick}/>
            </Link>
            <Link to="/login" className='landing-login'>Login</Link>
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

        <div className='work-in-progress-1'>
          <h1 className='wip-message'>More Panels Coming! :)</h1>
        </div>

        <div className='work-in-progress-2'>
          <h1 className='wip-message'>More Panels Coming! :)</h1>
        </div>
        
        <div className='work-in-progress-3'>
          <h1 className='wip-message'>More Panels Coming! :)</h1>
        </div>
      </div>
    )
  }
}

export default LandingPage;