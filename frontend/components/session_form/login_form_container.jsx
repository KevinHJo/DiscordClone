import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { Link } from "react-router-dom";
import { removeSessionErrors } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <div className='nav'>Need an account? <Link to='/signup'>Register</Link></div>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm)