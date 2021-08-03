import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { signup } from '../../actions/session_actions'
import { Link } from "react-router-dom";

const mSTP = state => ({
    errors: state.errors,
    formType: 'Signup',
    navLink:<Link to='/login'>Already have an account?</Link>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm)