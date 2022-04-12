import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form'
import { signup, login } from '../../actions/session_actions'
import { Link } from "react-router-dom";
import { removeSessionErrors } from '../../actions/session_actions';

const mSTP = state => ({
    errors: state.errors.session,
    formType: 'Signup',
    navLink:<div className='nav'><Link to='/login'>Already have an account?</Link></div>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user)),
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm)