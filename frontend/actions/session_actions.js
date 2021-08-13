import * as SessionAPIUtil from '../util/session_api_util'
import * as ServerAPIUtil from '../util/server_api_util'
import { receiveUserServers } from './server_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';

//ACTION CREATORS
const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const removeSessionErrors = () => ({
    type: REMOVE_SESSION_ERRORS
})

//THUNK ACTION CREATORS
export const login = user => dispatch => (
    SessionAPIUtil.login(user).then(user => {
        dispatch(receiveCurrentUser(user))
        ServerAPIUtil.fetchUserServers(user.id).then(servers => dispatch(receiveUserServers(servers)))
    }, err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (
        dispatch(logoutCurrentUser())
    ))
);

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user).then(user => {
        dispatch(receiveCurrentUser(user))
        ServerAPIUtil.fetchUserServers(user.id).then(servers => dispatch(receiveUserServers(servers)))
    }, err => (
        dispatch(receiveSessionErrors(err.responseJSON))
    ))
);