import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

//testing
import * as SessionAPIUtil from './util/session_api_util'
//end-of-testing

//USER-AUTH
document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    //testing
    window.signup = SessionAPIUtil.signup;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //end-of-testing
    
    const root = document.getElementById('root');

    ReactDOM.render(<h1>hello</h1>, root)
});