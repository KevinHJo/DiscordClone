import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'

//TESTING
import { login, logout, signup } from './actions/session_actions'
//END_OF_TESTING

//USER-AUTH
document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()
    
    //TESTING
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    //END_OF_TESTING
    
    const root = document.getElementById('root');

    ReactDOM.render(<Root store={store} />, root)
});