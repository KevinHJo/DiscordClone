import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import PrivateChannelShowContainer from './channels/private_channel_show_container'
import ServerShowContainer from './servers/server_show_container'
import HomePageContainer from './home/home_page_container'
import LandingPage from './landing';

const App = () => (
    <div className='page'>
        <Route exact path='/' component={LandingPage} />
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <ProtectedRoute exact path="/channels/@me" component={HomePageContainer} />
        <ProtectedRoute exact path="/channels/@me/:channelId" component={PrivateChannelShowContainer} />
        <ProtectedRoute exact path="/channels/:serverId/:channelId" component={ServerShowContainer} />
    </div>
);

export default App