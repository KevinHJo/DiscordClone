import React from 'react';
import ReactDOM from 'react-dom';

//testing
import * as SessionAPIUtil from './util/session_api_util'
//end-of-testing

//USER-AUTH
document.addEventListener('DOMContentLoaded', () => {
    //testing
    window.signup = SessionAPIUtil.signup;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    //end-of-testing
    
    const root = document.getElementById('root');

    ReactDOM.render(<h1>hello</h1>, root)
});