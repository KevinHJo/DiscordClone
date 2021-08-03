import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { login } from '../../actions/session_actions'
import { Link } from "react-router-dom";

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Login',
    navLink: <Link to='/signup'>Register</Link>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm)