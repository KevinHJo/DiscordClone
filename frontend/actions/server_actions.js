import * as ServerAPIUtil from '../util/server_api_util'

export const RECEIVE_USER_SERVERS = 'RECEIVE_USER_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const REMOVE_SERVER = 'REMOVE_SERVER';
export const REMOVE_SERVER_ERRORS = 'REMOVE_SERVER_ERRORS';


//ACTION CREATORS
export const receiveUserServers = servers => ({
    type: RECEIVE_USER_SERVERS,
    servers
});

const receiveServer = server => ({
    type: RECEIVE_SERVER,
    server
});

const removeServer = serverId => ({
    type: REMOVE_SERVER,
    serverId
});

const receiveServerErrors = errors => ({
    type: RECEIVE_SERVER_ERRORS,
    errors
});

// THUNK ACTION CREATORS
export const fetchUserServers = userId => dispatch => {
    return ServerAPIUtil.fetchUserServers(userId).then(servers => (
        dispatch(receiveUserServers(servers))
    ))
};

export const fetchServer = serverId => dispatch => {
    return ServerAPIUtil.fetchServer(serverId).then(server => (
        dispatch(receiveServer(server))
    ))
};

export const createServer = server => dispatch => {
    return ServerAPIUtil.createServer(server).then(server => {
        dispatch(receiveServer(server))
    }, err => (
        dispatch(receiveServerErrors(err.responseJSON))
    ))
};

export const deleteServer = serverId => dispatch => {
    return ServerAPIUtil.deleteServer(serverId).then(() => (
        dispatch(removeServer(serverId))
    ))
};