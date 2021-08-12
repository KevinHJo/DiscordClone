import React from 'react';
import GreetingContainer from './greeting/greeting_container'
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import PostsIndexContainer from './posts/channel_posts_container'
import PrivateChannelShowContainer from './channels/private_channel_show_container'
import ChannelShowContainer from './channels/channel_show_container'
import ServerShowContainer from './servers/server_show_container'
// import AnimatedSwitch from './session_form/animated_switch';

const App = () => (
    <div className='page'>
        <header>
            <h1>Discord</h1>
            <GreetingContainer />
        </header>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Route path="/posts" component={PostsIndexContainer} />
        <Route path="/channels/@me/:channelId" component={PrivateChannelShowContainer} />
        <Route path="/channels/:serverId/:channelId" component={ServerShowContainer} />
    </div>
);

export default App