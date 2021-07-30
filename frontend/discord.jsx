import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//TESTING
import * as SessionAPIUtil from './util/session_api_util'
//END_OF_TESTING

//USER-AUTH
document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    
    //TESTING
    window.signup = SessionAPIUtil.signup;
    window.login = SessionAPIUtil.login;
    window.logout = SessionAPIUtil.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //END_OF_TESTING
    
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root)
});