import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session_form/login_form_container'
import SignupFormContainer from './session_form/signup_form_container'
import PrivateChannelShowContainer from './channels/private_channel_show_container'
import ServerShowContainer from './servers/server_show_container'

const App = () => (
    <div className='page'>
        <AuthRoute exact path='/login' component={LoginFormContainer}/>
        <AuthRoute exact path='/signup' component={SignupFormContainer}/>
        <Route path="/channels/@me/:channelId" component={PrivateChannelShowContainer} />
        <Route path="/channels/:serverId/:channelId" component={ServerShowContainer} />
    </div>
);

export default App